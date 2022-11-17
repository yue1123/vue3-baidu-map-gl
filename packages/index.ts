import { App } from 'vue'
import { UserPlugins, PluginsSourceLink } from './utils/pluginLoader'

declare module 'vue' {
  interface ComponentCustomProperties {
    $baiduMapAk: string
    $baiduMapPlugins: UserPlugins
    $baiduMapPluginsSourceLink: PluginsSourceLink
  }
}
interface InitOptions {
  ak?: string
  plugins?: UserPlugins
  pluginsSourceLink?: PluginsSourceLink
}
// hooks
export * from './hooks/useAreaBoundary'
export * from './hooks/useTrackAnimation'
export * from './hooks/usePoint'
export * from './hooks/useViewAnimation'
export * from './hooks/useIpLocation'
export * from './hooks/useBrowserLocation'

// components
import Map from './components/map/index.vue'

import Control from './components/control/control/index.vue'
import Scale from './components/control/scale/index.vue'
import Zoom from './components/control/zoom/index.vue'
import CityList from './components/control/city-list/index.vue'
import Location from './components/control/location/index.vue'
import Copyright from './components/control/copyright/index.vue'
import Navigation3d from './components/control/navigation3d/index.vue'
import PanoramaControl from './components/control/panorama-control/index.vue'
import PanoramaCoverageLayer from './components/layer/panorama-coverage/index.vue'

import Marker from './components/overlay/marker/index.vue'
import Marker3d from './components/overlay/marker3d/index.vue'
import Label from './components/overlay/label/index.vue'
import Polyline from './components/overlay/polyline/index.vue'
import BezierCurve from './components/overlay/bezierCurve/index.vue'
import Polygon from './components/overlay/polygon/index.vue'
import InfoWindow from './components/overlay/infowindow/index.vue'
import Circle from './components/overlay/circle/index.vue'
import Prism from './components/overlay/prism/index.vue'
import GroundOverlay from './components/overlay/ground-overlay/index.vue'

import ContextMenu from './components/contextMenu/index.vue'
// import MapvglView from './components/layer/mapvgl-view/index.vue'

const componentsList = [
  Map,
  Control,
  Scale,
  Zoom,
  Navigation3d,
  Marker,
  Marker3d,
  Copyright,
  Location,
  Label,
  Polyline,
  Polygon,
  BezierCurve,
  Circle,
  CityList,
  Prism,
  InfoWindow,
  ContextMenu,
  PanoramaControl,
  PanoramaCoverageLayer,
  GroundOverlay
  // MapvglView
]

// global register
const vue3BaiduMapGl = {
  install: (app: App, options?: InitOptions) => {
    const { ak, plugins: p, pluginsSourceLink: psl } = options || {}
    const appProp = app.config.globalProperties
    for (const component of componentsList) {
      const name = component.name
      app.component(name, component)
      app.component(name.replace('B', ''), component)
    }
    ak && (appProp.$baiduMapAk = ak)
    p && (appProp.$baiduMapPlugins = p)
    psl && (appProp.$baiduMapPluginsSourceLink = psl)
  },
  version: '__VERSION__'
}
// for umd
export const install = vue3BaiduMapGl.install
export const version = vue3BaiduMapGl.version

export {
  Map,
  Control,
  Scale,
  Zoom,
  Navigation3d,
  Marker,
  Marker3d,
  Copyright,
  Location,
  Label,
  Polyline,
  Polygon,
  BezierCurve,
  Circle,
  CityList,
  Prism,
  InfoWindow,
  ContextMenu,
  PanoramaControl,
  PanoramaCoverageLayer,
  GroundOverlay
}
export default vue3BaiduMapGl

/**
 * TODO:
 * 1. 导出 mapType ts类型
 * 2. useBrowserLocation options 可以为 null
 * 3. control 动态 offset
 */
