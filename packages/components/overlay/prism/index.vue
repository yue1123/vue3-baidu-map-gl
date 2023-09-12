<template>
  <slot></slot>
</template>

<script setup lang="ts">
  import { inject, watch, nextTick, provide } from 'vue'
  import useParentComponentEffect from '../../../hooks/useParentComponentEffect'
  import { bindEvents, Callback, callWhenDifferentValue, warn, type Point, pathPointsToMapPoints } from '../../../utils'
  export interface PrismProps {
    /**
     * 棱柱的节点坐标数组
     */
    path: Point[] | string[]
    /**
     * 高度
     */
    altitude: number
    /**
     * 是否是行政区域绘制
     */
    isBoundary?: boolean
    /**
     * @default #fff
     * 顶面填充颜色
     */
    topFillColor?: string
    /**
     * @default 0.5
     * 顶面填充颜色透明度，取值范围0-1
     */
    topFillOpacity?: number
    /**
     * 	侧面填充颜色
     */
    sideFillColor?: string
    /**
     * @default 0.8
     * 侧面填充颜色透明度，取值范围0-1
     */
    sideFillOpacity?: number
    /**
     * 自动根据多边形居中
     */
    autoCenter?: boolean
    /**
     * @default true
     * 是否在调用map.clearOverlays清除此覆盖物，默认为true
     */
    enableMassClear?: boolean
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
  const props = withDefaults(defineProps<PrismProps>(), {
    topFillColor: '#fff',
    topFillOpacity: 0.5,
    sideFillColor: '#fff',
    sideFillOpacity: 0.8,
    enableMassClear: true,
    autoCenter: true,
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
  const injectBaseMapSetCenterAndZoom = inject('baseMapSetCenterAndZoom') as (center: {
    lng: number
    lat: number
  }) => void

  let prism: BMapGL.Prism
  const { ready } = useParentComponentEffect((map: BMapGL.Map) => {
    const clear = () => {
      prism && map.removeOverlay(prism)
    }
    const init = () => {
      if (!props.path || !(props.path && props.path.length)) return __DEV__ && warn('BPrism', 'path is required')
      const {
        path,
        altitude,
        isBoundary,
        topFillColor,
        topFillOpacity,
        sideFillColor,
        sideFillOpacity,
        enableMassClear,
        visible
      } = props
      const pathPoints = isBoundary ? (path as string[]) : pathPointsToMapPoints(path as Point[])
      prism = new BMapGL.Prism(pathPoints, altitude, {
        topFillColor,
        topFillOpacity,
        sideFillColor,
        sideFillOpacity,
        enableMassClear
      })
      visible && map.addOverlay(prism)
      bindEvents(props, vueEmits, prism)
      ready(map, prism)
      syncMapCenter()
      watch(() => props.enableMassClear, setMassClear)
      watch(() => props.topFillColor, setTopFillColor)
      watch(() => props.topFillOpacity, setTopFillOpacity)
      watch(() => props.sideFillColor, setSideFillColor)
      watch(() => props.sideFillOpacity, setSideFillOpacity)
      watch(() => props.altitude, setAltitude)
    }
    init()
    // 监听值变化, 初始为空时不会初始化, 不为空值时初始化
    watch(
      () => props.path,
      callWhenDifferentValue((n) => {
        prism ? setPath(n) : init()
      }),
      {
        deep: true
      }
    )
    watch(
      () => props.visible,
      (n) => {
        map[n ? 'addOverlay' : 'removeOverlay'](prism)
      }
    )
    return clear
  })

  provide('getOverlayInstance', () => prism)

  function syncMapCenter() {
    if (props.autoCenter) {
      nextTick(() => {
        // 自动设置中心点
        // 获取中心点
        try {
          const center = prism.getBounds()?.getCenter()
          injectBaseMapSetCenterAndZoom(center)
        } catch (e) {
          warn('BPrism', 'auto set center error')
        }
      })
    }
  }

  function setMassClear(enableMassClear?: boolean): void {
    enableMassClear ? prism!.enableMassClear() : prism!.disableMassClear()
  }

  function setPath(path: Point[] | string[]) {
    const { isBoundary } = props
    prism.setPath(isBoundary ? (path as string[]) : pathPointsToMapPoints(path as Point[]))
  }

  function setTopFillColor(color: string) {
    prism && prism.setTopFillColor(color)
  }
  function setTopFillOpacity(opacity: number) {
    prism && prism.setTopFillOpacity(opacity)
  }
  function setSideFillColor(color: string) {
    prism && prism.setSideFillColor(color)
  }
  function setSideFillOpacity(opacity: number) {
    prism && prism.setSideFillOpacity(opacity)
  }
  function setAltitude(altitude: number) {
    prism && prism.setAltitude(altitude)
  }
  defineOptions({
    name: 'BPrism'
  })
</script>
