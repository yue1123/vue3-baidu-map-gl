import { ref } from 'vue'
/**
 * 地图经纬度点
 */
export type Point = { lng: number; lat: number }
/**
 * 获取一个地图经纬度点实例
 */
export function usePoint() {
  const point = ref<null | BMapGL.Point>(null)

  const genPoint = ({ lng, lat }: { lng: number; lat: number }) => {
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
