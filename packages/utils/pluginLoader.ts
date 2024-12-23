/** @format */

import getScriptAsync from './getScriptAsync'

export type PluginsList = [
  'TrackAnimation',
  'Mapvgl',
  'MapvglThreeLayers',
  'Mapv',
  'MapvThree',
  'DrawingManager',
  'DistanceTool',
  'GeoUtils',
  'AreaRestriction',
  'InfoBox',
  'RichMarker',
  'LuShu'
]
export type PluginsUnion = PluginsList[number]
export type PluginsSourceLink = Record<PluginsUnion, string>
export type PluginsLoader = (...args: any[]) => Promise<any>
export type UserPlugins = (PluginsUnion | PluginsLoader)[]

export const DEFAULT_PLUGINS_SOURCE_LINK: PluginsSourceLink = {
  Mapvgl: 'https://unpkg.com/mapvgl/dist/mapvgl.min.js',
  MapvglThreeLayers: 'https://unpkg.com/mapvgl/dist/mapvgl.threelayers.min.js',
  Mapv: 'https://unpkg.com/mapv/build/mapv.min.js',
  MapvThree: 'https://unpkg.com/mapv-three/dist/mapvthree.umd.js',
  TrackAnimation: 'https://mapopen.bj.bcebos.com/github/BMapGLLib/TrackAnimation/src/TrackAnimation.min.js',
  DrawingManager: 'https://mapopen.bj.bcebos.com/github/BMapGLLib/DrawingManager/src/DrawingManager.min.js',
  DistanceTool: 'https://mapopen.bj.bcebos.com/github/BMapGLLib/DistanceTool/src/DistanceTool.min.js',
  GeoUtils: 'https://mapopen.bj.bcebos.com/github/BMapGLLib/GeoUtils/src/GeoUtils.min.js',
  AreaRestriction: 'https://mapopen.bj.bcebos.com/github/BMapGLLib/AreaRestriction/src/AreaRestriction.min.js',
  InfoBox: 'https://mapopen.bj.bcebos.com/github/BMapGLLib/InfoBox/src/InfoBox.min.js',
  RichMarker: 'https://bj.bcebos.com/v1/mapopen/github/BMapGLLib/RichMarker/src/RichMarker.min.js',
  LuShu: 'https://bj.bcebos.com/v1/mapopen/github/BMapGLLib/Lushu/src/Lushu.min.js'
} as const

export const pluginLoaderMap: Record<PluginsUnion, (customSourceLink?: string) => Promise<any>> = {
  TrackAnimation: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['TrackAnimation'],
      key: 'trackAnimation',
      exportGetter: () => window.BMapGLLib.TrackAnimation
    }),
  DrawingManager: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['DrawingManager'],
      key: 'DrawingManager',
      exportGetter: () => window.BMapGLLib.DrawingManager
    }),
  DistanceTool: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['DistanceTool'],
      key: 'DistanceTool',
      exportGetter: () => window.BMapGLLib.DistanceTool
    }),
  GeoUtils: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['GeoUtils'],
      key: 'GeoUtils',
      exportGetter: () => window.BMapGLLib.GeoUtils
    }),
  RichMarker: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['RichMarker'],
      key: 'RichMarker',
      exportGetter: () => window.BMapGLLib.RichMarker
    }),
  AreaRestriction: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['AreaRestriction'],
      key: 'AreaRestriction',
      exportGetter: () => window.BMapGLLib.AreaRestriction
    }),
  InfoBox: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['InfoBox'],
      key: 'InfoBox',
      exportGetter: () => window.BMapGLLib.InfoBox
    }),
  LuShu: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['LuShu'],
      key: 'LuShu',
      exportGetter: () => window.BMapGLLib.LuShu
    }),
  Mapvgl: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['Mapvgl'],
      key: 'Mapvgl',
      exportGetter: () => (window as any).mapvgl
    }),
  MapvglThreeLayers: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['MapvglThreeLayers'],
      key: 'MapvglThreeLayers',
      exportGetter: () => (window as any).mapvglThreeLayers
    }),
  Mapv: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['Mapv'],
      key: 'Mapv',
      exportGetter: () => (window as any).mapv
    }),
  MapvThree: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['MapvThree'],
      key: 'MapvThree',
      exportGetter: () => (window as any).mapvthree
    })
}

export function initPlugins(plugins: UserPlugins, customPluginSourceLink: Partial<PluginsSourceLink> = {}) {
  // 都处理成 () => promise
  const pluginsLoaders = [...new Set(plugins)].reduce((pluginsLoaderArr, pluginsKey) => {
    let plugin
    if (typeof pluginsKey === 'string' && (plugin = pluginLoaderMap[pluginsKey])) {
      pluginsLoaderArr.push(plugin(customPluginSourceLink[pluginsKey]))
    } else if (typeof pluginsKey === 'function') {
      pluginsLoaderArr.push(pluginsKey())
    }
    return pluginsLoaderArr
  }, [] as Promise<any>[])
  // 加载插件
  return Promise.all(pluginsLoaders).then((res) => {
    const returnValue = {}
    res.forEach((item) => {
      Object.assign(returnValue, item)
    })
    return returnValue
  })
}
