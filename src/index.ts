import { App } from 'vue'
import BaiduMap from './components/baidu-map'
import BmControl from './components/control/bm-control'
import BmScale from './components/control/bm-scale'
import BmZoom from './components/control/bm-zoom'
import BmNavigation3d from './components/control/bm-navigation3d'
import BmMarker from './components/overlay/bm-marker'
import BmLabel from './components/overlay/bm-label'
import BmPolyline from './components/overlay/bm-polyline'
import BmPolygon from './components/overlay/bm-polygon'
import BmCircle from './components/overlay/bm-circle'

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
