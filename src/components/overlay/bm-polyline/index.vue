<template>
	<div></div>
</template>
<script setup lang="ts">
	// TODO: 增加自动聚焦视野的配置autoViewport
	import { defineProps, withDefaults } from 'vue'
	import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
	import bindEvents, { type Callback } from '../../../utils/bindEvents'
	import useLife from '../../..//hooks/useLife'
	export interface PolylinePath {
		/**
		 * 地理经度
		 */
		lng: number
		/**
		 * 地理纬度
		 */
		lat: number
	}
	export interface PolylineProps {
		/**
		 * 折线的节点坐标数组
		 */
		path: PolylinePath[]
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
	const props = withDefaults(defineProps<PolylineProps>(), {
		strokeColor: '#000',
		strokeWeight: 2,
		strokeOpacity: 1,
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
	useBaseMapEffect((map: BMapGL.Map) => {
		const {
			strokeColor,
			strokeWeight,
			strokeOpacity,
			strokeStyle,
			enableMassClear,
			enableEditing,
			enableClicking,
			geodesic,
			clip
		} = props
		const pathPoints = props.path.map(({ lng, lat }) => new BMapGL.Point(lng, lat))
		const polyline = new BMapGL.Polyline(pathPoints, {
			strokeColor,
			strokeWeight,
			strokeOpacity,
			strokeStyle,
			enableMassClear,
			enableEditing,
			enableClicking,
			geodesic,
			clip
		})
		map.addOverlay(polyline)
		ready(map)
		bindEvents(props, vueEmits, polyline)
		return () => {
			map.removeOverlay(polyline)
		}
	})
</script>
