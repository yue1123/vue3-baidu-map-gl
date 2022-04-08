import { withInstall } from 'utils/withInstall'
import _BaiduMap from './index.vue'

export const BaiduMap = withInstall(_BaiduMap)
export default BaiduMap

declare module 'vue' {
	export interface GlobalComponents {
		BaiduMap: typeof BaiduMap
	}
}
