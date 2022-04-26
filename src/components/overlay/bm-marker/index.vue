<template></template>

<script setup lang="ts">
	import { defineProps, withDefaults } from 'vue'
	import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
	import { isString } from '../../../utils/index'
	import bindEvents, { Callback } from '../../../utils/bindEvents'
	import useLife from '../../..//hooks/useLife'
	// TODO: 完善组件的属性动态监听设置
	export interface BmMarkerProps {
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
		icon?:
			| 'simple_red'
			| 'simple_blue'
			| 'loc_red'
			| 'loc_blue'
			| 'start'
			| 'end'
			| 'location'
			| 'red1'
			| 'red2'
			| 'red3'
			| 'red4'
			| 'red5'
			| 'red6'
			| 'red7'
			| 'red8'
			| 'red9'
			| 'red10'
			| 'blue1'
			| 'blue2'
			| 'blue3'
			| 'blue4'
			| 'blue5'
			| 'blue6'
			| 'blue7'
			| 'blue8'
			| 'blue9'
			| 'blue10'
			| {
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
		/**
		 * @default true
		 * 是否在调用map.clearOverlays清除此覆盖物，默认为true
		 */
		enableMassClear?: boolean
		/**
		 * @default false
		 * 是否启用拖拽，默认为false
		 */
		enableDragging?: boolean
		/**
		 * @default true
		 * 是否响应点击事件。默认为true
		 */
		enableClicking?: boolean
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
		onClick?: Callback
		onDblclick?: Callback
		onMousedown?: Callback
		onMouseup?: Callback
		onMouseout?: Callback
		onMouseover?: Callback
		onRemove?: Callback
		onInfowindowclose?: Callback
		onInfowindowopen?: Callback
		onDragstart?: Callback
		onDragging?: Callback
		onDragend?: Callback
		onNightstick?: Callback
	}

	const props = withDefaults(defineProps<BmMarkerProps>(), {
		offset: () => ({
			x: 0,
			y: 0
		}),
		enableMassClear: true,
		enableDragging: false,
		enableClicking: true,
		raiseOnDrag: false,
		draggingCursor: 'pointer',
		rotation: 0,
		title: ''
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
		'infowindowclose',
		'infowindowopen',
		'dragstart',
		'dragging',
		'dragend',
		'rightclick'
	])
	const { ready } = useLife()
	let marker: BMapGL.Marker
	function getDefaultIcons() {
		const defaultIconUrl = '//mapopen.bj.bcebos.com/cms/react-bmap/markers_new2x_fbb9e99.png'
		let icons = {
			simple_red: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(42 / 2, 66 / 2), {
				imageOffset: new BMapGL.Size(454 / 2, 378 / 2),
				imageSize: new BMapGL.Size(600 / 2, 600 / 2)
			}),
			simple_blue: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(42 / 2, 66 / 2), {
				imageOffset: new BMapGL.Size(454 / 2, 450 / 2),
				imageSize: new BMapGL.Size(600 / 2, 600 / 2)
			}),
			loc_red: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(46 / 2, 70 / 2), {
				imageOffset: new BMapGL.Size(400 / 2, 378 / 2),
				imageSize: new BMapGL.Size(600 / 2, 600 / 2)
			}),
			loc_blue: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(46 / 2, 70 / 2), {
				imageOffset: new BMapGL.Size(400 / 2, 450 / 2),
				imageSize: new BMapGL.Size(600 / 2, 600 / 2)
			}),
			start: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(50 / 2, 80 / 2), {
				imageOffset: new BMapGL.Size(400 / 2, 278 / 2),
				imageSize: new BMapGL.Size(600 / 2, 600 / 2)
			}),
			end: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(50 / 2, 80 / 2), {
				imageOffset: new BMapGL.Size(450 / 2, 278 / 2),
				imageSize: new BMapGL.Size(600 / 2, 600 / 2)
			}),
			location: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(28 / 2, 40 / 2), {
				imageOffset: new BMapGL.Size(248 / 2, 466 / 2),
				imageSize: new BMapGL.Size(600 / 2, 600 / 2)
			})
		}

		for (let i = 1; i <= 10; i++) {
			icons['red' + i] = new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(42 / 2, 66 / 2), {
				imageOffset: new BMapGL.Size((42 / 2) * (i - 1), 0),
				imageSize: new BMapGL.Size(600 / 2, 600 / 2)
			})
		}

		for (let i = 1; i <= 10; i++) {
			icons['blue' + i] = new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(42 / 2, 66 / 2), {
				imageOffset: new BMapGL.Size((42 / 2) * (i - 1), 132 / 2),
				imageSize: new BMapGL.Size(600 / 2, 600 / 2)
			})
		}

		return icons
	}
	useBaseMapEffect((map: BMapGL.Map) => {
		const defaultIcons: any = getDefaultIcons()
		const {
			position,
			offset,
			icon,
			enableMassClear,
			enableDragging,
			enableClicking,
			raiseOnDrag,
			draggingCursor,
			rotation,
			title
		} = props
		const options: BMapGL.MarkerOptions = {
			offset: new BMapGL.Size(offset.x, offset.y),
			enableMassClear,
			enableDragging,
			enableClicking,
			raiseOnDrag,
			draggingCursor,
			rotation,
			title
		}
		if (icon) {
			if (isString(icon) && defaultIcons[icon as string]) {
				options.icon = defaultIcons[icon as string]
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
				options.icon = new BMapGL.Icon(
					imageUrl,
					new BMapGL.Size(imageSize.width, imageSize.height),
					iconOptions
				)
			}
		}
		marker = new BMapGL.Marker(new BMapGL.Point(position.lng, position.lat), options)
		// 在地图上添加点标记
		map.addOverlay(marker)
		ready(map)
		bindEvents(props, vueEmits, marker)
		return () => {
			map.removeOverlay(marker)
		}
	})
</script>
