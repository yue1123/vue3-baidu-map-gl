# 快速开始



<div style="display:flex;justify-content:flex-start;margin-top:15px;">
<img src="https://img.shields.io/github/license/yue1123/img-previewer?style=flat-square" alt="GitHub license" >
<img src="https://img.shields.io/github/package-json/v/yue1123/vue3-baidu-map-gl?color=f90&style=flat-square" alt="" style="margin-left:10px">
</div>

基于百度地图JavaScript GL版API封装的Vue3组件库。提供了大部分常用的组件，如果这些组件不能满足你的需求，你也可以根据组件initd事件返回的地图实例自定义。

## :sparkles: 特性
- 自动加载百度地图 SDK，你需关注组件使用。
- 使用 Typescript 编写，完善度组件代码提示。
- 不依赖任何第三方组件。
- 组件同时兼容大驼峰命名(CamelCase)和短横线命名(kebab-case)

## 申请ak
使用百度地图前，需要先在开发者后台申请ak，然后在项目中配置ak

> 申请开发者ak: 
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
你可以引入整个vueBaiduMap组件库，或者根据需要引入部分组件。我们先介绍如何引入整个组件库
### 完整引入
在main.ts(或是main.js)中引入
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
import { Map, Control, Scale, Zoom,} from 'vue3-baidu-map-gl'
</script>

```
