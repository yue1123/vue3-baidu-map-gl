<template>
	<div
		id="baidu-map-container"
		style="overflow: hidden"
		:style="{ width: props.width, height: props.height }"
	/>
	<slot></slot>
</template>

<script setup lang="ts">
	import {
		inject,
		defineProps,
		withDefaults,
		defineEmits,
		watch,
		onMounted,
		onUnmounted
	} from 'vue'
	import useLife from '../../hooks/useLife'
	export interface BaiduMapProps {
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
		 * 地图类型
		 */
		mapType?: _MapType
		/**
		 * 缩放级别
		 */
		zoom?: number
		heading?: number
		tilt?: number
		/**
		 * 地图允许展示的最小级别
		 */
		minZoom?: number
		/**
		 * 地图允许展示的最大级别
		 */
		maxZoom?: number
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
		 * @default true
		 * 	允许地图可被鼠标滚轮缩放，默认开启
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
		 * @default true
		 * 启用自动适应容器尺寸变化，默认启用
		 */
		enableAutoResize?: boolean
	}

	let map: BMapGL.Map
	// 是否初始化
	let initd: boolean = false
	// 地图初始化的发布
	const { ready } = useLife('initd')
	const props = withDefaults(defineProps<BaiduMapProps>(), {
		width: '100%',
		height: '100vh',
		center: () => ({ lat: 39.915185, lng: 116.403901 }),
		mapType: 'BMAP_NORMAL_MAP',
		zoom: 19,
		maxZoom: 21,
		minZoom: 0,
		heading: 0,
		tilt: 0,
		enableDragging: true,
		enableInertialDragging: true,
		enableScrollWheelZoom: true,
		enableContinuousZoom: true,
		enableResizeOnCenter: true,
		enableDoubleClickZoom: false,
		enableKeyboard: true,
		enablePinchToZoom: true,
		enableAutoResize: true
	})
	defineEmits(['initd', 'unload'])
	// 监听props变化
	watch(() => props.zoom, setZoom)
	watch(() => props.center, setCenter)
	watch(() => props.enableScrollWheelZoom, setScrollWheelZoom)
	watch(() => props.enableContinuousZoom, setContinuousZoom)
	watch(() => props.enableResizeOnCenter, setResizeOnCenter)
	watch(() => props.enableDoubleClickZoom, setDoubleClickZoom)
	watch(() => props.enableKeyboard, setKeyboard)
	watch(() => props.enablePinchToZoom, setPinchToZoom)
	watch(() => props.enableAutoResize, setAutoResize)
	watch(() => props.mapType, setMapType)
	const ak = props.ak || inject('baiduMapAk')
	// 获取地图SDK Script
	function getMapScriptAsync() {
		if (!window._BMap) {
			window._BMap = {}
			window._BMap.scriptLoader = new Promise<void>((resolve, reject) => {
				const script: HTMLScriptElement = document.createElement('script')
				window._initBMap = () => {
					resolve()
					window.document.body.removeChild(script)
				}
				script.src = `//api.map.baidu.com/api?type=webgl&v=1.0&ak=${ak}&callback=_initBMap`
				script.type = 'text/javascript'
				script.defer = true
				script.onerror = reject
				document.body.appendChild(script)
			})
			return window._BMap.scriptLoader
		} else {
			return Promise.resolve()
		}
	}
	// 初始化地图
	function init() {
		getMapScriptAsync().then(() => {
			const { minZoom, maxZoom, mapType, enableAutoResize } = props
			map = new BMapGL.Map('baidu-map-container', {
				minZoom,
				maxZoom,
				mapType: window[mapType],
				enableAutoResize
			})
			setCenterAanZoom()
			initMapOptions()
			if (!initd) {
				initd = true
				ready(map)
			}
			map!.setHeading(0)
			map!.setTilt(0)
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
			enableAutoResize,
			mapType,
			zoom
		} = props
		setZoom(zoom)
		setDragging(enableDragging)
		setInertialDragging(enableInertialDragging)
		setScrollWheelZoom(enableScrollWheelZoom)
		setContinuousZoom(enableContinuousZoom)
		setResizeOnCenter(enableResizeOnCenter)
		setDoubleClickZoom(enableDoubleClickZoom)
		setKeyboard(enableKeyboard)
		setPinchToZoom(enablePinchToZoom)
		setAutoResize(enableAutoResize)
		setMapType(mapType)
	}
	// 生产一个地理位置坐标点
	function genPoint(lng: number, lat: number): BMapGL.Point {
		return new BMapGL.Point(lng, lat)
	}
	/**
	 * 设置中心点
	 */
	function setCenter(): void {
		if (typeof props.center === 'string') {
			map!.setCenter(props.center)
		} else {
			map!.setCenter(genPoint(props.center.lng, props.center.lat))
		}
	}
	/**
	 * 设置中心点和缩放级别
	 */
	function setCenterAanZoom(): void {
		if (typeof props.center === 'string') {
			map!.centerAndZoom(props.center)
		} else {
			map!.centerAndZoom(genPoint(props.center.lng, props.center.lat), props.zoom)
		}
	}
	/**
	 * 设置缩放级别
	 */
	function setZoom(zoom: number): void {
		map!.setZoom(zoom)
	}
	// 设置地图类型
	function setMapType(mapType: _MapType): void {
		map!.setMapType(window[mapType])
	}
	// 设置地图是否可拖动
	function setDragging(enableDragging: boolean): void {
		enableDragging ? map!.enableDragging() : map!.disableDragging()
	}
	// 设置地图惯性拖拽
	function setInertialDragging(enableInertialDragging: boolean) {
		enableInertialDragging ? map!.enableInertialDragging() : map!.disableInertialDragging()
	}
	// 设置地图是否可滚轮缩放
	function setScrollWheelZoom(enableScrollWheelZoom: boolean) {
		enableScrollWheelZoom ? map!.enableScrollWheelZoom() : map!.disableScrollWheelZoom()
	}
	// 设置地图是否可连续缩放
	function setContinuousZoom(enableContinuousZoom: boolean): void {
		enableContinuousZoom ? map!.enableContinuousZoom() : map!.disableContinuousZoom()
	}
	// 设置地图是否可缩放至中心点
	function setResizeOnCenter(enableResizeOnCenter: boolean): void {
		enableResizeOnCenter ? map!.enableResizeOnCenter() : map!.disableResizeOnCenter()
	}
	// 设置地图是否可双击缩放
	function setDoubleClickZoom(enableDoubleClickZoom: boolean): void {
		enableDoubleClickZoom ? map!.enableDoubleClickZoom() : map!.disableDoubleClickZoom()
	}
	// 设置地图是否可键盘操作
	function setKeyboard(enableKeyboard: boolean): void {
		enableKeyboard ? map!.enableKeyboard() : map!.disableKeyboard()
	}
	// 设置地图是否可手势缩放
	function setPinchToZoom(enablePinchToZoom: boolean): void {
		enablePinchToZoom ? map!.enablePinchToZoom() : map!.disablePinchToZoom()
	}
	// 设置地图是否自动适应窗口大小
	function setAutoResize(enableAutoResize: boolean): void {
		enableAutoResize ? map!.enableAutoResize() : map!.disableAutoResize()
	}

	onMounted(() => {
		init()
	})
	/**
	 * 销毁地图，当使用 WebGL 渲染地图时，如果确认不再使用该地图实例，则需要
	 * 调用本方法销毁 WebGL 上下文，否则频繁创建新地图实例会导致浏览器报：
	 * too many WebGL context 的警告。
	 */
	onUnmounted(() => {
		map?.destroy()
	})
</script>

<style lang="less" scoped></style>
