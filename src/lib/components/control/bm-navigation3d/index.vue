<template>
	<div></div>
</template>

<script setup lang="ts">
	import { defineProps, withDefaults, defineEmits } from 'vue'
	import useBaseMapEffect from 'hooks/useBaseMapEffect'
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

	let navigation3dControl: BMapGL.NavigationControl3D
	defineEmits(['initd', 'unload'])
	useBaseMapEffect((map) => {
		navigation3dControl = new window.BMapGL.NavigationControl3D({
			offset: new window.BMapGL.Size(props.offset.x, props.offset.y),
			anchor: window[props.anchor]
		})
		map.addControl(navigation3dControl)
		return () => map.removeControl(navigation3dControl)
	})
</script>
