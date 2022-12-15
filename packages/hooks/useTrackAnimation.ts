import { onUnmounted, ref, watch } from 'vue'
import { type Point } from '../utils'

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
type AnimationStatus = 'PLAYING' | 'STOPPING' | 'INITIAL'
const statusMap: Record<number, AnimationStatus> = {
  1: 'PLAYING',
  2: 'INITIAL',
  3: 'STOPPING'
}
/**
 * 轨迹动画
 * @param {any} map 地图组件实例引用
 * @param {UseTrackAnimationOptions} options 轨迹动画配置
 * @returns { setPath, start, stop}
 */
export function useTrackAnimation(map: any, options?: UseTrackAnimationOptions) {
  let instance: BMapGLLib.TrackAnimation
  let pl: BMapGL.Polyline | null
  let mapComponentInstance: any
  let mapInstance: BMapGL.Map
  const status = ref<AnimationStatus>('INITIAL')
  options = options || {}
  watch(
    () => map.value,
    (n) => {
      mapComponentInstance = n
    }
  )
  const init = () => {
    if (!instance) {
      mapInstance = mapComponentInstance.getMapInstance()
      instance = new BMapGLLib.TrackAnimation(mapInstance, pl!, options)
    }
  }
  const setPath = (path: Point[]) => {
    const point = path.map((pathItem) => new BMapGL.Point(pathItem.lng, pathItem.lat))
    pl = new BMapGL.Polyline(point)
    init()
  }
  const start = () => {
    if (instance && status.value === 'INITIAL') {
      instance.start()
      syncState()
      setTimeout(() => {
        instance._viewAni.addEventListener('animationend', syncState)
      })
    }
  }

  const cancel = () => {
    if (instance) {
      instance.cancel()
      syncState()
    }
  }
  const stop = () => {
    if (instance) {
      instance.pause()
      syncState()
    }
  }
  const proceed = () => {
    if (instance) {
      instance.continue()
      syncState()
    }
  }

  const syncState = () => {
    setTimeout(() => {
      if (instance) {
        status.value = statusMap[instance._status]
      }
    })
  }
  onUnmounted(() => {
    if (instance && status.value !== 'INITIAL') {
      instance.cancel()
    }
    // 手动回收内存
    if (mapInstance) {
      mapInstance.removeOverlay(pl!)
      pl = null
    }
  })

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
     * 动画状态
     */
    status
  }
}
