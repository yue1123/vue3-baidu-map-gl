<template></template>

<script setup lang="ts">
  import { defineEmits, inject, nextTick, ref, Ref, watch } from 'vue'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import bindEvents, { Callback } from '../../../utils/bindEvents'
  import { Point } from '../../../hooks/usePoint'
  import { error, callWhenDifferentValue } from '../../../utils'
  export interface BGroundOverlayProps {
    type: 'video' | 'canvas' | 'image'
    url:
      | string
      | HTMLCanvasElement
      | Ref<HTMLCanvasElement | string>
      | (() => HTMLCanvasElement | Ref<HTMLCanvasElement | string>)
    startPoint: Point
    endPoint: Point
    autoCenter?: boolean
    opacity?: RangeOf2<0, 1>
    onClick?: Callback
    onDblclick?: Callback
    onMousemove?: Callback
    onMouseover?: Callback
    onMouseout?: Callback
  }
  const props = withDefaults(defineProps<BGroundOverlayProps>(), {
    autoCenter: false,
    opacity: 1
  })
  const vueEmits = defineEmits(['initd', 'unload', 'click', 'dblclick', 'mousemove', 'mouseover', 'mouseout'])
  const { ready } = useLifeCycle()
  let groundOverlay: BMapGL.GroundOverlay
  useBaseMapEffect((map) => {
    const cal = () => {
      groundOverlay && map.removeOverlay(groundOverlay)
    }
    const init = () => {
      cal()
      let { startPoint, endPoint, opacity, type, autoCenter } = props
      const url = getUrl()
      if (!url || !startPoint || !endPoint) return
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
            error('set center error')
          }
        })
      }
    }
    init()
    bindEvents(props, vueEmits, groundOverlay)
    ready(map, groundOverlay)

    watch(() => props, callWhenDifferentValue(init), { deep: true })
    return cal
  })
  function getBounds(start: Point, end: Point) {
    return new BMapGL.Bounds(new BMapGL.Point(start.lng, end.lat), new BMapGL.Point(end.lng, start.lat))
  }
  function getUrl() {
    let url = props.url
    if (typeof url === 'function') {
      url = url()
      if (!url && process.env.NODE_ENV === 'development') {
        error(`expect a function return string or canvas html element, but got ${url}`)
        return
      }
    }
    return url
  }
</script>
<script lang="ts">
  export default {
    name: 'BGroundOverlay'
  }
</script>
