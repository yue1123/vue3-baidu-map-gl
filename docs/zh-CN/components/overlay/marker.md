# BMarker 标注点

在地图上绘制点

```ts
import { BMarker } from 'vue3-baidu-map-gl'
```

## 组件示例

:::demo 在地图上添加标记点，通过 icon 指定显示图标, 尝试拖动图片
overlay/marker
:::

## 动态渲染

有时候需要根据动态数据,渲染 marker,点击更新按钮查看效果.
:::demo class="p-bottom"
overlay/dyynmicMaker
:::

## 静态组件 Props

| 属性           | 说明                                                                                                                     | 类型       | 默认值  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------- | ------- |
| title          | 鼠标移到 marker 上的显示内容                                                                                             | `string`   | -       |
| draggingCursor | 拖拽标注时的鼠标指针样式。此属性值需遵循 CSS 的[cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)属性规范 | `string`   | -       |
| raiseOnDrag    | 拖拽标注时，标注是否开启离开地图表面效果                                                                                 | ` boolean` | `false` |
| enableClicking | 是否响应点击事件                                                                                                         | ` boolean` | `true`  |

## 动态组件 Props

| 属性            | 说明                                                        | 类型                          | 可选值                        | 默认值     | 版本                                |
| --------------- | ----------------------------------------------------------- | ----------------------------- | ----------------------------- | ---------- | ----------------------------------- |
| zIndex          | 显示层级                                                    | `number`                      | -                             | -          | <Badge type="tip" text="^0.0.35" /> |
| position        | 标注点的坐标                                                | `{ lng: number, lat: number}` | -                             | `required` | -                                   |
| offset          | 标注点的像素偏移                                            | ` {x: number, y: number }`    | -                             |            | -                                   |
| icon            | 标注点的图标。可使用默认图标，也可[自定义图标](#自定义图标) | `string `                     | `simple_red / simple_blue...` | -          | -                                   |
| rotation        | 旋转角度                                                    | `number `                     | -                             |            | -                                   |
| enableDragging  | 是否启用拖拽                                                | `boolean `                    | -                             | ` true`    | -                                   |
| enableMassClear | 是否在调用 `map.clearOverlays` 清除此覆盖物                 | `boolean `                    | -                             | `true `    | -                                   |
| visible         | 是否显示                                                    | `boolean`                     | -                             | `true`     | <Badge type="tip" text="^2.2.0" />  |

## 默认图标可选值

simple_red , simple_blue , loc_red , loc_blue , start , end , location

红色图标: red1 , red2 , red3 , red4 , red5 , red6 , red7 , red8 , red9 , red10

蓝色图标: blue1 , blue2 , blue3 , blue4 , blue5 , blue6 , blue7 , blue8 , blue9 , blue10

其余图标可根据下图自行定位裁切:

![https://mapopen.bj.bcebos.com/cms/react-bmap/markers_new2x_fbb9e99.png](https://mapopen.bj.bcebos.com/cms/react-bmap/markers_new2x_fbb9e99.png)

## 自定义图标

| 属性          | 说明                                                                                                                                                                        | 类型                                | 默认值     | 版本                               |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ---------- | ---------------------------------- |
| anchor        | 图标的定位点相对于图标左上角的偏移值                                                                                                                                        | `{ x: number, y: number }`          | -          | -                                  |
| imageOffset   | 图标所用的图片相对于可视区域的偏移值，此功能的作用等同于 CSS 中的 background-position 属性                                                                                  | `{ x: number, y: number }`          | -          | -                                  |
| size          | 图标可视区域的大小                                                                                                                                                          | `{ width: number, height: number }` | `required` | <Badge type="tip" text="^2.3.3" /> |
| imageSize     | 图标所用的图片的大小，此功能的作用等同于 CSS 中的 background-size 属性。可用于实现高清屏的高清效果                                                                          | `{ width: number, height: number }` | -          | -                                  |
| imageUrl      | 图标所用图像资源的位置                                                                                                                                                      | `string`                            | `required` | -                                  |
| printImageUrl | 设置 icon 打印图片的 url，该打印图片只针对 IE6 有效，解决 IE6 使用 PNG 滤镜导致的错位问题。如果您的 icon 没有使用 PNG 格式图片或者没有使用 CSS Sprites 技术，则可忽略此配置 | `string `                           | -          | -                                  |

## 组件事件

| 事件名          | 说明                                                                               | 类型                        |
| --------------- | ---------------------------------------------------------------------------------- | --------------------------- |
| initd           | 组件初始化后，调用的方法，返回一个地图实例                                         | `{ map, BmapGL, instance }` |
| unload          | 组件卸载时会调用此方法                                                             | -                           |
| click           | 鼠标左键单击事件的回调函数。当双击时，产生的事件序列为：click -> click -> dblclick | `((e: Event) => void)`      |
| dblclick        | 鼠标左键双击事件的回调函数                                                         | `((e: Event) => void)`      |
| mousedown       | 鼠标左键在该覆盖物上按下的回调函数                                                 | `((e: Event) => void)`      |
| mouseup         | 鼠标左键在该覆盖物上抬起的回调函数                                                 | `((e: Event) => void)`      |
| mouseout        | 鼠标指针移出该覆盖物事件的回调函数                                                 | `((e: Event) => void)`      |
| mouseover       | 鼠标指针移入该覆盖物事件的回调函数                                                 | `((e: Event) => void)`      |
| remove          | 该覆盖物被移除的回调函数                                                           | `((e: Event) => void)`      |
| infowindowclose | infowindow 关闭事件的回调函数                                                      | `((e: Event) => void)`      |
| infowindowopen  | infowindow 打开事件的回调函数                                                      | `((e: Event) => void)`      |
| dragstart       | 拖拽覆盖物开始事件的回调函数                                                       | `((e: Event) => void)`      |
| dragging        | 覆盖物拖拽中事件的回调函数                                                         | `((e: Event) => void)`      |
| dragend         | 拖拽覆盖物结束事件的回调函数                                                       | `((e: Event) => void)`      |
| rightclick      | 鼠标右键单击事件的回调函数                                                         | `((e: Event) => void)`      |
