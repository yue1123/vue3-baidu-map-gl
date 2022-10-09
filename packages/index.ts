import { App } from 'vue'
import { PluginsList } from './utils/pluginLoader'

declare module 'vue' {
	interface ComponentCustomProperties {
		$baiduMapAk: string
		$baiduMapPlugins: PluginsList
	}
}
interface InitOptions {
	ak?: string
	plugins?: PluginsList
}
// hooks
export * from './hooks/useAreaBoundary'
export * from './hooks/useTrackAnimation'

// components
import Map from './components/bm-map/index.vue'
import Control from './components/control/bm-control/index.vue'
import Scale from './components/control/bm-scale/index.vue'
import Zoom from './components/control/bm-zoom/index.vue'
import CityList from './components/control/bm-city-list/index.vue'
import Location from './components/control/bm-location/index.vue'
import Copyright from './components/control/bm-copyright/index.vue'
import Navigation3d from './components/control/bm-navigation3d/index.vue'
import Marker from './components/overlay/bm-marker/index.vue'
import Label from './components/overlay/bm-label/index.vue'
import Polyline from './components/overlay/bm-polyline/index.vue'
import Polygon from './components/overlay/bm-polygon/index.vue'
import Circle from './components/overlay/bm-circle/index.vue'

const componentsList = [
	Map,
	Control,
	Scale,
	Zoom,
	Navigation3d,
	Marker,
	Copyright,
	Location,
	Label,
	Polyline,
	Polygon,
	Circle,
	CityList
]

// global register
const vue3BaiduMapGl = {
	install: (app: App, options?: InitOptions) => {
		const { ak, plugins } = options || {}
		for (const component of componentsList) {
			const name = component.name
			app.component(name, component)
			app.component(name.replace('Bm', ''), component)
		}
		app.config.globalProperties.$baiduMapPlugins = plugins || []
		ak && (app.config.globalProperties.$baiduMapAk = ak)
	},
	version: '__VERSION__'
}
export {
	Map,
	Control,
	Scale,
	Zoom,
	Navigation3d,
	Marker,
	Copyright,
	Location,
	Label,
	Polyline,
	Polygon,
	Circle,
	CityList
}

export default vue3BaiduMapGl
