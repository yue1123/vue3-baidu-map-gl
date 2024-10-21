# mapv 可视化

MapVGL，是一款基于 WebGL 的地理信息可视化库，可以用来展示大量基于 3D 的地理信息点线面数据。设计初衷主要是为了解决大数据量的三维地理数据展示问题及一些炫酷的三维效果。

本章节将演示一下通过插件的形式和 npm 形式加载 `mapv` 相关资源，并展示几个示例。

## 结合方式：

与 `mapv` 相关资源结合有如下两种方式：

### 1。通过组件库提供的插件形式 (内部以 cdn 方式加载)

全局配置插件：

```ts
// ...
app.use(baiduMap, {
  plugins: ['Mapvgl', 'Mapv', 'MapvThree']
})
```

或者通过组件配置插件：

```vue
<template>
  <BMap :plugins="['Mapvgl', 'Mapv', 'MapvThree']"></BMap>
</template>
```

因为资源是通过异步方式加载，所以需要监听 pluginReady 事件：

```vue
<template>
  <BMap :plugins="['Mapvgl', 'Mapv', 'MapvThree']" @pluginReady="handlePluginReady"></BMap>
</template>
<script lang="ts" setup>
  function handlePluginReady() {
    // ...
  }
</script>
```

### 2。通过 npm

安装

```shell
# mapv 基础库
npm add mapv
# or
pnpm add mapv
# ----------------------
# mapvgl GL扩展库
npm add mapvgl
# or
pnpm add mapvgl
# ----------------------
# mapv-three three.js 相关库
npm add mapv-three
# or
pnpm add mapv-three
```

使用

```ts
import * as mapv from 'mapv'
import * as mapvgl from 'mapvgl'
import * as mapvThree from 'mapv-three'
```

:::warning 注意
mapv、mapvgl、mapvThree 均使用 umd 格式打包，而非 esm。所以通过 npm 方式使用代码不利于构建工具 Tree-shaking，导致打包大小臃肿。我们更推荐以插件形式使用
:::

## 示例

> 以下示例均来自于 `mapv` 官方示例。更多示例见及文档请参考：https://mapv.baidu.com/gl/docs/index.html

### PointLayer 基础点层图

> https://mapv.baidu.com/gl/docs/PointLayer.html

:::demo
expand/mapv/pointLayer
:::

### HeatGridLayer 柱状热力图

> https://mapv.baidu.com/gl/docs/HeatGridLayer.html

:::demo
expand/mapv/heatGridLayer
:::

### 渲染 3d 模型

> https://lbsyun.baidu.com/solutions/mapvthreedoc

:::demo 渲染 3d 模型并绑定事件
expand/mapv/3dModel
:::
