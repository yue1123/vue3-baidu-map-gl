# Zoom 缩放控件
缩放控件，默认位于地图右下角

```ts
import { Zoom } from 'vue3-baidu-map-gl'
```

## 静态组件 Props
| 参数   | 说明           | 类型                    | 可选值            | 默认值                  |
| ------ | -------------- | ----------------------- | ----------------- | ----------------------- |
| anchor | 控件的停靠位置 | string                  | [anchor](#anchor) | BMAP_ANCHOR_BOTTOM_LEFT |
| offset | 控件的偏移值   | {x: number, y: number } |                   | { x: 83, y: 18 }        |


## anchor
| 值                       | 说明 |
| ------------------------ | ---- |
| BMAP_ANCHOR_TOP_LEFT     | 左上 |
| BMAP_ANCHOR_TOP_RIGHT    | 右上 |
| BMAP_ANCHOR_BOTTOM_LEFT  | 左下 |
| BMAP_ANCHOR_BOTTOM_RIGHT | 右下 |


## 组件实例
<div>
<Map
  :ak="'4stE857hYPHbEmgKhLiTAa0QbCIULHpm'"
  :minZoom="3"
  height="400px"
>
  <Zoom />
</Map>
</div>


```html
<Map
  :minZoom="3" 
  height="400px"
>
  <Zoom />
</Map>

<script setup lang="ts">
import {Map, Zoom} from 'vue3-baidu-map-gl'
</script>
```
