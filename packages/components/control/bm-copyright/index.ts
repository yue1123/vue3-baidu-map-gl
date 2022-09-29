import { withInstall } from '../../../utils/withInstall'
import BmCopyright from './index.vue'

export const _BmCopyright = withInstall(BmCopyright)
export default BmCopyright

declare module 'vue' {
	export interface GlobalComponents {
		BmCopyright: typeof BmCopyright
	}
}
