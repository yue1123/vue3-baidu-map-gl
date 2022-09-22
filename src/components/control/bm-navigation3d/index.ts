import { withInstall } from '../../../utils/withInstall'
import BmNavigation3d from './index.vue'

export const _BmNavigation3d = withInstall(BmNavigation3d)
export default BmNavigation3d

declare module 'vue' {
	export interface GlobalComponents {
		BmNavigation3d: typeof BmNavigation3d
	}
}
