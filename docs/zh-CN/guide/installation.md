# 安装

## 环境支持

### 组件库

Vue3 BaiduMap GL 可以在支持 [ES2018](https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally) 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 [Babel](https://babeljs.io/) 和相应的 Polyfill 。

由于 Vue 3 不再支持 IE11，Vue3 BaiduMap GL 也不再支持 IE 浏览器。
| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge ≥ 79 | Firefox ≥ 78 | Chrome ≥ 64 | Safari ≥ 12 |

### Baidu Map GL Api 兼容性

JavaScript API GL v1.0 基于 WebGL 开发，对于用户的浏览器环境有兼容性要求。需要完整支持 WebGL 的现代浏览器来支持渲染。对于 WebGL 支持欠佳的浏览器会降级为 Canvas 绘制，若仍然存在兼容性问题，则会降级到瓦片图渲染，确保不同浏览器环境的用户都可以完成地图的基本渲染。

## 版本

Vue3 BaiduMap GL 目前还处于快速开发迭代中。

## 使用包管理器

我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装 Vue3 BaiduMap GL，然后您就可以使用打包工具，例如 Vite 或 webpack。

```shell
# with npm
npm install vue3-baidu-map-gl@latest --save

# or with yarn
yarn add vue3-baidu-map-gl@latest

# or with pnpm
pnpm add vue3-baidu-map-gl@latest
```

## 浏览器直接引入 <Badge type="tip" text="^0.0.21" />

直接通过浏览器的 HTML 标签导入 Vue3 BaiduMap GL，然后就可以使用全局变量 `Vue3baiduMapGl` 了。

不同的 CDN 提供商有不同的引入方式， 我们在这里以 [unpkg](https://unpkg.com) 和 [jsDelivr](https://www.jsdelivr.com) 举例。 你也可以使用其它的 CDN 供应商。

### unpkg

```html
<head>
  <meta charset="utf-8" />
  <!-- Import Vue3 -->
  <script src="https://unpkg.com/vue@3"></script>
  <!-- Import Vue3 BaiduMap GL -->
  <!-- Would use latest version, you'd better specify a version -->
  <script src="https://unpkg.com/vue3-baidu-map-gl"></script>
</head>
```

### jsDelivr

```html
<head>
  <!-- Import Vue 3 -->
  <script src="https//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import Vue3 BaiduMap GL -->
  <script src="https://cdn.jsdelivr.net/npm/vue3-baidu-map-gl"></script>
</head>
```

::: tip 提示
我们建议使用 CDN 引入 Vue3 BaiduMap GL 的用户在链接地址上锁定版本，以免将来 ElementPlus 升级时受到非兼容性更新的影响
:::

## Hello World

[在线演示](https://codepen.io/yue1123/pen/oNyQWeP)

<iframe allow="accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write;" allowfullscreen="true" allowpaymentrequest="true" height="500" style="width: 100%;" scrolling="no" title="Vue3 BaiduMap GL" src="https://codepen.io/yue1123/embed/oNyQWeP?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy">
</iframe>
