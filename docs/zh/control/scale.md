# Scale 比例尺控件
比例尺控件,默认显示在地图左下角

```ts
import { Scale } from 'vue3-baidu-map-gl'
```

## 组件实例
<div>
<Map
  :ak="'4stE857hYPHbEmgKhLiTAa0QbCIULHpm'"
  :minZoom="3"
  height="400px"
>
  <Scale />
</Map>
</div>


::: details 点击查看代码
```html
<Map
  :minZoom="3" 
  height="400px"
>
  <Scale />
</Map>

<script setup lang="ts">
import { Map, Scale } from 'vue3-baidu-map-gl'
</script>
```
:::

## 静态组件 Props
| 参数   | 说明           | 类型                    | 可选值            | 默认值                  |
| ------ | -------------- | ----------------------- | ----------------- | ----------------------- |
| anchor | 控件的停靠位置 | `string`                  | [anchor](#anchor) | `BMAP_ANCHOR_BOTTOM_LEFT` |
| offset | 控件的偏移值   | `{x: number, y: number }` |                   | `{ x: 83, y: 18 }`        |

## 动态组件 Props
动态绑定的值变更,会自动更新到地图中

| 参数 | 说明         | 类型   | 可选值        | 默认值           |
| ---- | ------------ | ------ | ------------- | ---------------- |
| unit | 比例尺单位制 | `string` | [unit](#unit) | `BMAP_UNIT_METRIC` |

## anchor
| 值                       | 说明 |
| ------------------------ | ---- |
| BMAP_ANCHOR_TOP_LEFT     | 左上 |
| BMAP_ANCHOR_TOP_RIGHT    | 右上 |
| BMAP_ANCHOR_BOTTOM_LEFT  | 左下 |
| BMAP_ANCHOR_BOTTOM_RIGHT | 右下 |

## unit
| 值                 | 说明 |
| ------------------ | ---- |
| BMAP_UNIT_METRIC   | 公尺 |
| BMAP_UNIT_IMPERIAL | 英尺 |

