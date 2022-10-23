# ak 与插件
本章节将为你讲述如何配置 ak与插件以及更换资源链接，并实现一个自定义插件

::: warning 注意
`ak` 、`plugins`和`pluginsSourceLink`都支持两种来源，当同时指定的时候，会优先就近原则，从组件 `props` 中获取
:::

## 通过全局注册配置 ak 与 插件

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

## 更换插件资源链接

如果需要自建或其他地址的资源链接，则可以通过该方式自定义。同样，该方式也支持两种形式:

```ts{3-6}
// ...
app.use(baiduMap, {
  plugins: ['TrackAnimation'],
  pluginsSourceLink: {
    TrackAnimation: '自建或其他地址的资源链接'
  }
})
// ...
```

或者

```html{2-5}
<Map
  :plugins=['TrackAnimation']
  :pluginsSourceLink="{
    TrackAnimation: '自建或其他地址的资源链接'
  }"
/>
```

## 自定义插件

除了提供的插件外，你还可以通过自定义插件扩展，自定义的插件将在地图加载完毕后执行与处理。

自定义的方式也很简单，你只需定义一个返回`Promise`的函数即可

```ts
const customPlugin = () => {
  return new Promise((resolve) => {
    console.log('自定义插件')
    resolve()
  })
}
```

使用的方式同样也有两种：

```ts
// ...
app.use(baiduMap, {
  plugins: [customPlugin]
})
// ...
```

或者

```html
<Map :plugins="[customPlugin]" />
```
