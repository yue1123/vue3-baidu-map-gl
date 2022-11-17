<p align="center">
  <a href="https://yue1123.github.io/vue3-baidu-map-gl/zh/" target="_blank" rel="noopener noreferrer">
  <img src='./docs/public/logo.png' style="overflow:hidden; width:200px;height:200px;border-radius:48px;">
  </a>
</p>

<h1 align="center">Vue3 BaiduMap gl</h1>

<p align="center">易用 & 完整 & 高性能</p>
<p align="center">
<img src="https://img.shields.io/github/license/yue1123/img-previewer?style=flat-square" alt="">
<img src="https://img.shields.io/github/package-json/v/yue1123/vue3-baidu-map-gl?color=f90&style=flat-square" alt="GitHub package.json version (subfolder of monorepo)">
</p>

基于百度地图 JavaScript GL 版（使用了 WebGL 对地图、覆盖物等进行渲染，支持 3D 视角展示地图） API 封装设计的 Vue3 组件/hooks 库，开箱即用。

开源不易，点亮 🌟star🌟 是支持更新的最大动力 ✌🏻

[Plauground](https://sfc.vuejs.org/#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)

## :sparkles: 特性

- 🚀 自动加载百度地图 SDK，将百度地图繁琐的 Api 封装进组件，你只需关注组件本身
- 📦 20+ 高质量的开箱即用 Vue 3 组件以及 5+ hooks 封装
- 📐 遵循直觉的、简约的 Api 设计
- ⚡ Composition Api，更好的性能
- 🔨 完整的 TypeScript 支持，更好的体验
- 🧩 tree shaking 支持，模块分包，只打包你想要的的
- 🌏 基于百度地图 Gl 版 SDK，通过 WebGL 对地图、覆盖物等进行渲染，支持 3D 视角展示地图
- 🖇️ 组件同时兼容纯净式大驼峰命名(`Map`)和短横线命名(`b-map`)
- 🚀 支持 volar，组件提供完善的代码提示

## 文档

[https://yue1123.github.io/vue3-baidu-map-gl/zh](https://yue1123.github.io/vue3-baidu-map-gl/zh)

## 安装
推荐使用 pnpm 安装
```shell
yarn add vue3-baidu-map-gl
# or
pnpm add vue3-baidu-map-gl
```

### 使用

```vue
<template>
  <Map ak="YOUR_AK" />
</template>

<script setup lang="ts">
  import { Map } from 'vue3-baidu-map-gl'
</script>
```

### CDN

参考 [通过 CDN 使用](./docs/zh/guide/usage-cdn.md)。

## 参与贡献

一个人精力有限，欢迎大家参与贡献

> **环境**
> pnpm: ">=6.0.0"
> node: ">=12.0.0"

```bash
# clone
git clone https://github.com/yue1123/vue3-baidu-map-gl
cd ./vue3-baidu-map-gl

# install
pnpm install

# 运行文档站点，用来测试组件，预览文档
pnpm run docs:dev
```


## License

[MIT licenses](https://opensource.org/licenses/MIT)