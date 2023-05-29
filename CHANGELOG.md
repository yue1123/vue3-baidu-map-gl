# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.1.0](https://github.com/yue1123/vue3-baidu-map-gl/compare/v2.0.0...v2.1.0) (2023-05-29)


### ♻️ Code Refactoring | 代码重构

* 整理项目结构 ([33eec9e](https://github.com/yue1123/vue3-baidu-map-gl/commit/33eec9e53730c6df008a9fc5ea3eb03f7da5c838))


### 🐛 Bug Fixes | Bug 修复

* center point support BMapGL.Point and Point ([25ec30c](https://github.com/yue1123/vue3-baidu-map-gl/commit/25ec30c357467abe21937b61156ba2cd0deda09d))


### ✨ Features | 新功能

*  map 组件支持更改背景颜色 ([cf56102](https://github.com/yue1123/vue3-baidu-map-gl/commit/cf5610297cacc38dd709c9597afd922a052d7eef))
*  Polyline support  linkRight props ([f5e272a](https://github.com/yue1123/vue3-baidu-map-gl/commit/f5e272a67927a777b4a9bc399f3b68c952ab0ebd))
* 1. 枚举类型重构 ([cc0d047](https://github.com/yue1123/vue3-baidu-map-gl/commit/cc0d047fa8f05837e75b75f9633839df6968c504)), closes [#31](https://github.com/yue1123/vue3-baidu-map-gl/issues/31)
* 1. 所有组件使用 defineOptions ([92e46b2](https://github.com/yue1123/vue3-baidu-map-gl/commit/92e46b20bde2bd5c7b9655b943f51231199a3b9c))
* 覆盖物支持上下文菜单支持 ([52efbde](https://github.com/yue1123/vue3-baidu-map-gl/commit/52efbde86dc8e22df34520d4ca8f602346df674b))
* add shared package ([01eb3df](https://github.com/yue1123/vue3-baidu-map-gl/commit/01eb3df5e75b79bc6796daed3c281ae9807880f5))
* map 组件非客户端环境忽略 ([c5e42c8](https://github.com/yue1123/vue3-baidu-map-gl/commit/c5e42c8a7f186d1925b534c5bdaa249029087c68))
* map 组件增加图标可点击, 加载文字及背景颜色设置 ([3eb873d](https://github.com/yue1123/vue3-baidu-map-gl/commit/3eb873df7e289f976ff1355638bb6194517a2de6))
* remove isLoading slot scope ([61436c3](https://github.com/yue1123/vue3-baidu-map-gl/commit/61436c301fac0141c0d6c0be2258767abaa34397))


### ✏️ Documentation | 文档

* 更新地图自定义加载中文档内容 ([2ec61d3](https://github.com/yue1123/vue3-baidu-map-gl/commit/2ec61d3227158fbd72e012ea882f39cc340da737))
* 更新地图自定义加载中文档内容 ([d9e969f](https://github.com/yue1123/vue3-baidu-map-gl/commit/d9e969f2d13890afe7c55367262c7ce0772cf88b))
* add v1 documentation link ([3a545e3](https://github.com/yue1123/vue3-baidu-map-gl/commit/3a545e32188ca2c0d0528d6939cbc4526ee6aa71))
* fixed demo container border style ([4d0eec7](https://github.com/yue1123/vue3-baidu-map-gl/commit/4d0eec7fad7adda88ce75b64aebe3f3ce8c82631))
* fixed demo ts type error ([53c8cd3](https://github.com/yue1123/vue3-baidu-map-gl/commit/53c8cd329e759109ba120b50af9f0528b00870fb))
* fixed ts type error ([b5080a8](https://github.com/yue1123/vue3-baidu-map-gl/commit/b5080a8f3218c5aecf16b7b89c4450b77023f6c7))
* update 2.1.0 version update badge ([e61b10a](https://github.com/yue1123/vue3-baidu-map-gl/commit/e61b10aae638ba4d332c2ea1692257379d13fc67))
* update mapMask demo ([9a239e8](https://github.com/yue1123/vue3-baidu-map-gl/commit/9a239e8e4474ccb235285a48eda745b89ee70388))
* update sponsor list ([a957e5b](https://github.com/yue1123/vue3-baidu-map-gl/commit/a957e5bf05e85b84b7ac8f7023d1238dd0c8b1a7))

### [2.0.1](https://github.com/yue1123/vue3-baidu-map-gl/compare/v2.0.0...v2.0.1) (2023-03-23)


### ✏️ Documentation | 文档

* add v1 documentation link ([3a545e3](https://github.com/yue1123/vue3-baidu-map-gl/commit/3a545e32188ca2c0d0528d6939cbc4526ee6aa71))
* fixed demo container border style ([4d0eec7](https://github.com/yue1123/vue3-baidu-map-gl/commit/4d0eec7fad7adda88ce75b64aebe3f3ce8c82631))
* fixed demo ts type error ([53c8cd3](https://github.com/yue1123/vue3-baidu-map-gl/commit/53c8cd329e759109ba120b50af9f0528b00870fb))
* fixed ts type error ([b5080a8](https://github.com/yue1123/vue3-baidu-map-gl/commit/b5080a8f3218c5aecf16b7b89c4450b77023f6c7))
* update sponsor list ([a957e5b](https://github.com/yue1123/vue3-baidu-map-gl/commit/a957e5bf05e85b84b7ac8f7023d1238dd0c8b1a7))


### ✨ Features | 新功能

* remove isLoading slot scope ([61436c3](https://github.com/yue1123/vue3-baidu-map-gl/commit/61436c301fac0141c0d6c0be2258767abaa34397))

## [2.0.0](https://github.com/yue1123/vue3-baidu-map-gl/compare/v1.1.4...v2.0.0) (2023-03-08)


### ✨ Features | 新功能

* 组件统一增加前缀`B`,避免与某些组件库内部冲突 [#24](https://github.com/yue1123/vue3-baidu-map-gl/issues/24) ([f285e94](https://github.com/yue1123/vue3-baidu-map-gl/commit/f285e948073d9079abf42d518d49860e7aa5daa6))

### [1.1.4](https://github.com/yue1123/vue3-baidu-map-gl/compare/v1.1.3...v1.1.4) (2023-03-07)


### ✏️ Documentation | 文档

* update hide code reg ([c447912](https://github.com/yue1123/vue3-baidu-map-gl/commit/c4479121f0e893caf996ac7cf1e924804d0b8994))
* update sponsor ([800089d](https://github.com/yue1123/vue3-baidu-map-gl/commit/800089d13a44ad6d7fc9f38b226c98133a8e9174))
* update sponsor ([5e47ad0](https://github.com/yue1123/vue3-baidu-map-gl/commit/5e47ad05063f0f18f64da713343a64c520c1308a))
* update sponsoring content ([000ae59](https://github.com/yue1123/vue3-baidu-map-gl/commit/000ae590bcbd6cce388ef46b4a521f182d01de1d))
* update title ([6c9ee33](https://github.com/yue1123/vue3-baidu-map-gl/commit/6c9ee33167a2f2c34aabbdadd874ccd3ad6d41f6))


### 🐛 Bug Fixes | Bug 修复

* can not set position ([5bfc794](https://github.com/yue1123/vue3-baidu-map-gl/commit/5bfc794a3164d6e80d7253856811415809c75fad))
* **docs:** 代码显示优化 ([f718328](https://github.com/yue1123/vue3-baidu-map-gl/commit/f7183288fa3a0ca667935d7ca1dec10ae73af35d))
* **docs:** 修复地图多实例全屏显示错误 ([23bb2ab](https://github.com/yue1123/vue3-baidu-map-gl/commit/23bb2ab8211dc54fda316a3a61a1caf507a3bd1a))
* **docs:** 修复文档 3d 模型演示不渲染问题 ([391b924](https://github.com/yue1123/vue3-baidu-map-gl/commit/391b924b4de12549a75afd098062135a22b280c4))
* **docs:** 修复一些文档问题 ([7fad3d6](https://github.com/yue1123/vue3-baidu-map-gl/commit/7fad3d62b7affb67312e62613fc2cac4bc0d6c60))
* marker icon type warning ([f68cd61](https://github.com/yue1123/vue3-baidu-map-gl/commit/f68cd611e0223b41e60a491538bb46265feebc15))

### [1.1.3](https://github.com/yue1123/vue3-baidu-map-gl/compare/v1.1.2...v1.1.3) (2022-12-17)


### 🐛 Bug Fixes | Bug 修复

* 修复 mapvThree cdn 地址错误 ([00164f9](https://github.com/yue1123/vue3-baidu-map-gl/commit/00164f905043a5f4d64238d72d7309b537aa2e72))
* **type:** 修复RangOf2不支持小数导致的ts错误 ([367d378](https://github.com/yue1123/vue3-baidu-map-gl/commit/367d378e5a6e43bd7041eb33f60cc104a4c91ea3))


### ✏️ Documentation | 文档

* 修复图片无法显示 ([b0a4931](https://github.com/yue1123/vue3-baidu-map-gl/commit/b0a49318c38247687fb9c2356e5022d111cabf88))
* 修复文档内容错误 ([e304478](https://github.com/yue1123/vue3-baidu-map-gl/commit/e30447802b6221b3e8fffd7c682f3d175bd1d5a5))
* 增加 bmap-draw 相关内容 ([2b4fe78](https://github.com/yue1123/vue3-baidu-map-gl/commit/2b4fe78c8dace09e9a6430836c7c42b7b08b2a61))
* **expand:** 扩展相关内容更改 ([cd338df](https://github.com/yue1123/vue3-baidu-map-gl/commit/cd338df9b9bbe1a2604fefae8dc8dd997fe4d20d))
* **utils:** 隐藏示例中代码的内部代码 ([fb132b7](https://github.com/yue1123/vue3-baidu-map-gl/commit/fb132b786880ed9b3675088ba96c87faa89c9483))
* **ViewAnimationKeyFrames:** 更新ts类型 ([619498c](https://github.com/yue1123/vue3-baidu-map-gl/commit/619498c2c86fe4b637a821f3d7f1c140655b77e6))


### ✨ Features | 新功能

* 导出内部 useDefaultMarkerIcons hooks ([d7f168b](https://github.com/yue1123/vue3-baidu-map-gl/commit/d7f168bedc1514af61fceb4bcbbf5822bfb41f66))
* **map:** 新增restrictCenter属性 ([b62ea85](https://github.com/yue1123/vue3-baidu-map-gl/commit/b62ea85698e11216936ebe4399072e6200fd91ea))

### [1.1.2](https://github.com/yue1123/vue3-baidu-map-gl/compare/v1.1.1...v1.1.2) (2022-12-15)


### ✏️ Documentation | 文档

* **style:** 文档 api 表格样式调整 ([0c87faa](https://github.com/yue1123/vue3-baidu-map-gl/commit/0c87faa213293b2ff43208814c8a1c0551984d76))


### ✨ Features | 新功能

* 增加行政区图层组件 ([1e2464a](https://github.com/yue1123/vue3-baidu-map-gl/commit/1e2464a69200a0d48d64b2eb1f890cfb1af788e6))
* **useTrackAnimation:** options 更改为可选 ([009951d](https://github.com/yue1123/vue3-baidu-map-gl/commit/009951d16fa35cc6ba2885284464ff5078cfbb42))

### [1.1.1](https://github.com/yue1123/vue3-baidu-map-gl/compare/v1.1.0...v1.1.1) (2022-12-14)


### 🐛 Bug Fixes | Bug 修复

* 修复 mitt 依赖导致无法运行的 bug ([28c3c6a](https://github.com/yue1123/vue3-baidu-map-gl/commit/28c3c6a48dc5f271cc79a9d2aefb9a743ca82a1d))

## [1.1.0](https://github.com/yue1123/vue3-baidu-map-gl/compare/v1.0.1...v1.1.0) (2022-12-14)


### 📦‍ Build System | 打包构建

* 增加合并BMapGl类型定义脚本 ([4f9375e](https://github.com/yue1123/vue3-baidu-map-gl/commit/4f9375ede837512cdeae5c57dc00d0ebd796aa92))


### ♻️ Code Refactoring | 代码重构

* 重构项目 ([e5f02d3](https://github.com/yue1123/vue3-baidu-map-gl/commit/e5f02d3d91a7fedf71582fd4f656ea8bff5e605b))
  1. 优化 ts 类型支持 
  2. 导出所有的 ts 类型 
  3. 移除无用依赖
* remove marker console ([5abcc8d](https://github.com/yue1123/vue3-baidu-map-gl/commit/5abcc8daf6411eb1f50193f3d3f39a2a432481b4))


### ✏️ Documentation | 文档

* 修复文档中实例代码 ts 错误 ([fe9b615](https://github.com/yue1123/vue3-baidu-map-gl/commit/fe9b6152faf66aa2893ad9031ae8e540effa61f2))
* 修复ContextMenu组件演示错误 ([4995cc6](https://github.com/yue1123/vue3-baidu-map-gl/commit/4995cc6e2fd13dad4e633b6426358b02816636b0))
* **map:** update multiInstance demo ([2aed043](https://github.com/yue1123/vue3-baidu-map-gl/commit/2aed043e2f688f3e04ebfbed7cc3c8af0041ff40))
* **style:** 代码样式优化 ([2969ff5](https://github.com/yue1123/vue3-baidu-map-gl/commit/2969ff58b1710543d23ee5e4e8a9ea3a8ad755dc))
* **style:** demo container 隐藏代码按钮浅色主题支持 ([1712cdc](https://github.com/yue1123/vue3-baidu-map-gl/commit/1712cdcb8192dc29ad8cb9f471be05dde30e2b57))
* **style:** update demo container style ([417e2a4](https://github.com/yue1123/vue3-baidu-map-gl/commit/417e2a49869c310f8840acf9e19819e53037168c))
* update nav link ([557a648](https://github.com/yue1123/vue3-baidu-map-gl/commit/557a6489ad5360b404cc57914feee78e8f9f2bc6))
* update sidebar menu title ([06855af](https://github.com/yue1123/vue3-baidu-map-gl/commit/06855afbedb212aa74569367148ffe6239c8958c))
* usePoint ts 类型内容更改 ([ded9ea4](https://github.com/yue1123/vue3-baidu-map-gl/commit/ded9ea40db4e4ac9aa3f3c829cac58117b4828d6))

### [1.0.1](https://github.com/yue1123/vue3-baidu-map-gl/compare/v1.0.0...v1.0.1) (2022-12-05)


### 🐛 Bug Fixes | Bug 修复

* 动画可重复开始调用 ([d7c75a0](https://github.com/yue1123/vue3-baidu-map-gl/commit/d7c75a08d1d212401bcf2417814eee16f4acb4c1))
* **infoWindow:** 修复插槽内容绑定事件无效 ([52c673d](https://github.com/yue1123/vue3-baidu-map-gl/commit/52c673d25678c78eca08ce69826059aa8493fbc7))
* **useAddressGeocoder:** 修复 cal 必传 ts 报错 ([a298bcf](https://github.com/yue1123/vue3-baidu-map-gl/commit/a298bcf0915963022558d89f5413370ab24b6dc5))
* **usePointGeocoder:** 修复 options 和 cal 必传 ts 报错 ([305d291](https://github.com/yue1123/vue3-baidu-map-gl/commit/305d29153164547ee02b3b1193687d21cb418de6))
* **useViewAnimation:** 修复 options ts 错误 ([60a9eab](https://github.com/yue1123/vue3-baidu-map-gl/commit/60a9eab0381e89b3fe637c55ea4d4abbba4f524e))
* **useViewAnimation:** 修复可重复调用cancel ([2d2478a](https://github.com/yue1123/vue3-baidu-map-gl/commit/2d2478a1267d5e869987dac9fed104ca2822a1a6))


### ✨ Features | 新功能

* 导出 ts 类型: ([574cb8e](https://github.com/yue1123/vue3-baidu-map-gl/commit/574cb8e908c7331f261a7e0ebe5bd184eeb4ce7c))
* update logo ([1b2235d](https://github.com/yue1123/vue3-baidu-map-gl/commit/1b2235d87204b864b19e300f7c670e1a69279df9))
* update logo ([f2d5091](https://github.com/yue1123/vue3-baidu-map-gl/commit/f2d5091fcae3180eb31ecbc985e2a41253ef1942))
* width 和 height 支持响应式 ([e16dc90](https://github.com/yue1123/vue3-baidu-map-gl/commit/e16dc9041b070f7c9b0be8b2d6ba79677979abb6))

# [1.0.0](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.40...v1.0.0) (2022-11-22)


### Features

* 新增坐标转换 hooks ([2e5955d](https://github.com/yue1123/vue3-baidu-map-gl/commit/2e5955d259d735a5697b72b66de126adbf213c53))
* publish 1.0.0 ([d5a9462](https://github.com/yue1123/vue3-baidu-map-gl/commit/d5a94627c048af00135ed8387be748730c43138b))
* update docs content ([7f0f874](https://github.com/yue1123/vue3-baidu-map-gl/commit/7f0f8743f02a5475877cff0080c2777d87cc88d8))



## [0.0.40](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.39...v0.0.40) (2022-11-22)


### Bug Fixes

* 修复插槽内容一闪而过问题 ([6e1d9f9](https://github.com/yue1123/vue3-baidu-map-gl/commit/6e1d9f9df7f8171aaca22e7c8661eebbbce906d3))
* 修复自定义内容一闪而过问题 ([7549d6e](https://github.com/yue1123/vue3-baidu-map-gl/commit/7549d6e692c58b540bfacfe3473156f175584373))
* fixed cicd error ([798aac9](https://github.com/yue1123/vue3-baidu-map-gl/commit/798aac9f239283e035d4dd1d8fed3dab34f42fcf))


### Features

* publish 0.0.40 ([54a6c50](https://github.com/yue1123/vue3-baidu-map-gl/commit/54a6c507d6d82e5d60b44e21fc50f0a8d4c55979))
* replace useAttrs to $attrs ([83e816c](https://github.com/yue1123/vue3-baidu-map-gl/commit/83e816cfb9ae71879d4784d260a620c095715362))



## [0.0.39](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.38...v0.0.39) (2022-11-21)


### Bug Fixes

* 修复插槽内容一闪而过的问题 ([7548790](https://github.com/yue1123/vue3-baidu-map-gl/commit/75487909c5dde9eed538948cfa6a651b1f2985bb))
* type error ([aaa18b3](https://github.com/yue1123/vue3-baidu-map-gl/commit/aaa18b3d9a5a6a937178c30dba228c4530d6db0a))


### Features

* 定位控件支持定位失败/成功事件监听 ([36392f1](https://github.com/yue1123/vue3-baidu-map-gl/commit/36392f17522357db60a03e89575322c4b3c50663))
* 新增地址解析 hooks ([caf4d06](https://github.com/yue1123/vue3-baidu-map-gl/commit/caf4d06a75ffd2d50db12b9b1a632750c33f7820))
* 优化错误提示 ([9e982e4](https://github.com/yue1123/vue3-baidu-map-gl/commit/9e982e461bcdaa560b48f708231a965faca82902))
* 优化代码 ([1938a2a](https://github.com/yue1123/vue3-baidu-map-gl/commit/1938a2a50301a510310621cabdccfa1e9a4bd6b1))
* 支持批量解析地址 ([d8bd4ff](https://github.com/yue1123/vue3-baidu-map-gl/commit/d8bd4ffdf60239da8173dbf0b38d00e9c23ddb82))
* 支持批量逆解析 ([8ca2f20](https://github.com/yue1123/vue3-baidu-map-gl/commit/8ca2f2001b749be07945a2949e1f4b35b257a840))
* publish 0.0.39 ([c6c8bd7](https://github.com/yue1123/vue3-baidu-map-gl/commit/c6c8bd7879983c103e4907b7a7bc37dafb621881))



## [0.0.38](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.37...v0.0.38) (2022-11-17)


### Bug Fixes

* 失败一次后isError一直是 true ([5837db6](https://github.com/yue1123/vue3-baidu-map-gl/commit/5837db6bee0e4b77065a59085126b424e74cafe3))


### Features

* publish 0.0.38 ([2f0ccaa](https://github.com/yue1123/vue3-baidu-map-gl/commit/2f0ccaa54e5368782b4034e1495fc292ecd624be))



## [0.0.37](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.35...v0.0.37) (2022-11-17)


### Features

* build esm for playground ([f31f310](https://github.com/yue1123/vue3-baidu-map-gl/commit/f31f31086702573b8a26a9f090081cb71bc377c9))
* publish ([a65ba04](https://github.com/yue1123/vue3-baidu-map-gl/commit/a65ba04f72260f20309779ecfda2a6f38ba1e226))
* publish 0.0.37 ([7df63ca](https://github.com/yue1123/vue3-baidu-map-gl/commit/7df63caa387f0e5c6bb71d531d036032e7236387))



## [0.0.35](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.32...v0.0.35) (2022-11-17)


### Features

* [#14](https://github.com/yue1123/vue3-baidu-map-gl/issues/14) add support zIndex props ([99f501f](https://github.com/yue1123/vue3-baidu-map-gl/commit/99f501f2074e395a4fa32185e756d222cc891501))
* 新增useIpLocation和 useBrowserLocation定位 hooks ([358fd7c](https://github.com/yue1123/vue3-baidu-map-gl/commit/358fd7c295d98447e8c99849d644965c5c513b51))
* 优化代码 ([a552547](https://github.com/yue1123/vue3-baidu-map-gl/commit/a5525477fb9a0601c43e386beb30c466758ea4a1))
* add callback option ([79dd423](https://github.com/yue1123/vue3-baidu-map-gl/commit/79dd423b6b2968f3f1cc66ca66153af0d06cb59a))
* expose resetCenter [#14](https://github.com/yue1123/vue3-baidu-map-gl/issues/14) ([b0d8e3a](https://github.com/yue1123/vue3-baidu-map-gl/commit/b0d8e3a0a2922438c07692bec518eb21956b74a8))
* publish 0.0.33 ([d490f77](https://github.com/yue1123/vue3-baidu-map-gl/commit/d490f770fa9010577c5833c7281dd6a09102fb02))
* publish 0.0.34 ([aa70231](https://github.com/yue1123/vue3-baidu-map-gl/commit/aa70231ca5feb38a2b2dd87f214efc3fc023a5f0))
* publish 0.0.35 ([26c16d8](https://github.com/yue1123/vue3-baidu-map-gl/commit/26c16d8f391119dc33e96c491770261e9748478b))
* remove map options & add callback options ([f519946](https://github.com/yue1123/vue3-baidu-map-gl/commit/f51994680e5d877b3e2e42adf07e0b42222872f6))



## [0.0.32](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.31...v0.0.32) (2022-11-12)


### Features

* 优化代码 & 增加地面叠加层覆盖物 ([60cb9bb](https://github.com/yue1123/vue3-baidu-map-gl/commit/60cb9bb3febd16e886bd14e03911dda9a0a4dcd5))
* ak 区分加载函数 ([3069bb4](https://github.com/yue1123/vue3-baidu-map-gl/commit/3069bb46fbad703a6196e01dce335602301ef9e0))
* publish 0.0.32 ([544dd6a](https://github.com/yue1123/vue3-baidu-map-gl/commit/544dd6aafd505adb5f28b7743a8f5057d257ebfe))



## [0.0.31](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.30...v0.0.31) (2022-11-10)


### Features

* 增加全景图相关内容 ([cfd8824](https://github.com/yue1123/vue3-baidu-map-gl/commit/cfd88242ed2ae0db8c5a57f1eff6cd455ee05769))
* publish 0.0.31 ([9f5dc4a](https://github.com/yue1123/vue3-baidu-map-gl/commit/9f5dc4acc2992c30c42ce429a450f64f04b4067b))



## [0.0.30](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.29...v0.0.30) (2022-11-10)


### Features

* 暴露设置鼠标移动方法 ([42e7c07](https://github.com/yue1123/vue3-baidu-map-gl/commit/42e7c07fb5361d0959fde2003ae17408be1b4f3b))
* add 用于视角动画的 useViewAnimation hooks ([1fd4912](https://github.com/yue1123/vue3-baidu-map-gl/commit/1fd4912603e3c2dfb5c38d9a9e77070ce3841c33))
* publish 0.0.30 ([804b489](https://github.com/yue1123/vue3-baidu-map-gl/commit/804b489afcda4d7edd4a62ad859b51a0a3e96db3))
* update usePoint and docs ([7eeeabe](https://github.com/yue1123/vue3-baidu-map-gl/commit/7eeeabe87adb2ce7110996498110d6113b7d9316))



## [0.0.29](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.28...v0.0.29) (2022-11-08)


### Features

* 新增 contextMenu 组件 ([4cbe94f](https://github.com/yue1123/vue3-baidu-map-gl/commit/4cbe94f81457a3ab9b6649c9a5fbe0d04e308793))
* 优化代码 ([3c7feca](https://github.com/yue1123/vue3-baidu-map-gl/commit/3c7feca732d17a3df40468c2e13df9db3f00b8a5))
* publish 0.0.29 ([182d102](https://github.com/yue1123/vue3-baidu-map-gl/commit/182d1029a4f8f600a237bd90aadd798882950de2))



## [0.0.28](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.27...v0.0.28) (2022-10-27)


### Bug Fixes

* 不传 path 或传其他值导致的报错 ([e831f92](https://github.com/yue1123/vue3-baidu-map-gl/commit/e831f928a232a6e12492db7b6b5fc74fd56f57e8))
* 初始为空 path, 后续 path变化无法正确渲染 ([c8c367b](https://github.com/yue1123/vue3-baidu-map-gl/commit/c8c367b9a796761e6ec30d6febb9180a1817d773))


### Features

* 新增贝塞尔曲线覆盖物 ([09f4478](https://github.com/yue1123/vue3-baidu-map-gl/commit/09f4478f258f842a0710840d483a5cb7ecb80abd))
* publish 0.0.28 ([4650900](https://github.com/yue1123/vue3-baidu-map-gl/commit/4650900648f269ad2faacc582cd01a94e41fb535))



## [0.0.27](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.25...v0.0.27) (2022-10-26)


### Bug Fixes

* vitepress 打包错误 ([754f23a](https://github.com/yue1123/vue3-baidu-map-gl/commit/754f23ab70b1429435cad0164427c42e90a6237f))


### Features

* 地图默认高度增加到 550px ([d4b637e](https://github.com/yue1123/vue3-baidu-map-gl/commit/d4b637ea9788ecbc34b20b1152ad617413b8506a))
* 更新mapv,以插件形式提供 ([1dd05fe](https://github.com/yue1123/vue3-baidu-map-gl/commit/1dd05fe3e9dcdcec835925588dbd66ee309a8408))
* 文档中组件事件的相关内容更新 ([8e0fdd5](https://github.com/yue1123/vue3-baidu-map-gl/commit/8e0fdd57540966b949af5c458ca7b7e2098c05b3))
* 增加 mapvgl 和 mapv 插件 ([fc9646d](https://github.com/yue1123/vue3-baidu-map-gl/commit/fc9646d66c6fb8a5bed9d37baadd2625ea610c95))
* 支持更换插件资源地址和自定义插件 ([c6371df](https://github.com/yue1123/vue3-baidu-map-gl/commit/c6371dfd7a919101d581f9d4b581c2f3e063b922))
* 支持路况显示 ([15d7736](https://github.com/yue1123/vue3-baidu-map-gl/commit/15d77361d4e6c4c347159a5eb36c7f42091b0087))
* 支持自定义地图属性 ([17176f2](https://github.com/yue1123/vue3-baidu-map-gl/commit/17176f224b86ff8e22facedef1724fe8c33c27c0))
* mapvgl 支持 & docs 内容更新 ([8e855b2](https://github.com/yue1123/vue3-baidu-map-gl/commit/8e855b2e834458fcdf8501c54b534dd6678e1b2a))
* publish 0.0.26 ([5e2278b](https://github.com/yue1123/vue3-baidu-map-gl/commit/5e2278b4957773a6e9dfb766565550775ae77215))
* publish 0.0.27 ([98709ab](https://github.com/yue1123/vue3-baidu-map-gl/commit/98709ab25b9a8d9d9b477e1deb2c52179dabe2e4))



## [0.0.25](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.24...v0.0.25) (2022-10-21)


### Features

* 所有deep监听增加新旧值比对, 避免字面量声明的props在视图更新时出现报错的问题 ([36d5b05](https://github.com/yue1123/vue3-baidu-map-gl/commit/36d5b05d3716635ac8ee8575c5fe53d5b9dbb341))
* publish 0.0.25 ([68eff03](https://github.com/yue1123/vue3-baidu-map-gl/commit/68eff03f4895c84ce5f4c5b1667754b6bff78b92))
* refactor useTrackAnimation hooks ([09951d9](https://github.com/yue1123/vue3-baidu-map-gl/commit/09951d92b58a3a4149e75dd754f41d3df4700a52))



## [0.0.24](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.23...v0.0.24) (2022-10-20)


### Bug Fixes

* 去掉动画也需要更改暂停 state ([6808ec6](https://github.com/yue1123/vue3-baidu-map-gl/commit/6808ec65f4dde3b13d55695b3b5e4e6876dbdee1))


### Features

* publish 0.0.24 ([4aa49db](https://github.com/yue1123/vue3-baidu-map-gl/commit/4aa49dbd9feca4855a41164ee5dca5c20c245f6c))
* useTrackAnimation 支持暂停继续动画, 提供更多状态, 文档更新 ([8eb9108](https://github.com/yue1123/vue3-baidu-map-gl/commit/8eb9108d2ab527c3163fb094bf5f59675cdeda91))



## [0.0.23](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.22...v0.0.23) (2022-10-20)


### Bug Fixes

* mapContainerId is null after build ([9941c7d](https://github.com/yue1123/vue3-baidu-map-gl/commit/9941c7ddb9b534df4d9174e51cdb2e15cba62c9f))
* mapContainerId is null after build ([cfb0be1](https://github.com/yue1123/vue3-baidu-map-gl/commit/cfb0be1cf58b7c7d0d5f0775def8352233c6c00f))


### Features

* 文档支持全文搜索 ([79c963c](https://github.com/yue1123/vue3-baidu-map-gl/commit/79c963c0709a874069e121ebcde56e400b4cd4ed))
* publish 0.0.23 ([8c2b00e](https://github.com/yue1123/vue3-baidu-map-gl/commit/8c2b00e4bd2063a8c46745a17ac9ea3075756e21))
* search infoWindow ([3710223](https://github.com/yue1123/vue3-baidu-map-gl/commit/3710223051be8d7f515440c40790238db950ae4d))



## [0.0.22](https://github.com/yue1123/vue3-baidu-map-gl/compare/0.0.21...v0.0.22) (2022-10-17)


### Features

* 3d 棱柱 ([8616eb3](https://github.com/yue1123/vue3-baidu-map-gl/commit/8616eb329bdc136ca57cfa2e18bb0718ae98f2a9))
* 调整label 组件 ([2db04e2](https://github.com/yue1123/vue3-baidu-map-gl/commit/2db04e2cae3cd32631cd5c95e13c3c298f802682))
* 完善 marker3d 覆盖物 ([9f49c0e](https://github.com/yue1123/vue3-baidu-map-gl/commit/9f49c0ec5b07cb4c9deaa722aad8a433805a08b3))
* 完善 prism 组件及其文档 ([50f55d3](https://github.com/yue1123/vue3-baidu-map-gl/commit/50f55d31a091a927d80beb2f7261df00c1556c08))
* 新增 infoWindow 组件及其文档 ([42dc7b9](https://github.com/yue1123/vue3-baidu-map-gl/commit/42dc7b9ab7903f6b8bba04622c785e4b499c4912))
* 新增带高度的点覆盖物 ([9a5f440](https://github.com/yue1123/vue3-baidu-map-gl/commit/9a5f44080ee77bbbb35f3b9c1e2ef3827e767462))
* 暂存 visible 版本 infowindow ([f93a623](https://github.com/yue1123/vue3-baidu-map-gl/commit/f93a623978bf3f5636d5305c91d84881c53b0ee5))
* 暂存支持maxContent版本 infowindow ([c54d0e6](https://github.com/yue1123/vue3-baidu-map-gl/commit/c54d0e6cd882211a50ed26cb3464b66626b85493))
* 支持室内图显示 ([a452a88](https://github.com/yue1123/vue3-baidu-map-gl/commit/a452a88f58826fcbf119afa82935e8579cf79ecb))
* publish 0.0.22 ([e29656e](https://github.com/yue1123/vue3-baidu-map-gl/commit/e29656e6cd30854190acfc52f11b73855a4e6943))
* update type and components dts gen script ([2e086c0](https://github.com/yue1123/vue3-baidu-map-gl/commit/2e086c0f46311dd2126e6992fe81c9ae406989e7))



## [0.0.21](https://github.com/yue1123/vue3-baidu-map-gl/compare/0.0.14...0.0.21) (2022-10-11)


### Features

* 生成volar.d.ts ([f0189e0](https://github.com/yue1123/vue3-baidu-map-gl/commit/f0189e0f0969a1352d840662c1727e662416b11c))
* add design notes ([311daba](https://github.com/yue1123/vue3-baidu-map-gl/commit/311daba2a638b6f773ac9ffffffda86d00191ecd))
* add think notes ([cd7c8de](https://github.com/yue1123/vue3-baidu-map-gl/commit/cd7c8def6a922b48546ce09afe2785c8c4b3030a))
* rename file name & export for umd ([df0b5a5](https://github.com/yue1123/vue3-baidu-map-gl/commit/df0b5a520a6ac906758ea44c50c5f4c5c70e6eba))
* update design notes ([75270e8](https://github.com/yue1123/vue3-baidu-map-gl/commit/75270e8be04bd46b17765fcea1b8fa434ba94457))



## [0.0.14](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.12...0.0.14) (2022-10-01)


### Bug Fixes

* build error ([608ad56](https://github.com/yue1123/vue3-baidu-map-gl/commit/608ad5626a5d0d333ccce0c8ef797a16416dfd84))
* build error ([3a1f617](https://github.com/yue1123/vue3-baidu-map-gl/commit/3a1f6170f69e0008c49fb719bcb490e4ea36c685))
* fixed bugs ([eb4f698](https://github.com/yue1123/vue3-baidu-map-gl/commit/eb4f698b8be8c74d300d0cb348921bfa43290735))
* fixed icon type warn ([6898405](https://github.com/yue1123/vue3-baidu-map-gl/commit/6898405334fd55a077d0d2be778896ef28f42c1b))


### Features

*  provide set center fn from sub components ([5b5b1aa](https://github.com/yue1123/vue3-baidu-map-gl/commit/5b5b1aaaf14aff1d153078cf480fa2063f269043))
* 城市边界 / 镂空多边形支持 ([7b9520c](https://github.com/yue1123/vue3-baidu-map-gl/commit/7b9520ca5e4abcd9ee8dc86537fba33450231106))
* 抽离script 加载逻辑 & 增加插件加载 ([0594447](https://github.com/yue1123/vue3-baidu-map-gl/commit/059444760d5b2e4dc3e854c2518c00c7216ff0c4))
* 增加 copyright 控件 ([1c686a7](https://github.com/yue1123/vue3-baidu-map-gl/commit/1c686a744e6264c0b08f7f29c8f1bc417e5dc111))
* 增加 useAreaBoundary hooks ([1a9e61a](https://github.com/yue1123/vue3-baidu-map-gl/commit/1a9e61a1cab92d7eb484c614223ac7a3ab9bde35))
* 增加定位控件 ([8b3e92a](https://github.com/yue1123/vue3-baidu-map-gl/commit/8b3e92af04ce88c8bce29bce2c13a825710083a0))
* 增加轨迹动画功能 ([167a177](https://github.com/yue1123/vue3-baidu-map-gl/commit/167a177064033a4ffcb157b930291e213d2a6e4e))
* 支持个性化地图 ([2663dbf](https://github.com/yue1123/vue3-baidu-map-gl/commit/2663dbf3a8b9571b24cb10f57b60966d665604de))
* add component name ([cf88695](https://github.com/yue1123/vue3-baidu-map-gl/commit/cf8869516bf935a538fe0126ae271e0d23a42d8c))
* copyright 组件入口 ([ecc6b39](https://github.com/yue1123/vue3-baidu-map-gl/commit/ecc6b395baf7304b2bde9ce38ddd1311e759f2d1))
* docs update ([9f43a9e](https://github.com/yue1123/vue3-baidu-map-gl/commit/9f43a9e5fbf9ff2ca98330c726c7eb5322071a88))
* map add BMAP_SATELLITE_MAP type ([8392f6d](https://github.com/yue1123/vue3-baidu-map-gl/commit/8392f6d912fe770ba18d968ab8e9e6dbc7504294))
* publish 0.0.13 ([6df954a](https://github.com/yue1123/vue3-baidu-map-gl/commit/6df954a985244e48f93fe6e593377ae9ca24d467))
* publish 0.0.14 ([660b04b](https://github.com/yue1123/vue3-baidu-map-gl/commit/660b04b239795976a40102ed73a380468f33ec09))
* update README.md ([0cf3c54](https://github.com/yue1123/vue3-baidu-map-gl/commit/0cf3c5418b3051fefa6e358a8b718f43731c0fd9))
* zoom 组件调整 ([70c960c](https://github.com/yue1123/vue3-baidu-map-gl/commit/70c960ca74e2c317ba4d2fc65246f44aea4af9cb))



## [0.0.12](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.11...v0.0.12) (2022-09-22)


### Features

* 优化驼峰命名转换算法 ([b302690](https://github.com/yue1123/vue3-baidu-map-gl/commit/b30269044deecd574a09b69e30c492a5235d7b76))
* 增加 city list 控件 ([c31ea22](https://github.com/yue1123/vue3-baidu-map-gl/commit/c31ea229e9cf0a7b421afeb02ef15fd68b0320c0))
* 支持自定义地图loading ([0742cb2](https://github.com/yue1123/vue3-baidu-map-gl/commit/0742cb21e67f117218d27898d326d1acbf0fcff2))
* publish v0.0.12 ([756596e](https://github.com/yue1123/vue3-baidu-map-gl/commit/756596e37caa1c0df6eb76cbf9f9866799511514))



## [0.0.11](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.10...v0.0.11) (2022-09-21)


### Features

* 多实例支持 ([8acf029](https://github.com/yue1123/vue3-baidu-map-gl/commit/8acf02986ab09851a1471b40b9b5752361cf2d58))
* publish 0.0.11 & update docs ([aef5f77](https://github.com/yue1123/vue3-baidu-map-gl/commit/aef5f77f4a785dc3d68138ff3dac3a6ff9914890))



## [0.0.10](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.9...v0.0.10) (2022-09-20)


### Features

* fixed component can not render ([08bba6d](https://github.com/yue1123/vue3-baidu-map-gl/commit/08bba6deac0fe4bdc9a50cf822652820ef63b771))
* publish v0.0.10 ([d48440c](https://github.com/yue1123/vue3-baidu-map-gl/commit/d48440c4157229a1f116c53b2e1ec211edb66739))



## [0.0.9](https://github.com/yue1123/vue3-baidu-map-gl/compare/v0.0.7...v0.0.9) (2022-09-20)


### Bug Fixes

* can not sync map center that mouse move end ([5cd51c2](https://github.com/yue1123/vue3-baidu-map-gl/commit/5cd51c2c3af697bf926f544eb6c605a40b1840ad)), closes [#11](https://github.com/yue1123/vue3-baidu-map-gl/issues/11)
* safe type & global use  option not working ([6c40261](https://github.com/yue1123/vue3-baidu-map-gl/commit/6c40261ce6e974c58146054a9f90088068356320))


### Features

*  publish v0.0.9 ([36010b3](https://github.com/yue1123/vue3-baidu-map-gl/commit/36010b3842e0b2d1a56404a9c27d4d9addb71d23))
* publish 0.0.7 release ([3b78c48](https://github.com/yue1123/vue3-baidu-map-gl/commit/3b78c4826940c1ede7c76bd6faf4b376eb084d16))
* update ([a6d6137](https://github.com/yue1123/vue3-baidu-map-gl/commit/a6d61372fbb8519a37040e6132107b241ed43be9))
* update docs base/index ([db4afa5](https://github.com/yue1123/vue3-baidu-map-gl/commit/db4afa5930c437fd4756c85ce663d38971d7d231))
* update overlay components watch callback ([97f9e6a](https://github.com/yue1123/vue3-baidu-map-gl/commit/97f9e6a7bde787ed4b3c675c89d1285a34328ac0))



## [0.0.7](https://github.com/yue1123/vue3-baidu-map-gl/compare/0.0.5...v0.0.7) (2022-09-11)


### Bug Fixes

* add deep watch map center prop; fixed [#11](https://github.com/yue1123/vue3-baidu-map-gl/issues/11) ([7f43ea9](https://github.com/yue1123/vue3-baidu-map-gl/commit/7f43ea930511549b03f45dc611a1020305190b67))
* fixed [#6](https://github.com/yue1123/vue3-baidu-map-gl/issues/6) [#5](https://github.com/yue1123/vue3-baidu-map-gl/issues/5) ([0f1ddf4](https://github.com/yue1123/vue3-baidu-map-gl/commit/0f1ddf4a2abf69380f0503423f01a09dee4e206d))
* loading text 不居中问题 ([5dbdd11](https://github.com/yue1123/vue3-baidu-map-gl/commit/5dbdd117533dd72aac5b5c5ddc622a6d9529d6ce))


### Features

* update overlay components watch callback ([7bfa93e](https://github.com/yue1123/vue3-baidu-map-gl/commit/7bfa93e912bdbf4a71573f03ffcabebfeac9a50d))
* update vesion ([63bea1a](https://github.com/yue1123/vue3-baidu-map-gl/commit/63bea1afd6f05118b7144de14e22c273fa6eecc2))
* update vesion ([cc62836](https://github.com/yue1123/vue3-baidu-map-gl/commit/cc628368478838172840b5689b4c7ab74c525e5d))



## [0.0.5](https://github.com/yue1123/vue3-baidu-map-gl/compare/0.0.3...0.0.5) (2022-05-22)


### Bug Fixes

* update components type ([7d1d250](https://github.com/yue1123/vue3-baidu-map-gl/commit/7d1d250ff15281732f04f939ef8c3ce2afa79b31))


### Features

* 组件props动态支持 ([5b6b539](https://github.com/yue1123/vue3-baidu-map-gl/commit/5b6b539dd49d6be7ce8d534caf2552475bea3fb8))
* overlay -> marker 支持响应Props ([69f111e](https://github.com/yue1123/vue3-baidu-map-gl/commit/69f111ee3f13731b8c0ea123a347a1498d32ec03))
* overlay 动态的位置 ([ebed8b0](https://github.com/yue1123/vue3-baidu-map-gl/commit/ebed8b0a2454d45e1a0e98013ec881edc0b5b44a))



## [0.0.3](https://github.com/yue1123/vue3-baidu-map-gl/compare/0.0.1...0.0.3) (2022-05-09)


### Bug Fixes

* empty path array map error ([4d6c6e6](https://github.com/yue1123/vue3-baidu-map-gl/commit/4d6c6e6bf270fe55778a0e952509d07acfdb8483))


### Features

* update  version ([9a41cc8](https://github.com/yue1123/vue3-baidu-map-gl/commit/9a41cc8d5bcaff6f484335096afcc55c0dfd3a8d))
* update README.md ([849285d](https://github.com/yue1123/vue3-baidu-map-gl/commit/849285d56bda00c8dd37d172d53f8d90c1ac32bd))



## [0.0.1](https://github.com/yue1123/vue3-baidu-map-gl/compare/5693f4231137466bdbfe850f9015d5082654e974...0.0.1) (2022-04-26)


### Features

* 打包配置修改 ([56a5989](https://github.com/yue1123/vue3-baidu-map-gl/commit/56a5989c523a58be4b68ee840263d1c4e2ef6625))
* 调整模块引入路劲 ([8b101ab](https://github.com/yue1123/vue3-baidu-map-gl/commit/8b101abd2c172db20f5f2ee37b6bb83ed6b9985d))
* 封装组件生命周期hooks ([e3bb317](https://github.com/yue1123/vue3-baidu-map-gl/commit/e3bb317500adfbf5f5e1b88cf82bce7c6990b6e2))
* 更新组件事件,更好的ts提示 ([67e559c](https://github.com/yue1123/vue3-baidu-map-gl/commit/67e559c7601dfaa43956b738bb18947a959ce867))
* 更新组件事件绑定 ([36e7064](https://github.com/yue1123/vue3-baidu-map-gl/commit/36e7064e303670cf1c9dbc0e3987939e469cbc3f))
* 合并类型 ([2d430e8](https://github.com/yue1123/vue3-baidu-map-gl/commit/2d430e8df4010864a11f71dd1c12a9df9f2432dc))
* 基础地图组件 & types 变动 ([7a1f556](https://github.com/yue1123/vue3-baidu-map-gl/commit/7a1f556edda7bb432b93ffc5500b9cf323efdc10))
* 类型重构 ([eff211e](https://github.com/yue1123/vue3-baidu-map-gl/commit/eff211e30fa791d17ad869e238275802b37a7410))
* 事件初始化 ([1f2e394](https://github.com/yue1123/vue3-baidu-map-gl/commit/1f2e394cad27fa973d41a591f5af7264207d27be))
* 统一props名字 ([8caa149](https://github.com/yue1123/vue3-baidu-map-gl/commit/8caa149f8847d2efd66fce279c2eafa535fba264))
* 完善地图基础组件 & 加入文档 ([c8f7230](https://github.com/yue1123/vue3-baidu-map-gl/commit/c8f7230c5fceeff6cf66bc52f1b2b39d40b6fb9b))
* 完善基础地图组件,更新ts类型 ([0f1a0ca](https://github.com/yue1123/vue3-baidu-map-gl/commit/0f1a0ca6642c478ae720e3fef9b1970c8a3a805a))
* 新增文本标注和图像标注组件 ([2ab6f5d](https://github.com/yue1123/vue3-baidu-map-gl/commit/2ab6f5dcec71dd74eb611a3cabae2ea05133c50a))
* 修复组件订阅发布先于订阅之前,导致map 子组件在二次加载时,无法正常显示 ([7ef4b49](https://github.com/yue1123/vue3-baidu-map-gl/commit/7ef4b49ac3a2746174f41a2f77ffe80737571f2a))
* 修改组件默认值 & 移除注释 ([e39f382](https://github.com/yue1123/vue3-baidu-map-gl/commit/e39f3825ac3d332ef3c0de5f546e4fe57aac848d))
* 修改props类型 ([aa5a714](https://github.com/yue1123/vue3-baidu-map-gl/commit/aa5a714d1c56dc28ea750b436437d4a0069217ea))
* 暂时修复有时候订阅慢于发布,导出hooks ([ed549bb](https://github.com/yue1123/vue3-baidu-map-gl/commit/ed549bb26987c17e0f928e9a7ef8e165db96f5bb))
* 增加多边形和圆形覆盖物组件 ([9923c33](https://github.com/yue1123/vue3-baidu-map-gl/commit/9923c33b43508c3fb06de1fd18b0683b69172e49))
* 增加覆盖物组件 ([6b6400f](https://github.com/yue1123/vue3-baidu-map-gl/commit/6b6400f47e82159d3e7aaa44ae743fd73ab25de6))
* 增加缩放组件 ([6e37765](https://github.com/yue1123/vue3-baidu-map-gl/commit/6e37765c3b4f2de8b85a3ff0ec00f298664debf4))
* 增加折线组件 ([5485daf](https://github.com/yue1123/vue3-baidu-map-gl/commit/5485daf0850975bbc86c919d0229cbcbf5a25b2f))
* 增加自定义控制组件 ([657c900](https://github.com/yue1123/vue3-baidu-map-gl/commit/657c90089c89a9c37ff1fbd1c4d9135166d5d474))
* 增加子组件 ([dd3ec2e](https://github.com/yue1123/vue3-baidu-map-gl/commit/dd3ec2e8a5b5d1d33629087ffa54a6f15ef0a17e))
* 重构组件挂载状态向下传递 ([68911ea](https://github.com/yue1123/vue3-baidu-map-gl/commit/68911ea0deccf8577af38d4ccb96758533d9a4a7))
* 子组件监听父组件加载完毕,增加比例尺组件 ([65b61cb](https://github.com/yue1123/vue3-baidu-map-gl/commit/65b61cbc5e4f34ecca84f4bdb56ade3d1bda6e44))
* circle 组件增加Props ([81c5901](https://github.com/yue1123/vue3-baidu-map-gl/commit/81c5901c66b948780b05d01eeba91325dd9f6876))
* fix 自定义组件不显示和现实位置不对 ([c0d7e6e](https://github.com/yue1123/vue3-baidu-map-gl/commit/c0d7e6e1bcba4d4c40a46f6522169c1eebb78878))
* fixed bugs & 依赖包版本回退 ([a4b6826](https://github.com/yue1123/vue3-baidu-map-gl/commit/a4b6826d50626f42c20ea54c7ee236d081648ae3))
* new feature ([5693f42](https://github.com/yue1123/vue3-baidu-map-gl/commit/5693f4231137466bdbfe850f9015d5082654e974))
* update commitlint config ([e197f4d](https://github.com/yue1123/vue3-baidu-map-gl/commit/e197f4d06944bb0d37761e3ee148252e19864b7f))
* update README.md ([b104d40](https://github.com/yue1123/vue3-baidu-map-gl/commit/b104d409bfb446e514f4c8ab00929ca9145695bb))
* update version ([224b5b2](https://github.com/yue1123/vue3-baidu-map-gl/commit/224b5b227ec003cbe966c93ff15a8767eecd02da))
* update version ([5d127c3](https://github.com/yue1123/vue3-baidu-map-gl/commit/5d127c3dc2277fc19384e49b8dfc4cd9bad2b296))
* update version 0.0.1 ([76b8e21](https://github.com/yue1123/vue3-baidu-map-gl/commit/76b8e21314b3ad4a70fe1384eae2eaf8f38ccecc))
* update withinstall com name ([b1bba0d](https://github.com/yue1123/vue3-baidu-map-gl/commit/b1bba0dcc5edc1fabf17bcb31e2906639cfd288c))
