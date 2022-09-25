import { onUnmounted ,inject} from 'vue'
import useBaseMapListener from './useBaseMapListener'
function useBaseMapEffect(cal: (map: BMapGL.Map) => void | VoidFunction) {
	const { on } = useBaseMapListener()
	const getMapInstance = inject('getMapInstance') as () => BMapGL.Map
	const map = getMapInstance && getMapInstance()
	let onUnmountedCallback: void | VoidFunction
	if (map) {
		onUnmountedCallback = cal(map as BMapGL.Map)
	}else{
    on('initd', (map) => {
			onUnmountedCallback = cal(map as BMapGL.Map)
		})
  }
	onUnmounted(() => {
		onUnmountedCallback && onUnmountedCallback()
	})
}

export default useBaseMapEffect
