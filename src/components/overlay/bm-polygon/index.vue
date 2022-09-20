<template></template>
<script setup lang="ts">
	// TODO: 增加自动聚焦视野的配置autoViewport
	import { defineProps, watch, withDefaults, defineEmits } from 'vue'
	import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
	import bindEvents, { Callback } from '../../../utils/bindEvents'
	import useLife from '../../..//hooks/useLife'
	export interface PolygonPath {
		/**
		 * 地理经度
		 */
		lng: number
		/**
		 * 地理纬度
		 */
		lat: number
	}
	export interface PolygonProps {
		/**
		 * 折线的节点坐标数组
		 */
		path: PolygonPath[]
		/**
		 * @default #000000
		 * 折线颜色
		 */
		strokeColor?: string
		/**
		 * 折线的宽度，以像素为单位
		 */
		strokeWeight?: number
		/**
		 * 折线的透明度，取值范围0 - 1
		 */
		strokeOpacity?: number
		/**
		 * 折线的样式
		 */
		strokeStyle?: 'solid' | 'dashed' | 'dotted'
		/**
		 * 面填充颜色，同CSS颜色
		 */
		fillColor?: string

		/**
		 * 面填充的透明度，范围0-1
		 */
		fillOpacity?: number
		/**
		 * @default true
		 * 是否在调用map.clearOverlays清除此覆盖物，默认为true
		 */
		enableMassClear?: boolean
		/**
		 * @default false
		 * 是否启用线编辑，默认为false
		 */
		enableEditing?: boolean
		/**
		 * @default true
		 * 是否响应点击事件，默认为true
		 */
		enableClicking?: boolean
		/**
		 * @default false
		 * 是否开启大地线模式，true时，两点连线将以大地线的形式。默认为false
		 */
		geodesic?: boolean
		/**
		 * @default true
		 * 是否进行跨经度180度裁剪，绘制跨精度180时为了优化效果，可以设置成false，默认为true
		 */
		clip?: boolean
		onClick?: Callback
		onDblclick?: Callback
		onMousedown?: Callback
		onMouseup?: Callback
		onMouseout?: Callback
		onMouseover?: Callback
		onRemove?: Callback
		onLineupdate?: Callback
	}
	const props = withDefaults(defineProps<PolygonProps>(), {
		strokeColor: '#000',
		strokeWeight: 2,
		strokeOpacity: 1,
		strokeStyle: 'solid',
		fillColor: '#fff',
		fillOpacity: 0.3,
		massClear: true,
		editing: false,
		clicking: true,
		geodesic: false,
		clip: true
	})
	const vueEmits = defineEmits([
		'initd',
		'unload',
		'click',
		'dblclick',
		'mousedown',
		'mouseup',
		'mouseout',
		'mouseover',
		'remove',
		'lineupdate'
	])
	const { ready } = useLife()
	let polygon: BMapGL.Polygon
	useBaseMapEffect((map: BMapGL.Map) => {
		if (!props.path.length) return
		const cal = () => {
			map.removeOverlay(polygon)
		}
		const init = () => {
			const {
				path,
				strokeColor,
				strokeWeight,
				strokeOpacity,
				strokeStyle,
				fillOpacity,
				fillColor,
				enableMassClear,
				enableEditing,
				enableClicking,
				geodesic,
				clip
			} = props
			const pathPoints = pathPointsToMapPoints(path)
			polygon = new BMapGL.Polygon(pathPoints, {
				strokeColor,
				strokeWeight,
				strokeOpacity,
				strokeStyle,
				fillOpacity,
				fillColor,
				enableMassClear,
				enableEditing,
				enableClicking,
				geodesic,
				clip
			})
			map.addOverlay(polygon)
			bindEvents(props, vueEmits, polygon)
		}

		// 监听值变化
		watch(() => props.path, setPath, {
			deep: true
		})
		watch(() => props.strokeColor, setStrokeColor)
		watch(() => props.strokeOpacity, setStrokeOpacity)
		watch(() => props.fillColor, setFillColor)
		watch(() => props.fillOpacity, setFillOpacity)
		watch(() => props.strokeWeight, setStrokeWeight)
		watch(() => props.strokeStyle, setStrokeStyle)
		watch(() => props.enableMassClear, setMassClear)
		watch(() => props.enableEditing, setEditing)

		init()
		ready(map)
		return cal
	})
	function pathPointsToMapPoints(pathPoints: PolygonPath[]) {
		return pathPoints.map(({ lng, lat }) => new BMapGL.Point(lng, lat))
	}

	function setPath(path: PolygonPath[]) {
		polygon.setPath(pathPointsToMapPoints(path))
	}

	function setStrokeColor(color: string): void {
		polygon.setStrokeColor(color)
	}
	function setFillColor(color: string): void {
		polygon.setFillColor(color)
	}
	function setStrokeOpacity(opacity: number): void {
		polygon.setStrokeOpacity(opacity)
	}
	function setFillOpacity(opacity: number): void {
		polygon.setFillOpacity(opacity)
	}
	function setStrokeWeight(weight: number): void {
		polygon.setStrokeWeight(weight)
	}
	function setStrokeStyle(style: 'solid' | 'dashed' | 'dotted'): void {
		polygon.setStrokeStyle(style)
	}
	function setMassClear(enableMassClear?: boolean): void {
		enableMassClear ? polygon!.enableMassClear() : polygon!.disableMassClear()
	}
	function setEditing(enableEditing?: boolean): void {
		enableEditing ? polygon!.enableEditing() : polygon!.disableEditing()
	}
</script>
