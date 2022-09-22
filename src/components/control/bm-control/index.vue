<template>
	<div ref="controlContainer">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
	import { ref, defineProps, withDefaults, nextTick, onMounted } from 'vue'
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
	const props = withDefaults(defineProps<baseBmControlOptions>(), {
		anchor: 'BMAP_ANCHOR_TOP_LEFT',
		offset: () => ({ x: 83, y: 18 })
	})
	defineEmits(['initd', 'unload'])
	onMounted(() => {
		useBaseMapEffect((map: BMapGL.Map) => {
			const customControl = new BMapGL.Control()
			if (!controlContainer.value) return
			customControl.defaultAnchor = window[props.anchor]
			customControl.defaultOffset = new BMapGL.Size(props.offset!.x, props.offset!.y)
			customControl.initialize = (_map: BMapGL.Map) => {
				return _map.getContainer().appendChild(controlContainer.value as Node) as HTMLElement
			}
			map.addControl(customControl)
			ready(map)
			return () => map.removeControl(customControl)
		})
	})
</script>
