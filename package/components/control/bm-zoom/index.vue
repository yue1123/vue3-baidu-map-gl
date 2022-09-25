<template>
	<div></div>
</template>

<script setup lang="ts">
	import { defineProps, withDefaults, defineEmits } from 'vue'
	import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
	import useLife from '../../../hooks/useLife'
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
	const props = withDefaults(defineProps<baseBmControlOptions>(), {
		anchor: 'BMAP_ANCHOR_BOTTOM_RIGHT',
		offset: () => ({ x: 83, y: 18 })
	})
	const { ready } = useLife()
	let zoomControl: BMapGL.ZoomControl
	defineEmits(['initd', 'unload'])
	useBaseMapEffect((map) => {
		zoomControl = new window.BMapGL.ZoomControl({
			offset: new window.BMapGL.Size(props.offset.x, props.offset.y),
			anchor: window[props.anchor]
		})
		map.addControl(zoomControl)
		ready(map)
		return () => map.removeControl(zoomControl)
	})
</script>
