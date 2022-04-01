<template>
	<BaiduMap
		ak="4stE857hYPHbEmgKhLiTAa0QbCIULHpm"
		mapType="BMAP_NORMAL_MAP"
		:enable-keyboard="false"
		:zoom="zoom"
		@initd="ready1"
	>
		<BmControl>
			<!-- <BmControl> -->
			<div>'123123123</div>
			<!-- <BmControl></BmControl> -->
			<!-- </BmControl> -->
		</BmControl>
		<button @click="handleZoom">放大</button>
		<BmScale anchor="BMAP_ANCHOR_BOTTOM_RIGHT" @initd="ready" v-if="show"></BmScale>
		<BmZoom v-if="show"></BmZoom>
	</BaiduMap>
</template>
<script setup lang="ts">
	import { ref } from 'vue'
	import { BaiduMap, BmControl, BmScale, BmZoom } from './index'
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
	function handleZoom() {
		zoom.value += 1
		console.log(zoom.value)
	}
	const cal = () => {
		show.value = !show.value
	}

	;(window as any).toggle = cal
</script>
