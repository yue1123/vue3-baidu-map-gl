---
title: 配置
lang: zh-CN
---

# 配置

本章节将为你讲述如何配置 ak、apiUrl 与插件以及更换资源链接，并实现一个自定义插件

## 配置方式

::: tip
如果你是**全局注册**使用方式，那么`ak`、`apiUrl`、`plugins` 和 `pluginsSourceLink` 都支持两种来源（全局注册配置和组件 `props` 提供），当同时指定的时候，会优先就近原则，从组件 `props` 中获取。如果全局注册配置和组件 `props` 都提供了，则会尝试合并两个配置。

如果你是**按需加载**使用方式，则只支持组件 `props` 方式
:::

### 1. 通过全局注册配置 ak 与 插件

全局注册 Options

| 属性              | 说明                                             | 类型                                                                    | 可选值 | 默认值 | 版本                               |
| ----------------- | ------------------------------------------------ | ----------------------------------------------------------------------- | ------ | ------ | ---------------------------------- |
| ak                | 百度地图 [ak](../guide/quick-start#申请-ak-密钥) | `string`                                                                | -      | -      | -                                  |
| apiUrl            | 自建地图 api 资源地址（一般用于离线地图）        | `string`                                                                | -      | -      | <Badge type="tip" text="^2.3.0" /> |
| plugins           | 需要注册的插件                                   | `['TrackAnimation', 'Mapvgl', 'Mapv', 'MapvThree']`                     | -      | -      | -                                  |
| pluginsSourceLink | 自定义插件资源地址                               | `Record<'TrackAnimation' \| 'Mapvgl' \| 'Mapv' \| 'MapvThree', string>` | -      | -      | -                                  |

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

### 组件 `BMap` 传入 [`props`](/zh-CN/components/map#%E9%9D%99%E6%80%81%E7%BB%84%E4%BB%B6-props) 配置

<!-- prettier-ignore -->
```html{2,3}
<BMap
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

<!-- prettier-ignore -->
```html{2-5}
<BMap
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

<!-- prettier-ignore -->
```html
<BMap :plugins="[customPlugin]" />
```
