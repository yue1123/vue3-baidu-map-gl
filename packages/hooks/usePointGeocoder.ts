import { Ref, ref } from 'vue'
import { Point } from './usePoint'
import { error, isArray } from '../utils'

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

type Result = PointGeocoderResult | PointGeocoderResult[] | null
/**
 * 由地址解析坐标点
 */
export function usePointGeocoder(options?: BMapGL.LocationOptions | null, cal?: (point: Ref<Result>) => void) {
  options = options || {}
  const result = ref<Result>()
  const isLoading = ref<boolean>(true)
  const isEmpty = ref<boolean>(true)
  let geocoder: BMapGL.Geocoder
  const init = (point: Point | Point[]) => {
    if (!point) return error('missed required params: point')
    if (!geocoder) {
      geocoder = new BMapGL.Geocoder()
    }
    const isBatch = isArray(point)
    isLoading.value = true
    ;(() => {
      if (isBatch) {
        return Promise.all(
          (point as Point[]).map((item) => getAddress(geocoder, item, options as BMapGL.LocationOptions | null))
        )
      }
      return getAddress(geocoder, point as Point, options as BMapGL.LocationOptions | null)
    })()
      .then((res) => {
        if (res) {
          if (isBatch) {
            let emptyCount = 0
            result.value = (res as any[]).map((item) => {
              emptyCount += +!item
              return item
            })
            isEmpty.value = emptyCount === (res as any[]).length
          } else {
            result.value = res as PointGeocoderResult
            isEmpty.value = false
          }
        } else {
          result.value = res
          isEmpty.value = true
        }
        cal && cal(result as Ref<Result>)
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

function getAddress(geocoder: BMapGL.Geocoder, point: Point, options: BMapGL.LocationOptions | null) {
  return new Promise<PointGeocoderResult | null>((resolve) => {
    geocoder.getLocation(
      new BMapGL.Point(point.lng, point.lat),
      (res: PointGeocoderResult) => {
        if (res) resolve(res)
        else resolve(null)
      },
      options as BMapGL.LocationOptions
    )
  })
}
