import { type Point } from './types'
export function pathPointsToMapPoints(pathPoints: Point[]) {
  return pathPoints.map(({ lng, lat }) => new BMapGL.Point(lng, lat))
}
