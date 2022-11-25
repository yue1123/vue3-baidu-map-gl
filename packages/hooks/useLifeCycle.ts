import {  onUnmounted, getCurrentInstance  } from 'vue-demi'
import useBaseMapListener from './useBaseMapListener'

export default function useLifeCycle() {
  const { uid, emit: VueEmit } = getCurrentInstance()!
  const { on, emit, off } = useBaseMapListener()
  const eventKey = `__initd__${uid}`
  on(eventKey, (instance) => {
    VueEmit('initd', instance)
  })

  onUnmounted(() => {
    VueEmit('unload')
    off(eventKey)
  })
  return {
    ready: (map: BMapGL.Map, instance: any) => {
      emit(eventKey, {
        map,
        instance,
        BMapGL: window.BMapGL
      })
    }
  }
}
