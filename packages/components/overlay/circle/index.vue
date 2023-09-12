<template>
  <slot></slot>
</template>

<script setup lang="ts">
  import { provide, watch } from 'vue'
  import useParentComponentEffect from '../../../hooks/useParentComponentEffect'
  import { bindEvents, Callback, callWhenDifferentValue, StrokeStyle, type Point, warn } from '../../../utils'
  export interface CircleProps {
    /**
     * 圆形中心点经纬度
     */
    center: Point
    /**
     * 半径，以米为单位
     */
    radius: number
    /**
     * @default #000000
     * 描边的颜色，同CSS颜色
     */
    strokeColor?: string
    /**
     * 描边的透明度，取值范围0 - 1
     */
    strokeOpacity?: number
    /**
     * 面填充颜色，同CSS颜色
     */
    fillColor?: string

    /**
     * 面填充的透明度，范围0-1
     */
    fillOpacity?: number
    /**
     * 描边的宽度，单位为像素
     */
    strokeWeight?: number
    /**
     * 折线的样式
     */
    strokeStyle?: StrokeStyle
    /**
     * @default true
     * 是否在调用map.clearOverlays清除此覆盖物，默认为true
     */
    enableMassClear?: boolean
    /**
     * @default false
     * 是否启用线编辑，默认为false
     */
    enableEditing?: boolean
    /**
     * @default true
     * 是否响应点击事件，默认为true
     */
    enableClicking?: boolean
    /**
     * @default false
     * 是否开启大地线模式，true时，两点连线将以大地线的形式。默认为false
     */
    geodesic?: boolean
    /**
     * @default true
     * 是否进行跨经度180度裁剪，绘制跨精度180时为了优化效果，可以设置成false，默认为true
     */
    clip?: boolean
    /**
     * 是否可见
     */
    visible?: boolean
    onClick?: Callback
    onDblclick?: Callback
    onMousedown?: Callback
    onMouseup?: Callback
    onMouseout?: Callback
    onMouseover?: Callback
    onRemove?: Callback
    onLineupdate?: Callback
  }
  const props = withDefaults(defineProps<CircleProps>(), {
    strokeColor: '#000',
    strokeWeight: 2,
    strokeOpacity: 1,
    fillColor: '#fff',
    fillOpacity: 0.3,
    strokeStyle: 'solid',
    enableMassClear: true,
    enableEditing: false,
    enableClicking: true,
    geodesic: false,
    clip: true,
    visible: true
  })
  const vueEmits = defineEmits([
    'initd',
    'unload',
    'click',
    'dblclick',
    'mousedown',
    'mouseup',
    'mouseout',
    'mouseover',
    'remove',
    'lineupdate'
  ])
  let circle: BMapGL.Circle
  const { ready } = useParentComponentEffect((map: BMapGL.Map) => {
    const cal = () => {
      map.removeOverlay(circle)
    }
    const init = () => {
      if (__DEV__) {
        if (!props.center) return warn('BCircle', 'center props is required')
        if (!props.radius) return warn('BCircle', 'radius props is required')
      }
      const {
        center,
        radius,
        strokeColor,
        strokeOpacity,
        fillColor,
        fillOpacity,
        strokeWeight,
        strokeStyle,
        enableMassClear,
        enableEditing,
        enableClicking,
        geodesic,
        clip,
        visible
      } = props
      const centerPoint = new BMapGL.Point(center.lng, center.lat)
      circle = new BMapGL.Circle(centerPoint, radius, {
        strokeColor,
        strokeWeight,
        strokeOpacity,
        strokeStyle,
        enableMassClear,
        enableEditing,
        enableClicking,
        geodesic,
        clip,
        fillOpacity,
        fillColor
      })

      visible && map.addOverlay(circle)
      bindEvents(props, vueEmits, circle)
      ready(map, circle)
    }

    init()
    // 监听值变化
    watch(() => props.center, callWhenDifferentValue(setCenter), { deep: true })
    watch(() => props.radius, setRadius)
    watch(() => props.strokeColor, setStrokeColor)
    watch(() => props.strokeOpacity, setStrokeOpacity)
    watch(() => props.fillColor, setFillColor)
    watch(() => props.fillOpacity, setFillOpacity)
    watch(() => props.strokeWeight, setStrokeWeight)
    watch(() => props.strokeStyle, setStrokeStyle)
    watch(() => props.enableMassClear, setMassClear)
    watch(() => props.enableEditing, setEditing)
    watch(
      () => props.visible,
      (n) => {
        map[n ? 'addOverlay' : 'removeOverlay'](circle)
      }
    )
    return cal
  })

  provide('getOverlayInstance', () => circle)
  defineOptions({
    name: 'BCircle'
  })

  function setRadius(radius: number): void {
    circle.setRadius(radius)
  }
  function setCenter(center: Point): void {
    if (circle) {
      circle.setCenter(new BMapGL.Point(center.lng, center.lat))
    }
  }
  function setStrokeColor(color: string): void {
    circle.setStrokeColor(color)
  }
  function setFillColor(color: string): void {
    circle.setFillColor(color)
  }
  function setStrokeOpacity(opacity: number): void {
    circle.setStrokeOpacity(opacity)
  }
  function setFillOpacity(opacity: number): void {
    circle.setFillOpacity(opacity)
  }
  function setStrokeWeight(weight: number): void {
    circle.setStrokeWeight(weight)
  }
  function setStrokeStyle(style: StrokeStyle): void {
    circle.setStrokeStyle(style)
  }
  function setMassClear(enableMassClear: boolean): void {
    enableMassClear ? circle!.enableMassClear() : circle!.disableMassClear()
  }
  function setEditing(enableEditing: boolean): void {
    enableEditing ? circle!.enableEditing() : circle!.disableEditing()
  }
</script>
