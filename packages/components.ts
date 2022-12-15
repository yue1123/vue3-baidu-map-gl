import { Map } from './components/map/index'
import { Control } from './components/control/control/index'
import { Scale } from './components/control/scale/index'
import { Zoom } from './components/control/zoom/index'
import { CityList } from './components/control/city-list/index'
import { Location } from './components/control/location/index'
import { Copyright } from './components/control/copyright/index'
import { Navigation3d } from './components/control/navigation3d/index'
import { PanoramaControl } from './components/control/panorama-control/index'
import { PanoramaCoverageLayer } from './components/layer/panorama-coverage/index'
import { Marker } from './components/overlay/marker/index'
import { Marker3d } from './components/overlay/marker3d/index'
import { Label } from './components/overlay/label/index'
import { Polyline } from './components/overlay/polyline/index'
import { BezierCurve } from './components/overlay/bezierCurve/index'
import { Polygon } from './components/overlay/polygon/index'
import { InfoWindow } from './components/overlay/infowindow/index'
import { Circle } from './components/overlay/circle/index'
import { Prism } from './components/overlay/prism/index'
import { GroundOverlay } from './components/overlay/ground-overlay/index'
import { ContextMenu } from './components/contextMenu/index'
import { DistrictLayer } from './components/layer/district-layer/index'

export default [
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
  GroundOverlay,
  DistrictLayer
]
