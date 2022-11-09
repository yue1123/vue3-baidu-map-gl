import { onUnmounted, ref, Ref, watch } from 'vue'
import { Point } from './usePoint'

export interface ViewAnimationKeyFrames {
  /**
   * 	地图中心点，默认值为地图当前状态中心点
   */
  center: Point
  /**
   * 	地图缩放级别，默认值为地图当前状态缩放级别
   */
  zoom?: number
  /**
   * 	地图倾斜角度，默认值为地图当前状态倾斜角度
   */
  tilt?: number
  /**
   * 	地图旋转角度，默认值为地图当前旋转角度
   */
  heading?: number
  /**
   * 	表示当前关键帧处于动画过程的百分比，取值范围0~1
   */
  percentage: RangeOf2<0, 1>
}

export interface ViewAnimationOptions {
  /**
   * 	动画开始延迟时间，单位ms，默认0
   */
  delay: number
  /**
   * 	动画持续时间，单位ms，默认1000
   */
  duration: number
  /**
   * 循环次数，参数类型为数字时循环固定次数，参数为'INFINITE'无限循环，默认为1
   */
  loop: number | 'INFINITE'
  /**
   * 动画播放时禁止鼠标拖动
   */
  disableDragging: boolean
}

type AnimationListenerType = 'animationstart' | 'animationiterations' | 'animationend' | 'animationcancel'

type AnimationStatus = 'PLAYING' | 'STOPPING' | 'INITIAL'
export function useViewAnimation(map: any, options: ViewAnimationOptions) {
  options = options || {}
  options.disableDragging = options.disableDragging !== undefined ? false : true
  const status = ref<AnimationStatus>('INITIAL')
  // 保存未初始化前的事件监听
  const eventListener: Partial<Record<AnimationListenerType, BMapGL.Callback[]>> = {
    animationcancel: [() => (status.value = 'INITIAL')],
    animationend: [() => (status.value = 'INITIAL')],
    animationstart: [() => (status.value = 'PLAYING')]
  }

  let mapComponentInstance: any
  let mapInstance: BMapGL.Map
  let initd = false
  watch(
    () => map.value,
    (n) => {
      mapComponentInstance = n
    }
  )

  const syncDragging = () => {
    const { enableDragging } = mapComponentInstance.getBaseMapOptions()
    mapComponentInstance.setDragging(enableDragging)
  }

  const defaultValue = {
    addEventListener(event: AnimationListenerType, cal: BMapGL.Callback) {
      if (!eventListener[event]) {
        eventListener[event] = []
      }
      eventListener[event]!.push(cal)
    },
    removeEventListener(event: AnimationListenerType, cal: BMapGL.Callback) {
      const subs = eventListener[event]
      if (subs) {
        if (!cal) {
          eventListener[event] = []
        } else {
          for (let i = subs.length; i >= 0; i--) {
            if (subs[i] === cal) {
              subs.splice(i, 1)
            }
          }
        }
      }
    }
  }
  let viewAnimation: BMapGL.ViewAnimation | typeof defaultValue = defaultValue

  const createViewAnimation = (keyFrames: ViewAnimationKeyFrames[]) => {
    const { loop, duration, delay } = options
    for (const keyFrame of keyFrames) {
      if (keyFrame.center) {
        const { lng, lat } = keyFrame.center
        keyFrame.center = new BMapGL.Point(lng, lat)
      }
    }
    viewAnimation = new BMapGL.ViewAnimation(keyFrames, {
      duration,
      delay,
      interation: loop
    })
    for (const eventKey of Object.keys(eventListener)) {
      const events = eventListener[eventKey]
      if (events && events.length) {
        events.forEach((cal: (...arg: []) => void) => {
          viewAnimation.addEventListener(eventKey as AnimationListenerType, cal)
        })
      }
    }
    initd = true
  }
  const start = () => {
    if (initd) {
      mapInstance = mapComponentInstance.getMapInstance()
      mapInstance.startViewAnimation(viewAnimation as BMapGL.ViewAnimation)
      mapComponentInstance.setDragging(!options.disableDragging)
    }
  }
  const cancel = () => {
    if (initd) {
      ;(viewAnimation as BMapGL.ViewAnimation)._cancel(mapInstance)
      syncDragging()
    }
  }
  const stop = () => {
    if (initd && status.value === 'PLAYING') {
      ;(viewAnimation as BMapGL.ViewAnimation)._pause()
      status.value = 'STOPPING'
    }
  }
  const proceed = () => {
    if (initd && status.value === 'STOPPING') {
      ;(viewAnimation as BMapGL.ViewAnimation)._continue()
      status.value = 'PLAYING'
    }
  }

  onUnmounted(() => {
    try {
      if ((viewAnimation as BMapGL.ViewAnimation) && status.value == 'INITIAL') {
        mapInstance = mapComponentInstance.getMapInstance()
        ;(viewAnimation as BMapGL.ViewAnimation)._cancel(mapInstance)
        syncDragging()
      }
    } catch (e) {
      return false
    }
  })

  return {
    viewAnimation,
    start,
    cancel,
    stop,
    proceed,
    status,
    setKeyFrames: createViewAnimation
  }
}
