import { onUnmounted } from 'vue'
import useBaseMapListener from './useBaseMapListener'
function useBaseMapEffect(cal: (map: BMapGL.Map) => void | VoidFunction) {
	const { on } = useBaseMapListener()
	let onUnmountedCal: VoidFunction | void = void 0
    on('initd', (map) => {
		onUnmountedCal = cal(map as BMapGL.Map)
	})
	onUnmounted(() => {
		onUnmountedCal && onUnmountedCal()
	})
}

export default useBaseMapEffect
