import { Size } from './base'
import { ControlAnchor, _ControlAnchor, LengthUnit, _LengthUnit, LengthUnitValue } from './common'
import { Map } from './core'
/**
 * 此类是所有控件的基类，您可以通过此类来实现自定义控件。
 */
export interface Control {
	/**
	 * 控件默认的停靠位置。自定义控件时需要提供此属性，作为控件的默认停靠位置
	 */
	defaultAnchor: ControlAnchor
	/**
	 * 控件默认的位置偏移值。自定义控件时需要提供此属性，作为控件的默认偏移位置
	 */
	defaultOffset: Size
	/**
	 * 抽象方法。调用Map.addControl()方法添加控件时将调用此方法，从而实现该控件的初始化。
	 * 自定义控件时需要实现此方法，并将元素的DOM元素在该方法中返回。
	 * DOM元素需要添加到地图的容器中，使用map.getContainer:()
	 * @param {Map} map
	 */
	initialize(map: Map): HTMLElement
	/**
	 * 设置控件停靠的位置
	 * @param {ControlAnchor} anchor
	 */
	setAnchor(anchor: ControlAnchor): void
	/**
	 * 返回控件停靠的位置
	 */
	getAnchor(): ControlAnchor
	/**
	 * 设置控件停靠的偏移量
	 * @param {Size} offset
	 */
	setOffset(offset: Size): void
	/**
	 * 返回控件停靠的偏移量
	 */
	getOffset(): Size
	/**
	 * 显示控件
	 */
	show(): void
	/**
	 * 隐藏控件
	 */
	hide(): void
	/**
	 * 判断控件的可见性
	 */
	isVisible(): Boolean
	new (): Control
}

interface ControlOptions {
	/**
	 * 控件停靠的位置
	 */
	anchor?: ControlAnchor
	/**
	 * 控件的偏移值
	 */
	offset?: Size
}
export interface ScaleControl extends Control {
	/**
	 * 返回比例尺单位制
	 */
	getUnit(): LengthUnitValue
	/**
	 * 设置比例尺单位制
	 * @param unit
	 */
	setUnit(unit: LengthUnit): void
	new (opts?: ControlOptions): ScaleControl
}

export interface ZoomControl extends Control {
	new (opts?: ControlOptions): ZoomControl
}

// control组件公共props
// export interface baseBmControlOptions {
// 	/**
// 	 * 控件的停靠位置
// 	 */
// 	anchor?: _ControlAnchor
// 	/**
// 	 * 控件的偏移值
// 	 */
// 	offset?: {
// 		x: number
// 		y: number
// 	}
// }
