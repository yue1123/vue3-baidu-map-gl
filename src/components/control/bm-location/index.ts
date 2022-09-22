import { withInstall } from '../../../utils/withInstall'
import BmLocation from './index.vue'

export const _BmLocation = withInstall(BmLocation)
export default _BmLocation

declare module 'vue' {
	export interface GlobalComponents {
		BmLocation: typeof _BmLocation
	}
}
