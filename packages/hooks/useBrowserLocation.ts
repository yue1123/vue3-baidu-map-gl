import { ref, Ref } from 'vue'
import { Point } from './usePoint'

interface UseLocationOptions {
  /**
   * 是否开启SDK辅助定位，仅当使用环境为移动web混合开发，且开启了定位sdk辅助定位功能后生效
   */
  enableSDKLocation?: boolean
  /**
   * 是否要求浏览器获取最佳效果，同浏览器定位接口参数。默认为false
   */
  enableHighAccuracy?: boolean
  /**
   * 超时事件，单位为毫秒。默认为10秒
   */
  timeout?: number
  /**
   * 允许返回指定事件内的缓存结果，单位为毫秒。如果为0，则每次请求都获取最新的定位结果。默认为10分钟
   */
  maximumAge?: number
  /**
   * 是否开启SDK辅助定位
   */
  SDKLocation?: boolean
}

type Status = 'BMAP_STATUS_SUCCESS' | 'ERR_PERMISSION_DENIED' | 'ERR_POSITION_UNAVAILABLE' | 'ERR_POSITION_TIMEOUT'

const statusMap: Record<number, Status> = {
  // 定位成功
  0: 'BMAP_STATUS_SUCCESS',
  // 定位超时
  8: 'ERR_POSITION_TIMEOUT',
  // 定位不可用
  2: 'ERR_POSITION_UNAVAILABLE',
  // 没有权限，定位被拒绝
  6: 'ERR_PERMISSION_DENIED'
}

interface Location {
  accuracy: number
  point: Point
  address: {
    country: string
    city: string
    city_code: string
    district: string
    province: string
    street: string
    street_number: string
  }
}

export function useBrowserLocation(options?: UseLocationOptions | null, cal?: (location: Ref<Location>) => void) {
  options = options || {}
  const location = ref<Location>({} as Location)
  const isLoading = ref<boolean>(true)
  const isError = ref<boolean>(false)
  const status = ref<Status>()
  const init = () => {
    options!.SDKLocation = options!.enableSDKLocation
    new Promise<any>((resolve, reject) => {
      isLoading.value = true
      const geolocation = new BMapGL.Geolocation()
      geolocation.getCurrentPosition(function (res) {
        const _status = geolocation.getStatus()
        status.value = statusMap[_status]
        if (_status === window['BMAP_STATUS_SUCCESS']) {
          const { address, accuracy, point } = res
          resolve({
            accuracy,
            point,
            address
          })
        } else {
          reject()
        }
      }, options as UseLocationOptions)
    })
      .then((res) => {
        isError.value = false
        location.value = res
        cal && cal(location)
      })
      .catch(() => {
        isError.value = true
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  return {
    get: init,
    isLoading,
    isError,
    status,
    location
  }
}
