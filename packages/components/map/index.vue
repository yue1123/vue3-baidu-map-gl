<template>
  <div
    class="baidu-map-container"
    ref="mapContainer"
    :style="{ width: width, height: height }"
    style="background: #f1f1f1; position: relative; overflow: hidden"
  >
    <slot name="loading" v-bind:isLoading="!initd">
      <div style="color: #999; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
        {{ !initd ? 'map loading...' : '' }}
      </div>
    </slot>
  </div>

  <slot></slot>
</template>

<script setup lang="ts">
  import {
    defineProps,
    withDefaults,
    defineEmits,
    watch,
    onMounted,
    onUnmounted,
    provide,
    nextTick,
    getCurrentInstance,
    ref,
    computed
  } from 'vue'
  import useLifeCycle from '../../hooks/useLifeCycle'
  import getScriptAsync from '../../utils/getScriptAsync'
  import { initPlugins, PluginsSourceLink, UserPlugins } from '../../utils/pluginLoader'
  import { bindEvents, Callback, error, isString, callWhenDifferentValue } from '../../utils'
  export type MapType = _MapType
  export interface MapDisplayOptions {
    /**
     * 是否显示地图上的地点标识
     */
    poi?: boolean
    /**
     * 是否显示室内图
     */
    indoor?: boolean
    /**
     * 是否显示地图上的地点标识文字
     */
    poiText?: boolean
    /**
     * 是否显示地图上的地点标识图标
     */
    poiIcon?: boolean
    /**
     * 是否显示覆盖物
     */
    overlay?: boolean
    /**
     * 是否显示叠加图层，地球模式暂不支持
     */
    layer?: boolean
    /**
     * 是否显示3D建筑物（仅支持WebGL方式渲染的地图）
     */
    building?: boolean
    /**
     * 是否显示路网（只对卫星图和地球模式有效）
     */
    street?: boolean
    /**
     * 天空颜色
     */
    skyColors?: [string, string]
  }
  export interface MapProps {
    ak?: string
    /**sss
     * 地图显示宽度
     */
    width?: string | number
    /**
     * 地图显示高度
     */
    height?: string | number
    /**
     * 中心点坐标
     */
    center?:
      | string
      | {
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
     * 地图类型
     */
    mapType?: MapType
    /**
     * 缩放级别
     */
    zoom?: number
    heading?: number
    tilt?: number
    /**
     * 地图允许展示的最小级别
     */
    minZoom?: number
    /**
     * 地图允许展示的最大级别
     */
    maxZoom?: number
    /**
     * 禁用缩放动画
     */
    noAnimation?: boolean
    /**
     * 个性化地图
     */
    mapStyleId?: string
    mapStyleJson?: {
      featureType: string
      elementType: string
      stylers: {
        visibility: string
        color: string
      }
    }[]
    /**
     * 是否显示室内图控件
     */
    showControls?: boolean
    /**
     * 插件
     */
    plugins?: UserPlugins
    pluginsSourceLink?: Partial<PluginsSourceLink>
    /**
     * 地图自定义属性
     */
    displayOptions?: MapDisplayOptions
    /**
     * 是否启用路况图层
     */
    enableTraffic?: boolean
    /**
     * @default true
     * 启用地图拖拽，默认启用
     */
    enableDragging?: boolean
    /**
     * @default false
     * 启用地图惯性拖拽，默认禁用
     */
    enableInertialDragging?: boolean
    /**
     * @default true
     * 	允许地图可被鼠标滚轮缩放，默认开启
     */
    enableScrollWheelZoom?: boolean
    /**
     * 开启双击平滑缩放效果
     */
    enableContinuousZoom?: boolean
    /**
     * 开启图区resize中心点不变
     */
    enableResizeOnCenter?: boolean
    /**
     * 启用地图双击缩放，左键双击放大、右键双击缩小
     */
    enableDoubleClickZoom?: boolean
    /**
     * @default false
     * 启用键盘操作，默认禁用。
     * 键盘的上、下、左、右键可连续移动地图。
     * 同时按下其中两个键可使地图进行对角移动。
     * PgUp、PgDn、Home和End键会使地图平移其1/2的大小。
     * +、-键会使地图放大或缩小一级
     */
    enableKeyboard?: boolean
    /**
     * 启用双指缩放地图。
     */
    enablePinchToZoom?: boolean
    /**
     * @default true
     * 启用自动适应容器尺寸变化，默认启用
     */
    enableAutoResize?: boolean
    onClick?: Callback
    onDblclick?: Callback
    onRightclick?: Callback
    onRightdblclick?: Callback
    onMaptypechange?: Callback
    onMousemove?: Callback
    onMouseover?: Callback
    onMouseout?: Callback
    onMovestart?: Callback
    onMoving?: Callback
    onMoveend?: Callback
    onZoomstart?: Callback
    onZoomend?: Callback
    onAddoverlay?: Callback
    onAddcontrol?: Callback
    onRemovecontrol?: Callback
    onRemoveoverlay?: Callback
    onClearoverlays?: Callback
    onDragstart?: Callback
    onDragging?: Callback
    onDragend?: Callback
    onAddtilelayer?: Callback
    onRemovetilelayer?: Callback
    onLoad?: Callback
    onResize?: Callback
    onHotspotclick?: Callback
    onHotspotover?: Callback
    onHotspotout?: Callback
    onTilesloaded?: Callback
    onTouchstart?: Callback
    onTouchmove?: Callback
    onTouchend?: Callback
    onLongpress?: Callback
  }
  const mapContainer = ref<HTMLDivElement | null>()
  let map: BMapGL.Map = null!
  // 是否初始化
  let initd = ref<boolean>(false)
  // 地图初始化的发布
  const { ready } = useLifeCycle()
  const { uid, proxy } = getCurrentInstance()!
  const props = withDefaults(defineProps<MapProps>(), {
    width: '100%',
    height: '550px',
    center: () => ({ lat: 39.915185, lng: 116.403901 }),
    mapType: 'BMAP_NORMAL_MAP',
    zoom: 14,
    maxZoom: 21,
    minZoom: 0,
    heading: 0,
    tilt: 0,
    noAnimation: false,
    showControls: false,
    enableTraffic: false,
    enableDragging: true,
    enableInertialDragging: true,
    enableScrollWheelZoom: false,
    enableContinuousZoom: true,
    enableResizeOnCenter: true,
    enableDoubleClickZoom: false,
    enableKeyboard: true,
    enablePinchToZoom: true,
    enableAutoResize: true
  })
  const width = computed(() => (isString(props.width) ? props.width : `${props.width}px`))
  const height = computed(() => (isString(props.height) ? props.height : `${props.height}px`))
  const vueEmits = defineEmits([
    'initd',
    'unload',
    'pluginReady',
    'click',
    'dblclick',
    'rightclick',
    'rightdblclick',
    'maptypechange',
    'mousemove',
    'mouseover',
    'mouseout',
    'movestart',
    'moving',
    'moveend',
    'zoomstart',
    'zoomend',
    'addoverlay',
    'addcontrol',
    'removecontrol',
    'removeoverlay',
    'clearoverlays',
    'dragstart',
    'dragging',
    'dragend',
    'addtilelayer',
    'removetilelayer',
    'load',
    'resize',
    'hotspotclick',
    'hotspotover',
    'hotspotout',
    'tilesloaded',
    'touchstart',
    'touchmove',
    'touchend',
    'longpress'
  ])
  const ak = props.ak || proxy!.$baiduMapAk
  const plugins =
    props.plugins && proxy!.$baiduMapPlugins
      ? Object.assign(proxy!.$baiduMapPlugins, props.plugins)
      : props.plugins || proxy!.$baiduMapPlugins

  const pluginsSourceLink =
    props.pluginsSourceLink && proxy!.$baiduMapPluginsSourceLink
      ? Object.assign(proxy!.$baiduMapPluginsSourceLink, props.pluginsSourceLink)
      : props.pluginsSourceLink || proxy!.$baiduMapPluginsSourceLink || {}
  if (!ak) error('missing required props: ak')
  const scriptKey = `_initBMap${ak}`
  // 初始化地图
  function init() {
    getScriptAsync({
      src: `//api.map.baidu.com/api?type=webgl&v=1.0&ak=${ak}&callback=${scriptKey}`,
      addCalToWindow: true,
      key: scriptKey
    })
      .then(() => {
        const { minZoom, maxZoom, mapType, enableAutoResize, showControls, center } = props
        if (!mapContainer.value) return
        map = new BMapGL.Map(mapContainer.value, {
          minZoom,
          maxZoom,
          mapType: window[mapType],
          enableAutoResize,
          showControls
        })
        setCenterAndZoom(center)
        initMapOptions()
        initCustomStyle()
        startWatchProps()
        bindEvents(props, vueEmits, map)
        if (!initd.value) {
          initd.value = true
          nextTick(() => ready(map, map))
          if (plugins) {
            initPlugins(plugins, pluginsSourceLink)
              .then(() => {
                vueEmits('pluginReady', map)
              })
              .catch((err) => {
                error('plugins load error: ' + err)
              })
          }
        }
      })
      .catch(error)
  }

  // 个性化地图
  function initCustomStyle() {
    if (props.mapStyleId) {
      map.setMapStyleV2({
        styleId: props.mapStyleId
      })
      return
    } else if (props.mapStyleJson) {
      map.setMapStyleV2({
        styleJson: props.mapStyleJson
      })
    }
  }
  // 监听props变化
  function startWatchProps() {
    watch(() => props.zoom, setZoom)
    watch(() => props.tilt, setTilt)
    watch(() => props.heading, setHeading)
    watch(() => props.center, callWhenDifferentValue(setCenterAndZoom), {
      deep: true
    })
    watch(() => props.mapStyleId, initCustomStyle)
    watch(() => props.mapStyleJson, callWhenDifferentValue(initCustomStyle), {
      deep: true
    })
    watch(() => props.displayOptions, callWhenDifferentValue(setDisplayOptions), {
      deep: true
    })
    watch(() => props.mapType, setMapType)
    watch(() => props.enableTraffic, setTraffic)
    watch(() => props.enableDragging, setDragging)
    watch(() => props.enableInertialDragging, setInertialDragging)
    watch(() => props.enableScrollWheelZoom, setScrollWheelZoom)
    watch(() => props.enableContinuousZoom, setContinuousZoom)
    watch(() => props.enableResizeOnCenter, setResizeOnCenter)
    watch(() => props.enableDoubleClickZoom, setDoubleClickZoom)
    watch(() => props.enableKeyboard, setKeyboard)
    watch(() => props.enablePinchToZoom, setPinchToZoom)
    watch(() => props.enableAutoResize, setAutoResize)
  }
  // 设置地图属性
  function initMapOptions() {
    const {
      enableDragging,
      enableInertialDragging,
      enableScrollWheelZoom,
      enableContinuousZoom,
      enableResizeOnCenter,
      enableDoubleClickZoom,
      enableKeyboard,
      enablePinchToZoom,
      enableAutoResize,
      enableTraffic,
      displayOptions,
      mapType,
      zoom,
      tilt,
      heading
    } = props
    setZoom(zoom)
    setTilt(tilt)
    setTraffic(enableTraffic)
    setHeading(heading)
    setMapType(mapType)
    setKeyboard(enableKeyboard)
    setDragging(enableDragging)
    setAutoResize(enableAutoResize)
    setPinchToZoom(enablePinchToZoom)
    setContinuousZoom(enableContinuousZoom)
    setResizeOnCenter(enableResizeOnCenter)
    setDoubleClickZoom(enableDoubleClickZoom)
    setScrollWheelZoom(enableScrollWheelZoom)
    setInertialDragging(enableInertialDragging)
    setDisplayOptions(displayOptions)
  }
  // 生产一个地理位置坐标点
  function genPoint(lng: number, lat: number): BMapGL.Point {
    return new BMapGL.Point(lng, lat)
  }
  /**
   * 设置是否显示路况图层
   */
  function setTraffic(enableTraffic: boolean) {
    enableTraffic ? map.setTrafficOn() : map.setTrafficOff()
  }
  /**
   * 设置中心点和缩放级别
   */
  function setCenterAndZoom(center: { lng: number; lat: number } | string): void {
    if (typeof center === 'string') {
      map!.centerAndZoom(center, props.zoom)
    } else {
      map!.centerAndZoom(genPoint(center.lng, center.lat), props.zoom)
    }
  }

  /**
   * 设置地图自定义属性
   */
  function setDisplayOptions(displayOptions?: MapDisplayOptions) {
    map.setDisplayOptions(displayOptions || {})
  }
  /**
   * 设置缩放级别
   */
  function setZoom(zoom: number): void {
    map!.setZoom(zoom, {
      noAnimation: props.noAnimation
    })
  }
  // 设置地图类型
  function setMapType(mapType: _MapType): void {
    window[mapType] !== undefined && map!.setMapType(window[mapType])
  }
  function setHeading(heading: number): void {
    map!.setHeading(heading)
  }
  function setTilt(tilt: number): void {
    map!.setTilt(tilt)
  }
  // 设置地图是否可拖动
  function setDragging(enableDragging: boolean): void {
    enableDragging ? map!.enableDragging() : map!.disableDragging()
  }
  // 设置地图惯性拖拽
  function setInertialDragging(enableInertialDragging: boolean) {
    enableInertialDragging ? map!.enableInertialDragging() : map!.disableInertialDragging()
  }
  // 设置地图是否可滚轮缩放
  function setScrollWheelZoom(enableScrollWheelZoom: boolean) {
    enableScrollWheelZoom ? map!.enableScrollWheelZoom() : map!.disableScrollWheelZoom()
  }
  // 设置地图是否可连续缩放
  function setContinuousZoom(enableContinuousZoom: boolean): void {
    enableContinuousZoom ? map!.enableContinuousZoom() : map!.disableContinuousZoom()
  }
  // 设置地图是否可缩放至中心点
  function setResizeOnCenter(enableResizeOnCenter: boolean): void {
    enableResizeOnCenter ? map!.enableResizeOnCenter() : map!.disableResizeOnCenter()
  }
  // 设置地图是否可双击缩放
  function setDoubleClickZoom(enableDoubleClickZoom: boolean): void {
    enableDoubleClickZoom ? map!.enableDoubleClickZoom() : map!.disableDoubleClickZoom()
  }
  // 设置地图是否可键盘操作
  function setKeyboard(enableKeyboard: boolean): void {
    enableKeyboard ? map!.enableKeyboard() : map!.disableKeyboard()
  }
  // 设置地图是否可手势缩放
  function setPinchToZoom(enablePinchToZoom: boolean): void {
    enablePinchToZoom ? map!.enablePinchToZoom() : map!.disablePinchToZoom()
  }
  // 设置地图是否自动适应窗口大小
  function setAutoResize(enableAutoResize: boolean): void {
    enableAutoResize ? map!.enableAutoResize() : map!.disableAutoResize()
  }

  onMounted(init)
  /**
   * 销毁地图，当使用 WebGL 渲染地图时，如果确认不再使用该地图实例，则需要
   * 调用本方法销毁 WebGL 上下文，否则频繁创建新地图实例会导致浏览器报：
   * too many WebGL context 的警告。
   */
  onUnmounted(() => {
    map?.destroy()
  })
  defineExpose({
    // 父组件获取map实例方法
    getMapInstance: () => map,
    // 父组件/外部获取map组件 options
    getBaseMapOptions: () => props,
    // 重置地图中心
    resetCenter: () => setCenterAndZoom(props.center),
    // 设置地图是否可拖动
    setDragging
  })
  provide('getMapInstance', () => map)
  provide('parentUidGetter', uid)
  provide('baseMapSetCenterAndZoom', (_center: { lng: number; lat: number }) => setCenterAndZoom(_center))
  provide('baseMapSetDragging', (enableDragging: boolean) => setDragging(enableDragging))
  provide('getBaseMapOptions', () => props)
</script>
<script lang="ts">
  export default {
    name: 'BMap'
  }
</script>
