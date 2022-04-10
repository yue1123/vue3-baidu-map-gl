import { withInstall } from '../../../utils/withInstall'
import _BmPolygon from './index.vue'

export const BmPolygon = withInstall(_BmPolygon)
export default BmPolygon

declare module 'vue' {
	export interface GlobalComponents {
		BmPolygon: typeof BmPolygon
	}
}
