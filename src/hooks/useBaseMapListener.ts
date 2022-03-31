import mitt from 'mitt'

import { BMapGL } from 'types/main.d'
type Events = {
	initd: BMapGL['Map']
	unload: any
	[prop: string]: any
}

const emitter = mitt<Events>()
function useBaseMapListener() {
	return {
		emit: (event: keyof Events, arg: BMapGL['Map']) => {
			emitter.emit(event, arg)
		},
		on: (event: keyof Events, cal: (arg: BMapGL['Map']) => void) => {
			emitter.on(event, cal)
		},
		off: emitter.off
	}
}

export default useBaseMapListener
