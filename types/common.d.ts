export enum ControlAnchor {
	/**
	 * 控件将定位到地图的右下角
	 */
	'BMAP_ANCHOR_BOTTOM_RIGHT' = 'BMAP_ANCHOR_BOTTOM_RIGHT',
	/**
	 * 控件将定位到地图的左下角
	 */
	'BMAP_ANCHOR_BOTTOM_LEFT' = 'BMAP_ANCHOR_BOTTOM_LEFT',
	/**
	 * 控件将定位到地图的右上角
	 */
	'BMAP_ANCHOR_TOP_RIGHT' = 'BMAP_ANCHOR_TOP_RIGHT',
	/**
	 * 控件将定位到地图的左上角
	 */
	'BMAP_ANCHOR_TOP_LEFT' = 'BMAP_ANCHOR_TOP_LEFT'
}
export type _ControlAnchor = keyof typeof ControlAnchor
export enum MapType {
	/**
	 * 此地图类型展示普通街道视图
	 */
	'B_NORMAL_MAP' = 'B_NORMAL_MAP',
	/**
	 * 此地图类型展示透视图像视图
	 */
	'B_EARTH_MAP' = 'B_EARTH_MAP'
	// /**
	//  * 此地图类型展示卫星视图
	//  */
	// 'BMAP_SATELLITE_MAP' = 'BMAP_SATELLITE_MAP',
	// /**
	//  * 此地图类型展示卫星和路网的混合视图
	//  */
	// 'BMAP_HYBRID_MAP' = 'BMAP_HYBRID_MAP'
}
export type _MapType = keyof typeof MapType
export enum NavigationControlType {
	/**
	 *  标准的平移缩放控件（包括平移、缩放按钮和滑块）
	 */
	'BMAP_NAVIGATION_CONTROL_LARGE' = 'BMAP_NAVIGATION_CONTROL_LARGE',
	/**
	 *  仅包含平移和缩放按钮
	 */
	'BMAP_NAVIGATION_CONTROL_SMALL' = 'BMAP_NAVIGATION_CONTROL_SMALL',
	/**
	 *  仅包含平移按钮
	 */
	'BMAP_NAVIGATION_CONTROL_PAN' = 'BMAP_NAVIGATION_CONTROL_PAN',
	/**
	 *  仅包含缩放按钮
	 */
	'BMAP_NAVIGATION_CONTROL_ZOOM' = 'BMAP_NAVIGATION_CONTROL_ZOOM'
}

/**
 * 市内公交方案换乘策略
 */
export enum TransitPolicy {
	/**
	 *  最少时间
	 */
	'BMAP_TRANSIT_POLICY_LEAST_TIME',
	/**
	 *  最少换乘
	 */
	'BMAP_TRANSIT_POLICY_LEAST_TRANSFER',
	/**
	 *  最少步行
	 */
	'BMAP_TRANSIT_POLICY_LEAST_WALKING',
	/**
	 *  不乘地铁
	 */
	'BMAP_TRANSIT_POLICY_AVOID_SUBWAYS'
}
export type _TransitPolicy = keyof typeof TransitPolicy
/**
 * 驾车方案的策略配置
 */
export enum DrivingPolicy {
	/**
	 * 最少时间
	 */
	'BMAP_DRIVING_POLICY_LEAST_TIME',
	/**
	 * 最短距离
	 */
	'BMAP_DRIVING_POLICY_LEAST_DISTANCE',
	/**
	 * 避开高速
	 */
	'BMAP_DRIVING_POLICY_AVOID_HIGHWAYS'
}

export enum LengthUnit {
	/**
	 * 公制单位
	 */
	BMAP_UNIT_METRIC = 'BMAP_UNIT_IMPERIAL',
	/**
	 * 英制单位
	 */
	BMAP_UNIT_IMPERIAL = 'BMAP_UNIT_IMPERIAL'
}
export type _LengthUnit = keyof typeof LengthUnit
// export enum MapTypeControlType {
// 	/**
// 	 * 按钮水平方式展示，默认采用此类型展示
// 	 */
// 	'BMAP_MAPTYPE_CONTROL_HORIZONTAL',
// 	/**
// 	 * 按钮呈下拉列表方式展示
// 	 */
// 	'BMAP_MAPTYPE_CONTROL_DROPDOWN',
// 	/**
// 	 * 以图片方式展示类型控件，设置该类型后无法指定maptypes属性
// 	 */
// 	'BMAP_MAPTYPE_CONTROL_MAP'
// }

export enum SymbolShapeType {
	/**
	 *  圆形，默认半径为1px
	 */
	'BMap_Symbol_SHAPE_CIRCLE' = 'BMap_Symbol_SHAPE_CIRCLE',
	/**
	 *  矩形，默认宽度4px、高度2px
	 */
	'BMap_Symbol_SHAPE_RECTANGLE' = 'BMap_Symbol_SHAPE_RECTANGLE',
	/**
	 *  菱形，默认外接圆半径10px
	 */
	'BMap_Symbol_SHAPE_RHOMBUS' = 'BMap_Symbol_SHAPE_RHOMBUS',
	/**
	 *  五角星，五角星外接圆半径为10px
	 */
	'BMap_Symbol_SHAPE_STAR' = 'BMap_Symbol_SHAPE_STAR',
	/**
	 *  箭头方向向下的闭合箭头
	 */
	'BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW' = 'BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW',
	/**
	 *  箭头方向向上的闭合箭头
	 */
	'BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW' = 'BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW',
	/**
	 *  箭头方向向下的非闭合箭头
	 */
	'BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW' = 'BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW',
	/**
	 *  箭头方向向上的非闭合箭头
	 */
	'BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW' = 'BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW',
	/**
	 *  定位点图标
	 */
	'BMap_Symbol_SHAPE_POINT' = 'BMap_Symbol_SHAPE_POINT',
	/**
	 *  预设的飞机形状
	 */
	'BMap_Symbol_SHAPE_PLANE' = 'BMap_Symbol_SHAPE_PLANE',
	/**
	 *  预设的照相机形状
	 */
	'BMap_Symbol_SHAPE_CAMERA' = 'BMap_Symbol_SHAPE_CAMERA',
	/**
	 *  预设的警告符号
	 */
	'BMap_Symbol_SHAPE_WARNING' = 'BMap_Symbol_SHAPE_WARNING',
	/**
	 *  预设的笑脸形状
	 */
	'BMap_Symbol_SHAPE_SMILE' = 'BMap_Symbol_SHAPE_SMILE',
	/**
	 *  预设的钟表形状
	 */
	'BMap_Symbol_SHAPE_CLOCK' = 'BMap_Symbol_SHAPE_CLOCK'
}
