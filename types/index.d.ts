/// <reference path="./BMapGL/index.d.ts" />
/// <reference path="./tools.d.ts" />
import { UserPlugins, PluginsSourceLink } from '../packages/utils/pluginLoader'
declare module 'vue' {
  interface ComponentCustomProperties {
    $baiduMapAk: string
    $baiduMapPlugins: UserPlugins
    $baiduMapPluginsSourceLink: PluginsSourceLink
  }
}
