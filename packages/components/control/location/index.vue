<template></template>

<script setup lang="ts">
  import { watch } from 'vue'
  import useParentComponentEffect from '../../../hooks/useParentComponentEffect'
  import { bindEvents, Callback, ControlAnchor } from '../../../utils'
  export interface LocationProps {
    /**
     * 控件的停靠位置
     */
    anchor?: ControlAnchor
    /**
     * 控件的偏移值
     */
    offset?: {
      x: number
      y: number
    }
    /**
     * 是否可见
     */
    visible?: boolean
    onLocationError?: Callback
    onLocationSuccess?: Callback
  }
  const props = withDefaults(defineProps<LocationProps>(), {
    anchor: 'BMAP_ANCHOR_BOTTOM_RIGHT',
    offset: () => ({ x: 18, y: 18 }),
    visible: true
  })
  let locationControl: BMapGL.LocationControl
  const vueEmits = defineEmits(['initd', 'unload', 'locationSuccess', 'locationError'])
  const { ready } = useParentComponentEffect((map) => {
    const { visible, offset, anchor } = props
    locationControl = new BMapGL.LocationControl({
      offset: new BMapGL.Size(offset.x, offset.y),
      anchor: window[anchor] as unknown as number
    })
    visible && map.addControl(locationControl)
    ready(map, locationControl)
    bindEvents(props, vueEmits, locationControl)
    watch(
      () => props.visible,
      (n) => {
        map[n ? 'addControl' : 'removeControl'](locationControl)
      }
    )
    return () => map.removeControl(locationControl)
  })
  defineOptions({
    name: 'BLocation'
  })
</script>
