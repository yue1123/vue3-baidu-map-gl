import { onUnmounted, inject, getCurrentInstance } from 'vue'
import useBaseMapListener from './useBaseMapListener'
import { warnOnce } from '../utils'

function useBaseMapEffect(cal: (map: BMapGL.Map) => void | VoidFunction) {
  const { on, off } = useBaseMapListener()
  const getMapInstance = inject<(() => BMapGL.Map) | undefined>('getMapInstance', undefined)
  const parentUid = inject<number | void>('parentUid', undefined)
  const uid = parentUid || getCurrentInstance()?.uid
  const map = getMapInstance && getMapInstance()
  const eventKey = `__initd__${uid}`
  let onUnmountedCallback: void | VoidFunction
  const _cal = ({ map }: { map: BMapGL.Map }) => {
    onUnmountedCallback = cal(map as BMapGL.Map)
  }
  if (typeof getMapInstance === 'undefined') {
    warnOnce(getCurrentInstance()?.type.name || '', 'must be a child node of the Bmap component')
  }
  if (map) {
    _cal({ map })
  } else {
    on(eventKey, _cal)
  }
  onUnmounted(() => {
    off(eventKey, _cal)
    onUnmountedCallback && onUnmountedCallback()
  })
}

export default useBaseMapEffect
