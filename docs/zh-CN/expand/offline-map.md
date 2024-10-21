# 离线地图

离线地图需要自建百度地图 api，并将自建的 api 地址通过 [`apiUrl`](../guide/config) 配置传给组件库。

除此之外，还有一个很重要的处理，需要全局初始化一个回调函数，用于通知地图初始化。

```js
window.BMapGL.apiLoad = function () {
  delete window.BMapGL.apiLoad
  if (typeof window._initBMap_ == 'function') {
    window._initBMap_()
  }
}
```

下面是一个离线地图 api 加载入口文件示例，是根据原版在线 api 的改动的，其中请求的 `bmapgl.min.js` 就是地图 api，这个资源地址需要自建。

```js
// getApiScripts.js
;(function () {
  var offmapcfg = (window.offmapcfg = {})
  var JS__FILE__ = document.currentScript
    ? document.currentScript.src
    : document.scripts[document.scripts.length - 1].src
  offmapcfg.home = JS__FILE__.substr(0, JS__FILE__.lastIndexOf('/') + 1) //地图API主目录

  window.BMapGL_loadScriptTime = new Date().getTime()
  window.BMapGL = window.BMapGL || {}
  window.BMapGL.apiLoad = function () {
    delete window.BMapGL.apiLoad
    if (typeof window._initBMap_ == 'function') {
      window._initBMap_()
    }
  }

  var s = document.createElement('script')
  var link = document.createElement('link')

  s.src = offmapcfg.home + '/bmapgl.min.js'
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('type', 'text/css')
  link.setAttribute('href', offmapcfg.home + '/css/bmap.css')
  document.body.appendChild(s)
  document.getElementsByTagName('head')[0].appendChild(link)
})()
```

```vue
<script setup lang="ts">
  import { BMap, BMarker } from 'vue3-baidu-map-gl'
</script>

<template>
  <BMap
    :center="{ lng: 106.53637853629937, lat: 29.464275891815767 }"
    enableScrollWheelZoom
    apiUrl="自建地址/getApiScripts.js"
  >
    <BMarker :position="{ lng: 121.56847909, lat: 29.8100979777 }"></BMarker>
  </BMap>
</template>
```
