import { type Point } from './types'

/**
 * 点对象转地图点实例
 */
export function pathPointsToMapPoints(pathPoints: Point[]) {
  return pathPoints.map(({ lng, lat }) => new BMapGL.Point(lng, lat))
}

export function getPoint({ lng, lat }: Point) {
  return new BMapGL.Point(lng, lat)
}
