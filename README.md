# Vue3 BaiduMap gl

基于百度地图 JavaScript GL 版 API 封装的 Vue3 组件库

<img src='./docs/public/logo.png' style="border-radius:48px;overflow:hidden; width:220px;">
<br />
<br />

[![GitHub license](https://img.shields.io/github/license/yue1123/img-previewer?style=flat-square)](https://github.com/yue1123/img-previewer/blob/main/LICENSE)
<img src="https://img.shields.io/github/package-json/v/yue1123/vue3-baidu-map-gl?color=f90&style=flat-square" alt="GitHub package.json version (subfolder of monorepo)">

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
### Usage
按需引入
```vue
<template>
  <Map ak="YOUR_AK" />
</template>

<script setup lang="ts">
  import { Map } from 'vue3-baidu-map-gl';
</script>
```

完整引入
```ts
import { createApp } from 'vue'
import App from './App.vue'
import baiduMap from 'vue3-baidu-map-gl'

const app = createApp(App)
app.use(baiduMap, { ak: 'YOUR_AK' })
app.mount('#app')
```

## License
[MIT licenses](https://opensource.org/licenses/MIT)

❤️用心制作❤️，开源不易，点亮star是支持更新的最大动力✌🏻
