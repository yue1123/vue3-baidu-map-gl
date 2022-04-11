<template></template>
<script setup lang="ts">
	import { defineProps, withDefaults } from 'vue'
	import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
	import bindEvents, { Callback } from '../../../utils/bindEvents'
	import useLife from '../../..//hooks/useLife'
	// TODO: 完善组件的属性动态监听设置
	interface BmLabelProps {
		/**
		 * 文本标注信息
		 */
		content: string
		position: {
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
		 * 标注的位置偏移值
		 */
		offset?: {
			x: number
			y: number
		}
		/**
		 * @default true
		 * 是否可清除
		 * 是否在调用map.clearOverlays清除此覆盖物，默认为true
		 */
		massClear?: boolean
		style?: {
			[k in keyof CSSStyleDeclaration]?: any
		}
		onClick?: Callback
		onDblclick?: Callback
		onMousedown?: Callback
		onMouseup?: Callback
		onMouseout?: Callback
		onMouseover?: Callback
		onRemove?: Callback
		onRightclick?: Callback
	}
	const props = withDefaults(defineProps<BmLabelProps>(), {
		offset: () => ({
			x: 0,
			y: 0
		}),
		massClear: true
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
		'rightclick'
	])
	const { ready } = useLife()
	let label: BMapGL.Label
	useBaseMapEffect((map: BMapGL.Map) => {
		const { content, position, offset, massClear, style } = props
		const options: BMapGL.LabelOptions = {
			position: new BMapGL.Point(position.lng, position.lat),
			offset: new BMapGL.Size(offset.x, offset.y),
			enableMassClear: massClear
		}
		label = new BMapGL.Label(content, options)
		// 自定义文本标注样式
		if (style) {
			label.setStyle(style)
		}
		map.addOverlay(label)
		ready(map)
		bindEvents(props, vueEmits, label)
		// 在地图上添加点标记
		return () => {
			map.removeOverlay(label)
		}
	})
</script>
