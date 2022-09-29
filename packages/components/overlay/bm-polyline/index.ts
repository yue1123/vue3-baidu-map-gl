import { withInstall } from '../../../utils/withInstall'
import _BmPolyline from './index.vue'

export const BmPolyline = withInstall(_BmPolyline)
export default BmPolyline

declare module 'vue' {
	export interface GlobalComponents {
		BmPolyline: typeof BmPolyline
	}
}
