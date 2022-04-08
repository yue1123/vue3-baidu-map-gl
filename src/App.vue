<template>
	<baidu-map
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
		<BmMarker
			:position="{
				lng: 116.404,
				lat: 39.925
			}"
			icon="../docs/.vuepress/public/logo.png"
			dragging
		/>
		<BmMarker
			:position="{
				lng: 116.404,
				lat: 39.926
			}"
		/>
		<BmLabel
			content="123123"
			:position="{
				lng: 116.404,
				lat: 39.937
			}"
			:style="{
				color: 'blue',
				borderRadius: '5px',
				borderColor: '#ccc',
				padding: '10px',
				fontSize: '26px',
				height: '30px',
				lineHeight: '30px',
				fontFamily: '微软雅黑'
			}"
		/>
		<BmCircle
			stroke-style="dashed"
			:center="{
				lng: 116.406,
				lat: 39.937
			}"
			:radius="300"
			editing
		/>
		<!-- <BmPolyline
			:path="polylinePath"
			stroke-color="#f90"
			:stroke-opacity="1"
			:stroke-weight="10"
		></BmPolyline> -->
		<BmPolygon
			:path="polylinePath"
			stroke-color="#f90"
			:stroke-opacity="1"
			:stroke-weight="10"
			editing
		></BmPolygon>
		<!-- <BmScale @initd="ready" v-if="show"></BmScale>
		<BmZoom v-if="show"></BmZoom> -->
	</baidu-map>
</template>
<script setup lang="ts">
	// import { BaiduMap } from './index'
	import { ref } from 'vue'
	import {
		BaiduMap,
		BmControl,
		BmScale,
		BmZoom,
		BmNavigation3d,
		BmMarker,
		BmLabel,
		BmPolyline,
		BmPolygon,
		BmCircle
	} from 'vue3-baidu-map-gl'
	function ready(map: any) {
		console.log(map, '我是组件')
	}
	function ready1(map: any) {
		console.log(map, '我是map实例')
	}
	const zoom = ref(16)
	const show = ref<boolean>(true)
	const polylinePath = [
		{ lng: 116.404, lat: 39.915 },
		{ lng: 116.405, lat: 39.92 },
		{ lng: 116.423493, lat: 39.907445 }
	]
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
