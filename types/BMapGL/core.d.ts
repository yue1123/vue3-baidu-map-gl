/// <reference path="./base.d.ts" />
/// <reference path="./panorama.d.ts" />
/// <reference path="./common.d.ts" />

declare namespace BMapGL {
  /**
   * 地图核心组件
   */
  class Map {
    constructor(container: string | HTMLElement, opts?: MapOptions)
    /**
     * @default true
     * 启用地图拖拽，默认启用
     */
    enableDragging(): void
    /**
     * 禁用地图拖拽
     */
    disableDragging(): void
    /**
     * @default false
     * 启用地图惯性拖拽，默认禁用
     */
    enableInertialDragging(): void
    /**
     * 	禁用地图惯性拖拽
     */
    disableInertialDragging(): void
    /**
     * @default false
     * 	允许地图可被鼠标滚轮缩放，默认禁用
     */
    enableScrollWheelZoom(): void
    /**
     * 禁止地图被鼠标滚轮缩放
     */
    disableScrollWheelZoom(): void
    /**
     * 开启双击平滑缩放效果
     */
    enableContinuousZoom(): void
    /**
     * 关闭双击平滑缩放效果
     */
    disableContinuousZoom(): void
    /**
     * 开启图区resize中心点不变
     */
    enableResizeOnCenter(): void
    /**
     * 关闭图区resize中心点不变
     */
    disableResizeOnCenter(): void
    /**
     * 启用地图双击缩放，左键双击放大、右键双击缩小
     */
    enableDoubleClickZoom(): void
    /**
     * 取消地图双击缩放
     */
    disableDoubleClickZoom(): void
    /**
     * @default false
     * 启用键盘操作，默认禁用。
     * 键盘的上、下、左、右键可连续移动地图。
     * 同时按下其中两个键可使地图进行对角移动。
     * PgUp、PgDn、Home和End键会使地图平移其1/2的大小。
     * +、-键会使地图放大或缩小一级
     */
    enableKeyboard(): void
    /**
     * 禁用键盘操作
     */
    disableKeyboard(): void
    /**
     * 启用双指缩放地图。
     */
    enablePinchToZoom(): void
    /**
     * 禁用双指缩放地图。
     */
    disablePinchToZoom(): void
    /**
     * 	是否允许通过手势旋转地图。
     */
    enableRotateGestures(): void
    /**
     * 是否允许通过手势倾斜地图。
     */
    enableTiltGestures(): void
    /**
     * @default true
     * 启用自动适应容器尺寸变化，默认启用
     */
    enableAutoResize(): void
    /**
     * 禁用自动适应容器尺寸变化
     */
    disableAutoResize(): void
    enableRotate(): void
    disableRotate(): void
    enableTilt(): void
    disableTilt(): void
    /**
     * 设置地图默认的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
     */
    setDefaultCursor(cursor: string): void
    /**
     * 获取地图默认的鼠标指针样式，返回cursor值
     */
    getDefaultCursor(): string
    /**
     * 设置拖拽地图时的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
     */
    setDraggingCursor(cursor: string): void
    /**
     * 返回拖拽地图时的鼠标指针样式
     */
    getDraggingCursor(): string
    /**
     * 设置地图允许的最小级别。取值不得小于地图类型所允许的最小级别
     */
    setMinZoom(zoom: number): void
    /**
     * 设置地图允许的最大级别。取值不得大于地图类型所允许的最大级别
     */
    setMaxZoom(zoom: number): void
    setHeading(heading: number): void
    setTilt(tilt: number): void

    setMapStyle(mapStyle: MapStyle): void
    /**
     * 设置个性化地图，参数为个性化配置对象
     */
    setMapStyleV2(config: Record<string, any>): void
    /**
     * 获取当前地图样式id，对于内置样式则返回样式名称；对于自定义样式，则返回内部自动生成的样式id
     */
    getMapStyleId(): string

    setPanorama(pano: Panorama): void
    /**
     * 开启路况图层
     */
    setTrafficOn(): void
    /**
     * 关闭路况图层
     */
    setTrafficOff(): void

