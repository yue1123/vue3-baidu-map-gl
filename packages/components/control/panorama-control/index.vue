<template></template>

<script setup lang="ts">
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'
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
  }
  const { ready } = useLifeCycle()
  const props = withDefaults(defineProps<PanoramaControlProps>(), {
    anchor: 'BMAP_ANCHOR_TOP_RIGHT',
    offset: () => ({ x: 10, y: 10 })
  })
  let panoramaControl: BMapGL.PanoramaControl
  defineEmits(['initd', 'unload'])
  useBaseMapEffect((map) => {
    panoramaControl = new BMapGL.PanoramaControl()
    panoramaControl.setOffset(new BMapGL.Size(props.offset.x, props.offset.y))
    panoramaControl.setAnchor(window[props.anchor] as unknown as any)
    map.addControl(panoramaControl)
    ready(map, panoramaControl)
    return () => map.removeControl(panoramaControl)
  })
  defineOptions({
    name: 'BPanoramaControl'
  })
</script>
