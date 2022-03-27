<template>
	<div id="baidu-map-container"></div>
	<slot></slot>
</template>

<script setup lang="ts">
	import { inject, defineProps, withDefaults, defineEmits, defineExpose } from 'vue'
	import { BMapGL, Point } from 'types'
	export interface Props {
		ak?: string
		/**
		 * 中心点坐标
		 */
		center?:
			| string
			| {
					/**
					 * 地理经度
					 */
					lng: number
					/**
					 * 地理纬度
					 */
					lat: number
			  }
		/**
		 * 缩放级别
		 */
		zoom?: number
	}
	let _BMapGL: BMapGL
	// // defineExpose()
	// defineEmits(['onLoad'])
	let map: BMapGL['Map']
	const props = withDefaults(defineProps<Props>(), {
		zoom: 14,
		center: () => ({
			lat: 39.915185,
			lng: 116.403901
		})
	})
	const ak = inject('baiduMapAk')
	// 获取地图SDK Script
	function getMapScriptAsync() {
		if (!window._BMap) {
			window._BMap = {}
			window._BMap.scriptLoader = new Promise<BMapGL>((resolve, reject) => {
				const script: HTMLScriptElement = document.createElement('script')
				window._initBMap = () => {
					resolve(window.BMapGL)
					window.document.body.removeChild(script)
				}
				script.src = `https://api.map.baidu.com/api?type=webgl&ak=${ak}&callback=_initBMap`
				script.type = 'text/javascript'
				script.defer = true
				script.async = true
				script.onerror = reject
				document.body.appendChild(script)
			})
			return window._BMap.scriptLoader
		} else {
			return Promise.resolve(window.BMapGL)
		}
	}
	// 初始化地图
	function init() {
		getMapScriptAsync().then((BMapGL: BMapGL) => {
			_BMapGL = BMapGL
			map = new _BMapGL.Map('baidu-map-container')
			map.enableScrollWheelZoom()
			setCenterAanZoom()
		})
	}
	// 生产一个地理位置坐标点
	function genPoint(lng: number, lat: number): Point {
		return new _BMapGL.Point(lng, lat)
	}
	/**
	 * 设置中心点
	 */
	function setCenter(): void {
		if (typeof props.center === 'string') {
			map.setCenter(props.center)
		} else {
			map.setCenter(genPoint(props.center.lng, props.center.lat))
		}
	}
	/**
	 * 设置中心点和缩放级别
	 */
	function setCenterAanZoom(): void {
		if (typeof props.center === 'string') {
			map.centerAndZoom(props.center)
		} else {
			map.centerAndZoom(genPoint(props.center.lng, props.center.lat), props.zoom)
		}
	}
	/**
	 * 设置缩放级别
	 */
	function setZoom(zoom: number): void {
		map.setZoom(zoom)
	}
	init()
</script>

<style lang="less" scoped>
	#baidu-map-container {
		width: 100%;
		height: 400px;
	}
</style>
