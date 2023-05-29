<template>
  <slot></slot>
</template>

<script setup lang="ts">
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import {
    warn,
    type Callback,
    bindEvents,
    type Point,
    pathPointsToMapPoints,
    type MapMaskShowRegion
  } from '../../../utils'
  import { provide, watchPostEffect } from 'vue'
  export interface MapMaskProps {
    /**
     * 掩膜路径坐标点
     */
    path: Point[]
    /**
     * @default 'inside'
     * 展示区域内部还是外部，取值'inside'或'outside'，默认为'inside'
     */
    showRegion?: MapMaskShowRegion
    /**
     * @default false
     * 楼块是否参与掩膜
     */
    isBuildingMask?: boolean
    /**
     * @default false
     * 底图是否参与掩膜
     */
    isMapMask?: boolean
    /**
     * @default false
     * 底图上的Poi是否参与掩膜
     */
    isPoiMask?: boolean
    onClick?: Callback
    onDblclick?: Callback
    onMousedown?: Callback
    onMouseup?: Callback
    onMouseout?: Callback
    onMouseover?: Callback
    onRightclick?: Callback
  }
  const { ready } = useLifeCycle()
  const props = withDefaults(defineProps<MapMaskProps>(), {
    showRegion: 'inside',
    isBuildingMask: false,
    isMapMask: false,
    isPoiMask: false
  })
  let mapMask: BMapGL.MapMask
  const vueEmits = defineEmits([
    'initd',
    'unload',
    'click',
    'dblclick',
    'mousedown',
    'mouseup',
    'mouseout',
    'mouseover',
    'rightclick'
  ])
  useBaseMapEffect((map) => {
    const clear = () => map.removeOverlay(mapMask)
    const init = () => {
      if (!props.path || !(props.path && props.path.length)) return warn('MapMask props path is required')
      const { path, showRegion, isBuildingMask, isMapMask, isPoiMask } = props
      const pathPoints = pathPointsToMapPoints(path as Point[])
      mapMask = new BMapGL.MapMask(pathPoints, {
        showRegion,
        isBuildingMask,
        isMapMask,
        isPoiMask
      })
      map.addOverlay(mapMask)

      bindEvents(props, vueEmits, mapMask)
      ready(map, mapMask)
    }
    init()
    // 监听值变化
    watchPostEffect(() => {
      if (mapMask) clear()
      init()
    })
    return clear
  })
  provide('getOverlayInstance', () => mapMask)
  defineOptions({
    name: 'BMapMask'
  })
</script>
