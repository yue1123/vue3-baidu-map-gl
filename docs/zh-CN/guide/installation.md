# 安装

## 使用包管理器

我们建议您使用包管理器 (如 NPM、Yarn 或 pnpm) 安装 Vue3 BaiduMap GL，然后您就可以使用打包工具，例如 Vite 或 webpack。

::: code-group

```bash [pnpm]
pnpm add vue3-baidu-map-gl
```

```bash [yarn]
yarn add vue3-baidu-map-gl
```

```bash [npm]
npm install vue3-baidu-map-gl
```

:::

## 浏览器直接引入 <Badge type="tip" text="^0.0.21" />

直接通过浏览器的 HTML 标签导入 Vue3 BaiduMap GL，然后就可以使用全局变量 `Vue3baiduMapGl` 了。

不同的 CDN 提供商有不同的引入方式，我们在这里以 [unpkg](https://unpkg.com) 和 [jsDelivr](https://www.jsdelivr.com) 举例。你也可以使用其它的 CDN 供应商。

::: code-group

```html [unpkg]
<head>
  <meta charset="utf-8" />
  <!-- Import Vue3 -->
  <script src="https://unpkg.com/vue@3"></script>
  <!-- Import Vue3 BaiduMap GL -->
  <!-- Would use latest version, you'd better specify a version -->
  <script src="https://unpkg.com/vue3-baidu-map-gl"></script>
</head>
```

```html [jsDelivr]
<head>
  <!-- Import Vue 3 -->
  <script src="https//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import Vue3 BaiduMap GL -->
  <script src="https://cdn.jsdelivr.net/npm/vue3-baidu-map-gl"></script>
</head>
```

:::

::: tip 提示
我们建议使用 CDN 引入 Vue3 BaiduMap GL 的用户在链接地址上锁定版本，以免将来 Vue3BaiduMapGL 升级时受到非兼容性更新的影响
:::

## Hello World

[在线演示](https://codepen.io/yue1123/pen/oNyQWeP)

<iframe allow="accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write;" allowfullscreen="true" allowpaymentrequest="true" height="500" style="width: 100%;" scrolling="no" title="Vue3 BaiduMap GL" src="https://codepen.io/yue1123/embed/oNyQWeP?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy">
</iframe>
