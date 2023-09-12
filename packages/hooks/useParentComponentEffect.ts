import { onBeforeUnmount, inject, getCurrentInstance, onMounted } from 'vue'
import usePubSub from './usePubSub'
import { error, noop, getInitEventKey } from '../utils'

/**
 * ### 监听父组件初始化，初始化完成调用 initdCallback 初始当前组件
 * root map 组件需要加载 sdk，所以它必定是异步的,
 * 子组件的初始化依赖于 root map 组件，当子组件初始化初始化root map 组件未初始化完成，就需要订阅他的初始化完成时间，这个事件触发了之后，再初始化当前组件,
 * 这是一个典型的发布订阅模式
 *
 * - 比如下面的组件层级:
 * ```text
 * |___Map 发布
 * |___|__Circle 订阅
 * |___|___ContextMenu 订阅 / 发布
 * |___|___|___ContextMenuItem 订阅
 * ```
 * @param initdCallback 初始当前组件
 * @returns
 */
export default function useParentComponentEffect(initdCallback: (map: BMapGL.Map) => void | VoidFunction, emitId = '') {
  const { on, off, emit } = usePubSub()
  const comInstance = getCurrentInstance()
  const { emit: vueEmit } = comInstance || { emit: noop }

  const getMapInstance = inject<(() => BMapGL.Map) | undefined>('getMapInstance', undefined)
  // get root BMap component uid
  const parentComponentId = inject<string | void>('parentComponentId', undefined)
  const uid = typeof parentComponentId !== 'undefined' ? parentComponentId : emitId

  if (typeof getMapInstance === 'undefined') {
    __DEV__ && error((comInstance && comInstance.type.name) || '', 'must be a child node of the Bmap component')
    return { ready: noop }
  }

  const map = getMapInstance()
  const eventKey = getInitEventKey(uid)
  let clearEffect: void | VoidFunction
  const initCallbackProxy = (event: { map: BMapGL.Map }) => {
    clearEffect = initdCallback(event.map as BMapGL.Map)
  }

  onMounted(() => {
    if (map) {
      initCallbackProxy({ map })
    } else {
      on(eventKey, initCallbackProxy)
    }
  })

  onBeforeUnmount(() => {
    try {
      clearEffect && clearEffect()
    } catch (e: any) {
      error('BMapGL SDK', e.message)
    }
    vueEmit('unload')
    off(eventKey, initCallbackProxy)
  })

  return {
    ready: (map: BMapGL.Map, instance: any) => {
      const event = {
        map,
        instance,
        BMapGL: window.BMapGL
      }
      vueEmit('initd', event)
      emitId && emit(eventKey, event)
    }
  }
}
