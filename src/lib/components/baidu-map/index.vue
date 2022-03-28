<template>
	<div
		id="baidu-map-container"
		:style="{ width: props.width, height: props.height }"
	></div>
	<slot></slot>
</template>

<script setup lang="ts">
	import {
		inject,
		defineProps,
		withDefaults,
		defineEmits,
		defineExpose,
		watch
	} from 'vue'
	import { BMapGL, Point, MapOptions } from 'types'
	export interface Props extends MapOptions {
		ak?: string
		/**
		 * 地图显示宽度
		 */
		width?: string | number
		/**
		 * 地图显示高度
		 */
		height?: string | number
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
		/**
		 * @default true
		 * 启用地图拖拽，默认启用
		 */
		enableDragging?: boolean
		/**
		 * @default false
		 * 启用地图惯性拖拽，默认禁用
		 */

		enableInertialDragging?: boolean
		/**
		 * @default false
		 * 	允许地图可被鼠标滚轮缩放，默认禁用
		 */
		enableScrollWheelZoom?: boolean
		/**
		 * 开启双击平滑缩放效果
		 */
		enableContinuousZoom?: boolean
		/**
		 * 开启图区resize中心点不变
		 */
		enableResizeOnCenter?: boolean
		/**
		 * 启用地图双击缩放，左键双击放大、右键双击缩小
		 */
		enableDoubleClickZoom?: boolean
		/**
		 * @default false
		 * 启用键盘操作，默认禁用。
		 * 键盘的上、下、左、右键可连续移动地图。
		 * 同时按下其中两个键可使地图进行对角移动。
		 * PgUp、PgDn、Home和End键会使地图平移其1/2的大小。
		 * +、-键会使地图放大或缩小一级
		 */
		enableKeyboard?: boolean
		/**
		 * 启用双指缩放地图。
		 */
		enablePinchToZoom?: boolean
		/**
		 * 	是否允许通过手势旋转地图。
		 */
		enableRotateGestures?: boolean
		/**
		 * 	是否允许通过手势倾斜地图。
		 */
		enableTiltGestures?: boolean
		/**
		 * @default true
		 * 启用自动适应容器尺寸变化，默认启用
		 */
		enableAutoResize?: boolean
	}
	let _BMapGL: BMapGL
	let map: BMapGL['Map']
	const props = withDefaults(defineProps<Props>(), {
		width: '100%',
		height: '100vh',
		center: () => ({
			lat: 39.915185,
			lng: 116.403901
		}),
		zoom: 14,
		enableDragging: true,
		enableInertialDragging: false,
		enableScrollWheelZoom: true,
		enableContinuousZoom: true,
		enableResizeOnCenter: true,
		enableDoubleClickZoom: false,
		enableKeyboard: true,
		enablePinchToZoom: true,
		enableRotateGestures: true,
		enableTiltGestures: true,
		enableAutoResize: true
	})
	const ak = props.ak || inject('baiduMapAk')
	// 获取地图SDK Script
	function getMapScriptAsync() {
		if (!window._BMap) {
			window._BMap = {}
			window._BMap.scriptLoader = new Promise<BMapGL>(
				(resolve, reject) => {
					const script: HTMLScriptElement =
						document.createElement('script')
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
				}
			)
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
			setCenterAanZoom()
			initMapOptions()
		})
	}
	// 设置地图属性
	function initMapOptions() {
		const {
			enableDragging,
			enableInertialDragging,
			enableScrollWheelZoom,
			enableContinuousZoom,
			enableResizeOnCenter,
			enableDoubleClickZoom,
			enableKeyboard,
			enablePinchToZoom,
			enableTiltGestures,
			enableAutoResize
		} = props
		_enableDragging(enableDragging)
		_enableInertialDragging(enableInertialDragging)
		_enableScrollWheelZoom(enableScrollWheelZoom)
		_enableContinuousZoom(enableContinuousZoom)
		_enableResizeOnCenter(enableResizeOnCenter)
		_enableDoubleClickZoom(enableDoubleClickZoom)
		_enableKeyboard(enableKeyboard)
		_enablePinchToZoom(enablePinchToZoom)
		_enableAutoResize(enableAutoResize)
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
			map.centerAndZoom(
				genPoint(props.center.lng, props.center.lat),
				props.zoom
			)
		}
	}
	/**
	 * 设置缩放级别
	 */
	function setZoom(zoom: number): void {
		map.setZoom(zoom)
	}
	// 设置地图类型
	function setMapType(mapType: MapType): void {
		map.setMapType(mapType)
	}
	//
	function _enableDragging(enableDragging: boolean): void {
		enableDragging ? map.enableDragging() : map.disableDragging()
	}
	function _enableInertialDragging(enableInertialDragging: boolean) {
		enableInertialDragging
			? map.enableInertialDragging()
			: map.disableInertialDragging()
	}
	function _enableScrollWheelZoom(enableScrollWheelZoom: boolean) {
		enableScrollWheelZoom
			? map.enableScrollWheelZoom()
			: map.disableScrollWheelZoom()
	}
	function _enableContinuousZoom(enableContinuousZoom: boolean): void {
		enableContinuousZoom
			? map.enableContinuousZoom()
			: map.disableContinuousZoom()
	}
	function _enableResizeOnCenter(enableResizeOnCenter: boolean): void {
		enableResizeOnCenter
			? map.enableResizeOnCenter()
			: map.disableResizeOnCenter()
	}
	function _enableDoubleClickZoom(enableDoubleClickZoom: boolean): void {
		enableDoubleClickZoom
			? map.enableDoubleClickZoom()
			: map.disableDoubleClickZoom()
	}
	function _enableKeyboard(enableKeyboard: boolean): void {
		enableKeyboard ? map.enableKeyboard() : map.disableKeyboard()
	}
	function _enablePinchToZoom(enablePinchToZoom: boolean): void {
		enablePinchToZoom ? map.enablePinchToZoom() : map.disablePinchToZoom()
	}
	function _enableAutoResize(enableAutoResize: boolean): void {
		enableAutoResize ? map.enableAutoResize() : map.disableAutoResize()
	}
	watch(() => props.zoom, setZoom)
	init()
</script>

<style lang="less" scoped>
	#baidu-map-container {
		width: 100%;
		height: 400px;
	}
</style>
