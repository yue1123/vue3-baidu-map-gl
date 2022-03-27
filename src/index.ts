import { App, Plugin } from 'vue'

import BaiduMap from './lib/components/baidu-map/index.vue'

export type BaiduMapOptions = {
	ak: string
}

const baiduMapInitPlugin: Plugin = {
	install(app: App, options: BaiduMapOptions) {
		app.provide('baiduMapAk', options.ak)
	}
}
export { BaiduMap }

export default baiduMapInitPlugin
