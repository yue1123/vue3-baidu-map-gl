<template></template>

<script setup lang="ts">
  import { watch } from 'vue'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import { ControlAnchor } from '../../../utils'
  export interface CityListProps {
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
     * 列表是否展开
     */
    expand?: boolean
    /**
     * 是否可见
     */
    visible?: boolean
  }

  const { ready } = useLifeCycle()
  const props = withDefaults(defineProps<CityListProps>(), {
    anchor: 'BMAP_ANCHOR_TOP_LEFT',
    offset: () => ({ x: 18, y: 18 }),
    expand: false,
    visible: true
  })
  let cityListControl: BMapGL.CityListControl
  defineEmits(['initd', 'unload'])
  useBaseMapEffect((map) => {
    const { visible, expand, offset, anchor } = props
    cityListControl = new BMapGL.CityListControl({
      expand: expand,
      offset: new BMapGL.Size(offset.x, offset.y),
      anchor: window[anchor]
    })
    visible && map.addControl(cityListControl)
    ready(map, cityListControl)
    watch(
      () => props.visible,
      (n) => {
        map[n ? 'addControl' : 'removeControl'](cityListControl)
      }
    )
    return () => map.removeControl(cityListControl)
  })
  defineOptions({
    name: 'BCityList'
  })
</script>
