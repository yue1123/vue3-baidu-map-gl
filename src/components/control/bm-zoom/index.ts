import { withInstall } from 'utils/withInstall'
import _BmControl from './index.vue'

export const BmControl = withInstall(_BmControl)
export default BmControl

declare module 'vue' {
	export interface GlobalComponents {
		BmControl: typeof BmControl
	}
}
