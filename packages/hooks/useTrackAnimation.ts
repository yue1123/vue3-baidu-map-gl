import { Component, Ref, ref, watch } from 'vue'
import Map from '../components/bm-map/index.vue'

type MapComponent = typeof Map
export type PathPoint = {
	lng: number
	lat: number
}
export type UseTrackAnimationOptions = {
	/**
	 * 动画持续时常，单位ms
	 * @default 10000
	 */
	duration?: number
	/**
	 * 动画开始延迟
	 * @default 0
	 */
	delay?: number
	/**
	 * 是否在动画结束后总览视图缩放（调整地图到能看到整个轨迹的视野），默认开启
	 * @default true
	 */
	overallView?: boolean
	/**
	 * 设置动画中的地图倾斜角度，默认55度
	 * @default 55
	 */
	tilt?: number
	/**
	 * 设置动画中的缩放级别，默认会根据轨迹情况调整到一个合适的级别
	 * @default auto
	 */
	zoom?: number
}
/**
 * 轨迹动画
 * @param {any} map 地图组件实例引用
 * @param {UseTrackAnimationOptions} options 轨迹动画配置
 * @returns { setPath, start, stop}
 */
export function useTrackAnimation(map: any, options: UseTrackAnimationOptions) {
	let instance: BMapGLLib.TrackAnimation
	let pl: BMapGL.Polyline
	let mapComponentInstance: any
	let mapInstance: BMapGL.Map
	const isRunning = ref<boolean>(false)
	const isStopping = ref<boolean>(false)
	watch(
		() => map.value,
		(n) => {
			mapComponentInstance = n
		}
	)
	const init = () => {
		if (!instance) {
			mapInstance = mapComponentInstance.getMapInstance()
			instance = new BMapGLLib.TrackAnimation(mapInstance, pl, options)
		}
	}
	const setPath = (path: PathPoint[]) => {
		let point = path.map((pathItem) => new BMapGL.Point(pathItem.lng, pathItem.lat))
		pl = new BMapGL.Polyline(point)
		init()
	}
	const start = () => {
		if (instance && !isRunning.value) {
			isRunning.value = true
			instance.start()
		}
	}
	const cancel = () => {
		if (instance) {
			isRunning.value = false
			instance.cancel()
		}
	}
	const stop = () => {
		isStopping.value = true
		if (instance) instance.pause()
	}
	const proceed = () => {
		isStopping.value = false
		if (instance) instance.continue()
	}
	return {
		/**
		 * 设置路径动画路径
		 */
		setPath,
		/**
		 * 开始动画
		 */
		start,
		/**
		 * 暂停动画
		 */
		stop,
		/**
		 * 取消动画
		 */
		cancel,
		/**
		 * 继续播放动画
		 */
		proceed,
		/**
		 * 是否处于动画播放进度中
		 */
		isRunning,
    /**
     * 是否暂停了播放
     */
		isStopping
	}
}
