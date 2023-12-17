<template>
  <slot></slot>
</template>

<script setup lang="ts">
  import { nextTick, provide, Ref, watch } from 'vue'
  import useParentComponentEffect from '../../../hooks/useParentComponentEffect'
  import { bindEvents, Callback, callWhenDifferentValue, type Point, warn } from '../../../utils'
  export type GroundOverlayUrl =
    | string
    | HTMLCanvasElement
    | Ref<HTMLCanvasElement | string>
    | (() => HTMLCanvasElement | Ref<HTMLCanvasElement | string>)

  export interface GroundOverlayProps {
    type: 'video' | 'canvas' | 'image'
    url: GroundOverlayUrl
    startPoint: Point
    endPoint: Point
    autoCenter?: boolean
    opacity?: number
    /**
     * 是否可见
     */
    visible?: boolean
    onClick?: Callback
    onDblclick?: Callback
    onMousemove?: Callback
    onMouseover?: Callback
    onMouseout?: Callback
  }
  const props = withDefaults(defineProps<GroundOverlayProps>(), {
    autoCenter: false,
    opacity: 1,
    visible: true
  })
  const vueEmits = defineEmits(['initd', 'unload', 'click', 'dblclick', 'mousemove', 'mouseover', 'mouseout'])
  let groundOverlay: BMapGL.GroundOverlay
  const { ready } = useParentComponentEffect((map) => {
    const clear = () => {
      groundOverlay && map.removeOverlay(groundOverlay)
    }
    const init = () => {
      clear()
      let { startPoint, endPoint, opacity, type, autoCenter, visible } = props
      const url = getUrl()
      if (!url) return
      if (!startPoint) {
        return __DEV__ && warn('GroundOverlay', `startPoint is required`)
      }
      if (!endPoint) return __DEV__ && warn('GroundOverlay', `endPoint is required`)
      const boundsObj = getBounds(startPoint, endPoint)
      const options: BMapGL.GroundOverlayOptions = {
        opacity,
        type,
        url: (url as Ref<HTMLCanvasElement>).value || url
      }
      groundOverlay = new BMapGL.GroundOverlay(boundsObj, options)
      visible && map.addOverlay(groundOverlay)

      // 自动设置中心点
      if (autoCenter) {
        nextTick(() => {
          // 获取中心点
          try {
            const center = boundsObj.getCenter()
            map.panTo(center)
          } catch (e) {
            warn('GroundOverlay', 'auto set center error')
          }
        })
      }
    }
    init()
    bindEvents(props, vueEmits, groundOverlay)
    ready(map, groundOverlay)

    watch(() => props, callWhenDifferentValue(init), { deep: true })

    watch(
      () => props.visible,
      (n) => {
        map[n ? 'addOverlay' : 'removeOverlay'](groundOverlay)
      }
    )

    return clear
  })

  provide('getOverlayInstance', () => groundOverlay)
  defineOptions({
    name: 'BGroundOverlay'
  })

  function getBounds(start: Point, end: Point) {
    return new BMapGL.Bounds(new BMapGL.Point(start.lng, end.lat), new BMapGL.Point(end.lng, start.lat))
  }
  function getUrl() {
    let url = props.url
    if (typeof url === 'function') {
      url = url()
      if (!url) {
        return (
          __DEV__ &&
          warn('GroundOverlay', `props url expect a function return string or canvas html element, but got ${url}`)
        )
      }
    }
    return url
  }
</script>
