<template></template>

<script setup lang="ts">
  import { watch } from 'vue'
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
    /**
     * 是否可见
     */
    visible?: boolean
  }
  const props = withDefaults(defineProps<Navigation3dProps>(), {
    anchor: 'BMAP_ANCHOR_BOTTOM_RIGHT',
    offset: () => ({ x: 83, y: 18 }),
    visible: true
  })
  const { ready } = useLifeCycle()
  let navigation3dControl: BMapGL.NavigationControl3D
  defineEmits(['initd', 'unload'])
  useBaseMapEffect((map) => {
    const { visible, offset, anchor } = props
    navigation3dControl = new BMapGL.NavigationControl3D({
      offset: new BMapGL.Size(offset.x, offset.y),
      anchor: window[anchor]
    })
    visible && map.addControl(navigation3dControl)
    ready(map, navigation3dControl)
    watch(
      () => props.visible,
      (n) => {
        map[n ? 'addControl' : 'removeControl'](navigation3dControl)
      }
    )
    return () => map.removeControl(navigation3dControl)
  })
  defineOptions({
    name: 'BNavigation3d'
  })
</script>
