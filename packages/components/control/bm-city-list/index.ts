import { withInstall } from '../../../utils/withInstall'
import BmCityList from './index.vue'

export const _BmCityList = withInstall(BmCityList)
export default BmCityList

declare module 'vue' {
	export interface GlobalComponents {
		BmCityList: typeof BmCityList
	}
}
