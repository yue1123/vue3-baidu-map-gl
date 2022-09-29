import { Ref, ref } from 'vue'
// 获取地图区域边界

export type AreaBoundary = string[]

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
		isLoading,
		boundaries,
		get: getFn
	}
}
