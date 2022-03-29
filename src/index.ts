import { App, Plugin } from 'vue'

import BaiduMap from './lib/components/baidu-map/index.vue'
import BmControl from './lib/components/control/bm-control/index.vue'

export type BaiduMapOptions = {
	ak: string
}

const baiduMapInitPlugin: Plugin = {
	install(app: App, options: BaiduMapOptions) {
		app.provide('baiduMapAk', options.ak)
	}
}
export { BaiduMap, BmControl }

export default baiduMapInitPlugin
