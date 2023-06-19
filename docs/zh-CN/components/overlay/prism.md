# BPrism 3d 棱柱

通过该组件可在地图上绘制 3d 棱柱，可以基于位置经纬度，高度，顶面和侧面的颜色、透明度等属性来绘制不规则的棱柱体。

```ts
import { BPrism } from 'vue3-baidu-map-gl'
```

## 示例

:::demo 结合 [`useAreaBoundary`](../hooks/useAreaBoundary) hooks, 并通过指定 `props.isBoundary` 为 `true` 实现 3d 行政区域显示效果
overlay/prism
:::

## 静态组件 Props

| 属性           | 说明                       | 类型       | 默认值   |
| -------------- | -------------------------- | ---------- | -------- |
| isBoundary     | 是否是行政区域的边界多边形 | `boolean ` | `false ` |
| autoCenter     | 是否自动根据多边形居中地图 | `boolean ` | `true`   |
| enableClicking | 是否响应点击事件           | `boolean ` | `true `  |

## 动态组件 Props

| 属性            | 说明                                        | 类型                            | 可选值 | 默认值     | 版本                               |
| --------------- | ------------------------------------------- | ------------------------------- | ------ | ---------- | ---------------------------------- |
| path            | 多边形的坐标数组                            | `{ lng: number, lat: number}[]` | -      | `required` | -                                  |
| altitude        | 3d 棱柱高度                                 | `number`                        | -      | `required` | -                                  |
| topFillColor    | 顶面填充颜色                                | `string `                       | -      | `#fff`     | -                                  |
| topFillOpacity  | 顶面填充颜色透明度                          | `number`                        | `0-1`  | -          | -                                  |
| sideFillColor   | 侧面填充颜色                                | `string`                        | -      |            | -                                  |
| sideFillOpacity | 侧面填充颜色透明度                          | `number`                        | `0-1`  | `#fff`     | -                                  |
| enableMassClear | 是否在调用 `map.clearOverlays` 清除此覆盖物 | `boolean`                       | -      | ` true`    | -                                  |
| visible         | 是否显示                                    | `boolean`                       | -      | `true`     | <Badge type="tip" text="^2.2.0" /> |

## 组件事件

| 事件名     | 说明                                                                                    | 类型                        |
| ---------- | --------------------------------------------------------------------------------------- | --------------------------- |
| initd      | 组件初始化后，调用的方法，返回一个地图实例                                              | `{ map, BmapGL, instance }` |
| unload     | 组件卸载时会调用此方法                                                                  | -                           |
| click      | 鼠标左键单击事件的回调函数。 当双击时，产生的事件序列为： `click -> click -> dblclick ` | `((e: Event) => void)`      |
| dblclick   | 鼠标左键双击事件的回调函数                                                              | `((e: Event) => void)`      |
| mousedown  | 鼠标左键在该覆盖物上按下的回调函数                                                      | `((e: Event) => void)`      |
| mouseup    | 鼠标左键在该覆盖物上抬起的回调函数                                                      | `((e: Event) => void)`      |
| mouseout   | 鼠标指针移出该覆盖物事件的回调函数                                                      | `((e: Event) => void)`      |
| mouseover  | 鼠标指针移入该覆盖物事件的回调函数                                                      | `((e: Event) => void)`      |
| remove     | 该覆盖物被移除的回调函数                                                                | `((e: Event) => void)`      |
| lineupdate | 覆盖物被编辑后的回调函数                                                                | `((e: Event) => void)`      |
