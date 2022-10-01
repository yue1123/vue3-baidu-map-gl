import getScriptAsync from './getScriptAsync'

export const Plugins = ['TrackAnimation'] as const
export type PluginsUnion = typeof Plugins[number]
export type PluginsList = ['TrackAnimation']
export const pluginLoaderMap: Record<PluginsUnion, () => Promise<any>> = {
	TrackAnimation: () =>
		getScriptAsync({
			src: '//api.map.baidu.com/library/TrackAnimation/src/TrackAnimation_min.js',
			addCalToWindow: false,
			key: 'trackAnimation'
		})
}

export function initPlugins(plugins: PluginsList) {
	if (plugins) {
		const pluginsLoaders = [...new Set(plugins)].reduce((pluginsArr, pluginsName) => {
			let plugin
			if ((plugin = pluginLoaderMap[pluginsName])) {
				pluginsArr.push(plugin)
			}
			return pluginsArr
		}, [] as (() => Promise<any>)[])
    return pluginsLoaders
	}
  return []
}