<template>
	<div ref="controlContainer" v-show="show">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
	import { ref, defineProps, withDefaults } from 'vue'
	import useLife from '../../../hooks/useLife'
	import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
	export interface baseBmControlOptions {
		/**
		 * 控件的停靠位置
		 */
		anchor?: _ControlAnchor
		/**
		 * 控件的偏移值
		 */
		offset?: {
			x: number
			y: number
		}
	}
	const controlContainer = ref<HTMLDivElement>()
	const { ready } = useLife()
	const show = ref<boolean>(false)
	const props = withDefaults(defineProps<baseBmControlOptions>(), {
		anchor: 'BMAP_ANCHOR_TOP_LEFT',
		offset: () => ({ x: 83, y: 18 })
	})
	defineEmits(['initd', 'unload'])
	useBaseMapEffect((map: BMapGL.Map) => {
		if (!controlContainer.value) return
		const customControl = new window.BMapGL.Control()
		customControl.defaultAnchor = window[props.anchor]
		customControl.defaultOffset = new window.BMapGL.Size(props.offset!.x, props.offset!.y)
		customControl.initialize = (_map: BMapGL.Map) => {
			show.value = true
			return _map.getContainer().appendChild(controlContainer.value as Node) as HTMLElement
		}
		map.addControl(customControl)
		ready(map)
		return () => map.removeControl(customControl)
	})
</script>
