<template>
	<div></div>
</template>
<script setup lang="ts">
	import { defineProps, watch, withDefaults } from 'vue'
	import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
	import bindEvents, { Callback } from '../../../utils/bindEvents'
	import useLife from '../../..//hooks/useLife'
	export type CircleCenter = {
		/**
		 * 地理经度
		 */
		lng: number
		/**
		 * 地理纬度
		 */
		lat: number
	}
	export interface BmCircleProps {
		/**
		 * 圆形中心点经纬度
		 */
		center: CircleCenter
		/**
		 * 半径，以米为单位
		 */
		radius: number
		/**
		 * @default #000000
		 * 描边的颜色，同CSS颜色
		 */
		strokeColor?: string
		/**
		 * 描边的透明度，取值范围0 - 1
		 */
		strokeOpacity?: number
		/**
		 * 面填充颜色，同CSS颜色
		 */
		fillColor?: string

		/**
		 * 面填充的透明度，范围0-1
		 */
		fillOpacity?: number
		/**
		 * 描边的宽度，单位为像素
		 */
		strokeWeight?: number
		/**
		 * 折线的样式
		 */
		strokeStyle?: 'solid' | 'dashed' | 'dotted'
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
	const props = withDefaults(defineProps<BmCircleProps>(), {
		strokeColor: '#000',
		strokeWeight: 2,
		strokeOpacity: 1,
		fillColor: '#fff',
		fillOpacity: 0.3,
		strokeStyle: 'solid',
		enableMassClear: true,
		enableEditing: false,
		enableClicking: true,
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
	let circle: BMapGL.Circle
	useBaseMapEffect((map: BMapGL.Map) => {
		const cal = () => {
			map.removeOverlay(circle)
		}
		const init = () => {
			const {
				center,
				radius,
				strokeColor,
				strokeOpacity,
				fillColor,
				fillOpacity,
				strokeWeight,
				strokeStyle,
				enableMassClear,
				enableEditing,
				enableClicking,
				geodesic,
				clip
			} = props
			const centerPoint = new BMapGL.Point(center.lng, center.lat)
			circle = new BMapGL.Circle(centerPoint, radius, {
				strokeColor,
				strokeWeight,
				strokeOpacity,
				strokeStyle,
				enableMassClear,
				enableEditing,
				enableClicking,
				geodesic,
				clip,
				fillOpacity,
				fillColor
			})
			map.addOverlay(circle)
			bindEvents(props, vueEmits, circle)
		}
    // 监听值变化
		watch(() => props.center,  setCenter, { deep: true })
    watch(() => props.radius,  setRadius)
    watch(() => props.strokeColor,  setStrokeColor)
    watch(() => props.strokeOpacity,  setStrokeOpacity)
    watch(() => props.fillColor,  setFillColor)
    watch(() => props.fillOpacity,  setFillOpacity)
    watch(() => props.strokeWeight,  setStrokeWeight)
    watch(() => props.strokeStyle,  setStrokeStyle)
    watch(() => props.enableMassClear,  setMassClear)
    watch(() => props.enableEditing,  setEditing)

		init()
		ready(map)
		return cal
	})

	function setRadius(radius: number): void {
		circle.setRadius(radius)
	}
	function setCenter(center: CircleCenter): void {
		circle.setCenter(new BMapGL.Point(center.lng, center.lat))
	}
	function setStrokeColor(color: string): void {
		circle.setStrokeColor(color)
	}
	function setFillColor(color: string): void {
		circle.setFillColor(color)
	}
	function setStrokeOpacity(opacity: number): void {
		circle.setStrokeOpacity(opacity)
	}
	function setFillOpacity(opacity: number): void {
		circle.setFillOpacity(opacity)
	}
	function setStrokeWeight(weight: number): void {
		circle.setStrokeWeight(weight)
	}
	function setStrokeStyle(style: 'solid' | 'dashed' | 'dotted'): void {
		circle.setStrokeStyle(style)
	}
  function setMassClear(enableMassClear: boolean): void {
		enableMassClear ? circle!.enableMassClear() : circle!.disableMassClear()
	}
  function setEditing(enableEditing: boolean): void {
    console.log(enableEditing);
    enableEditing ? circle!.enableEditing() : circle!.disableEditing()
  }
</script>
