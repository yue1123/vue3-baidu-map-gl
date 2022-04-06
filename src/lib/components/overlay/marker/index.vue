<template>
	<slot></slot>
</template>

<script setup lang="ts">
	import { defineProps, withDefaults } from 'vue'
	import useBaseMapEffect from 'hooks/useBaseMapEffect'
	import { isString } from 'utils/index'
  // TODO: 完善组件的属性动态监听设置
	interface iconObj {
		anchor?: {
			x: number
			y: number
		}
		imageOffset?: {
			x: number
			y: number
		}
		imageSize: {
			width: number
			height: number
		}
		imageUrl: string
		printImageUrl?: string
	}
	interface Props {
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
		 * 标注所用的图标对象
		 */
		icon?: string | iconObj
		/**
		 * @default true
		 * 是否在调用map.clearOverlays清除此覆盖物，默认为true
		 */
		massClear?: boolean
		/**
		 * @default false
		 * 是否启用拖拽，默认为false
		 */
		dragging?: boolean
		/**
		 * @default true
		 * 是否响应点击事件。默认为true
		 */
		clicking?: boolean
		/**
		 * @default false
		 * 拖拽标注时，标注是否开启离开地图表面效果。默认为false
		 */
		raiseOnDrag?: boolean
		/**
		 * 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范
		 */
		draggingCursor?: string
		/**
		 * 旋转角度
		 */
		rotation?: number
		/**
		 * 鼠标移到marker上的显示内容
		 */
		title?: string
	}
	const props = withDefaults(defineProps<Props>(), {
		offset: () => ({
			x: 0,
			y: 0
		}),
		massClear: true,
		dragging: false,
		clicking: true,
		raiseOnDrag: false,
		draggingCursor: 'pointer',
		rotation: 0,
		title: ''
	})
	let marker: BMapGL.Marker
	useBaseMapEffect((map: BMapGL.Map) => {
		const { position, offset, icon, massClear, dragging, clicking, raiseOnDrag, draggingCursor, rotation, title } =
			props
		const options: BMapGL.MarkerOptions = {
			offset: new BMapGL.Size(offset.x, offset.y),
			enableMassClear: massClear,
			enableDragging: dragging,
			enableClicking: clicking,
			raiseOnDrag,
			draggingCursor,
			rotation,
			title
		}
		if (icon) {
			if (isString(icon)) {
				options.icon = new BMapGL.Icon(icon as string, new BMapGL.Size(60, 70))
			} else {
				// @ts-ignore
				const { anchor, imageOffset, imageSize, imageUrl, printImageUrl } = props.icon
				const iconOptions: BMapGL.IconOptions = {
					imageSize: new BMapGL.Size(imageSize.width, imageSize.height)
				}
				if (anchor) {
					iconOptions.anchor = new BMapGL.Size(anchor.x, anchor.y)
				}
				if (imageOffset) {
					iconOptions.imageOffset = new BMapGL.Size(imageOffset.x, imageOffset.y)
				}
				if (printImageUrl) {
					iconOptions.printImageUrl = printImageUrl
				}
				options.icon = new BMapGL.Icon(imageUrl, new BMapGL.Size(imageSize.width, imageSize.height), iconOptions)
			}
		}
		marker = new BMapGL.Marker(new BMapGL.Point(position.lng, position.lat), options)
		// 在地图上添加点标记
		map.addOverlay(marker)
		return () => {
			map.removeOverlay(marker)
		}
	})
</script>
