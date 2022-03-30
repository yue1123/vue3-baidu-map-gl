import mitt from 'mitt'

import { BMapGL } from 'types/index.d'
type Events = {
	initd: BMapGL['Map']
}

const emitter = mitt<Events>()
function useBaseMapListener() {
	return {
		emit: (event: keyof Events, arg: BMapGL['Map']) => {
			emitter.emit(event, arg)
		},
		on: (event: keyof Events, cal: (arg: BMapGL['Map']) => void) => {
			emitter.on(event, cal)
		}
	}
}

export default useBaseMapListener