    setCurrentCity(city: string): void
    /**
     * 设置地图类型
     */
    setMapType(mapTypeId: MapType): void
    /**
     * 返回地图类型
     */
    getMapType(): MapType
    /**
     * 根据提供的地理区域或坐标设置地图视野，调整后的视野会保证包含提供的地理区域或坐标
     */
    setViewport(view: Point[] | Viewport, viewportOptions?: ViewportOptions): void
    /**
     * 设置地图中心点。center除了可以为坐标点以外，还支持城市名。可选配置参数包括'noAnimation: boolean'是否禁用动画效果；'callback: function'动画结束后调用此方法，如果没有动画则立即调用
     */
    setCenter(center: Point | string, options?: baseSetOptions): void
    /**
     * 返回地图当前中心点
     */
    getCenter(): Point
    /**
     * 将视图切换到指定的缩放等级，中心点坐标不变。
     * @description 注意：当有信息窗口在地图上打开时，地图缩放将保证信息窗口所在的坐标位置不动。可选配置参数包括'noAnimation：boolean'是否禁用动画效果；'callback:function'动画结束后会调用此方法，如果没有动画则立即调用；'zoomCenter：Point'缩放中心点，默认以地图中心点为基准缩放
     */
    setZoom(zoom: number, options?: ZoomOptions): void
    /**
     * 返回地图当前缩放级别
     */
    getZoom(): number

    disable3DBuilding(): void
    /**
     * 设置地图可拖动区域，参数为地图拖拽的区域范围
     */
    setBounds(bounds: Bounds): void
    /**
     * 获取地图当前视野范围的矩形区域，以地理坐标表示。如果地图尚未初始化则返回一个空的 `Bounds` 实例。
     */
    getBounds(): Bounds
    getDistance(start: Point, end: Point): number
    getSize(): Size
    getViewport(view: Point[] | Bounds, viewportOptions?: ViewportOptions): Viewport
    getPanorama(): Panorama
    /**
     * 设初始化地图。 如果center类型为Point时，zoom必须赋值，范围3-19级，若调用高清底图（针对移动端开发）时，zoom可赋值范围为3-18级。如果center类型为字符串时，比如“北京”，zoom可以忽略，地图将自动根据center适配最佳zoom级别
     */
    centerAndZoom(center: Point | string, zoom: number): void
    centerAndZoom(city: string): void
    /**
     * 将地图的中心点更改为给定的点，跳转到指定中心点进行渲染。如果该点在当前的地图视图中已经可见，则会以平滑动画的方式移动到中心点位置。可以通过配置强制移动过程不使用动画效果
     */
    panTo(center: Point): void
    /**
     * 将地图在水平位置上移动x像素，垂直位置上移动y像素。如果指定的像素大于可视区域范围或者在配置中指定没有动画效果，则不执行滑动效果
     */
    panBy(x: number, y: number): void
    /**
     * 飞到指定的中心点和级别，提供给定位缩放地图使用
     */
    flyTo(center: Point, zoom: number): void
    /**
     * 重新设置地图，恢复地图初始化时的中心点和级别
     */
    reset(): void
    highResolutionEnabled(): boolean
    /**
     * 放大一级
     */
    zoomIn(): void
    /**
     * 缩小一级
     */
    zoomOut(): void
    addHotspot(hotspot: Hotspot): void
    removeHotspot(hotspot: Hotspot): void
    clearHotspots(): void
    addControl(control: Control): void
    removeControl(control: Control): void
    getContainer(): HTMLElement
    addContextMenu(menu: ContextMenu): void
    removeContextMenu(menu: ContextMenu): void
    addOverlay(overlay: Overlay): void
    removeOverlay(overlay: Overlay): void
    clearOverlays(): void
    openInfoWindow(infoWnd: InfoWindow, point: Point): void
    closeInfoWindow(infoWnd: InfoWindow): void
    pointToOverlayPixel(point: Point): Pixel
    overlayPixelToPoint(pixel: Pixel): Point
    /**
     * 获取当前打开的信息窗口实例，如果当前地图没有处于打开状态信息窗口，则返回 `null`
     */
    getInfoWindow(): InfoWindow
    getOverlays(): Overlay[]
    /**
     * 获取覆盖物容器元素，返回地图覆盖物容器对象
     */
    getPanes(): MapPanes
    addTileLayer(tileLayer: TileLayer): void
    removeTileLayer(tilelayer: TileLayer): void
    getTileLayer(mapType: string): TileLayer
    removeDistrictLayer(districtLayer: BMapGL.DistrictLayer): void
    addDistrictLayer(districtLayer: BMapGL.DistrictLayer): void
    /**
     * 启动视角动画
     */
    startViewAnimation(viewAnimation: ViewAnimation): number
    /**
     * 停止视角动画
     */
    cancelViewAnimation(viewAnimation: ViewAnimation): void
    /**
     * 获取地图截图，地球模式不支持。需要初始化地图配置preserveDrawingBuffer：true，否则是黑屏
     */
    getMapScreenshot(): string
    /**
     * 像素坐标转换为经纬度坐标
     */
    pixelToPoint(pixel: Pixel): Point
    /**
     * 经纬度坐标转换为像素坐标
     */
    pointToPixel(point: Point): Pixel
    /**
     * 加载地图当前样式所需要的样式文件，callback为加载成功后的回调函数
     */
    loadMapStyleFiles(callback: any): void
    /**
     * 设置版权信息位置，其中logo为logo位置，copyright为文字位置
     */
    setCopyrightOffset(logo: any, cpy: any): void
    setDisplayOptions: (options: Record<string, any>) => void
    destroy(): void
    onclick: (event: { type: string; target: any; point: Point; pixel: Pixel; overlay: Overlay }) => void
    ondblclick: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
    onrightclick: (event: { type: string; target: any; point: Point; pixel: Pixel; overlay: Overlay }) => void
    onrightdblclick: (event: { type: string; target: any; point: Point; pixel: Pixel; overlay: Overlay }) => void
    onmaptypechange: (event: { type: string; target: any }) => void
    onmousemove: (event: { type: string; target: any; point: Point; pixel: Pixel; overlay: Overlay }) => void
    onmouseover: (event: { type: string; target: any }) => void
    onmouseout: (event: { type: string; target: any }) => void
    onmovestart: (event: { type: string; target: any }) => void
    onmoving: (event: { type: string; target: any }) => void
    onmoveend: (event: { type: string; target: any }) => void
    onzoomstart: (event: { type: string; target: any }) => void
    onzoomend: (event: { type: string; target: any }) => void
    onaddoverlay: (event: { type: string; target: any }) => void
    onaddcontrol: (event: { type: string; target: any }) => void
    onremovecontrol: (event: { type: string; target: any }) => void
    onremoveoverlay: (event: { type: string; target: any }) => void
    onclearoverlays: (event: { type: string; target: any }) => void
    ondragstart: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
    ondragging: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
    ondragend: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
    onaddtilelayer: (event: { type: string; target: any }) => void
    onremovetilelayer: (event: { type: string; target: any }) => void
    onload: (event: { type: string; target: any; point: Point; pixel: Pixel; zoom: number }) => void
    onresize: (event: { type: string; target: any; size: Size }) => void
    onhotspotclick: (event: { type: string; target: any; spots: HotspotOptions }) => void
    onhotspotover: (event: { type: string; target: any; spots: HotspotOptions }) => void
    onhotspotout: (event: { type: string; target: any; spots: HotspotOptions }) => void
    ontilesloaded: (event: { type: string; target: any }) => void
    ontouchstart: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
    ontouchmove: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
    ontouchend: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
    onlongpress: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
    addEventListener(event: string, handler: Callback): void
    removeEventListener(event: string, handler: Callback): void
  }
  interface baseSetOptions {
    /**
     * 是否禁用动画效果
     */
    noAnimation?: boolean
    /**
     * 动画结束后会调用此方法，如果没有动画则立即调用
     */
    callback?: () => void
  }

