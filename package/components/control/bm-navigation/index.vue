<template></template>

<script setup lang="ts">
	import { defineProps, withDefaults, defineEmits } from 'vue'
	import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
	import useLife from '../../../hooks/useLife'
	export interface NavigationControlOptions {
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
		/**
		 * 控件的类型
		 */
		type?: any
		/**
		 * 是否显示缩放信息
		 */
		showZoomInfo?: boolean
		/**
		 *
		 */
		enableGeolocation?: boolean
	}
	const props = withDefaults(defineProps<NavigationControlOptions>(), {
		anchor: 'BMAP_ANCHOR_BOTTOM_RIGHT',
		offset: () => ({ x: 83, y: 18 }),
		type: 'BMAP_NAVIGATION_CONTROL_PAN'
	})
	console.log(props.type)
	const { ready } = useLife()
	let navigationControl: BMapGL.NavigationControl
	defineEmits(['initd', 'unload'])
	useBaseMapEffect((map) => {
		navigationControl = new BMapGL.NavigationControl({
			// offset: new BMapGL.Size(props.offset.x, props.offset.y),
			// anchor: window[props.anchor],
			type: window[props.type]
			// showZoomInfo: true,
			// enableGeolocation: true
		})
		map.addControl(navigationControl)
		ready(map)
		return () => map.removeControl(navigationControl)
	})
</script>
<script lang="ts">
	export default {
		name: 'BmNavigation'
	}
</script>