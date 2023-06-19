# BMarker3d 带高度的点

在地图上绘制带高度的点覆盖物

```ts
import { BMarker3d } from 'vue3-baidu-map-gl'
```

## 组件示例

:::demo 在地图上绘制带高度的点覆盖物
overlay/marker3d/index
:::

## 纹理贴图

:::demo 给点贴上纹理
overlay/marker3d/withImg
:::

## 静态组件 Props

| 属性   | 说明                | 类型                                   | 默认值              |
| ------ | ------------------- | -------------------------------------- | ------------------- |
| height | 点高度              | `number`                               | `required`          |
| size   | 点大小(宽/高)       | `number`                               | `50`                |
| shape  | 点的[形状](#点形状) | `BMAP_SHAPE_CIRCLE \| BMAP_SHAPE_RECT` | `BMAP_SHAPE_CIRCLE` |

## 点形状

| 属性              | 说明   |
| ----------------- | ------ |
| BMAP_SHAPE_CIRCLE | 圆形   |
| BMAP_SHAPE_RECT   | 正方形 |

## 动态组件 Props

| 属性            | 说明                                        | 类型                          | 可选值 | 默认值     | 版本                               |
| --------------- | ------------------------------------------- | ----------------------------- | ------ | ---------- | ---------------------------------- |
| position        | 点的坐标                                    | `{ lng: number, lat: number}` | -      | `required` | -                                  |
| icon            | 点的图或[自定义纹理贴图](#自定义纹理贴图)   | `string `                     | -      |            | -                                  |
| fillColor       | 点填充颜色，同 CSS 颜色                     | `string `                     | -      | `#f00`     | -                                  |
| fillOpacity     | 点填充的透明度，范围 0-1                    | `number `                     | `0-1`  | `0.8 `     | -                                  |
| enableMassClear | 是否在调用 `map.clearOverlays` 清除此覆盖物 | `boolean`                     | -      | ` true`    | -                                  |
| visible         | 是否显示                                    | `boolean`                     | -      | `true`     | <Badge type="tip" text="^2.1.4" /> |

## 自定义纹理贴图

| 属性          | 说明                                                                                                                                                                        | 类型                                | 默认值     |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ---------- |
| anchor        | 贴图的定位点相对于贴图左上角的偏移值                                                                                                                                        | `{ x: number, y: number }`          | -          |
| imageOffset   | 贴图所用的图片相对于可视区域的偏移值，此功能的作用等同于 CSS 中的 `background-position` 属性                                                                                | `{ x: number, y: number }`          | -          |
| imageSize     | 贴图所用的图片的大小，此功能的作用等同于 CSS 中的`background-size`属性。可用于实现高清屏的高清效果                                                                          | `{ width: number, height: number }` | `required` |
| imageUrl      | 贴图所用图像资源的位置                                                                                                                                                      | `string`                            | `required` |
| printImageUrl | 设置 icon 打印图片的 url，该打印图片只针对 IE6 有效，解决 IE6 使用 PNG 滤镜导致的错位问题。如果您的 icon 没有使用 PNG 格式图片或者没有使用 CSS Sprites 技术，则可忽略此配置 | `string `                           | -          |

## 组件事件

| 事件名     | 说明                                                                               | 类型                        |
| ---------- | ---------------------------------------------------------------------------------- | --------------------------- |
| initd      | 组件初始化后，调用的方法，返回一个地图实例                                         | `{ map, BmapGL, instance }` |
| unload     | 组件卸载时会调用此方法                                                             | -                           |
| click      | 鼠标左键单击事件的回调函数。当双击时，产生的事件序列为：click -> click -> dblclick | `((e: Event) => void)`      |
| dblclick   | 鼠标左键双击事件的回调函数                                                         | `((e: Event) => void)`      |
| mousedown  | 鼠标左键在该覆盖物上按下的回调函数                                                 | `((e: Event) => void)`      |
| mouseup    | 鼠标左键在该覆盖物上抬起的回调函数                                                 | `((e: Event) => void)`      |
| mouseout   | 鼠标指针移出该覆盖物事件的回调函数                                                 | `((e: Event) => void)`      |
| mouseover  | 鼠标指针移入该覆盖物事件的回调函数                                                 | `((e: Event) => void)`      |
| remove     | 该覆盖物被移除的回调函数                                                           | `((e: Event) => void)`      |
| rightclick | 鼠标右键单击事件的回调函数                                                         | `((e: Event) => void)`      |
