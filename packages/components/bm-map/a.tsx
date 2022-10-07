import { h, defineComponent, ref, onBeforeUnmount, nextTick, toRef } from 'vue'

export interface BaseWaveRef {
	play: () => void
}

export default defineComponent({
	name: 'BaseWave',
	setup(props) {
	
	},
	render() {
		return (
			<div></div>
		)
	}
})
