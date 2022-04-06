<template>
	<BaiduMap
		:ak="'4stE857hYPHbEmgKhLiTAa0QbCIULHpm'"
		mapType="BMAP_NORMAL_MAP"
		:enable-keyboard="false"
		:zoom="zoom"
		@initd="ready1"
		enableDragging
		:minZoom="10"
	>
		<BmControl
			style="display: flex; background-color: #f90; padding: 10px"
			:offset="{ x: 0, y: 0 }"
		>
			<button @click="handleZoomOut">缩小1</button>
			<button @click="handleZoomIn">放大fasdf</button>
		</BmControl>
		<BmNavigation3d />
		<!-- <BmScale @initd="ready" v-if="show"></BmScale>
		<BmZoom v-if="show"></BmZoom> -->
	</BaiduMap>
</template>
<script setup lang="ts">
	import { ref } from 'vue'
	import { BaiduMap, BmControl, BmScale, BmZoom, BmNavigation3d } from './index'
	function ready(map: any) {
		console.log(map, '我是组件')
	}
	function ready1(map: any) {
		console.log(map, '我是map实例')
	}
	const zoom = ref(16)
	const show = ref<boolean>(true)

	// setTimeout(() => {
	// 	show.value = false
	//   console.log('yingcang');
	// }, 5000)
	function handleZoomIn() {
		zoom.value += 1
		console.log(zoom.value)
	}
	function handleZoomOut() {
		zoom.value -= 1
		console.log(zoom.value)
	}
	const cal = () => {
		show.value = !show.value
	}

	;(window as any).toggle = cal
</script>
<style>
	* {
		margin: 0;
	}
</style>
