import { withInstall } from 'utils/withInstall'
import _BmScale from './index.vue'

export const BmScale = withInstall(_BmScale)
export default BmScale

declare module 'vue' {
	export interface GlobalComponents {
		BmScale: typeof BmScale
	}
}
