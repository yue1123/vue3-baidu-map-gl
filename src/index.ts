import { App } from 'vue'

import BaiduMap from './lib/components/baidu-map'
import BmControl from './lib/components/control/bm-control'
import BmScale from './lib/components/control/bm-scale'
import BmZoom from './lib/components/control/bm-zoom'
import BmNavigation3d from './lib/components/control/bm-navigation3d'
import BmMarker from './lib/components/overlay/bm-marker'
import BmLabel from './lib/components/overlay/bm-label'
import BmPolyline from './lib/components/overlay/bm-polyline'
import BmPolygon from './lib/components/overlay/bm-polygon'
import BmCircle from './lib/components/overlay/bm-circle'

const components = [
	{
		name: 'baidu-map',
		com: BaiduMap
	},
	{
		name: 'bm-control',
		com: BmControl
	},
	{
		name: 'bm-scale',
		com: BmScale
	},
	{
		name: 'bm-zoom',
		com: BmZoom
	},
	{
		name: 'bm-navigation3d',
		com: BmNavigation3d
	},
	{
		name: 'bm-marker',
		com: BmMarker
	},
	{
		name: 'bm-label',
		com: BmLabel
	},
	{
		name: 'bm-polyline',
		com: BmPolyline
	},
	{
		name: 'bm-polygon',
		com: BmPolygon
	},
	{
		name: 'bm-circle',
		com: BmCircle
	}
]
// 全局注册
const install = (app: App) => {
	components.forEach((item: any) => {
		item.com.name = item.name
		app.use(item.com)
	})
}

// 局部注册
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
	BmCircle,
	install
}

export default {
	install
}
