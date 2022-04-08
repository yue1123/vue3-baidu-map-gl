import { withInstall } from 'utils/withInstall'
import _BmCircle from './index.vue'

export const BmCircle = withInstall(_BmCircle)
export default BmCircle

declare module 'vue' {
	export interface GlobalComponents {
		BmCircle: typeof BmCircle
	}
}
