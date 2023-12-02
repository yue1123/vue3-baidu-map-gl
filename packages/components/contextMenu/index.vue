<template></template>

<script setup lang="ts">
  import { inject, watch } from 'vue'
  import useParentComponentEffect from '../../hooks/useParentComponentEffect'
  import { bindEvents, Callback, isString, callWhenDifferentValue } from '../../utils'
  export interface ContextMenuItem {
    text: string
    callback: (...arg: any[]) => void
    disabled?: boolean
  }
  export type ContextMenuSeparator = '-'
  export interface ContextMenuProps {
    width?: number
    /**
     * 是否可见
     */
    visible?: boolean
    menuItems?: (ContextMenuItem | ContextMenuSeparator)[]
    onOpen?: Callback
    onClose?: Callback
  }
  const props = withDefaults(defineProps<ContextMenuProps>(), {
    width: 100,
    visible: true,
    menuItems: () => []
  })
  const getParentInstance = inject('getOverlayInstance', () => null)
  const vueEmits = defineEmits(['initd', 'unload', 'open', 'close'])
  let contextMenu: BMapGL.ContextMenu

  const { ready } = useParentComponentEffect((map: BMapGL.Map) => {
    const target = getParentInstance() || map
    const cal = () => {
      contextMenu && target.removeContextMenu(contextMenu)
    }
    const init = () => {
      const { width, menuItems, visible } = props
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
      visible && target.addContextMenu(contextMenu)
      bindEvents(props, vueEmits, contextMenu)
    }
    watch(
      () => props.visible,
      (n) => {
        if (contextMenu) {
          target[n ? 'addContextMenu' : 'removeContextMenu'](contextMenu)
        }
      }
    )
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

  defineOptions({
    name: 'BContextMenu',
    inheritAttrs: false
  })
</script>
