<template></template>

<script setup lang="ts">
  import { defineProps, provide, watch, withDefaults } from 'vue'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import bindEvents, { Callback } from '../../../utils/bindEvents'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import { callWhenDifferentValue } from '../../../utils'
  export interface Marker3dPosition {
    /**
     * 地理经度
     */
    lng: number
    /**
     * 地理纬度
     */
    lat: number
  }
  export type MarkerCustomIcon = {
    anchor?: {
      x: number
      y: number
    }
    imageOffset?: {
      x: number
      y: number
    }
    imageSize: {
      width: number
      height: number
    }
    imageUrl: string
    printImageUrl?: string
  }
  export interface BmMarker3dProps {
    /**
     * 位置
     */
    position: Marker3dPosition
    /**
     * 点高度
     */
    height: number
    /**
     * 点大小
     */
    size?: number
    /**
     * 点形状
     */
    shape?: 'BMAP_SHAPE_CIRCLE' | 'BMAP_SHAPE_RECT'
    /**
     * 点填充颜色，同CSS颜色
     */
    fillColor?: string

    /**
     * 点填充的透明度，范围0-1
     */
    fillOpacity?: number
    /**
     * 标注所用的图标对象
     */
    icon?: MarkerCustomIcon
    /**
     * @default true
     * 是否在调用map.clearOverlays清除此覆盖物，默认为true
     */
    enableMassClear?: boolean
    onClick?: Callback
    onDblclick?: Callback
    onMousedown?: Callback
    onMouseup?: Callback
    onMouseout?: Callback
    onMouseover?: Callback
    onRemove?: Callback
    onRightClick?: Callback
  }

  const props = withDefaults(defineProps<BmMarker3dProps>(), {
    enableMassClear: true,
    size: 50,
    shape: 'BMAP_SHAPE_CIRCLE',
    fillColor: '#f00',
    fillOpacity: 0.8
  })
  const vueEmits = defineEmits([
    'initd',
    'unload',
    'click',
    'dblclick',
    'mousedown',
    'mouseup',
    'mouseout',
    'mouseover',
    'remove',
    'rightclick'
  ])
  const { ready } = useLifeCycle()
  let marker3d: BMapGL.Marker3D

  useBaseMapEffect((map: BMapGL.Map) => {
    const cal = () => {
      map.removeOverlay(marker3d)
    }
    const init = () => {
      const { position, shape, fillColor, fillOpacity, size, icon, height, enableMassClear } = props
      const options: BMapGL.Marker3DOptions = {
        size,
        fillColor,
        fillOpacity,
        shape: window[shape]
      }
      if (icon) {
        options.icon = getIconConfig()
      }
      marker3d = new BMapGL.Marker3D(new BMapGL.Point(position.lng, position.lat), height, options)
      // 在地图上添加点标记
      map.addOverlay(marker3d)
      setMassClear(enableMassClear)
      bindEvents(props, vueEmits, marker3d)
    }
    // 监听值变化
    watch(() => props.enableMassClear, setMassClear)
    watch(() => props.position, callWhenDifferentValue(setPosition), { deep: true })
    watch(() => props.icon, callWhenDifferentValue(setIcon), { deep: true })
    watch(() => props.enableMassClear, setMassClear)

    watch(() => props.height, setHeight)
    watch(() => props.fillOpacity, setFillOpacity)
    watch(() => props.fillColor, setFillColor)

    init()
    ready(map, marker3d)
    return cal
  })

  provide('getOverlayInstance', () => marker3d)

  // 获取图标配置
  function getIconConfig(): BMapGL.Icon {
    const { icon } = props
    // @ts-ignore
    const { anchor, imageOffset, imageSize, imageUrl, printImageUrl } = icon as MarkerCustomIcon
    const iconOptions: BMapGL.IconOptions = {
      imageSize: new BMapGL.Size(imageSize.width, imageSize.height)
    }
    if (anchor) {
      iconOptions.anchor = new BMapGL.Size(anchor.x, anchor.y)
    }
    if (imageOffset) {
      iconOptions.imageOffset = new BMapGL.Size(imageOffset.x, imageOffset.y)
    }
    if (printImageUrl) {
      iconOptions.printImageUrl = printImageUrl
    }
    return new BMapGL.Icon(imageUrl, new BMapGL.Size(imageSize.width, imageSize.height), iconOptions)
  }
  function setPosition(position: Marker3dPosition) {
    try {
      // FIXME: 更新 position baidu-map-gl api报错: TypeError: Cannot read properties of undefined (reading '2x')
      marker3d.setPosition(new BMapGL.Point(position.lng, position.lat))
    } catch (error) {
      console.error(error)
    }
  }
  function setHeight(height: number) {
    marker3d.setHeight(height)
  }
  function setFillColor(color: string): void {
    marker3d.setFillColor(color)
  }
  function setFillOpacity(opacity: number): void {
    marker3d.setFillOpacity(opacity)
  }
  function setIcon() {
    marker3d.setIcon(getIconConfig())
  }
  function setMassClear(enableMassClear: boolean): void {
    enableMassClear ? marker3d!.enableMassClear() : marker3d!.disableMassClear()
  }
</script>
<script lang="ts">
  export default {
    name: 'BMarker3d'
  }
</script>
