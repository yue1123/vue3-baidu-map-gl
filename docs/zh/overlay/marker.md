# Marker 标注点

在地图上绘制简单的圆形

```ts:no-line-numbers
import { Marker } from 'vue3-baidu-map-gl'
```

## 静态组件 Props
| 参数           | 说明                                                                                                                   | 类型                        | 可选值                      | 默认值     |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------- | --------------------------- | ---------- |
| position       | 标注点的坐标                                                                                                           | { lng: number, lat: number} |                             | `required` |
| offset         | 标注点的像素偏移                                                                                                       | {x: number, y: number }     |                             |            |
| icon           | 标注点的图标。可使用默认图标,也可[自定义图标](#自定义图标)                                                             | string                      | simple_red / simple_blue... |            |
| massClear      | 是否在调用map.clearOverlays清除此覆盖物                                                                                | boolean                     |                             | true       |
| title          | 鼠标移到marker上的显示内容                                                                                             | string                      |                             |            |
| rotation       | 旋转角度                                                                                                               | number                      |                             |            |
| draggingCursor | 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的[cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)属性规范 | string                      |                             |            |
| raiseOnDrag    | 拖拽标注时，标注是否开启离开地图表面效果                                                                               | boolean                     |                             | false      |
| dragging       | 是否启用拖拽                                                                                                           | boolean                     |                             | true       |
| clicking       | 是否响应点击事件                                                                                                       | boolean                     |                             | true       |


## 默认图标可选值
 simple_red , simple_blue , loc_red , loc_blue , start , end , location , red1 , red2 , red3 , red4 , red5 , red6 , red7 , red8 , red9 , red10 , blue1 , blue2 , blue3 , blue4 , blue5 , blue6 , blue7 , blue8 , blue9 , blue10

## 自定义图标
| 参数          | 说明                                                                                                                                                         | 类型                              | 可选值     | 默认值 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- | ---------- | ------ |
| anchor        | 图标的定位点相对于图标左上角的偏移值                                                                                                                         | { x: number, y: number }          |            |        |
| imageOffset   | 图标所用的图片相对于可视区域的偏移值，此功能的作用等同于CSS中的background-position属性                                                                       | { x: number, y: number }          |            |        |
| imageSize     | 图标所用的图片的大小，此功能的作用等同于CSS中的background-size属性。可用于实现高清屏的高清效果                                                               | { width: number, height: number } | `required` |        |
| imageUrl      | 图标所用图像资源的位置                                                                                                                                       | string                            | `required` |        |
| printImageUrl | 设置icon打印图片的url，该打印图片只针对IE6有效，解决IE6使用PNG滤镜导致的错位问题。如果您的icon没有使用PNG格式图片或者没有使用CSS Sprites技术，则可忽略此配置 | string                            |            |        |

## 组件事件
| 事件名          | 说明                                                                           | 类型                 |
| --------------- | ------------------------------------------------------------------------------ | -------------------- |
| click           | 鼠标左键单击事件的回调函数。 当双击时，产生的事件序列为： click click dblclick | ((e: Event) => void) |
| dblclick        | 鼠标左键双击事件的回调函数                                                     | ((e: Event) => void) |
| mousedown       | 鼠标左键在该覆盖物上按下的回调函数                                             | ((e: Event) => void) |
| mouseup         | 鼠标左键在该覆盖物上抬起的回调函数                                             | ((e: Event) => void) |
| mouseout        | 鼠标指针移出该覆盖物事件的回调函数                                             | ((e: Event) => void) |
| mouseover       | 鼠标指针移入该覆盖物事件的回调函数                                             | ((e: Event) => void) |
| remove          | 该覆盖物被移除的回调函数                                                       | ((e: Event) => void) |
| infowindowclose | infowindow关闭事件的回调函数                                                   | ((e: Event) => void) |
| infowindowopen  | infowindow打开事件的回调函数                                                   | ((e: Event) => void) |
| dragstart       | 拖拽覆盖物开始事件的回调函数                                                   | ((e: Event) => void) |
| dragging        | 覆盖物拖拽中事件的回调函数                                                     | ((e: Event) => void) |
| dragend         | 拖拽覆盖物结束事件的回调函数                                                   | ((e: Event) => void) |
| rightclick      | 鼠标右键单击事件的回调函数                                                     | ((e: Event) => void) |
## 组件实例
<div>
<Map
  :ak="'4stE857hYPHbEmgKhLiTAa0QbCIULHpm'"
  :minZoom="3"
  height="400px"
>
  <Marker
    :position="{ lat: 39.915185, lng: 116.403901 }"
    icon="start"
  />
  <Marker
    :position="{ lat: 39.915185, lng: 116.404901 }"
    icon="end"
  />
  <Marker
    :position="{ lat: 39.915185, lng: 116.405901 }"
    icon="red1"
  />
  <Marker
    :position="{ lat: 39.915185, lng: 116.406901 }"
    icon="simple_red"
  />
  <Marker
			:position="{ lat: 39.915185, lng: 116.400901 }"
			:icon="{
        imageUrl: '/logo.png',
        imageSize: {
          width: 100,
          height: 100
        },
      }"
			dragging
		/>
</Map>
</div>

拖动图片试试

```vue:no-line-numbers
<Map
  :minZoom="3" 
  height="400px"
>
  <!-- 起点图标 -->
  <Marker
    :position="{ lat: 39.915185, lng: 116.403901 }"
    icon="start"
  />
  <!-- 终点图标 -->
  <Marker
    :position="{ lat: 39.915185, lng: 116.404901 }"
    icon="end"
  />
  <!-- 红色图标1 -->
  <Marker
    :position="{ lat: 39.915185, lng: 116.405901 }"
    icon="red1"
  />
  <!-- 红色图标2 -->
  <Marker
    :position="{ lat: 39.915185, lng: 116.403901 }"
    icon="simple_red"
  />
  <!-- 自定义图标 -->
  <Marker
    :position="{ lat: 39.915185, lng: 116.400901 }"
    :icon="{
      imageUrl: '/logo.png',
      imageSize: {
        width: 100,
        height: 100
      },
    }"
    dragging
  />
</Map>

<script setup lang="ts">
import {Map, Maker} from 'vue3-baidu-map-gl'
</script>
```