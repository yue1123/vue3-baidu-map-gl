<script setup lang="ts">
	import { defineProps, withDefaults, watch } from 'vue'
	import useBaseMapEffect from 'hooks/useBaseMapEffect'
	import {
		LengthUnit,
		_LengthUnit,
		ControlAnchor,
		_ControlAnchor,
		BMapGL
	} from 'types/index.d'
	export interface BmScaleOptions {
		/**
		 * 控件的停靠位置
		 */
		anchor?: _ControlAnchor
		/**
		 * 控件的偏移值
		 */
		offset?: {
			x: number
			y: number
		}
		/**
		 * 比例尺单位制
		 */
		unit?: _LengthUnit
	}
	const props = withDefaults(defineProps<BmScaleOptions>(), {
		anchor: 'BMAP_ANCHOR_BOTTOM_RIGHT',
		offset: () => ({ x: 83, y: 18 }),
		unit: 'BMAP_UNIT_IMPERIAL'
	})
	let scaleCtrl: BMapGL['ScaleControl']
	useBaseMapEffect((map) => {
		scaleCtrl = new window.BMapGL.ScaleControl({
			offset: new window.BMapGL.Size(props.offset.x, props.offset.y),
			anchor: ControlAnchor[props.anchor]
		})
		setUnit()
		map.addControl(scaleCtrl)
		return () => map.removeControl(scaleCtrl)
	})
	// 监听比例尺单位变化
	watch(() => props.unit, setUnit)
	/**
	 * 设置比例尺单位制
	 */
	function setUnit() {
		scaleCtrl.setUnit(LengthUnit[props.unit])
	}
</script>
