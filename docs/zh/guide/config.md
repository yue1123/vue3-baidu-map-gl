# ak与插件配置

ak和插件配置提供了两种方式:

## 全局配置
```ts{7,8}
import { createApp } from 'vue'
import App from './App.vue'
import baiduMap from 'vue3-baidu-map-gl'

const app = createApp(App)
app.use(baiduMap, {
  ak: '百度地图ak',
  plugins: ['TrackAnimation']
})
app.mount('#app')
```
## 组件 `Map` 传入 `props` 配置
```html{2,3}
<Map 
  ak='百度地图ak'
  :plugins="['TrackAnimation']"
/>
```
::: warning 注意
`ak` 和 `plugins` 都支持两种来源，当同时指定的时候，会优先就近原则，从组件 `props` 中获取
:::