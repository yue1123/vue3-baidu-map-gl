<template></template>

<script setup lang="ts">
  import { watch } from 'vue'
  import useParentComponentEffect from '../../../hooks/useParentComponentEffect'
  import { type ControlAnchor } from '../../../utils'
  export interface PanoramaControlProps {
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
  const props = withDefaults(defineProps<PanoramaControlProps>(), {
    anchor: 'BMAP_ANCHOR_TOP_RIGHT',
    offset: () => ({ x: 10, y: 10 }),
    visible: true
  })
  let panoramaControl: BMapGL.PanoramaControl
  defineEmits(['initd', 'unload'])
  const { ready } = useParentComponentEffect((map) => {
    const { visible, offset, anchor } = props
    panoramaControl = new BMapGL.PanoramaControl()
    panoramaControl.setOffset(new BMapGL.Size(offset.x, offset.y))
    panoramaControl.setAnchor(window[anchor] as unknown as any)

    visible && map.addControl(panoramaControl)
    ready(map, panoramaControl)
    watch(
      () => props.visible,
      (n) => {
        map[n ? 'addControl' : 'removeControl'](panoramaControl)
      }
    )
    return () => map.removeControl(panoramaControl)
  })
  defineOptions({
    name: 'BPanoramaControl'
  })
</script>
