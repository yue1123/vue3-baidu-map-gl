<template>
  <slot></slot>
</template>

<script setup lang="ts">
  import { inject, watch, nextTick, provide } from 'vue'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import {
    bindEvents,
    Callback,
    callWhenDifferentValue,
    StrokeStyle,
    type Point,
    warn,
    pathPointsToMapPoints
  } from '../../../utils'
  export interface PolygonProps {
    /**
     * 折线的节点坐标数组
     */
    path: Point[] | string[]
    /**
     * 是否是行政区域绘制
     */
    isBoundary?: boolean
    /**
     * @default #000000
     * 折线颜色
     */
    strokeColor?: string
    /**
     * 自动根据多边形居中
     */
    autoCenter?: boolean
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
     * 面填充颜色，同CSS颜色
     */
    fillColor?: string

    /**
     * 面填充的透明度，范围0-1
     */
    fillOpacity?: number
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
    onClick?: Callback
    onDblclick?: Callback
    onMousedown?: Callback
    onMouseup?: Callback
    onMouseout?: Callback
    onMouseover?: Callback
    onRemove?: Callback
    onLineupdate?: Callback
  }
  const props = withDefaults(defineProps<PolygonProps>(), {
    strokeColor: '#000',
    strokeWeight: 2,
    strokeOpacity: 1,
    strokeStyle: 'solid',
    fillColor: '#fff',
    fillOpacity: 0.3,
    massClear: true,
    editing: false,
    clicking: true,
    geodesic: false,
    clip: true,
    autoCenter: true
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
  const { ready } = useLifeCycle()
  const injectBaseMapSetCenterAndZoom = inject('baseMapSetCenterAndZoom') as (center: {
    lng: number
    lat: number
  }) => void
  let polygon: BMapGL.Polygon
  useBaseMapEffect((map: BMapGL.Map) => {
    const cal = () => {
      polygon && map.removeOverlay(polygon)
    }
    const init = () => {
      if (!props.path) return __DEV__ && warn('Polygon props path is required')
      const {
        path,
        strokeColor,
        strokeWeight,
        strokeOpacity,
        strokeStyle,
        fillOpacity,
        fillColor,
        enableMassClear,
        enableEditing,
        enableClicking,
        geodesic,
        clip,
        isBoundary
      } = props
      const pathPoints = isBoundary ? (path as string[]) : pathPointsToMapPoints(path as Point[])
      if (!pathPoints) return
      polygon = new BMapGL.Polygon(pathPoints, {
        strokeColor,
        strokeWeight,
        strokeOpacity,
        strokeStyle,
        fillOpacity,
        fillColor,
        enableMassClear,
        enableEditing,
        enableClicking,
        geodesic,
        clip
      })
      map.addOverlay(polygon)
      bindEvents(props, vueEmits, polygon)
      ready(map, polygon)
      syncMapCenter()
      watch(() => props.strokeColor, setStrokeColor)
      watch(() => props.strokeOpacity, setStrokeOpacity)
      watch(() => props.fillColor, setFillColor)
      watch(() => props.fillOpacity, setFillOpacity)
      watch(() => props.strokeWeight, setStrokeWeight)
      watch(() => props.strokeStyle, setStrokeStyle)
      watch(() => props.enableMassClear, setMassClear)
      watch(() => props.enableEditing, setEditing)
    }
    init()
    // 监听值变化, 初始为空时不会初始化, 不为空值时初始化
    watch(
      () => props.path,
      callWhenDifferentValue((path) => {
        polygon ? setPath(path) : init()
      }),
      {
        deep: true
      }
    )
    return cal
  })

  provide('getOverlayInstance', () => polygon)

  function syncMapCenter() {
    nextTick(() => {
      // 自动设置中心点
      if (props.autoCenter) {
        // 获取中心点
        try {
          const center = polygon.getBounds()?.getCenter()
          injectBaseMapSetCenterAndZoom(center)
        } catch (e) {
          console.warn('set center error', e)
        }
      }
    })
  }

  function setPath(path: Point[] | string[]) {
    if (props.isBoundary) {
      polygon.setPath(path as string[])
    } else {
      polygon.setPath(pathPointsToMapPoints(path as Point[]))
    }
    syncMapCenter()
  }

  function setStrokeColor(color: string): void {
    polygon.setStrokeColor(color)
  }
  function setFillColor(color: string): void {
    polygon.setFillColor(color)
  }
  function setStrokeOpacity(opacity: number): void {
    polygon.setStrokeOpacity(opacity)
  }
  function setFillOpacity(opacity: number): void {
    polygon.setFillOpacity(opacity)
  }
  function setStrokeWeight(weight: number): void {
    polygon.setStrokeWeight(weight)
  }
  function setStrokeStyle(style: StrokeStyle): void {
    polygon.setStrokeStyle(style)
  }
  function setMassClear(enableMassClear?: boolean): void {
    enableMassClear ? polygon!.enableMassClear() : polygon!.disableMassClear()
  }
  function setEditing(enableEditing?: boolean): void {
    enableEditing ? polygon!.enableEditing() : polygon!.disableEditing()
  }
  defineOptions({
    name: 'BPolygon'
  })
</script>
