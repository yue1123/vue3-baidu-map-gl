import { getCurrentInstance } from 'vue'
import { BMapGL } from 'types/index.d'
// import useEmitter from './useEmitter'
export function useBaseMapInitdCallback(cal: (mapInstance: BMapGL['Map']) => void) {
	const parent: any = getCurrentInstance()?.parent
	const { map, emitter } = parent.exposed
	map() ? cal(map()) : emitter.on('onInitd', () => cal(map()))
}
