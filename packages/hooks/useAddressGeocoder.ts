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
    if (!address) return error('useAddressGeocoder', 'missing required params: address')
    if (!city) return error('useAddressGeocoder', 'missing required  params: city')
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
        error('useAddressGeocoder', err.message)
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
    geocoder.getPoint(address, (point: BMapGL.Point) => resolve(point ? point : null), city)
  })
}
