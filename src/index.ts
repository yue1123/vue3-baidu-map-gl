import { App, Plugin } from 'vue'

import BaiduMap from './lib/components/baidu-map/index.vue'
import BmControl from './lib/components/control/bm-control/index.vue'
import BmScale from './lib/components/control/bm-scale/index.vue'
import BmZoom from './lib/components/control/bm-zoom/index.vue'

export type BaiduMapOptions = {
	ak: string
}

const baiduMapInitPlugin: Plugin = {
	install(app: App, options: BaiduMapOptions) {
		app.provide('baiduMapAk', options.ak)
	}
}
export { BaiduMap, BmControl, BmScale, BmZoom }

export default baiduMapInitPlugin
