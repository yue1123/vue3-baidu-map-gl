<p align="center">
  <a href="https://yue1123.github.io/vue3-baidu-map-gl/zh-CN" target="_blank" rel="noopener noreferrer">
  <img src='https://github.com/yue1123/vue3-baidu-map-gl/blob/main/docs/public/logo.svg' crossorigin="anonymous" style="overflow:hidden; width:200px;height:200px;border-radius:48px;">
  </a>
</p>

<h1 align="center">Vue3 BaiduMap Gl</h1>

<p align="center">易用 & 完整 & 高性能</p>
<p align="center">
<img src="https://img.shields.io/github/license/yue1123/img-previewer?style=flat-square" alt="">
<img src="https://img.shields.io/github/package-json/v/yue1123/vue3-baidu-map-gl?color=f90&style=flat-square" alt="GitHub package.json version (subfolder of monorepo)">
<img alt="npm" src="https://img.shields.io/npm/dm/vue3-baidu-map-gl?logo=npm&style=flat-square" style="margin-left:10px">
</div>
</p>

基于百度地图 JavaScript GL 版（使用了 WebGL 对地图、覆盖物等进行渲染，支持 3D 视角展示地图） API 封装设计的 Vue3 组件/hooks 库，开箱即用。

如果您觉得还不错，点亮 🌟star🌟 是支持此项目的最好方式，也可以考虑适当的赞助，给予鼓励 ✌🏻

[Plauground](https://play.vuejs.org/#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)

> **自 `2.0.0` 起，所有组件名字增加 `B` 前缀，避免与其他组件库冲突 [#24](https://github.com/yue1123/vue3-baidu-map-gl/issues/24)**
>
> 目前只支持 vue3.x，vue2.x用户请移步 [vue-baidu-map](https://github.com/Dafrok/vue-baidu-map)
## :sparkles: 特性

- 🚀 自动加载百度地图 SDK，将百度地图繁琐的 Api 封装进组件，你只需关注组件本身
- 📦 20+ 高质量的开箱即用 Vue 3 组件以及 8+ hooks 封装
- 📐 遵循直觉的、简约的 Api 设计
- ⚡ Composition Api，更好的性能
- 🔨 完整的 TypeScript 支持，更好的体验
- 🧩 tree shaking 支持，模块分包，只打包你想要的的
- 🌏 基于百度地图 Gl 版 SDK，通过 WebGL 对地图、覆盖物等进行渲染，支持 3D 视角展示地图
- 🚀 支持 volar，组件提供完善的代码提示

## 安装
推荐使用 pnpm 安装
```shell
# with npm
npm install vue3-baidu-map-gl@latest

# or with yarn
yarn add vue3-baidu-map-gl@latest

# or with pnpm
pnpm add vue3-baidu-map-gl@latest
```

## 文档

[中文](https://yue1123.github.io/vue3-baidu-map-gl/)

## 开发参与贡献

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
pnpm docs:dev
```

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=yue1123/vue3-baidu-map-gl&type=Timeline)](https://star-history.com/#yue1123/vue3-baidu-map-gl&Timeline)


## License

[MIT licenses](https://opensource.org/licenses/MIT)
