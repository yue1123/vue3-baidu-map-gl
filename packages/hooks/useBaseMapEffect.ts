import { onUnmounted, inject, getCurrentInstance } from 'vue'
import useBaseMapListener from './useBaseMapListener'
function useBaseMapEffect(cal: (map: BMapGL.Map) => void | VoidFunction) {
  const { on, off } = useBaseMapListener()
  const getMapInstance = inject('getMapInstance') as () => BMapGL.Map
  const parentUidGetter = inject('parentUidGetter') as number | void
  const uid = parentUidGetter || getCurrentInstance()?.uid
  const map = getMapInstance && getMapInstance()
  let eventKey = `__initd__${uid}`
  let onUnmountedCallback: void | VoidFunction
  const _cal = (map: BMapGL.Map) => {
    onUnmountedCallback = cal(map as BMapGL.Map)
  }
  if (map) {
    _cal(map)
  } else {
    on(eventKey, _cal)
  }
  onUnmounted(() => {
    off(eventKey, _cal)
    onUnmountedCallback && onUnmountedCallback()
  })
}

export default useBaseMapEffect
