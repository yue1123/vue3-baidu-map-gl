<template>
  <slot></slot>
</template>

<script setup lang="ts">
  import { provide, watch } from 'vue'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import { bindEvents, Callback, callWhenDifferentValue, warn, type Point } from '../../../utils'

  export type Marker3dCustomIcon = {
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
  export type Marker3dShape = 'BMAP_SHAPE_CIRCLE' | 'BMAP_SHAPE_RECT'
  export interface Marker3dProps {
    /**
     * 位置
     */
    position: Point
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
    shape?: Marker3dShape
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
    icon?: Marker3dCustomIcon
    /**
     * @default true
     * 是否在调用map.clearOverlays清除此覆盖物，默认为true
     */
    enableMassClear?: boolean
    /**
     * 是否可见
     */
    visible?: boolean
    onClick?: Callback
    onDblclick?: Callback
    onMousedown?: Callback
    onMouseup?: Callback
    onMouseout?: Callback
    onMouseover?: Callback
    onRemove?: Callback
    onRightClick?: Callback
  }

  const props = withDefaults(defineProps<Marker3dProps>(), {
    enableMassClear: true,
    size: 50,
    shape: 'BMAP_SHAPE_CIRCLE',
    fillColor: '#f00',
    fillOpacity: 0.8,
    visible: true
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
      if (!props.position) return __DEV__ && warn('Marker3d props position is required')
      if (!props.height) return __DEV__ && warn('Marker3d props height is required')
      const { position, shape, fillColor, fillOpacity, size, icon, height, enableMassClear, visible } = props
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
      visible && map.addOverlay(marker3d)
      setMassClear(enableMassClear)
      bindEvents(props, vueEmits, marker3d)
      ready(map, marker3d)
    }

    init()
    // 监听值变化
    watch(
      () => props.position,
      callWhenDifferentValue((n) => {
        marker3d ? setPosition(n) : init()
      }),
      { deep: true }
    )
    watch(
      () => props.height,
      (n) => {
        marker3d ? setHeight(n) : init()
      }
    )
    watch(() => props.enableMassClear, setMassClear)
    watch(() => props.icon, callWhenDifferentValue(setIcon), { deep: true })
    watch(() => props.enableMassClear, setMassClear)
    watch(() => props.fillOpacity, setFillOpacity)
    watch(() => props.fillColor, setFillColor)
    watch(
      () => props.visible,
      (n) => {
        map[n ? 'addOverlay' : 'removeOverlay'](marker3d)
      }
    )
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
  function setPosition(position: Point) {
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
  defineOptions({
    name: 'BMarker3d'
  })
</script>
