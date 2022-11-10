# Vue3 BaiduMap gl

基于百度地图 JavaScript GL 版（使用了 WebGL 对地图、覆盖物等进行渲染，支持 3D 视角展示地图） API 封装设计的 Vue3 组件库，开发体验良好，代码优雅。

<img src='./docs/public/logo.png' style="border-radius:48px;overflow:hidden; width:220px;">
<br />
<br />

[![GitHub license](https://img.shields.io/github/license/yue1123/img-previewer?style=flat-square)](https://github.com/yue1123/img-previewer/blob/main/LICENSE)
<img src="https://img.shields.io/github/package-json/v/yue1123/vue3-baidu-map-gl?color=f90&style=flat-square" alt="GitHub package.json version (subfolder of monorepo)">

## :sparkles: 特性

- 🚀 自动加载百度地图 SDK，将百度地图繁琐的 Api 封装进组件，你只需关注组件本身
- ✨ 比较完整，提供的组件和 hooks 能覆盖大部分使用场景
- ⚡ Composition Api + Ts，面向未来，更好的性能，和你的 Ts 项目无缝衔接
- 🧩 tree shaking 支持，模块分包，只打包你想要的的
- 👍 体验良好，不仅仅是简单的封装，每一个组件都从开发者使用体验出发，做到与逻辑保持一致
- 🌏 基于百度地图 Gl 版 SDK，通过 WebGL 对地图、覆盖物等进行渲染，支持 3D 视角展示地图
- 🖇️ 组件同时兼容纯净式大驼峰命名(`Map`)和短横线命名(`b-map`)
- 🚀 支持 volar，组件提供完善的代码提示

## Documentation

[https://yue1123.github.io/vue3-baidu-map-gl/zh](https://yue1123.github.io/vue3-baidu-map-gl/zh)

## Get started

### installation

```shell
npm i vue3-baidu-map-gl
# or
yarn add vue3-baidu-map-gl
# or
pnpm add vue3-baidu-map-gl
```

### Usage SFC

按需引入

```vue
<template>
  <Map ak="YOUR_AK" />
</template>

<script setup lang="ts">
  import { Map } from 'vue3-baidu-map-gl'
</script>
```

完整引入

```ts
import { createApp } from 'vue'
import App from './App.vue'
import baiduMapGl from 'vue3-baidu-map-gl'

const app = createApp(App)
app.use(baiduMapGl, { ak: 'YOUR_AK' })
app.mount('#app')
```

### CDN

参考 [通过 CDN 使用](./blob/main/docs/zh/guide/usage-cdn.md)。

## todo

- [ ] 叠加层
  - [x] 路况叠加层
  - [ ] 地面图片叠加层
  - [ ] canvas 叠加层
  - [ ] video 叠加层
  - [x] MapVgl 叠加层
- [ ] 大地路线书

## License

[MIT licenses](https://opensource.org/licenses/MIT)

❤️ 用心制作，开源不易，点亮 🌟star🌟 是支持更新的最大动力 ✌🏻

## 参与贡献

```bash
# clone
git clone https://github.com/yue1123/vue3-baidu-map-gl
cd ./vue3-baidu-map-gl

# install
pnpm install

# 运行文档站点，用来测试组件，预览文档
pnpm run docs:dev
```
