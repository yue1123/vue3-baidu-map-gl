import { Ref, ref } from 'vue'
import { Point } from './usePoint'
import { warn, error } from '../utils'
/**
 * 由地址解析坐标点
 */
export function useAddressGeocoder(cal: (point: Ref<Point>) => void) {
  const point = ref<Point>()
  const isLoading = ref<boolean>(true)
  const isEmpty = ref<boolean>(true)
  let geocoder: BMapGL.Geocoder
  const init = (address: string, city: string) => {
    if (!address) return error('missed required params: address')
    if (!city) return error('missed required  params: city')
    new Promise<Point>((resolve, reject) => {
      isLoading.value = true
      if (!geocoder) {
        geocoder = new BMapGL.Geocoder()
      }
      // 将地址解析结果显示在地图上，并调整地图视野
      geocoder.getPoint(
        address,
        (_point: BMapGL.Point) => {
          if (_point) {
            point.value = _point
            resolve(_point)
          } else {
            reject('empty result')
          }
        },
        city
      )
    })
      .then((_point) => {
        point.value = { lng: _point.lng, lat: _point.lat }
        isEmpty.value = false
        cal && cal(point as Ref<Point>)
      })
      .catch((err) => {
        warn(err)
        isEmpty.value = true
        point.value = undefined
      })
      .finally(() => {
        isLoading.value = false
      })
  }
  return {
    get: init,
    point,
    isLoading,
    isEmpty
  }
}
