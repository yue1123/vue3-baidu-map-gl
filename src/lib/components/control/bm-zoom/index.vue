<template>
	<div></div>
</template>

<script setup lang="ts">
	import { defineProps, withDefaults, watch } from 'vue'
	import useBaseMapEffect from 'hooks/useBaseMapEffect'
	import { ControlAnchor, _LengthUnit, _ControlAnchor } from 'types/common.d'
	import { BMapGL } from 'types/main.d'
	export interface BmScaleOptions {
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
	const props = withDefaults(defineProps<BmScaleOptions>(), {
		anchor: 'BMAP_ANCHOR_BOTTOM_RIGHT',
		offset: () => ({ x: 83, y: 18 })
	})
	let zoomControl: BMapGL['ZoomControl']
	useBaseMapEffect((map) => {
		zoomControl = new window.BMapGL.ZoomControl({
			offset: new window.BMapGL.Size(props.offset.x, props.offset.y),
			anchor: ControlAnchor[props.anchor]
		})
		map.addControl(zoomControl)
		return () => map.removeControl(zoomControl)
	})
  function a(){}
</script>
