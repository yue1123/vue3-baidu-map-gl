import { BMap } from './components/map/index'
import { BControl } from './components/control/control/index'
import { BScale } from './components/control/scale/index'
import { BZoom } from './components/control/zoom/index'
import { BCityList } from './components/control/city-list/index'
import { BLocation } from './components/control/location/index'
import { BCopyright } from './components/control/copyright/index'
import { BNavigation3d } from './components/control/navigation3d/index'
import { BPanoramaControl } from './components/control/panorama-control/index'
import { BPanoramaCoverageLayer } from './components/layer/panorama-coverage/index'
import { BMarker } from './components/overlay/marker/index'
import { BMarker3d } from './components/overlay/marker3d/index'
import { BLabel } from './components/overlay/label/index'
import { BPolyline } from './components/overlay/polyline/index'
import { BBezierCurve } from './components/overlay/bezierCurve/index'
import { BPolygon } from './components/overlay/polygon/index'
import { BInfoWindow } from './components/overlay/infowindow/index'
import { BCircle } from './components/overlay/circle/index'
import { BPrism } from './components/overlay/prism/index'
import { BGroundOverlay } from './components/overlay/ground-overlay/index'
import { BContextMenu } from './components/contextMenu/index'
import { BDistrictLayer } from './components/layer/district-layer/index'

export default [
  BMap,
  BControl,
  BScale,
  BZoom,
  BNavigation3d,
  BMarker,
  BMarker3d,
  BCopyright,
  BLocation,
  BLabel,
  BPolyline,
  BPolygon,
  BBezierCurve,
  BCircle,
  BCityList,
  BPrism,
  BInfoWindow,
  BContextMenu,
  BPanoramaControl,
  BPanoramaCoverageLayer,
  BGroundOverlay,
  BDistrictLayer
]
