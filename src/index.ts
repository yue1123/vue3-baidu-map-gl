import { App, Plugin } from 'vue'

import BaiduMap from './lib/components/baidu-map/index.vue'
import BmControl from './lib/components/control/bm-control/index.vue'
import BmScale from './lib/components/control/bm-scale/index.vue'
import BmZoom from './lib/components/control/bm-zoom/index.vue'
import BmNavigation3d from './lib/components/control/bm-navigation3d/index.vue'
import BmMarker from './lib/components/overlay/bm-marker/index.vue'
import BmLabel from './lib/components/overlay/bm-label/index.vue'
import BmPolyline from './lib/components/overlay/bm-polyline/index.vue'
import BmPolygon from './lib/components/overlay/bm-polygon/index.vue'
import BmCircle from './lib/components/overlay/bm-circle/index.vue'

export type BaiduMapOptions = {
	ak: string
}

const baiduMapInitPlugin: Plugin = {
	install(app: App, options: BaiduMapOptions) {
		app.provide('baiduMapAk', options.ak)
	}
}
export {
	BaiduMap,
	BmControl,
	BmScale,
	BmZoom,
	BmNavigation3d,
	BmMarker,
	BmLabel,
	BmPolyline,
	BmPolygon,
	BmCircle
}

export default baiduMapInitPlugin
