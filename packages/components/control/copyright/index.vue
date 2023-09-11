<template>
  <div style="display: none">
    <div ref="copyrightContainer" v-bind="$attrs">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, getCurrentInstance, onUpdated, warn, watch } from 'vue'
  import useParentComponentEffect from '../../../hooks/useParentComponentEffect'
  import copyrightControlPosCacheMap from './copyrightControlPosCacheMap'
  import { ControlAnchor } from '../../../utils'
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
    /**
     * 是否可见
     */
    visible?: boolean
  }
  const props = withDefaults(defineProps<CopyrightProps>(), {
    anchor: 'BMAP_ANCHOR_BOTTOM_RIGHT',
    offset: () => ({ x: 83, y: 18 }),
    visible: true
  })
  const copyrightContainer = ref<HTMLDivElement>()
  let copyrightControl: BMapGL.CopyrightControl
  const uid = getCurrentInstance()?.uid
  defineEmits(['initd', 'unload'])
  const { ready } = useParentComponentEffect((map: BMapGL.Map) => {
    const { anchor, offset, visible } = props
    if (!copyrightContainer.value) {
      if (__DEV__) {
        warn('BCopyright', 'container el render error')
      }
      return
    }
    let mapBounds = map.getBounds()
    // 同一位置的 copyright 应该调用 addCopyright, 防止多个 copyright 重叠
    if (!(copyrightControl = copyrightControlPosCacheMap[anchor])) {
      copyrightControl = new BMapGL.CopyrightControl({
        offset: new BMapGL.Size(offset.x, offset.y),
        anchor: window[anchor]
      })
      copyrightControlPosCacheMap[anchor] = copyrightControl
      map.addControl(copyrightControl)
    }
    if (visible) {
      copyrightControl.addCopyright({
        id: uid,
        content: copyrightContainer.value.innerHTML,
        bounds: mapBounds
      })
    }
    ready(map, copyrightControl)
    watch(
      () => props.visible,
      (n) => {
        if (n) {
          copyrightContainer.value &&
            copyrightControl.addCopyright({
              id: uid,
              content: copyrightContainer.value.innerHTML,
              bounds: mapBounds
            })
        } else {
          uid && copyrightControl.removeCopyright(uid)
        }
      }
    )
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
  onUpdated(() => {
    if (!copyrightControl) return
    let copyright = copyrightControl.getCopyright(uid!)
    if (copyright && copyrightContainer.value && copyright.content !== copyrightContainer.value.innerHTML) {
      copyrightControl.addCopyright({
        id: uid,
        content: copyrightContainer.value.innerHTML,
        bounds: copyright.bounds
      })
    }
  })
  defineOptions({
    name: 'BCopyright',
    inheritAttrs: false
  })
</script>
