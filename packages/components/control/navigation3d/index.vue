<template></template>

<script setup lang="ts">
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import { type ControlAnchor } from '../../../utils'
  export interface Navigation3dProps {
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
  const props = withDefaults(defineProps<Navigation3dProps>(), {
    anchor: 'BMAP_ANCHOR_BOTTOM_RIGHT',
    offset: () => ({ x: 83, y: 18 })
  })
  const { ready } = useLifeCycle()
  let navigation3dControl: BMapGL.NavigationControl3D
  defineEmits(['initd', 'unload'])
  useBaseMapEffect((map) => {
    navigation3dControl = new BMapGL.NavigationControl3D({
      offset: new BMapGL.Size(props.offset.x, props.offset.y),
      anchor: window[props.anchor]
    })
    map.addControl(navigation3dControl)
    ready(map, navigation3dControl)
    return () => map.removeControl(navigation3dControl)
  })
  defineOptions({
    name: 'BNavigation3d'
  })
</script>
