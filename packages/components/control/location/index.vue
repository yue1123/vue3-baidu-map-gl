<template></template>

<script setup lang="ts">
  import { defineProps, withDefaults, defineEmits } from 'vue'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import bindEvents, { Callback } from '../../../utils/bindEvents'
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
    onLocationError?: Callback
    onLocationSuccess?: Callback
  }
  const { ready } = useLifeCycle()
  const props = withDefaults(defineProps<BmLocationOptions>(), {
    anchor: 'BMAP_ANCHOR_BOTTOM_RIGHT',
    offset: () => ({ x: 18, y: 18 })
  })
  let locationControl: BMapGL.LocationControl
  const vueEmits = defineEmits(['initd', 'unload', 'locationSuccess', 'locationError'])
  useBaseMapEffect((map) => {
    locationControl = new BMapGL.LocationControl({
      offset: new BMapGL.Size(props.offset.x, props.offset.y),
      anchor: window[props.anchor]
    })
    map.addControl(locationControl)
    ready(map, locationControl)
    bindEvents(props, vueEmits, locationControl)
    return () => map.removeControl(locationControl)
  })
</script>
<script lang="ts">
  export default {
    name: 'BLocation'
  }
</script>
