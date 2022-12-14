import { Ref, ref } from 'vue'
import { error, isArray, type Point } from '../utils'

export type AddressGeocoderResult = Point | Point[]
/**
 * 由地址解析坐标点
 */
export function useAddressGeocoder<T extends AddressGeocoderResult = AddressGeocoderResult>(
  cal?: (point: Ref<T>) => void
) {
  const point = ref<T | null>()
  const isLoading = ref<boolean>(true)
  const isEmpty = ref<boolean>(true)
  let geocoder: BMapGL.Geocoder
  const init = () => {
    if (!geocoder) {
      geocoder = new BMapGL.Geocoder()
    }
  }
  const get = (address: T extends Point ? string : string[], city: string) => {
    init()
    if (!address) return error('missed required params: address')
    if (!city) return error('missed required  params: city')
    const isBatch = isArray(address)
    isLoading.value = true
    ;(() => {
      if (isBatch) {
        return Promise.all((address as string[]).map((item) => getPoint(geocoder, item, city)))
      }
      return getPoint(geocoder, address as string, city)
    })()
      .then((res) => {
        if (res) {
          if (isBatch) {
            let emptyCount = 0
            point.value = (res as any[]).map((item) => {
              emptyCount += +!item
              return item
            }) as T
            isEmpty.value = emptyCount === (res as any[]).length
          } else {
            point.value = res as T
            isEmpty.value = false
          }
        } else {
          point.value = res
          isEmpty.value = true
        }
        cal && cal(point as Ref<T>)
      })
      .catch((err) => {
        error(err)
        isEmpty.value = true
        point.value = null
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  return {
    get,
    point,
    isLoading,
    isEmpty
  }
}

function getPoint(geocoder: BMapGL.Geocoder, address: string, city: string): Promise<Point | null> {
  return new Promise<Point | null>((resolve) => {
    // 将地址解析结果显示在地图上，并调整地图视野
    geocoder.getPoint(
      address,
      (_point: BMapGL.Point) => {
        if (_point) {
          resolve(_point)
        } else {
          resolve(null)
        }
      },
      city
    )
  })
}
