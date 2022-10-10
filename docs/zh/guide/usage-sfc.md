# 在 SFC 中使用
你可以选择直接引入或全局安装在 Vue App中。

## 按需引入 :thumbsup:（推荐）
你可以直接导入组件并使用它。这种情况下，只有导入的组件才会被打包。

```vue
<template>
  <Map
    ak="百度地图ak"
  >
    <Zoom />
  </Map>
</template>

<script setup lang="ts">
import { Map, Zoom } from 'vue3-baidu-map-gl'
</script>
```

## 全局安装 :thumbsdown:（不推荐）

### 安装全部组件
失去 tree-shaking 的能力，打包有冗余代码。

如果你想全局安装但是不想安装全部组件，请参考[按需引入](#按需引入-thumbsup-（推荐）)。
```ts
import { createApp } from 'vue'
import baiduMap from 'vue3-baidu-map-gl'

const app = createApp(App)
app.use(baiduMap, { ak: '百度地图ak' })
```
安装后，你可以这样在 SFC 中使用全部组件。
```vue
<template>
  <b-map>
    <b-zoom />
  </b-map>
</template>
```


### Volar 支持（1.0.0）
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
配置 `Volar` 前：
<div style="display: flex;justify-content:flex-start;">
  <img src="/not-enable-volar.png" alt="">
  <img src="/not-enable-volar1.png" alt="">
</div>

配置 `Volar` 后：
<div>
  <img width="70%" src="/enable-volar.png" alt="">
  <img width="70%" src="/enable-volar1.png" alt="">
</div>