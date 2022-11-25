import {  Ref, ref, onUnmounted  } from 'vue-demi'
// 获取地图区域边界

export type AreaBoundary = string[]

/**
 * 获取地图区域边界
 * @param cal 获取成功后的回调函数
 * @returns { isLoading, boundaries, get }
 */
export function useAreaBoundary(cal?: (boundaries: Ref<AreaBoundary>) => void) {
  const isLoading = ref<boolean>(false)
  const boundaries = ref<AreaBoundary>([])
  let boundaryInstance: BMapGL.Boundary | null
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

  onUnmounted(() => {
    // 手动回收内存
    boundaryInstance = null
  })
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
