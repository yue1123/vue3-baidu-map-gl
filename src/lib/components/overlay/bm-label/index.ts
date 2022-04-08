import { withInstall } from 'utils/withInstall'
import _BmLabel from './index.vue'

export const BmLabel = withInstall(_BmLabel)
export default BmLabel

declare module 'vue' {
	export interface GlobalComponents {
		BmLabel: typeof BmLabel
	}
}
