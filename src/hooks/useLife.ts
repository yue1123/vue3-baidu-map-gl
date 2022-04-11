import { onUnmounted, getCurrentInstance } from 'vue'
import useBaseMapListener from './useBaseMapListener'

export default function useLife(initdEventName?: string) {
	const { uid, emit: VueEmit } = getCurrentInstance()!
	const { on, emit, off } = useBaseMapListener()
	let eventKey = initdEventName || `__initd__${uid}`

	on(eventKey, (instance) => {
		VueEmit('initd', instance)
	})

	onUnmounted(() => {
		VueEmit('unload')
		off(eventKey)
	})
	return {
		ready: (map: BMapGL.Map) => {
			emit(eventKey, map)
		}
	}
}
