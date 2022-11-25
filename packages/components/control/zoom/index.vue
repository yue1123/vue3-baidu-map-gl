<template></template>

<script setup lang="ts">
  import {  defineProps, withDefaults, defineEmits  } from 'vue-demi'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  export interface BmZoomProps {
    /**
     * 控件的停靠位置
     */
    anchor?: _ControlAnchor
    /**
     * 控件的偏移值
     */
    offset?: {
      x: number
      y: number
    }
  }
  const props = withDefaults(defineProps<BmZoomProps>(), {
    anchor: 'BMAP_ANCHOR_BOTTOM_RIGHT',
    offset: () => ({ x: 83, y: 18 })
  })
  const { ready } = useLifeCycle()
  let zoomControl: BMapGL.ZoomControl
  defineEmits(['initd', 'unload'])
  useBaseMapEffect((map) => {
    zoomControl = new BMapGL.ZoomControl({
      offset: new BMapGL.Size(props.offset.x, props.offset.y),
      anchor: window[props.anchor]
    })
    map.addControl(zoomControl)
    ready(map, zoomControl)
    return () => map.removeControl(zoomControl)
  })
</script>
<script lang="ts">
  export default {
    name: 'BZoom'
  }
</script>
