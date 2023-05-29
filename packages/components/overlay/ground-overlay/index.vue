<template>
  <slot></slot>
</template>

<script setup lang="ts">
  import { nextTick, Ref, watch } from 'vue'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import { bindEvents, Callback, error, callWhenDifferentValue, type Point, warn } from '../../../utils'
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
    onClick?: Callback
    onDblclick?: Callback
    onMousemove?: Callback
    onMouseover?: Callback
    onMouseout?: Callback
  }
  const props = withDefaults(defineProps<GroundOverlayProps>(), {
    autoCenter: false,
    opacity: 1
  })
  const vueEmits = defineEmits(['initd', 'unload', 'click', 'dblclick', 'mousemove', 'mouseover', 'mouseout'])
  const { ready } = useLifeCycle()
  let groundOverlay: BMapGL.GroundOverlay
  useBaseMapEffect((map) => {
    const clear = () => {
      groundOverlay && map.removeOverlay(groundOverlay)
    }
    const init = () => {
      clear()
      let { startPoint, endPoint, opacity, type, autoCenter } = props
      const url = getUrl()
      if (!url) return
      if (!startPoint) {
        return __DEV__ && warn(`GroundOverlay props startPoint is required`)
      }
      if (!endPoint) return __DEV__ && warn(`GroundOverlay props endPoint is required`)
      const boundsObj = getBounds(startPoint, endPoint)
      const options: BMapGL.GroundOverlayOptions = {
        opacity,
        type,
        url: (url as Ref<HTMLCanvasElement>).value || url
      }
      groundOverlay = new BMapGL.GroundOverlay(boundsObj, options)
      map.addOverlay(groundOverlay)
      // 自动设置中心点
      if (autoCenter) {
        nextTick(() => {
          // 获取中心点
          try {
            const center = boundsObj.getCenter()
            map.panTo(center)
          } catch (e) {
            error('GroundOverlay set center error')
          }
        })
      }
    }
    init()
    bindEvents(props, vueEmits, groundOverlay)
    ready(map, groundOverlay)

    watch(() => props, callWhenDifferentValue(init), { deep: true })
    return clear
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
          warn(`GroundOverlay props url expect a function return string or canvas html element, but got ${url}`)
        )
      }
    }
    return url
  }
  defineOptions({
    name: 'BGroundOverlay'
  })
</script>
