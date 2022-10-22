/// <reference path="./core.d.ts" />
declare namespace MapVGL {
  class View {
    constructor(opts: ViewOptions)
    addLayer(x: Layer): void
    removeLayer(x: Layer): void
    destroy(): void
    getAllLayers(x: Layer): Layer[]
    getAllThreeLayers(x: Layer): Layer[]
  }
  interface ViewOptions {
    map?: object
    mapType?: 'bmap' | 'blank' | 'cesium'
    effects?: Effects[]
  }

  class Layer {
    constructor(map: BMapGL.Map, opts?: LayerOptions)
    setData(x: GeoJSON[]): void
    setOptions(x: LayerOptions): void
    getData(): GeoJSON[]
    getOptions(): LayerOptions
    getDefaultOptions(): LayerOptions
    destroy(): void
  }
  interface LayerOptions {
    repeat?: boolean
    data?: GeoJSON[]
    [x: string]: any
  }
  interface GeoJSON {
    geometry: {
      type: 'Point' | 'LineString' | 'Polygon'
      coordinates: any[]
    }
    properties?: {
      [x: string]: any
    }
    [x: string]: any
  }

  class Effects {
    constructor(opts?: object)
  }
}
