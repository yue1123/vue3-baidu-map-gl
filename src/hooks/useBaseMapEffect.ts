import { onUnmounted } from 'vue'
import useBaseMapListener from './useBaseMapListener'
let _map: BMapGL.Map | null = null
function useBaseMapEffect(cal: (map: BMapGL.Map) => void | VoidFunction) {
	const { on } = useBaseMapListener()
	let onUnmountedCal: VoidFunction | void = void 0

	if (_map) {
		onUnmountedCal = cal(_map)
	} else {
		on('initd', (map) => {
			_map = map
			onUnmountedCal = cal(map)
		})
	}

	onUnmounted(() => {
		onUnmountedCal && onUnmountedCal()
	})
	return { map: _map }
}

export default useBaseMapEffect
