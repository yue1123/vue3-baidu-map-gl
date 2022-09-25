import { withInstall } from '../../../utils/withInstall'
import BmNavigation from './index.vue'

export const _BmNavigation = withInstall(BmNavigation)
export default BmNavigation

declare module 'vue' {
	export interface GlobalComponents {
		BmNavigation: typeof BmNavigation
	}
}
