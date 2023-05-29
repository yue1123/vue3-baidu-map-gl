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
  }
  const { ready } = useLifeCycle()
  const props = withDefaults(defineProps<ScaleProps>(), {
    anchor: 'BMAP_ANCHOR_BOTTOM_LEFT',
    offset: () => ({ x: 83, y: 18 }),
    unit: 'BMAP_UNIT_METRIC'
  })
  let scaleCtrl: BMapGL.ScaleControl
  defineEmits(['initd', 'unload'])
  useBaseMapEffect((map) => {
    scaleCtrl = new BMapGL.ScaleControl({
      offset: new BMapGL.Size(props.offset.x, props.offset.y),
      anchor: window[props.anchor]
    })
    setUnit()
    map.addControl(scaleCtrl)
    ready(map, scaleCtrl)
    return () => map.removeControl(scaleCtrl)
  })
  // 监听比例尺单位变化
  watch(() => props.unit, setUnit)
  /**
   * 设置比例尺单位制
   */
  function setUnit() {
    scaleCtrl.setUnit(window[props.unit])
  }
  defineOptions({
    name: 'BScale'
  })
</script>
