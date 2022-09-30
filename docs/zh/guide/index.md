# 快速开始

<div style="display:flex;justify-content:flex-start;margin-top:15px;">
<img src="https://img.shields.io/github/license/yue1123/img-previewer?style=flat-square" alt="GitHub license" >
<img src="https://img.shields.io/github/package-json/v/yue1123/vue3-baidu-map-gl?color=f90&style=flat-square" alt="" style="margin-left:10px">
</div>

基于百度地图 JavaScript GL 版 API 封装的 Vue3 组件库。提供了大部分常用的组件，如果这些组件不能满足你的需求，你也可以根据组件 initd 事件返回的地图实例自定义。

## :sparkles: 特性

-   自动加载百度地图 SDK，你需关注组件使用。
-   使用 Typescript 编写，完善度组件代码提示。
-   不依赖任何第三方组件。
-   组件同时兼容大驼峰命名(CamelCase)和短横线命名(kebab-case)

## 申请 ak

使用百度地图前，需要先在开发者后台申请 ak，然后在项目中配置 ak

> 申请开发者 ak:
>
> [https://lbsyun.baidu.com/apiconsole/key?application=key](https://lbsyun.baidu.com/apiconsole/key?application=key)

## 安装

```shell
# with npm
npm i vue3-baidu-map-gl

# or with yarn
yarn add vue3-baidu-map-gl

# or with pnpm
pnpm add vue3-baidu-map-gl
```

## 引入组件

你可以引入整个 vueBaiduMap 组件库，或者根据需要引入部分组件。我们先介绍如何引入整个组件库

### 完整引入

在 main.ts(或是 main.js)中引入

```ts{3,6}
import { createApp } from 'vue'
import App from './App.vue'
import baiduMapInit from 'vue3-baidu-map-gl'

const app = createApp(App)
app.use(baiduMapInit, { ak: '百度地图ak' })
app.mount('#app')
```

### 按需引入

如果你用不到所有组件，更推荐使用这种方式引入组件，可以缩小构建体积

```vue{12}
<template>
  <Map
    ak="百度地图ak"
    mapType="BMAP_NORMAL_MAP"
    :enable-keyboard="false"
    enableDragging
    :minZoom="10"
  />
</template>

<script setup lang="ts">
import { Map, Control, Scale, Zoom } from 'vue3-baidu-map-gl'
</script>
```

## 插件注册

插件注册提供了两种方式:

1. 全局注册
```ts{8}
import { createApp } from 'vue'
import App from './App.vue'
import baiduMapInit from 'vue3-baidu-map-gl'

const app = createApp(App)
app.use(baiduMapInit, {
  ak: '百度地图ak',
  plugins: ['TrackAnimation']
})
app.mount('#app')
```
2. 组件 `Map` 传入 `props` 注册
```html{2}
<Map 
  :plugins="['TrackAnimation']"
/>
```
::: warning 注意
`ak` 和 `plugins` 都支持两种来源，当同时指定的时候，会优先就近原则，从组件 `props` 中获取
:::