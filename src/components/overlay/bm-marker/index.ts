import { withInstall } from '../../../utils/withInstall'
import _BmMarker from './index.vue'

export const BmMarker = withInstall(_BmMarker)
export default BmMarker

declare module 'vue' {
	export interface GlobalComponents {
		BmMarker: typeof BmMarker
	}
}
