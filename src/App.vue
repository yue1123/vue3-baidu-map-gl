<template>
	<Map
		:ak="'4stE857hYPHbEmgKhLiTAa0QbCIULHpm'"
		mapType="BMAP_NORMAL_MAP"
		:enable-keyboard="false"
		:zoom="zoom"
		enableDragging
		:minZoom="10"
	>
		<Control style="display: flex; background-color: #f90; padding: 10px" :offset="{ x: 0, y: 0 }">
			<button @click="handleZoomOut">缩小1</button>
			<button @click="handleZoomIn">放大fasdf</button>
		</Control>
		<Navigation3d />
		<!-- <Marker
			:position="{
				lng: 116.404,
				lat: 39.925
			}"
			icon="../docs/.vuepress/public/logo.png"
			dragging
		/> -->
		<Marker :icon="markerIcon" :position="position" :rotation="180"/>
		<Label
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
		<Circle
			stroke-style="dashed"
			:center="{
				lng: 116.406,
				lat: 39.937
			}"
			:radius="300"
			editing
		/>
		<Polyline
			stroke-style="dashed"
			:path="polylinePath"
			@lineupdate="handleClick"
			stroke-color="#f90"
			:stroke-opacity="1"
			:stroke-weight="10"
			editing
		></Polyline>
		<!-- <Polygon
			:path="polylinePath"
			stroke-color="#f90"
			:stroke-opacity="1"
			:stroke-weight="10"
			editing
		></Polygon> -->
		<Scale v-if="show"></Scale>
		<Zoom v-if="show"></Zoom>
	</Map>
</template>
<script setup lang="ts">
	// import { BaiduMap } from './index'
	import { ref } from 'vue'
	// import { Map, Control, Scale, Zoom, Navigation3d, Marker, Label, Polyline, Polygon, Circle } from './index'
	function handleClick(e: any) {
		console.log(e)
	}
	function ready(map: any) {
		console.log(map, '我是组件')
	}
	function ready1(map: any) {
		console.log(map, '我是map实例')
	}
	const zoom = ref(16)
	const show = ref<boolean>(true)
	const polylinePath = ref([
		{ lng: 116.404, lat: 39.915 },
		{ lng: 116.405, lat: 39.92 },
		{ lng: 116.423493, lat: 39.907445 }
	])
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

	const position = ref({
		lng: 116.404,
		lat: 39.937
	})
	const key = ref()
	let index = 0
	const icon = ['simple_blue', 'simple_red', 'loc_red']
	const markerIcon = ref(icon[index])
	setInterval(() => {
		console.log('gaib')
		if (index < 2) {
			index++
		} else {
			index = 0
		}
		// markerIcon.value = icon[index]
		// key.value = Math.random() * 0.01
		// polylinePath.value.push({ lng: 116.423493, lat: 39.907445 + key.value })
		position.value.lng += 0.0001
	}, 1000)
	;(window as any).toggle = cal
</script>
<style>
	* {
		margin: 0;
	}
</style>
