---
title: 配置
lang: zh-CN
---

# 配置

本章节将为你讲述如何配置 ak、apiUrl 与插件以及更换资源链接，并实现一个自定义插件

## 配置方式

目前支持两种方式，全局配置和组件 props 传入
::: tip
如果你是**全局注册**使用方式，那么 `ak`、`apiUrl`、`plugins` 和 `pluginsSourceLink` 都支持两种来源 (全局注册配置和组件 `props` 提供)，当同时指定的时候，会优先就近原则，从组件 `props` 中获取。如果全局注册配置和组件 `props` 都提供了，则会尝试合并两个配置。

如果你是**按需加载**使用方式，则只支持组件 `props` 方式
:::

### 1。通过全局注册配置 ak 与插件

全局注册 Options

| 属性              | 说明                                             | 类型                              | 可选值 | 默认值 | 版本                               |
| ----------------- | ------------------------------------------------ | --------------------------------- | ------ | ------ | ---------------------------------- |
| ak                | 百度地图 [ak](../guide/quick-start#申请-ak-密钥) | `string`                          | -      | -      | -                                  |
| apiUrl            | 自建地图 api 资源地址（一般用于离线地图）        | `string`                          | -      | -      | <Badge type="tip" text="^2.3.0" /> |
| plugins           | 需要注册的插件                                   | [`PluginId[]`](#扩展插件-plugins) | -      | -      | -                                  |
| pluginsSourceLink | [自定义插件资源地址](#更换插件资源链接)          | `Record<PluginId, string>`        | -      | -      | -                                  |

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

### 2。组件 `BMap` 传入 [`props`](/zh-CN/components/map#%E9%9D%99%E6%80%81%E7%BB%84%E4%BB%B6-props) 配置

<!-- prettier-ignore -->
```html{2,3}
<BMap
  ak='百度地图ak'
  :plugins="['TrackAnimation']"
/>
```

## 扩展插件 plugins

配置插件，通过 [BMap 组件 pluginReady](../components/map#组件事件) 可获取加载好的插件类

| PluginId                                                                                 | 插件名称         | 描述                                                                               | 版本                               |
| ---------------------------------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------- | ---------------------------------- |
| [TrackAnimation](https://github.com/huiyan-fe/BMapGLLib?tab=readme-ov-file#视角轨迹动画) | 视角轨迹动画     | TrackAnimation 类提供视角轨迹动画展示效果。                                        |                                    |
| Mapvgl                                                                                   |                  | -                                                                                  |                                    |
| MapvglThreeLayers                                                                        |                  | -                                                                                  |                                    |
| Mapv                                                                                     |                  | -                                                                                  |                                    |
| MapvThree                                                                                |                  | -                                                                                  |                                    |
| [DrawingManager](https://github.com/huiyan-fe/BMapGLLib?tab=readme-ov-file)              | 鼠标绘制工具条库 | 提供鼠标绘制点、线、面、多边形（矩形、圆）的编辑工具条的开源代码库。               | <Badge type="tip" text="^2.5.0" /> |
| [DistanceTool](https://github.com/huiyan-fe/BMapGLLib?tab=readme-ov-file#测距工具)       | 测距工具         | 测距工具类                                                                         | <Badge type="tip" text="^2.5.0" /> |
| [GeoUtils](https://github.com/huiyan-fe/BMapGLLib?tab=readme-ov-file#几何运算)           | 几何运算         | 提供若干几何算法                                                                   | <Badge type="tip" text="^2.5.0" /> |
| [AreaRestriction](https://github.com/huiyan-fe/BMapGLLib?tab=readme-ov-file#区域限制)    | 区域限制         | 浏览区域限制类                                                                     | <Badge type="tip" text="^2.5.0" /> |
| [InfoBox](https://github.com/huiyan-fe/BMapGLLib?tab=readme-ov-file#自定义信息窗口)      | 自定义信息窗口   | 类似于 infoWindow，比 infoWindow 更有灵活性，比如可以定制 border，关闭按钮样式等。 | <Badge type="tip" text="^2.5.0" /> |
| [RichMarker](https://github.com/huiyan-fe/BMapGLLib?tab=readme-ov-file#富标注)           | 富标注           | 富 Marker 类                                                                       | <Badge type="tip" text="^2.5.0" /> |
| [LuShu](https://github.com/huiyan-fe/BMapGLLib?tab=readme-ov-file#路书)                  | 路书             | 路书类，实现 Marker 沿路线运动                                                     | <Badge type="tip" text="^2.5.0" /> |

### 更换插件资源链接

如果需要自建或其他地址的资源链接，则可以通过该方式自定义。同样，该方式也支持两种形式：

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

### 自定义资源加载插件

除了提供的插件外，你还可以通过自定义插件扩展，自定义的插件将在地图加载完毕后执行与处理。

自定义的方式也很简单，你只需定义一个返回 `Promise` 的函数即可

```ts
const customPlugin = () => {
  return new Promise((resolve) => {
    console.log('自定义插件')
    // 加载相关资源
    // 加载完成后可 resolve 一个对象, 插件名和插件所导出的类, 便于通过 pluginRead 更好的访问
    resolve({
      // [pluginName]: pluginClass
    })
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
