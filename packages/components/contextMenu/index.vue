<template></template>

<script setup lang="ts">
  import {  defineProps, watch, withDefaults  } from 'vue-demi'
  import useBaseMapEffect from '../../hooks/useBaseMapEffect'
  import bindEvents, { Callback } from '../../utils/bindEvents'
  import useLifeCycle from '../../hooks/useLifeCycle'
  import { isString, callWhenDifferentValue } from '../../utils/index'
  export interface ContextMenuItem {
    text: string
    callback: (...arg: any[]) => void
    disabled?: boolean
  }
  export interface ContextMenuProps {
    width?: number
    menuItems?: (ContextMenuItem | '-')[]
    onOpen?: Callback
    onClose?: Callback
  }
  const props = withDefaults(defineProps<ContextMenuProps>(), {
    width: 100,
    menuItems: () => []
  })

  // const getParentInstance = inject('getOverlayInstance', () => null)
  const vueEmits = defineEmits(['initd', 'unload', 'open', 'close'])
  const { ready } = useLifeCycle()
  let contextMenu: BMapGL.ContextMenu
  useBaseMapEffect((map: BMapGL.Map) => {
    // const target = getParentInstance() || map
    const target = map
    const cal = () => {
      contextMenu && target.removeContextMenu(contextMenu)
    }
    const init = () => {
      const { width, menuItems } = props
      contextMenu = new BMapGL.ContextMenu()
      for (const item of menuItems) {
        if (isString(item) && item === '-') {
          contextMenu.addSeparator()
          continue
        }
        const menuItem = new BMapGL.MenuItem(
          (item as ContextMenuItem).text,
          function (point, pixel) {
            ;(item as ContextMenuItem).callback.call(null, {
              point,
              pixel,
              map,
              BMapGL,
              target: target
            })
          },
          {
            width,
            id: String(Math.random())
          }
        )
        ;(item as ContextMenuItem).disabled ? menuItem.disable() : menuItem.enable()
        contextMenu.addItem(menuItem)
      }
      target.addContextMenu(contextMenu)
      bindEvents(props, vueEmits, contextMenu)
    }
    watch(
      () => {
        return props.menuItems
      },
      callWhenDifferentValue(() => {
        cal()
        init()
      }),
      {
        deep: true
      }
    )
    init()
    ready(map, contextMenu)
    // 在地图上添加点标记
    return cal
  })
</script>

<script lang="ts">
  export default {
    name: 'BContextMenu'
  }
</script>
