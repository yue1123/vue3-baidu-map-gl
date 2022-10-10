<template></template>
<script setup lang="ts">
	import { defineProps, onMounted, watch, withDefaults } from 'vue'
	import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
	import bindEvents, { Callback } from '../../../utils/bindEvents'
	import useLifeCycle from '../../..//hooks/useLifeCycle'
	// TODO: 完善组件的属性动态监听设置
	export type LabelPosition = {
		/**
		 * 地理经度
		 */
		lng: number
		/**
		 * 地理纬度
		 */
		lat: number
	}
	export type LabelStyle = {
		[k in keyof CSSStyleDeclaration]?: any
	}
	export type LabelOffset = {
		/**
		 * 水平偏移量
		 */
		x: number
		/**
		 * 垂直偏移量
		 */
		y: number
	}
	export interface BmLabelProps {
		/**
		 * 文本标注信息
		 */
		content: string
		position: LabelPosition
		/**
		 * 标注的位置偏移值
		 */
		offset?: LabelOffset
    style?: LabelStyle
		/**
		 * @default true
		 * 是否可清除
		 * 是否在调用map.clearOverlays清除此覆盖物，默认为true
		 */
		enableMassClear?: boolean
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
		enableMassClear: true,
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
	const { ready } = useLifeCycle()
	let label: BMapGL.Label
	useBaseMapEffect((map: BMapGL.Map) => {
		console.log(map)
		const cal = () => {
			map.removeOverlay(label)
		}
		const init = () => {
			const { content, position, offset, enableMassClear, style } = props
			const options: BMapGL.LabelOptions = {
				position: new BMapGL.Point(position.lng, position.lat),
				offset: new BMapGL.Size(offset.x, offset.y),
				enableMassClear
			}
			label = new BMapGL.Label(content, options)
			// 自定义文本标注样式
			if (style) {
				label.setStyle(style)
			}
			map.addOverlay(label)
			bindEvents(props, vueEmits, label)
		}

		// 监听值变化
		watch(() => props.position, setPosition, { deep: true })
		watch(() => props.offset, setOffset, { deep: true })
		watch(
			() => props.style,
			(style) => setStyle(),
			{ deep: true }
		)
		watch(() => props.content, setContent)
		watch(() => props.enableMassClear, setMassClear)

		init()
		ready(map)
		// 在地图上添加点标记
		return cal
	})
	function setPosition(position: LabelPosition) {
		label.setPosition(new BMapGL.Point(position.lng, position.lat))
	}
	function setStyle(styles?: LabelStyle): void {
		if (styles) label.setStyle(styles)
	}
	function setContent(content: string): void {
		label.setContent(content)
	}
	function setOffset(offset: LabelOffset): void {
		label.setOffset(new BMapGL.Size(offset.x, offset.y))
	}
	function setMassClear(enableMassClear: boolean): void {
		enableMassClear ? label!.enableMassClear() : label!.disableMassClear()
	}
</script>
<script lang="ts">
	export default {
		name: 'BLabel'
	}
</script>