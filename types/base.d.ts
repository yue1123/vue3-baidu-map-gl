/**
 * 表示一个地理坐标点。
 */
export interface Point {
	/**
	 * 地理经度
	 */
	lng: number
	/**
	 * 地理纬度
	 */
	lat: number
	/**
	 * 判断坐标点是否相等，当且仅当两点的经度和纬度均相等时返回true
	 * @param other 另一个地理坐标点
	 */
	equals: (other: Point) => boolean
  /**
   * @param {number} lng 地理经度
   * @param {number} lat 地理纬度
   */
	new (ng: number , lat: number ): Point
}

/**
 * 表示地图上的一点，单位为像素。
 */
export interface Pixel {
	/**
	 * x坐标
	 */
	x: number
	/**
	 * y坐标
	 */
	y: number
	/**
	 * 判断坐标点是否相等，当且仅当两点的x坐标和y坐标均相等时返回true
	 * @param other 另一个像素点
	 */
	equals(other: Point): boolean

	/**
   * @param {number} x x坐标
   * @param {number} y y坐标
   */
  new (x: number, y: number): Pixel
}

/**
 * 创建一个包含所有给定点坐标的矩形区域
 */
export interface Bounds {
	/**
	 * 矩形区域的西南角
	 */
	sw: Point
	/**
	 * 矩形区域的东北角
	 */
	ne: Point
	/**
	 * 当且仅当此矩形中的两点参数都等于其他矩形的两点参数时，返回true
	 * @param other 另一个矩形
	 */
	equals(other: Bounds): boolean
	/**
	 * 判断一个点是否包含在当前矩形区域,如果点的地理坐标位于此矩形内，则返回true
	 * @param point 地理坐标点
	 */
	containsPoint(point: Point): boolean
	/**
	 * 传入的矩形区域完全包含于此矩形区域中，则返回true
	 * @param bounds 矩形
	 */
	containsBounds(bounds: Bounds): Boolean
	/**
	 * 计算与另一矩形的交集区域
	 * @param bounds 矩形
	 */
	intersects(other: Bounds): Bounds
	/**
	 * 放大此矩形，使其包含给定的点
	 */
	extend(point: Point): void
	/**
	 * 返回矩形的中心点
	 */
	getCenter(): Point
	/**
	 * 如果矩形为空，则返回true
	 */
	isEmpty(): boolean
	/**
	 * 返回矩形区域的西南角
	 */
	getSouthWest(): Point
	/**
	 * 返回矩形区域的东北角
	 */
	getNorthEast(): Point
	/**
	 * 返回矩形区域的跨度
	 */
	toSpan(): Point
  /**
   * @param {Point} sw 矩形区域的西南角
   * @param {Point} y 矩形区域的东北角
   */
  new (sw: Point , ne: Point): Bounds
}




/**
 * 此类以像素表示一个矩形区域的大小。
 * 以指定的宽度和高度创建一个矩形区域大小对象
 */
export interface Size {
	/**
	 * 宽度
	 */
	width: Number
	/**
	 * 宽度
	 */
	height: Number
	/**
	 * 当且仅当此矩形中的宽度和高度都等于其他矩形的宽度和高度时，返回true
	 * @param {Size} other 另一个矩形区域大小
	 */
	equals(other: Size): boolean
	/**
	 * @param {number} width 宽度
	 * @param {number} height 高度
	 */
	new (width: Number, height: Number): Size
}