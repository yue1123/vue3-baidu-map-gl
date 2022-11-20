import { Ref, ref } from 'vue'
import { Point } from './usePoint'
import { error } from '../utils'

interface PointGeocoderResult {
  /**
   * 坐标点
   */
  point: Point
  /**
   * 地址描述
   */
  address: string
  /**
   * 结构化的地址描述
   */
  addressComponents: {
    city: string
    district: string
    province: string
    street: string
    streetNumber: string
  }
  /**
   * 附近的POI点
   */
  surroundingPois: Array<BMapGL.LocalResultPoi>
  /**
   * 商圈字段，代表此点所属的商圈
   */
  business: string
}

/**
 * 由地址解析坐标点
 */
export function usePointGeocoder(cal: (point: Ref<PointGeocoderResult>) => void) {
  const result = ref<PointGeocoderResult>()
  const isLoading = ref<boolean>(true)
  const isEmpty = ref<boolean>(true)
  let geocoder: BMapGL.Geocoder
  const init = (point: Point, options?: BMapGL.LocationOptions | null) => {
    if (!point) return error('missed required params: point')
    options = options || {}
    new Promise<PointGeocoderResult>((resolve, reject) => {
      isLoading.value = true
      if (!geocoder) {
        geocoder = new BMapGL.Geocoder()
      }
      geocoder.getLocation(
        new BMapGL.Point(point.lng, point.lat),
        (res: PointGeocoderResult) => {
          if (res) resolve(res)
          else reject()
        },
        options as BMapGL.LocationOptions
      )
    })
      .then((res) => {
        result.value = res
        isEmpty.value = false
        cal && cal(result as Ref<PointGeocoderResult>)
      })
      .catch(() => {
        isEmpty.value = true
        result.value = undefined
      })
      .finally(() => {
        isLoading.value = false
      })
  }
  return {
    get: init,
    result,
    isLoading,
    isEmpty
  }
}
