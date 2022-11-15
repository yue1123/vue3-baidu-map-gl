import { ref, watch } from 'vue'
import { Point } from './usePoint'

interface Location {
  point: Point
  code: number
  name: string
}
/**
 * ip定位
 */
export function useIpLocation(map?: any) {
  const location = ref<Location>({} as Location)
  const isLoading = ref<boolean>(true)

  let mapComponentInstance: any
  map &&
    watch(
      () => map.value,
      (n) => {
        mapComponentInstance = n
      }
    )

  const init = () => {
    isLoading.value = true
    const options: Record<string, any> = {}
    if (map) {
      options.renderOptions = {
        map: mapComponentInstance.getMapInstance()
      }
    }

    new BMapGL.LocalCity(options).get((res: any) => {
      isLoading.value = false
      res.point = res.center
      Reflect.deleteProperty(res, 'level')
      Reflect.deleteProperty(res, 'center')
      location.value = res
    })
  }

  return {
    location,
    isLoading,
    get: init
  }
}
