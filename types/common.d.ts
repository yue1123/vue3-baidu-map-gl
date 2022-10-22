declare enum ControlAnchor {
  /**
   * 控件将定位到地图的右上角
   */
  'BMAP_ANCHOR_TOP_RIGHT' = 0,
  /**
   * 控件将定位到地图的左上角
   */
  'BMAP_ANCHOR_TOP_LEFT' = 1,
  /**
   * 控件将定位到地图的左下角
   */
  'BMAP_ANCHOR_BOTTOM_LEFT' = 2,
  /**
   * 控件将定位到地图的右下角
   */
  'BMAP_ANCHOR_BOTTOM_RIGHT' = 3
}

declare type _ControlAnchor = keyof typeof ControlAnchor
declare enum MapType {
  /**
   * 此地图类型展示普通街道视图
   */
  'BMAP_NORMAL_MAP' = 'B_NORMAL_MAP',
  /**
   * 地球模式
   */
  'BMAP_EARTH_MAP' = 'B_EARTH_MAP',
  /**
   * 普通卫星图
   */
  'BMAP_SATELLITE_MAP' = 'B_SATELLITE_MAP'
}
declare type _MapType = keyof typeof MapType

/**
 * 市内公交方案换乘策略
 */
declare enum TransitPolicy {
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
declare type _TransitPolicy = keyof typeof TransitPolicy
/**
 * 驾车方案的策略配置
 */
declare enum DrivingPolicy {
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

declare enum LengthUnit {
  /**
   * 公制单位
   */
  BMAP_UNIT_METRIC = 'metric',
  /**
   * 英制单位
   */
  BMAP_UNIT_IMPERIAL = 'us'
}

declare type LengthUnitValue = LengthUnit.BMAP_UNIT_METRIC | LengthUnit.BMAP_UNIT_IMPERIAL

declare type _LengthUnit = keyof typeof LengthUnit

/**
 * NavigationControl控件的类型
 */
declare enum NavigationControlType {
  /**
   * 标准的平移缩放控件（包括平移、缩放按钮和滑块）
   */
  BMAP_NAVIGATION_CONTROL_LARGE = 0,
  /**
   * 仅包含平移和缩放按钮
   */
  BMAP_NAVIGATION_CONTROL_SMALL = 1,
  /**
   * 仅包含平移按钮
   */
  BMAP_NAVIGATION_CONTROL_PAN = 2,
  /**
   * 仅包含缩放按钮
   */
  BMAP_NAVIGATION_CONTROL_ZOOM = 3,
  /**
   *
   */
  BMAP_NAVIGATION_CONTROL_ANIM = 4
}
