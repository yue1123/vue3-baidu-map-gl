# Zoom 缩放控件

缩放控件，默认位于地图右下角

```ts
import { Location } from 'vue3-baidu-map-gl'
```

## 组件示例

<div>
  <Map>
    <Location />
  </Map>
</div>

::: details 点击查看代码

<!-- prettier-ignore -->
```html
<Map>
  <Location />
</Map>

<script setup lang="ts">
  import { Map, Location } from 'vue3-baidu-map-gl'
</script>
```

:::

## 静态组件 Props

| 属性   | 说明           | 类型                      | 可选值            | 默认值                     |
| ------ | -------------- | ------------------------- | ----------------- | -------------------------- |
| anchor | 控件的停靠位置 | `string`                  | [anchor](#anchor) | `BMAP_ANCHOR_BOTTOM_RIGHT` |
| offset | 控件的偏移值   | `{x: number, y: number }` | -                 | `{ x: 18, y: 18 }`         |

## anchor

| 值                       | 说明 |
| ------------------------ | ---- |
| BMAP_ANCHOR_TOP_LEFT     | 左上 |
| BMAP_ANCHOR_TOP_RIGHT    | 右上 |
| BMAP_ANCHOR_BOTTOM_LEFT  | 左下 |
| BMAP_ANCHOR_BOTTOM_RIGHT | 右下 |
