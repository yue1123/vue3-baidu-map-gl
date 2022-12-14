export interface _Point {
  /**
   * 地理经度
   */
  lng: number
  /**
   * 地理纬度
   */
  lat: number
}
export type Point = _Point | BMapGL.Point
export type ControlAnchor = _ControlAnchor
export type StrokeStyle = 'solid' | 'dashed' | 'dotted'
