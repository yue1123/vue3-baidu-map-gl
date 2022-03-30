// import { Bounds, Point } from '../types1/base/common'

import { Bounds, Pixel, Point, Size } from './base'
import { MapType, _MapType } from './common'
import { Control } from './control'
import { InfoWindow, Overlay } from './overlay'

/**
 * Map构造函数的可选参数
 */
export interface MapOptions {
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
	mapType?: _MapType
	/**
	 * 	开启自动适应地图容器变化，默认启用
	 */
	enableAutoResize?: boolean
}

export interface baseSetOptions {
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
export interface ZoomOptions extends baseSetOptions {
	/**
	 * 放中心点，默认以地图中心点为基准缩放
	 */
	zoomCenter?: Point
}

/**
 * 此类是地图API的核心类，用来实例化一个地图。
 * @example const map = new BMapGL.Map('container');
 */
export interface Map {
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
	 * @deprecated gl版本不支持
	 */
	enableRotateGestures(): void
	/**
	 * 是否允许通过手势倾斜地图。
	 * @deprecated gl版本不支持
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
	/**
	 * 地图容器变化后调用此方法用来重新铺图
	 */
	checkResize(): void
	/**
	 * 强制地图调整尺寸，此时会以当前容器尺寸为基准重新计算视野所需图像数据并重新绘制。当关闭自动调整视野时（`enableAutoResize` 配置），需要调用此方法来强制地图刷新。
	 */
	resize(): void
	/**
	 * 返回地图当前尺寸，以像素表示
	 */
	getSize(): Size
	/**
	 * 获取地图容器尺寸
	 */
	getContainerSize(): Size
	/**
	 * 返回当前地图级别，一个像素对应多少单位的平面墨卡托坐标
	 */
	getZoomUnits(): number
	/**
	 * 返回地图的DOM容器元素。当创建用户自定义控件时，需要自行实现Control.initialize()方法，并将控件的容器元素添加到地图上，通过此方法可获得地图容器
	 */
	getContainer(): HTMLElement
	/**
	 * 像素坐标转换为经纬度坐标
	 */
	pixelToPoint(pixel: Pixel): Point
	/**
	 * 经纬度坐标转换为像素坐标
	 */
	pointToPixel(point: Point): Pixel
	/**
	 * 经纬度球体坐标转换为墨卡托平面坐标
	 */
	// lnglatToMercator(lng: number, lat: number):	[McLng, McLat]
	/**
	 * 墨卡托平面坐标转换为经纬度球体坐标
	 */
	// mercatorToLnglat(McLng: number, lat: McLat):	[lng, lat]
	/**
	 * 返回地图是否经过centerAndZoom进行初始化
	 */
	isLoaded(): boolean
	/**
	 * 添加地点区域，作为地图上的虚拟可点击区域。其中参数spots为热区点数组，options为可选配置参数；返回区域id。
	 */
	addSpots(spots: [], options: Object): number
	/**
	 * 根据id返回地点区域数组
	 */
	getSpots(id: string): []
	/**
	 * 根据id移除区域数组
	 */
	removeSpots(id: number): void
	/**
	 * 清除地点区域，此操作将清空所有虚拟可点数据
	 */
	clearSpots(): void
	/**
	 * 	清空当前map所有的自定义底图标注
	 */
	clearLabels(): void
	/**
	 * 在底图上添加文字，这些文字会和底图文字一同参与避让。
	 */
	addLabelsToMapTile(labels: []): void
	/**
	 * 从底图上移除文字标注，参数为uid数组，根据数组里的uid进行移除
	 */
	removeLabelsFromMapTile(labelUids: []): void
	/**
	 * 通过点击坐标获取当前点中的底图icon，如果获取到返回其{name, uid, position}，否则返回null
	 */
	getIconByClickPosition(clickPosition: Pixel): Object | null
	/**
	 * 设置地图可拖动区域，参数为地图拖拽的区域范围
	 */
	setBounds(bounds: Bounds): void
	/**
	 * 获取地图当前视野范围的矩形区域，以地理坐标表示。如果地图尚未初始化则返回一个空的 `Bounds` 实例。
	 */
	getBounds(): Bounds
	/**
	 * 	获取地图坐标类型，为CoordType常量
	 */
	getCoordType(): string
	/**
	 * 获取当前地图样式id，对于内置样式则返回样式名称；对于自定义样式，则返回内部自动生成的样式id
	 */
	getMapStyleId(): string
	/**
	 * 获取覆盖物容器元素，返回地图覆盖物容器对象
	 */
	// getPanes():	MapPanes
	/**
	 * 获取当前打开的信息窗口实例，如果当前地图没有处于打开状态信息窗口，则返回 `null`
	 */
	getInfoWindow(): InfoWindow | null
	/**
	 * 设置地图默认的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
	 */
	setDefaultCursor(cursor: String): void
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
	/**
	 * 返回两点之间的距离，单位是米
	 */
	getDistance(start: Point, end: Point): number
	/**
	 * 返回地图类型
	 */
	getMapType(): _MapType
	/**
	 * 根据提供的地理区域或坐标设置地图视野，调整后的视野会保证包含提供的地理区域或坐标
	 */
	// setViewport(view: []Point | Viewport , viewportOptions: ViewportOptions )	:void
	/**
	 * 	根据提供的地理区域或坐标获得最佳的地图视野，返回的对象中包含center和zoom属性，分别表示地图的中心点和级别。此方法仅返回视野信息，不会将新的中心点和级别做用到当前地图上
	 */
	// getViewport(view: []< Point >, viewportOptions: ViewportOptions )	:Viewport
	/**
	 * 设初始化地图。 如果center类型为Point时，zoom必须赋值，范围3-19级，若调用高清底图（针对移动端开发）时，zoom可赋值范围为3-18级。如果center类型为字符串时，比如“北京”，zoom可以忽略，地图将自动根据center适配最佳zoom级别
	 */
	centerAndZoom(center: string): void
	centerAndZoom(center: Point, zoom: number): void
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
	/**
	 * 设置地图中心点。center除了可以为坐标点以外，还支持城市名。可选配置参数包括'noAnimation: boolean'是否禁用动画效果；'callback: function'动画结束后调用此方法，如果没有动画则立即调用
	 */
	setCenter(center: Point | string, options?: baseSetOptions): void
	/**
	 * 返回地图当前中心点
	 */
	getCenter(): Point
	/**
	 * 设置地图类型
	 */
	setMapType(mapTypeId: MapType): void
	/**
	 * 将视图切换到指定的缩放等级，中心点坐标不变。
	 * @description 注意：当有信息窗口在地图上打开时，地图缩放将保证信息窗口所在的坐标位置不动。可选配置参数包括'noAnimation：boolean'是否禁用动画效果；'callback:function'动画结束后会调用此方法，如果没有动画则立即调用；'zoomCenter：Point'缩放中心点，默认以地图中心点为基准缩放
	 */
	setZoom(zoom: number, options?: ZoomOptions): void
	/**
	 * 返回地图当前缩放级别
	 */
	getZoom(): number
	/**
	 * 放大一级视图
	 */
	zoomIn(): void
	/**
	 * 缩小一级视图
	 */
	zoomOut(): void
	/**
	 * 将控件添加到地图，一个控件实例只能向地图中添加一次
	 */
	addControl(control: Control): void
	/**
	 * 从地图中移除控件。如果控件从未被添加到地图中，则该移除不起任何作用
	 */
	removeControl(control: Control): void
	/**
	 * 添加右键菜单
	 */
	// addContextMenu()(menu: ContextMenu )	:void
	// /**
	//  * 移除右键菜单
	//  */
	// removeContextMenu()(menu: ContextMenu )	:void
	/**
	 * 将覆盖物添加到地图中，一个覆盖物实例只能向地图中添加一次
	 */
	addOverlay(overlay: Overlay): void
	/**
	 * 从地图中移除覆盖物。如果覆盖物从未被添加到地图中，则该移除不起任何作用
	 */
	removeOverlay(overlay: Overlay): void
	/**
	 * 清除地图上所有覆盖物
	 */
	clearOverlays(): void
	/**
	 * 	根据地理坐标获取对应的覆盖物容器的坐标，此方法用于自定义覆盖物
	 */
	pointToOverlayPixel(point: Point): Pixel
	/**
	 * 根据覆盖物容器的坐标获取对应的地理坐标
	 */
	overlayPixelToPoint(pixel: Pixel): Point
	/**
	 * 获取当前地图上的所有覆盖物，返回覆盖物对象的集合
	 */
	getOverlays(): Overlay[]
	/**
	 * 返回地图覆盖物容器列表
	 */
	// getPanes():	MapPanes
	/**
	 * 获取当前地图允许的最大倾斜角度
	 */
	getCurrentMaxTilt(): number
	/**
	 * 根据 uid 将底图上的 poi 高亮显示，其中参数tilePosStr为label的位置字符串
	 */
	hightlightSpotByUid(uid: string, tilePosStr: string): void
	/**
	 * 重置热区状态，即将高亮的热区点取消
	 */
	resetSpotStatus(): void
	/**
	 * 	重置热区状态，即将高亮的热区点取消
	 */
	addAreaSpot(): void
	/**
	 * 返回地点区域数组
	 */
	getAreaSpot(id: string): []
	/**
	 * 移除区域数组
	 */
	removeAreaSpot(id: string): void
	/**
	 * 清除地点区域，此操作将清空所有虚拟可点数据
	 */
	clearAreaSpots(): void
	/**
	 * 开启路况图层
	 */
	setTrafficOn(): void
	/**
	 * 关闭路况图层
	 */
	setTrafficOff(): void
	/**
	 * 显示覆盖物
	 */
	showOverlayContainer(): void
	/**
	 * 不显示覆盖物
	 */
	hideOverlayContainer(): void
	/**
	 * 设置个性化地图，参数为个性化配置对象
	 */
	setMapStyleV2(config: Object): void
	/**
	 * 启动视角动画
	 */
	// startViewAnimation(viewAnimation: ViewAnimation):	number
	// /**
	//  * 停止视角动画
	//  */
	// cancelViewAnimation(viewAnimation: ViewAnimation)	:void
	/**
	 * 获取地图截图，地球模式不支持。需要初始化地图配置preserveDrawingBuffer：true，否则是黑屏
	 */
	getMapScreenshot(): string
	/**
	 * 加载地图当前样式所需要的样式文件，callback为加载成功后的回调函数
	 */
	loadMapStyleFiles(callback: Function): void
	/**
	 * 设置版权信息位置，其中logo为logo位置，copyright为文字位置
	 */
	setCopyrightOffset(logo: Object, cpy: Object): void
	/**
	 * 销毁地图，当使用 WebGL 渲染地图时，如果确认不再使用该地图实例，则需要调用本方法销毁 WebGL 上下文，否则频繁创建新地图实例会导致浏览器报：too many WebGL context 的警告
	 */
	destroy(): void
	/**
	 * 判断浏览器是否支持地球,支持返回true,否则返回false
	 */
	isSupportEarth(): boolean
	new (selector: string, options?: MapOptions): Map
}
