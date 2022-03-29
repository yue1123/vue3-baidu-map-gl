import mitt from 'mitt'
const emitter = mitt()
export function useEmits(vueEmits?: any) {
	return {
		emit: (event: string, arg?: any) => {
			emitter.emit(event, arg)
      vueEmits && vueEmits(event, arg)
		},
		on: (event: string, cal: (arg: any) => void) => {
			emitter.on(event, cal)
		}
	}
}
