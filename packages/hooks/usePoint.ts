import { ref } from 'vue'
import { type Point } from '../utils'
/**
 * 获取一个地图经纬度点实例
 */
export function usePoint() {
  const point = ref<null | BMapGL.Point>(null)

  const genPoint = ({ lng, lat }: Point) => {
    point.value = new BMapGL.Point(lng, lat)
  }
  return {
    /**
     * BMapGL.Point 实例
     */
    point,
    /**
     * 设置实例点坐标
     */
    set: genPoint
  }
}
