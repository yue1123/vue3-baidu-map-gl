<template>
  <slot></slot>
</template>

<script setup lang="ts">
  import { watch, provide } from 'vue'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import {
    bindEvents,
    Callback,
    callWhenDifferentValue,
    type Point,
    type StrokeStyle,
    error,
    warn
  } from '../../../utils'
  export interface BezierCurveProps {
    /**
     * 折线的节点坐标数组
     */
    path: Point[]
    /**
     * 曲线控制点
     */
    controlPoints: Point[][]
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
    strokeStyle?: StrokeStyle
    /**
     * @default true
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
    onLineupdate?: Callback
  }
  const props = withDefaults(defineProps<BezierCurveProps>(), {
    strokeColor: '#000',
    strokeWeight: 2,
    strokeOpacity: 1,
    strokeStyle: 'solid',
    enableMassClear: true
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
  const { ready } = useLifeCycle()
  let bezierCurve: BMapGL.BezierCurve
  useBaseMapEffect((map: BMapGL.Map) => {
    const cal = () => {
      map.removeOverlay(bezierCurve)
    }
    const init = () => {
      if (__DEV__) {
        if (!props.path || !(props.path && props.path.length)) return warn('BezierCurve path props is required')
        if (!props.controlPoints || !(props.controlPoints && props.controlPoints.length))
          return warn('BezierCurve controlPoints props is required')
      }
      const { path, controlPoints, strokeColor, strokeWeight, strokeOpacity, strokeStyle, enableMassClear } = props
      const pathPoints = pathPointsToMapPoints(path)
      const _controlPoints = controlPoints.map((points) => {
        return pathPointsToMapPoints(points)
      })
      try {
        bezierCurve = new BMapGL.BezierCurve(pathPoints, _controlPoints, {
          strokeColor,
          strokeWeight,
          strokeOpacity,
          strokeStyle,
          enableMassClear
        })
      } catch (e: any) {
        if (__DEV__)
          error(e.message || 'Init bezierCurve overlay error, make sure path and controlPoints data is correct!')
      }

      map.addOverlay(bezierCurve)
      ready(map, bezierCurve)
      bindEvents(props, vueEmits, bezierCurve)
    }

    init()
    // 监听值变化
    watch(
      () => props.path,
      callWhenDifferentValue((n) => {
        bezierCurve ? setPath(n) : init()
      }),
      {
        deep: true
      }
    )
    watch(
      () => props.controlPoints,
      callWhenDifferentValue((n) => {
        bezierCurve ? setControlPoints(n) : init()
      }),
      {
        deep: true
      }
    )
    watch(() => props.strokeColor, setStrokeColor)
    watch(() => props.strokeOpacity, setStrokeOpacity)
    watch(() => props.strokeWeight, setStrokeWeight)
    watch(() => props.strokeStyle, setStrokeStyle)
    watch(() => props.enableMassClear, setMassClear)

    return cal
  })

  provide('getOverlayInstance', () => bezierCurve)

  function pathPointsToMapPoints(pathPoints: Point[]) {
    return pathPoints.map(({ lng, lat }) => new BMapGL.Point(lng, lat))
  }

  function setPath(path: Point[]) {
    bezierCurve.setPath(pathPointsToMapPoints(path))
  }

  function setControlPoints(points: Point[][]) {
    bezierCurve.setControlPoints(points.map((points) => pathPointsToMapPoints(points)))
  }
  function setStrokeColor(color: string): void {
    bezierCurve.setStrokeColor(color)
  }
  function setStrokeOpacity(opacity: number): void {
    bezierCurve.setStrokeOpacity(opacity)
  }
  function setStrokeWeight(weight: number): void {
    bezierCurve.setStrokeWeight(weight)
  }
  function setStrokeStyle(style: StrokeStyle): void {
    bezierCurve.setStrokeStyle(style)
  }
  function setMassClear(enableMassClear: boolean): void {
    enableMassClear ? bezierCurve!.enableMassClear() : bezierCurve!.disableMassClear()
  }
  defineOptions({ name: 'BBezierCurve' })
</script>
