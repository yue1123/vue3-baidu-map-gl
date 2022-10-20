import getScriptAsync from './getScriptAsync'

export const Plugins = ['TrackAnimation'] as const
export type PluginsUnion = typeof Plugins[number]
export type PluginsList = ['TrackAnimation']
export const pluginLoaderMap: Record<PluginsUnion, () => Promise<any>> = {
	TrackAnimation: () =>
		getScriptAsync({
			src: '//mapopen.bj.bcebos.com/github/BMapGLLib/TrackAnimation/src/TrackAnimation.min.js',
			addCalToWindow: false,
			key: 'trackAnimation'
		})
	// SearchInfoWindow: () => {
	// 	const linkEl: HTMLLinkElement = document.createElement('link')
	// 	linkEl.href = '//api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.css'
	//   linkEl.rel = 'stylesheet'
	// 	document.head.appendChild(linkEl)
	// 	return getScriptAsync({
	// 		src: 'http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.js',
	// 		addCalToWindow: false,
	// 		key: 'trackAnimation'
	// 	})
	// }
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
