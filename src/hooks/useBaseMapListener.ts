import mitt from 'mitt'

type Events = {
	initd: BMapGL.Map
	unload: any
	[prop: string]: any
}

const emitter = mitt<Events>()
window.emitter = emitter
function useBaseMapListener() {
	return {
		emit: emitter.emit,
		on: emitter.on,
		off: emitter.off
	}
}

export default useBaseMapListener
