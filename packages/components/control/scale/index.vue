<template></template>

<script setup lang="ts">
  import { watch } from 'vue'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import { type ControlAnchor, type LengthUnit } from '../../../utils'
  export interface ScaleProps {
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
     * 比例尺单位制
     */
    unit?: LengthUnit
    /**
     * 是否可见
     */
    visible?: boolean
  }
  const { ready } = useLifeCycle()
  const props = withDefaults(defineProps<ScaleProps>(), {
    anchor: 'BMAP_ANCHOR_BOTTOM_LEFT',
    offset: () => ({ x: 83, y: 18 }),
    unit: 'BMAP_UNIT_METRIC',
    visible: true
  })
  let scaleCtrl: BMapGL.ScaleControl
  defineEmits(['initd', 'unload'])
  useBaseMapEffect((map) => {
    const { visible, offset, anchor } = props
    scaleCtrl = new BMapGL.ScaleControl({
      offset: new BMapGL.Size(offset.x, offset.y),
      anchor: window[anchor]
    })
    visible && map.addControl(scaleCtrl)
    setUnit()
    ready(map, scaleCtrl)
    watch(
      () => props.visible,
      (n) => {
        map[n ? 'addControl' : 'removeControl'](scaleCtrl)
      }
    )
    return () => map.removeControl(scaleCtrl)
  })
  // 监听比例尺单位变化
  watch(() => props.unit, setUnit)
  defineOptions({
    name: 'BScale'
  })

  /**
   * 设置比例尺单位制
   */
  function setUnit() {
    scaleCtrl.setUnit(window[props.unit])
  }
</script>
