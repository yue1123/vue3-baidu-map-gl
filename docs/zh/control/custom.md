# Control 自定义控件

根据地图 `Map` 组件提供的 Props，或者地图实例，自定义控件

```ts
import { Control } from 'vue3-baidu-map-gl'
```

## 组件示例

<div>
<Map
  @initd="handleInitd"
  :minZoom="3"
  :zoom="zoom"
>
  <Control style="display: flex; background-color: #fff; padding: 10px" :offset="{ x: 0, y: 0 }">
    <button @click="handleZoomOut">缩小</button>
    <button @click="handleZoomIn">放大</button>
  </Control>
</Map>
</div>

<script setup lang="ts">
  import { ref } from 'vue'
  const zoom = ref(10)
  let _map = null
  function handleInitd(map){
    _map = map
  }
  function handleZoomOut() {
    zoom.value = _map.getZoom() - 1
  }
  function handleZoomIn() {
    zoom.value = _map.getZoom() + 1
  }
</script>

<style scoped>
button{
  outline:none;
  border:none;
  background:#41b883;
  margin:0 5px;
  padding: 5px 15px;
  border-radius: 4px !important;
}
</style>

::: details 点击查看代码

<!-- prettier-ignore -->
```html
<div>
  <Map @initd="handleInitd" :minZoom="3" :zoom="zoom">
    <Control style="display: flex; background-color: #fff; padding: 10px" :offset="{ x: 0, y: 0 }">
      <button @click="handleZoomOut">缩小</button>
      <button @click="handleZoomIn">放大</button>
    </Control>
  </Map>
</div>

<script setup lang="ts">
  import { ref } from 'vue'
  const zoom = ref(10)
  let _map = null
  function handleInitd(map) {
    _map = map
  }
  function handleZoomOut() {
    zoom.value = _map.getZoom() - 1
  }
  function handleZoomIn() {
    zoom.value = _map.getZoom() + 1
  }
</script>

<style scoped>
  button {
    outline: none;
    border: none;
    background: #41b883;
    margin: 0 5px;
    padding: 5px 15px;
    border-radius: 4px !important;
  }
</style>
```

:::

## 静态组件 Props

| 属性   | 说明           | 类型                      | 可选值            | 默认值                    |
| ------ | -------------- | ------------------------- | ----------------- | ------------------------- |
| anchor | 控件的停靠位置 | `string`                  | [anchor](#anchor) | `BMAP_ANCHOR_BOTTOM_LEFT` |
| offset | 控件的偏移值   | `{x: number, y: number }` | -                 | `{ x: 83, y: 18 }`        |

## anchor

| 值                       | 说明 |
| ------------------------ | ---- |
| BMAP_ANCHOR_TOP_LEFT     | 左上 |
| BMAP_ANCHOR_TOP_RIGHT    | 右上 |
| BMAP_ANCHOR_BOTTOM_LEFT  | 左下 |
| BMAP_ANCHOR_BOTTOM_RIGHT | 右下 |

## 组件事件

| 事件名          | 说明                                                                                             | 类型                                     |
| --------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| initd           | 组件初始化后，调用的方法，返回一个地图实例                                                       | `{ map: BmapGL }`                        |
| unload          | 组件卸载时会调用此方法                                                                           | -                                        |