  /**
   * setZoom 配置参数
   */
  interface ZoomOptions extends baseSetOptions {
    /**
     * 放中心点，默认以地图中心点为基准缩放
     */
    zoomCenter?: Point
  }

  interface PanOptions {
    noAnimation?: boolean
  }

  /**
   * Map构造函数的可选参数
   */
  interface MapOptions {
    /**
     * 地图允许展示的最小级别
     */
    minZoom?: number
    /**
     * 地图允许展示的最大级别
     */
    maxZoom?: number
    /**
     * 地图类型，默认为BMAP_NORMAL_MAP
     */
    mapType?: MapType
    /**
     * 	开启自动适应地图容器变化，默认启用
     */
    enableAutoResize?: boolean
    showControls?: boolean
    restrictCenter?: boolean
    //     enableHighResolution?: boolean;
    //     enableMapClick?: boolean;
    //     backgroundColor?: number[];
    //     displayOptions?: object;
  }
  interface Viewport {
    center: Point
    zoom: number
  }
  interface ViewportOptions {
    enableAnimation?: boolean
    margins?: number[]
    zoomFactor?: number
    delay?: number
  }
  type APIVersion = number
  interface MapStyle {
    features: any[]
    style: string
  }
  interface MapStyleItem {
    featureType?: string
    elementType?: string
    stylers: MapStyleItemStylers
  }
  interface MapStyleItemStylers {
    [k: string]: string | undefined
    color?: string
    visibility?: string
    level?: string
    curZoomRegionId?: string
    curZoomRegion?: string
    fontsize?: string
    weight?: string
  }
  type MapStyleV2 = { styleJson: MapStyleItem[] } | { styleId: string }

  class ViewAnimation {
    constructor(keyFrames: any, opts: any)
    addEventListener(event: string, handler: Callback): void
    removeEventListener(event: string, handler: Callback): void
    _cancel(map: BMapGL.Map): void
    _continue(): void
    _pause(): void
  }
}
declare const BMAP_API_VERSION: BMapGL.APIVersion
