<template>
  <div style="display: none">
    <div ref="copyrightContainer" v-bind="$attrs">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, getCurrentInstance, onUpdated } from 'vue'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import copyrightControlPosCacheMap from './copyrightControlPosCacheMap'
  export interface CopyrightProps {
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
  }
  const props = withDefaults(defineProps<CopyrightProps>(), {
    anchor: 'BMAP_ANCHOR_BOTTOM_RIGHT',
    offset: () => ({ x: 83, y: 18 })
  })
  const { ready } = useLifeCycle()
  const copyrightContainer = ref<HTMLDivElement>()
  let copyrightControl: BMapGL.CopyrightControl
  const uid = getCurrentInstance()?.uid
  defineEmits(['initd', 'unload'])
  onMounted(() => {
    const { anchor, offset } = props
    useBaseMapEffect((map: BMapGL.Map) => {
      if (!copyrightContainer.value) return
      let mapBounds = map.getBounds()
      // 同一位置的 copyright 应该调用 addCopyright,防止多个 copyright 重叠
      if (!(copyrightControl = copyrightControlPosCacheMap[anchor])) {
        copyrightControl = new BMapGL.CopyrightControl({
          offset: new BMapGL.Size(offset.x, offset.y),
          anchor: window[anchor]
        })
        copyrightControlPosCacheMap[anchor] = copyrightControl
        map.addControl(copyrightControl)
      }
      copyrightControl.addCopyright({
        id: uid,
        content: copyrightContainer.value.innerHTML,
        bounds: mapBounds
      })

      ready(map, copyrightControl)
      return () => {
        const cacheCopyright = copyrightControlPosCacheMap[anchor]
        const getCopyrightCollection = cacheCopyright?.getCopyrightCollection?.bind(cacheCopyright)

        if (getCopyrightCollection && getCopyrightCollection()?.length > 1) {
          cacheCopyright.removeCopyright(uid!)
        } else {
          map.removeControl(cacheCopyright)
          Reflect.deleteProperty(copyrightControlPosCacheMap, anchor)
        }
      }
    })
  })
  onUpdated(() => {
    if (!copyrightControl) return
    let copyright = copyrightControl?.getCopyright(uid!)
    if (copyright?.content !== copyrightContainer.value?.innerHTML) {
      copyrightControl.addCopyright({
        id: uid,
        content: copyrightContainer.value?.innerHTML,
        bounds: copyright.bounds
      })
    }
  })
  defineOptions({
    name: 'BCopyright',
    inheritAttrs: false
  })
</script>
