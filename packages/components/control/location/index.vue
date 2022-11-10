<template></template>

<script setup lang="ts">
  import { defineProps, withDefaults, defineEmits } from 'vue'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  export interface BmLocationOptions {
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
  const { ready } = useLifeCycle()
  const props = withDefaults(defineProps<BmLocationOptions>(), {
    anchor: 'BMAP_ANCHOR_BOTTOM_RIGHT',
    offset: () => ({ x: 18, y: 18 })
  })
  let locationControl: BMapGL.LocationControl
  defineEmits(['initd', 'unload'])
  useBaseMapEffect((map) => {
    locationControl = new BMapGL.LocationControl({
      offset: new BMapGL.Size(props.offset.x, props.offset.y),
      anchor: window[props.anchor]
    })
    map.addControl(locationControl)
    ready(map, locationControl)
    return () => map.removeControl(locationControl)
  })
</script>
<script lang="ts">
  export default {
    name: 'BLocation'
  }
</script>
