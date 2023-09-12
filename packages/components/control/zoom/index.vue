<template></template>

<script setup lang="ts">
  import { watch } from 'vue'
  import useParentComponentEffect from '../../../hooks/useParentComponentEffect'
  import { ControlAnchor } from '../../../utils'
  export interface ZoomProps {
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
  }
  const props = withDefaults(defineProps<ZoomProps>(), {
    anchor: 'BMAP_ANCHOR_BOTTOM_RIGHT',
    offset: () => ({ x: 83, y: 18 }),
    visible: true
  })
  let zoomControl: BMapGL.ZoomControl
  defineEmits(['initd', 'unload'])
  const { ready } = useParentComponentEffect((map) => {
    const { visible, offset, anchor } = props
    zoomControl = new BMapGL.ZoomControl({
      offset: new BMapGL.Size(offset.x, offset.y),
      anchor: window[anchor]
    })
    visible && map.addControl(zoomControl)
    ready(map, zoomControl)
    watch(
      () => props.visible,
      (n) => {
        map[n ? 'addControl' : 'removeControl'](zoomControl)
      }
    )
    return () => map.removeControl(zoomControl)
  })
  defineOptions({
    name: 'BZoom'
  })
</script>
