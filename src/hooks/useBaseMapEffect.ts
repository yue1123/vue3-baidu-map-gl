import { ref, onUnmounted } from 'vue'
import useBaseMapListener from './useBaseMapListener'
import { BMapGL } from 'types/index.d'
let _map: BMapGL['Map'] | null = null
function useBaseMapEffect(cal: (map: BMapGL['Map']) => void | VoidFunction) {
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
		// console.log('我卸载', onUnmountedCal)
		onUnmountedCal && onUnmountedCal()
	})
	return { map: _map }
}

export default useBaseMapEffect
