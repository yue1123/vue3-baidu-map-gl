<template>
  <slot></slot>
</template>

<script setup lang="ts">
  import { provide, watch } from 'vue'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import { bindEvents, Callback, isDef, callWhenDifferentValue, type Point, warn } from '../../../utils/index'
  export type LabelStyle = {
    [k in keyof CSSStyleDeclaration]?: any
  }
  export type LabelOffset = {
    /**
     * 水平偏移量
     */
    x: number
    /**
     * 垂直偏移量
     */
    y: number
  }
  export interface LabelProps {
    /**
     * 文本标注信息
     */
    content: string
    position: Point
    /**
     * 标注的位置偏移值
     */
    offset?: LabelOffset
    /**
     * 显示层级
     */
    // zIndex: number
    style?: LabelStyle
    /**
     * @default true
     * 是否可清除
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
    onRightclick?: Callback
  }
  const props = withDefaults(defineProps<LabelProps>(), {
    offset: () => ({
      x: 0,
      y: 0
    }),
    enableMassClear: true
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
  let label: BMapGL.Label
  useBaseMapEffect((map: BMapGL.Map) => {
    const cal = () => {
      label && map.removeOverlay(label)
    }
    const init = () => {
      if (__DEV__) {
        if (props.content) return warn('Label content props is required')
        if (props.position) return warn('Label position props is required')
      }
      const { content, position, offset, enableMassClear, style } = props
      const options: BMapGL.LabelOptions = {
        position: new BMapGL.Point(position.lng, position.lat),
        offset: new BMapGL.Size(offset.x, offset.y),
        enableMassClear
      }
      label = new BMapGL.Label(content, options)
      // 自定义文本标注样式
      if (style) {
        label.setStyle(style)
      }
      map.addOverlay(label)
      // isDef(zIndex) && setZIndex(zIndex)
      bindEvents(props, vueEmits, label)
    }

    init()
    ready(map, label)
    // 监听值变化
    watch(() => props.position, callWhenDifferentValue(setPosition), { deep: true })
    watch(() => props.offset, callWhenDifferentValue(setOffset), { deep: true })
    watch(() => props.style, callWhenDifferentValue(setStyle), { deep: true })
    watch(() => props.content, setContent)
    watch(() => props.enableMassClear, setMassClear)

    return cal
  })

  provide('getOverlayInstance', () => label)

  // function setZIndex(zIndex: number) {
  //   console.log('shezhi ')
  //   label.setZIndex(zIndex)
  // }
  function setPosition(position: Point) {
    label.setPosition(new BMapGL.Point(position.lng, position.lat))
  }
  function setStyle(styles?: LabelStyle): void {
    if (isDef(styles)) label.setStyle(styles!)
  }
  function setContent(content: string): void {
    label.setContent(content)
  }
  function setOffset(offset: LabelOffset): void {
    label.setOffset(new BMapGL.Size(offset.x, offset.y))
  }
  function setMassClear(enableMassClear: boolean): void {
    enableMassClear ? label!.enableMassClear() : label!.disableMassClear()
  }
  defineOptions({
    name: 'BLabel'
  })
</script>
