import { App } from 'vue'
import Map from './components/baidu-map'
import Control from './components/control/bm-control'
import Scale from './components/control/bm-scale'
import Zoom from './components/control/bm-zoom'
import Navigation3d from './components/control/bm-navigation3d'
import Marker from './components/overlay/bm-marker'
import Label from './components/overlay/bm-label'
import Polyline from './components/overlay/bm-polyline'
import Polygon from './components/overlay/bm-polygon'
import Circle from './components/overlay/bm-circle'

import useBaseMapEffect from './hooks/useBaseMapEffect'
const components = [
	{
		name: 'baidu-map',
		com: Map
	},
	{
		name: 'bm-control',
		com: Control
	},
	{
		name: 'bm-scale',
		com: Scale
	},
	{
		name: 'bm-zoom',
		com: Zoom
	},
	{
		name: 'bm-navigation3d',
		com: Navigation3d
	},
	{
		name: 'bm-marker',
		com: Marker
	},
	{
		name: 'bm-label',
		com: Label
	},
	{
		name: 'bm-polyline',
		com: Polyline
	},
	{
		name: 'bm-polygon',
		com: Polygon
	},
	{
		name: 'bm-circle',
		com: Circle
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
	Map,
	Control,
	Scale,
	Zoom,
	Navigation3d,
	Marker,
	Label,
	Polyline,
	Polygon,
	Circle,
	install,
	useBaseMapEffect
}

export default {
	install
}

// TODO: 导出点的ts类型
// FIXME: marker 图片无法显示
