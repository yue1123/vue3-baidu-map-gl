# Navigation3d 3D视角导航控件
地图3D控件，可以控制地图的旋转、倾斜，默认位于地图右下角

```ts:no-line-numbers
import { Navigation3d } from 'vue3-baidu-map-gl'
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
  <Navigation3d />
</Map>
</div>


```vue:no-line-numbers
<Map
  :minZoom="3" 
  height="400px"
>
  <Navigation3d />
</Map>

<script setup lang="ts">
import {Map, Navigation3d} from 'vue3-baidu-map-gl'
</script>
```
