<template>
  <slot></slot>
</template>

<script setup lang="ts">
  import { inject, watch, nextTick, provide } from 'vue'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import { bindEvents, Callback, callWhenDifferentValue, warn, type Point } from '../../../utils'
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

  let prism: BMapGL.Prism
  useBaseMapEffect((map: BMapGL.Map) => {
    const clear = () => {
      prism && map.removeOverlay(prism)
    }
    const init = () => {
      if (__DEV__ && (!props.path || !(props.path && props.path.length))) return warn('Prism props path is required')
      const {
        path,
        altitude,
        isBoundary,
        topFillColor,
        topFillOpacity,
        sideFillColor,
        sideFillOpacity,
        enableMassClear
      } = props
      const pathPoints = isBoundary ? (path as string[]) : pathPointsToMapPoints(path as Point[])
      prism = new BMapGL.Prism(pathPoints, altitude, {
        topFillColor,
        topFillOpacity,
        sideFillColor,
        sideFillOpacity,
        enableMassClear
      })
      map.addOverlay(prism)
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
      callWhenDifferentValue(() => {
        prism
          ? () => {
              clear()
              init()
            }
          : init()
      }),
      {
        deep: true
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
          console.warn('set center error', e)
        }
      })
    }
  }

  function pathPointsToMapPoints(pathPoints: Point[]) {
    return pathPoints.map(({ lng, lat }) => new BMapGL.Point(lng, lat))
  }

  function setMassClear(enableMassClear?: boolean): void {
    enableMassClear ? prism!.enableMassClear() : prism!.disableMassClear()
  }

  function setTopFillColor(color: string) {
    prism.setTopFillColor(color)
  }
  function setTopFillOpacity(opacity: number) {
    prism.setTopFillOpacity(opacity)
  }
  function setSideFillColor(color: string) {
    prism.setSideFillColor(color)
  }
  function setSideFillOpacity(opacity: number) {
    prism.setSideFillOpacity(opacity)
  }
  function setAltitude(altitude: number) {
    prism.setAltitude(altitude)
  }
  defineOptions({
    name: 'BPrism'
  })
</script>
