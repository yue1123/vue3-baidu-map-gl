---
title: 快速开始
lang: zh-CN
---

# 快速开始

本节将介绍如何在项目中使用 Vue3 BaiduMap GL。

## 用法

### 完整引入

失去 Tree Shaking 的功能，打包有冗余代码。如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
import { createApp } from 'vue'
import Vue3BaiduMapGL from 'vue3-baidu-map-gl'

const app = createApp(App)
app.use(Vue3BaiduMapGL)
```

#### Volar 支持 <Badge type="tip" text="^0.0.21" />

如果你在使用 `Volar`，那么可以在 `tsconfig.json` 中配置 `compilerOptions.types` 来指定全局组件类型，从而获得更好的类型提示。如下图：

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["vue3-baidu-map-gl/volar"]
  }
}
```

### 按需导入 <Badge type="tip" text="推荐" />

Vue3 BaiduMap GL 提供了基于 ES Module 开箱即用的 Tree Shaking 功能。你可以直接导入组件并使用它。这种情况下，只有导入的组件才会被打包。

<!-- prettier-ignore -->
```vue
<template>
  <Map>
    <Zoom />
    <!-- ... -->
  </Map>
</template>

<script setup lang="ts">
  import { Map, Zoom } from 'vue3-baidu-map-gl'
</script>
```

## 申请 ak 密钥

在开始使用前，您还需在百度地图开发者后台申请百度地图 ak 密钥，然后在项目中[配置 ak 密钥](./config)后，才能正确的渲染地图。详细请阅读下面两个链接的内容：

> [官方密钥 ak 申请指引](https://lbs.baidu.com/index.php?title=jspopularGL/guide/getkey)
>
> [申请开发者密钥 ak](https://lbsyun.baidu.com/apiconsole/key?application=key)

## 配置

参考[配置](./config)

## 开始使用

您可以从现在起启动您的项目。 对于每个组件或 hooks 的用法，请参考对应的文档。
