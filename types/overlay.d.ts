import { Point, Size } from './base'
import { RangeOf2 } from './tools'
import { Map } from './core'
/**
 * 覆盖物的抽象基类，所有覆盖物均继承基类的方法。此类不可实例化。
 */
export interface Overlay {
	/**
	 * 	抽象方法，用于初始化覆盖物，当调用map.addOverlay时，API将调用此方法。自定义覆盖物时需要实现此方法。自定义覆盖物时需要将覆盖物对应的HTML元素返回
	 * @param map
	 */
	initialize(map: Map): HTMLElement
	/**
	 * 判断覆盖物是否可见
	 */
	isVisible(): boolean
	/**
	 * 抽象方法，当地图状态发生变化时，由系统调用对覆盖物进行绘制。自定义覆盖物需要实现此方法
	 */
	draw(): void
	/**
	 * 	显示覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为空
	 */
	show(): void
	/**
	 * 隐藏覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为none
	 */
	hide(): void
}
export interface InfoWindowOptions {
	/**
	 * 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整
	 */
	width: 0 | RangeOf2<220, 730>
	/**
	 * 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整
	 */
	height: 0 | RangeOf2<60, 650>
	/**
	 * 信息窗最大化时的宽度，单位像素。取值范围：220 - 730
	 */
	maxWidth: RangeOf2<220, 730>
	/**
	 * 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置
	 */
	offset: Size
	/**
	 * 信息窗标题文字，支持HTML内容
	 */
	title: string
	/**
	 * @default true
	 * 是否开启信息窗口打开时地图自动移动（默认开启）
	 */
	enableAutoPan: boolean
	/**
	 * @default true
	 * 是否开启点击地图关闭信息窗口（默认开启）
	 */
	enableCloseOnClick: boolean
}
export interface InfoWindow extends Overlay {
	// /**
	//  * @default false
	//  */
	// show: boolean
	position: Point
	/**
	 * 是否开启信息窗口打开时地图自动移动（默认开启）
	 * @default true
	 */
	autoPan: boolean
	/**
	 * 是否开启点击地图关闭信息窗口（默认开启）
	 * @default true
	 */
	closeOnClick: boolean
	/**
	 * 自定义部分的短信内容，可选项。
	 * 完整的短信内容包括：自定义部分+位置链接，不设置时，显示默认短信内容。
	 * 短信内容最长为140个字
	 */
	message: string
	new (content: String | HTMLElement, opts: InfoWindowOptions): InfoWindow
}
