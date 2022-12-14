/// <reference path="./base.d.ts" />
/// <reference path="./control.d.ts" />
/// <reference path="./overlay.d.ts" />
declare namespace BMapGL {
  type DrawingType = 'marker' | 'polyline' | 'polygon' | 'rectangle' | 'circle'
  interface DrawingManagerOptions {
    isOpen?: boolean
    drawingMode?: DrawingType
    enableDrawingTool?: boolean
    enableCalculate?: boolean
    enableSorption?: boolean
    enableGpc?: boolean
    enableLimit?: boolean
    sorptionDistance?: number
    limitOptions?: DrawingLimitOptions
    drawingToolOptions?: DrawingToolOptions
    markerOptions?: MarkerOptions
    circleOptions?: CircleOptions
    polylineOptions?: PolylineOptions
    polygonOptions?: PolygonOptions
    rectangleOptions?: PolygonOptions
  }

  interface DrawingToolOptions {
    enableTips?: boolean
    customContainer?: string | HTMLElement
    hasCustomStyle?: boolean
    anchor?: ControlAnchor
    offset?: Size
    scale?: number
    drawingModes?: DrawingType[]
  }

  interface DrawingLimitOptions {
    area?: number
    distance?: number
  }

  interface DistanceToolOptions {
    tips?: string
    followText?: string
    unit?: 'metric' | 'us'
    lineColor?: string
    lineStroke?: number
    opacity?: number
    lineStyle?: 'solid' | 'dashed' | 'dotted'
    cursor?: string
    secIcon?: Icon
    closeIcon?: Icon
  }
}

declare namespace BMapGLLib {
  type Callback = (...args: any[]) => void

  class DrawingManager {
    constructor(map: BMapGL.Map, opts?: BMapGL.DrawingManagerOptions)
    open(): void
    close(): void
    enableCalculate(): void
    disableCalculate(): void
    getDrawingMode(): BMapGL.DrawingType
    setDrawingMode(drawingType: BMapGL.DrawingType): void
    addEventListener(event: string, handler: Callback): void
    removeEventListener(event: string, handler: Callback): void
  }

  class DistanceTool {
    constructor(map: BMapGL.Map, opts?: BMapGL.DistanceToolOptions)
    open(): void
    close(): void
    addEventListener(event: string, handler: Callback): void
    removeEventListener(event: string, handler: Callback): void
  }
  class TrackAnimation {
    constructor(map: BMapGL.Map, pl: BMapGL.Polyline, opts: any)
    start(): void
    cancel(): void
    pause(): void
    continue(): void
    _status: 1 | 2 | 3
    _viewAni: any
  }
}

declare const BMAP_DRAWING_MARKER: BMapGL.DrawingType
declare const BMAP_DRAWING_POLYLINE: BMapGL.DrawingType
declare const BMAP_DRAWING_RECTANGLE: BMapGL.DrawingType
declare const BMAP_DRAWING_POLYGON: BMapGL.DrawingType
declare const BMAP_DRAWING_CIRCLE: BMapGL.DrawingType
