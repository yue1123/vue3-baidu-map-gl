import { withInstall } from '../../../utils/withInstall'
import _BmZoom from './index.vue'

export const BmZoom = withInstall(_BmZoom)
export default BmZoom

declare module 'vue' {
	export interface GlobalComponents {
		BmZoom: typeof BmZoom
	}
}
