import { onUnmounted, getCurrentInstance } from 'vue'
import useBaseMapListener from './useBaseMapListener'
import { BMapGL } from 'types/main.d'

export default function useLife(initdEventName?: string) {
	console.log(getCurrentInstance())
	const { uid, emit: VueEmit } = getCurrentInstance()!
	const { on, emit, off } = useBaseMapListener()
	let eventKey = initdEventName || `__initd__${uid}`

	on(eventKey, (map) => {
		VueEmit('initd', map)
	})

	onUnmounted(() => {
		VueEmit('unload')
		off(eventKey)
	})
	return {
		ready: (map: BMapGL['Map']) => {
			emit(eventKey, map)
		}
	}
}
