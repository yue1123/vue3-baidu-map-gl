/** @format */

import getScriptAsync from './getScriptAsync'

export type PluginsList = ['TrackAnimation', 'Mapvgl', 'MapvglThreeLayers', 'Mapv', 'MapvThree']
export type PluginsUnion = PluginsList[number]
export type PluginsSourceLink = Record<PluginsUnion, string>
export type PluginsLoader = (...args: any[]) => Promise<any>
export type UserPlugins = (PluginsUnion | PluginsLoader)[]

export const DEFAULT_PLUGINS_SOURCE_LINK: PluginsSourceLink = {
  TrackAnimation: '//mapopen.bj.bcebos.com/github/BMapGLLib/TrackAnimation/src/TrackAnimation.min.js',
  Mapvgl: 'https://unpkg.com/mapvgl/dist/mapvgl.min.js',
  MapvglThreeLayers: 'https://unpkg.com/mapvgl/dist/mapvgl.threelayers.min.js',
  Mapv: 'https://unpkg.com/mapv/build/mapv.min.js',
  MapvThree: 'https://unpkg.com/mapv-three/dist/mapvthree.umd.js'
} as const

export const pluginLoaderMap: Record<PluginsUnion, (customSourceLink?: string) => Promise<any>> = {
  TrackAnimation: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['TrackAnimation'],
      addCalToWindow: false,
      key: 'trackAnimation'
    }),
  Mapvgl: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['Mapvgl'],
      addCalToWindow: false,
      key: 'Mapvgl'
    }),
  MapvglThreeLayers: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['MapvglThreeLayers'],
      addCalToWindow: false,
      key: 'MapvglThreeLayers'
    }),
  Mapv: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['Mapv'],
      addCalToWindow: false,
      key: 'Mapv'
    }),
  MapvThree: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['MapvThree'],
      addCalToWindow: false,
      key: 'MapvThree'
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
  return Promise.all(pluginsLoaders)
}
