<template>
  <slot></slot>
</template>

<script setup lang="ts">
  import { watch, provide } from 'vue'
  import useParentComponentEffect from '../../../hooks/useParentComponentEffect'
  import {
    bindEvents,
    Callback,
    callWhenDifferentValue,
    StrokeStyle,
    type Point,
    warn,
    pathPointsToMapPoints
  } from '../../../utils'
  export interface PolylineProps {
    /**
     * 折线的节点坐标数组
     */
    path: Point[]
    /**
     * @default #000000
     * 折线颜色
     */
    strokeColor?: string
    /**
     * 折线的宽度，以像素为单位
     */
    strokeWeight?: number
    /**
     * 折线的透明度，取值范围0 - 1
     */
    strokeOpacity?: number
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
     * 连接右线
     */
    linkRight?: boolean
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
  const props = withDefaults(defineProps<PolylineProps>(), {
    strokeColor: '#000',
    strokeWeight: 2,
    strokeOpacity: 1,
    strokeStyle: 'solid',
    enableMassClear: true,
    enableEditing: false,
    enableClicking: true,
    geodesic: false,
    clip: true,
    linkRight: true,
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
  let polyline: BMapGL.Polyline
  const { ready } = useParentComponentEffect((map: BMapGL.Map) => {
    const clear = () => {
      polyline && map.removeOverlay(polyline)
    }
    const init = () => {
      if (!props.path || !props.path.length) return __DEV__ && warn('BPolyline', 'path is required and not empty array')
      const {
        path,
        strokeColor,
        strokeWeight,
        strokeOpacity,
        strokeStyle,
        enableMassClear,
        enableEditing,
        enableClicking,
        geodesic,
        clip,
        linkRight,
        visible
      } = props
      const pathPoints = pathPointsToMapPoints(path)
      polyline = new BMapGL.Polyline(pathPoints, {
        strokeColor,
        strokeWeight,
        strokeOpacity,
        strokeStyle,
        enableMassClear,
        enableEditing,
        enableClicking,
        geodesic,
        linkRight,
        clip
      })
      visible && map.addOverlay(polyline)
      bindEvents(props, vueEmits, polyline)
      ready(map, polyline)
      watch(() => props.strokeColor, setStrokeColor)
      watch(() => props.strokeOpacity, setStrokeOpacity)
      watch(() => props.strokeWeight, setStrokeWeight)
      watch(() => props.strokeStyle, setStrokeStyle)
      watch(() => props.enableMassClear, setMassClear)
      watch(() => props.enableEditing, setEditing)
    }

    init()
    // 监听值变化
    watch(
      () => props.path,
      callWhenDifferentValue((n) => {
        if (polyline) {
          n.length ? setPath(n) : clear()
        } else {
          init()
        }
      }),
      {
        deep: true
      }
    )

    watch(
      () => props.visible,
      (n) => {
        map[n ? 'addOverlay' : 'removeOverlay'](polyline)
      }
    )
    return clear
  })

  provide('getOverlayInstance', () => polyline)

  function setPath(path: Point[]) {
    polyline && polyline.setPath(pathPointsToMapPoints(path))
  }

  function setStrokeColor(color: string): void {
    polyline && polyline.setStrokeColor(color)
  }
  function setStrokeOpacity(opacity: number): void {
    polyline && polyline.setStrokeOpacity(opacity)
  }
  function setStrokeWeight(weight: number): void {
    polyline && polyline.setStrokeWeight(weight)
  }
  function setStrokeStyle(style: StrokeStyle): void {
    polyline && polyline.setStrokeStyle(style)
  }
  function setMassClear(enableMassClear: boolean): void {
    if (polyline) {
      enableMassClear ? polyline!.enableMassClear() : polyline!.disableMassClear()
    }
  }
  function setEditing(enableEditing: boolean): void {
    if (polyline) {
      enableEditing ? polyline!.enableEditing() : polyline!.disableEditing()
    }
  }
  defineOptions({
    name: 'BPolyline'
  })
</script>
