<template></template>

<script setup lang="ts">
  import { defineProps, withDefaults } from 'vue'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import { warn, type Callback, type DistrictType, bindEvents } from '../../../utils'
  export interface DistrictLayerProps {
    /**
     * 行政区名字
     */
    name: string
    /**
     * @default 0
     * 行政区类型
     */
    kind?: DistrictType
    /**
     * @default #fdfd27
     * 填充颜色
     */
    fillColor?: string
    /**
     * @default 1
     * 填充透明度
     */
    fillOpacity?: number
    /**
     * @default #231cf8
     * 线条颜色
     */
    strokeColor?: string
    /**
     * @default false
     * 自动聚焦地图中心
     */
    viewport?: boolean
    onClick?: Callback
    onDblclick?: Callback
    onRightclick?: Callback
    onRightdblclick?: Callback
    onMousemove?: Callback
    onMouseover?: Callback
    onMouseout?: Callback
  }
  const { ready } = useLifeCycle()
  const props = withDefaults(defineProps<DistrictLayerProps>(), {
    kind: 0,
    fillColor: '#fdfd27',
    fillOpacity: 1,
    strokeColor: '#231cf8',
    viewport: false
  })
  let districtLayer: BMapGL.DistrictLayer
  const vueEmits = defineEmits(['initd', 'unload', 'mouseover', 'mouseout', 'click'])
  useBaseMapEffect((map) => {
    if (!props.name) return warn('DistrictLayer props.name is required')
    const { name, kind, fillColor, fillOpacity, strokeColor, viewport } = props
    districtLayer = new BMapGL.DistrictLayer({
      name: `(${name})`,
      kind,
      fillColor,
      fillOpacity,
      strokeColor,
      viewport
    })
    map.addDistrictLayer(districtLayer)

    bindEvents(props, vueEmits, districtLayer)
    ready(map, districtLayer)
    return () => map.removeDistrictLayer(districtLayer)
  })
</script>
<script lang="ts">
  export default {
    name: 'BDistrictLayer'
  }
</script>
