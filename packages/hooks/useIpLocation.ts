import { ref, Ref } from 'vue'
import { type Point } from '../utils'

interface Location {
  point: Point
  code: number
  name: string
}
/**
 * ip定位
 */
export function useIpLocation(cal?: (location: Ref<Location>) => void) {
  const location = ref<Location>({} as Location)
  const isLoading = ref<boolean>(true)

  const init = () => {
    isLoading.value = true
    new BMapGL.LocalCity().get((res: any) => {
      isLoading.value = false
      location.value = {
        code: res.code,
        point: res.center,
        name: res.name
      }
      cal && cal(location)
    })
  }

  return {
    location,
    isLoading,
    get: init
  }
}
