<template>
	<BaiduMap ak="4stE857hYPHbEmgKhLiTAa0QbCIULHpm" mapType="BMAP_NORMAL_MAP" :enable-keyboard="false" @initd="ready1">
		<BmControl>
			<!-- <BmControl> -->
			<!-- <BmControl></BmControl> -->
			<!-- </BmControl> -->
		</BmControl>
		<BmScale @initd="ready" v-if="show"></BmScale>
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
	const show = ref<boolean>(true)

	// setTimeout(() => {
	// 	show.value = false
	//   console.log('yingcang');
	// }, 5000)
	const cal = () => {
		show.value = !show.value
	}

	;(window as any).toggle = cal
</script>
<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	body {
		margin: 0;
	}
</style>
