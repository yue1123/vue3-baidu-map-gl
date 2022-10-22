import { Ref, ref } from 'vue'
// 获取地图区域边界

export type AreaBoundary = string[]

/**
 * 获取地图区域边界
 * @param cal 获取成功后的回调函数
 * @returns { isLoading, boundaries, get }
 */
export function useAreaBoundary(cal?: (boundaries: Ref<AreaBoundary>) => void) {
  let isLoading = ref<boolean>(false)
  let boundaries = ref<AreaBoundary>([])
  let boundaryInstance: BMapGL.Boundary
  const getFn = (area: string) => {
    if (!boundaryInstance) {
      boundaryInstance = new BMapGL.Boundary()
    }
    isLoading.value = true
    boundaryInstance.get(area, (rs) => {
      isLoading.value = false
      boundaries.value = rs.boundaries
      cal && cal(boundaries)
    })
  }

  return {
    /**
     * 是否加载中
     */
    isLoading,
    /**
     * 区域边界数据
     */
    boundaries,
    /**
     * 获取指定区域边界
     * @param {string} area 区域名
     * @example get('北京市')
     */
    get: getFn
  }
}
