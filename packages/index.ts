import type { App, Plugin } from 'vue'
import componentsList from './components'
import { UserPlugins, PluginsSourceLink } from './utils/pluginLoader'
interface InitOptions {
  ak?: string
  plugins?: UserPlugins
  pluginsSourceLink?: PluginsSourceLink
}
// hooks
export * from './hooks'
export * from './components/index'
export * from './utils/typescript'
// // global register
const vue3BaiduMapGl = {
  install: (app: App, options?: InitOptions) => {
    const { ak, plugins: p, pluginsSourceLink: psl } = options || {}
    const appProp = app.config.globalProperties
    for (const component of componentsList) {
      const name = component.name
      app.component(name, component)
      app.component(name.replace('B', ''), component)
    }
    ak && (appProp.$baiduMapAk = ak)
    p && (appProp.$baiduMapPlugins = p)
    psl && (appProp.$baiduMapPluginsSourceLink = psl)
  },
  version: '__VERSION__'
}
// for umd
export const install = vue3BaiduMapGl.install
export const version = vue3BaiduMapGl.version

export default vue3BaiduMapGl
