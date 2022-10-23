/** @format */

import getScriptAsync from './getScriptAsync'

export type PluginsList = ['TrackAnimation', 'Mapvgl', 'Mapv']
export type PluginsUnion = PluginsList[number]
export type PluginsSourceLink = Record<PluginsUnion, string>
export type PluginsLoader = (...args: any[]) => Promise<any>
export type UserPlugins = (PluginsUnion | PluginsLoader)[]

export const DEFAULT_PLUGINS_SOURCE_LINK: PluginsSourceLink = {
  TrackAnimation: '//mapopen.bj.bcebos.com/github/BMapGLLib/TrackAnimation/src/TrackAnimation.min.js',
  Mapvgl: 'https://code.bdstatic.com/npm/mapvgl@1.0.0-beta.159/dist/mapvgl.min.js',
  Mapv: '//mapv.baidu.com/build/mapv.min.js'
} as const

export const pluginLoaderMap: Record<PluginsUnion, (customSourceLink?: string) => Promise<any>> = {
  TrackAnimation: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['TrackAnimation'],
      addCalToWindow: false,
      key: 'trackAnimation'
    }),
  Mapv: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['Mapvgl'],
      addCalToWindow: false,
      key: 'Mapvgl'
    }),
  Mapvgl: (customSourceLink?: string) =>
    getScriptAsync({
      src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK['Mapv'],
      addCalToWindow: false,
      key: 'Mapv'
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
