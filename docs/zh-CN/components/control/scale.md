# BScale 比例尺控件

比例尺控件，默认显示在地图左下角

```ts
import { BScale } from 'vue3-baidu-map-gl'
```

## 组件示例

:::demo
control/scale
:::

## 静态组件 Props

| 属性   | 说明           | 类型                      | 可选值            | 默认值                    |
| ------ | -------------- | ------------------------- | ----------------- | ------------------------- |
| anchor | 控件的停靠位置 | `string`                  | [anchor](#anchor) | `BMAP_ANCHOR_BOTTOM_LEFT` |
| offset | 控件的偏移值   | `{x: number, y: number }` | -                 | `{ x: 83, y: 18 }`        |

## 动态组件 Props

| 属性    | 说明         | 类型      | 可选值        | 默认值             | 版本                               |
| ------- | ------------ | --------- | ------------- | ------------------ | ---------------------------------- |
| unit    | 比例尺单位制 | `string`  | [unit](#unit) | `BMAP_UNIT_METRIC` |                                    |
| visible | 是否显示     | `boolean` | -             | `true`             | <Badge type="tip" text="^2.2.0" /> |

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

## 组件事件

| 事件名 | 说明                                       | 类型                        |
| ------ | ------------------------------------------ | --------------------------- |
| initd  | 组件初始化后，调用的方法，返回一个地图实例 | `{ map, BmapGL, instance }` |
| unload | 组件卸载时会调用此方法                     | -                           |
