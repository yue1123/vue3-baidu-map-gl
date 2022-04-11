

const commonEvents = ['initd', 'unload']
export const baseMap = [
	...commonEvents,
	'click',
	'dblclick',
	'rightclick',
	'rightdblclick',
	'maptypechange',
	'mousemove',
	'mouseover',
	'mouseout',
	'movestart',
	'moving',
	'moveend',
	'zoomstart',
	'zoomend',
	'addoverlay',
	'addcontrol',
	'removecontrol',
	'removeoverlay',
	'clearoverlays',
	'dragstart',
	'dragging',
	'dragend',
	'addtilelayer',
	'removetilelayer',
	'load',
	'resize',
	'hotspotclick',
	'hotspotover',
	'hotspotout',
	'tilesloaded',
	'touchstart',
	'touchmove',
	'touchend',
	'longpress'
] as const

export const bmMarker = [
	...commonEvents,
	'click',
	'dblclick',
	'mousedown',
	'mouseup',
	'mouseout',
	'mouseover',
	'remove',
	'infowindowclose',
	'infowindowopen',
	'dragstart',
	'dragging',
	'dragend',
	'rightclick'
] as const
export const bmPolygon = [
	...commonEvents,
	'click',
	'dblclick',
	'mousedown',
	'mouseup',
	'mouseout',
	'mouseover',
	'remove',
	'lineupdate'
] as const
export const bmPolyline = [
	...commonEvents,
	'click',
	'dblclick',
	'mousedown',
	'mouseup',
	'mouseout',
	'mouseover',
	'remove',
	'lineupdate'
] as const
export const bmCircle = [
	...commonEvents,
	'click',
	'dblclick',
	'mousedown',
	'mouseup',
	'mouseout',
	'mouseover',
	'remove',
	'lineupdate'
] as const
export const bmLabel = [
	...commonEvents,
	'click',
	'dblclick',
	'mousedown',
	'mouseup',
	'mouseout',
	'mouseover',
	'remove',
	'rightclick'
] as const
// export default {

// 	'bm-info-window': ['close', 'open', 'maximize', 'restore', 'clickclose'],
// 	'bm-ground': ['click', 'dblclick'],
// 	'bm-autocomplete': ['onconfirm', 'onhighlight'],
// 	'bm-point-collection': ['click', 'mouseover', 'mouseout']
// }
