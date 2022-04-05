import { Point, Pixel, Bounds, Size } from './base.d'
import { Map } from './core.d'
import { Control, ScaleControl, ZoomControl } from './control.d'

export type BMapGL = {
	Map: Map
	Point: Point
	Pixel: Pixel
	Bounds: Bounds
	Size: Size
	Control: Control
	ScaleControl: ScaleControl
	ZoomControl: ZoomControl
}

// // 基础类
// export * from './base.d'
// // 核心类
// export * from './core.d'
// // 覆盖物类
// export * from './overlay.d'
// // 控件类
// export * from './control.d'
// // 公共类型
// export * from './common.d'
