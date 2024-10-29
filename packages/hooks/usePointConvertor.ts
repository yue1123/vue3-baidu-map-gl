import { ref } from 'vue'
import { error, Point } from '../utils'
export enum CoordinatesFromType {
  /**
   *  WGS84坐标（GPS标准坐标）
   */
  'COORDINATES_WGS84' = 1,
  /**
   *  WGS84的平面墨卡托坐标（搜狗地图坐标）
   */
  'COORDINATES_WGS84_MC' = 2,
  /**
   * GCJ02坐标(火星坐标)，即高德地图、腾讯地图、谷歌坐标和MapABC等地图使用的坐标；
   */
  'COORDINATES_GCJ02' = 3,
  /**
   *  GCJ02的平面墨卡托坐标（火星坐标对应的墨卡托平面坐标）
   */
  'COORDINATES_GCJ02_MC' = 4,
  /**
   *  百度地图采用的经纬度坐标（bd09ll）
   */
  'COORDINATES_BD09' = 5,
  /**
   * 百度地图采用的墨卡托平面坐标（bd09mc）
   */
  'COORDINATES_BD09_MC' = 6,
  /**
   * 图吧地图坐标
   */
  'COORDINATES_MAPBAR' = 7,
  /**
   * 51地图坐标
   */
  'COORDINATES_51' = 8
}

export enum CoordinatesToType {
  /**
   * GCJ02坐标(火星坐标)，即高德地图、腾讯地图、谷歌坐标和MapABC等地图使用的坐标；
   */
  'COORDINATES_GCJ02' = 3,
  /**
   * 百度地图采用的经纬度坐标（bd09ll）
   */
  'COORDINATES_BD09' = 5,
  /**
   * 百度地图采用的墨卡托平面坐标（bd09mc）
   */
  'COORDINATES_BD09_MC' = 6
}

export type UsePointConvertorStatus = 0 | 1 | 4 | 21 | 22 | 24 | 25 | 26

export function usePointConvertor() {
  const result = ref<Point[]>()
  const isLoading = ref<boolean>(true)
  const isError = ref<boolean>(false)
  const status = ref<UsePointConvertorStatus>()
  let convertor: BMapGL.Convertor
  const init = (points: Point[], from: CoordinatesFromType, to: CoordinatesToType) => {
    if (!points) return error('usePointConvertor', 'missing required params: points')
    if (!from) return error('usePointConvertor', 'missing required params: from')
    if (!to) return error('usePointConvertor', 'missing required params: to')
    if (!points.length) return
    if (!convertor) {
      convertor = new BMapGL.Convertor()
    }
    isLoading.value = true
    const pointsInstance = points.map((item) => new BMapGL.Point(item.lng, item.lat))
    getConvertor(convertor, pointsInstance, from, to)
      .then((res) => {
        result.value = res.points.map((item) => ({ lng: item.lng, lat: item.lat }))
        status.value = res.status as UsePointConvertorStatus
        isError.value = false
      })
      .catch((error) => {
        if (error) {
          status.value = error as UsePointConvertorStatus
        }
        isError.value = true
      })
      .finally(() => {
        isLoading.value = false
      })
  }
  return {
    convert: init,
    result,
    isLoading,
    isError,
    status
  }
}

function getConvertor(
  convertor: BMapGL.Convertor,
  point: BMapGL.Point[],
  from: CoordinatesFromType,
  to: CoordinatesToType
) {
  return new Promise<{ points: BMapGL.Point[]; status: number }>((resolve, reject) => {
    convertor.translate(point, from, to, (res) => {
      if (res.status === 0) resolve(res)
      else reject(res.status)
    })
  })
}
