<template>
	<div></div>
</template>

<script setup lang="ts">
	import { defineProps, withDefaults, watch, defineEmits } from 'vue'
	import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
	import useLifeCycle from '../../../hooks/useLifeCycle'
	export interface BmCityListOptions {
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
		 * 列表是否展开
		 */
		expand?: boolean
	}
	const { ready } = useLifeCycle()
	const props = withDefaults(defineProps<BmCityListOptions>(), {
		anchor: 'BMAP_ANCHOR_TOP_LEFT',
		offset: () => ({ x: 18, y: 18 }),
		expand: false
	})
	let cityListControl: BMapGL.CityListControl
	defineEmits(['initd', 'unload'])
	useBaseMapEffect((map) => {
		cityListControl = new BMapGL.CityListControl({
			expand: props.expand,
			offset: new BMapGL.Size(props.offset.x, props.offset.y),
			anchor: window[props.anchor]
		})
		map.addControl(cityListControl)
		ready(map)
		return () => map.removeControl(cityListControl)
	})
</script>
<script lang="ts">
	export default {
		name: 'BmCityList'
	}
</script>