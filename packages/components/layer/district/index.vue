<template></template>

<script setup lang="ts">
  import useParentComponentEffect from '../../../hooks/useParentComponentEffect'
  import { type Callback, type DistrictType, bindEvents, error } from '../../../utils'
  import { watch } from 'vue'
  export interface DistrictLayerProps {
    /**
     * 是否可见
     */
    visible?: boolean
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
  const props = withDefaults(defineProps<DistrictLayerProps>(), {
    kind: 0,
    visible: true,
    fillColor: '#fdfd27',
    fillOpacity: 1,
    strokeColor: '#231cf8',
    viewport: false
  })
  let districtLayer: BMapGL.DistrictLayer
  const vueEmits = defineEmits(['initd', 'unload', 'mouseover', 'mouseout', 'click'])
  const { ready } = useParentComponentEffect((map) => {
    if (!props.name) return error('BDistrictLayer', 'DistrictLayer props.name is required')
    const { visible, name, kind, fillColor, fillOpacity, strokeColor, viewport } = props
    districtLayer = new BMapGL.DistrictLayer({
      name: `(${name})`,
      kind,
      fillColor,
      fillOpacity,
      strokeColor,
      viewport
    })
    visible && map.addDistrictLayer(districtLayer)

    bindEvents(props, vueEmits, districtLayer)

    watch(
      () => props.visible,
      (n) => {
        if (districtLayer) {
          map[n ? 'addDistrictLayer' : 'removeDistrictLayer'](districtLayer)
        }
      }
    )

    const readyTimeout = setTimeout(() => {
      ready(map, districtLayer)
    }, 400)
    return () => {
      clearTimeout(readyTimeout)
      map.removeDistrictLayer(districtLayer)
    }
  })
  defineOptions({
    name: 'BDistrictLayer'
  })
</script>
