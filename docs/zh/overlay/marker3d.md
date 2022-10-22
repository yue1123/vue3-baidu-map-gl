# Marker3d 带高度的点

在地图上绘制带高度的点覆盖物

```ts
import { Marker3d } from 'vue3-baidu-map-gl'
```

<script setup lang="ts">
  const point1 = { lat: 39.925185, lng: 116.400901 }
  const point2 = { lat: 39.915185, lng: 116.400901 }
</script>

## 组件示例

<div>
<Map
  :minZoom="3"
  :zoom='16'
  :heading="64.5"
  :tilt="73"
  height="400px"
  enableScrollWheelZoom
>
  <Marker3d
    :position="point2" 
    :height='1200' 
    :size="200"
    fillColor="#454399"
    :fillOpacity="0.5"
    shape='BMAP_SHAPE_CIRCLE'
  />
</Map>
</div>

::: details 点击查看代码

```html
<map :minZoom="3" :zoom="16" :heading="64.5" :tilt="73" height="400px" enableScrollWheelZoom>
  <Marker3d
    :position="point1"
    :height="1200"
    :size="200"
    fillColor="#454399"
    :fillOpacity="0.5"
    shape="BMAP_SHAPE_CIRCLE"
  />
</map>

<script setup lang="ts">
  import { Map, Marker3d } from 'vue3-baidu-map-gl'
  const point1 = { lat: 39.915185, lng: 116.400901 }
</script>
```

:::

## 纹理贴图

<div>
<Map
  :minZoom="3"
  :zoom='16'
  :heading="64.5"
  :tilt="73"
  height="400px"
  enableScrollWheelZoom
>
  <Marker3d
    :position="point1"
    :height='1200'
    :size="200"
    shape='BMAP_SHAPE_CIRCLE'
    :icon="{
      imageUrl: 'https://cdn.jsdelivr.net/gh/yue1123/vue3-baidu-map-gl@0.0.21/docs/public/logo.png',
      imageSize: {
        width: 200,
        height: 200
      },
    }"
  />
  <Marker3d
    :position="point2"
    :height='800'
    :size="200"
    shape='BMAP_SHAPE_CIRCLE'
    :icon="{
      imageUrl: 'https://cdn.jsdelivr.net/gh/yue1123/vue3-baidu-map-gl@0.0.21/docs/public/logo.png',
      imageSize: {
        width: 200,
        height: 200
      },
    }"
  />
</Map>
</div>

::: details 点击查看代码

```html
<map :minZoom="3" :zoom="16" :heading="64.5" :tilt="73" height="400px" enableScrollWheelZoom>
  <Marker3d
    :position="point1"
    :height="1200"
    :size="200"
    shape="BMAP_SHAPE_CIRCLE"
    :icon="{
      imageUrl: 'https://cdn.jsdelivr.net/gh/yue1123/vue3-baidu-map-gl@0.0.21/docs/public/logo.png',
      imageSize: {
        width: 200,
        height: 200
      },
    }"
  />
  <Marker3d
    :position="point2"
    :height="800"
    :size="200"
    shape="BMAP_SHAPE_CIRCLE"
    :icon="{
      imageUrl: 'https://cdn.jsdelivr.net/gh/yue1123/vue3-baidu-map-gl@0.0.21/docs/public/logo.png',
      imageSize: {
        width: 200,
        height: 200
      },
    }"
  />
</map>

<script setup lang="ts">
  import { Map, Marker3d } from 'vue3-baidu-map-gl'
  const point1 = { lat: 39.925185, lng: 116.400901 }
  const point2 = { lat: 39.915185, lng: 116.400901 }
</script>
```

:::

## 静态组件 Props

| 参数   | 说明                | 类型                                   | 默认值              |
| ------ | ------------------- | -------------------------------------- | ------------------- |
| height | 点高度              | `number`                               | `required`          |
| size   | 点大小(宽/高)       | `number`                               | `50`                |
| shape  | 点的[形状](#点形状) | `BMAP_SHAPE_CIRCLE \| BMAP_SHAPE_RECT` | `BMAP_SHAPE_CIRCLE` |

## 点形状

| 参数              | 说明   |
| ----------------- | ------ |
| BMAP_SHAPE_CIRCLE | 圆形   |
| BMAP_SHAPE_RECT   | 正方形 |

## 动态组件 Props

| 参数            | 说明                                        | 类型                          | 可选值 | 默认值     |
| --------------- | ------------------------------------------- | ----------------------------- | ------ | ---------- |
| position        | 点的坐标                                    | `{ lng: number, lat: number}` |        | `required` |
| icon            | 点的图或[自定义纹理贴图](#自定义纹理贴图)   | `string `                     |        |            |
| fillColor       | 点填充颜色，同 CSS 颜色                     | `string `                     |        | `#f00`     |
| fillOpacity     | 点填充的透明度，范围 0-1                    | `number `                     | `0-1`  | `0.8 `     |
| enableMassClear | 是否在调用 `map.clearOverlays` 清除此覆盖物 | `boolean`                     |        | ` true`    |

## 自定义纹理贴图

| 参数          | 说明                                                                                                                                                                        | 类型                                | 默认值     |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ---------- |
| anchor        | 贴图的定位点相对于贴图左上角的偏移值                                                                                                                                        | `{ x: number, y: number }`          |            |
| imageOffset   | 贴图所用的图片相对于可视区域的偏移值，此功能的作用等同于 CSS 中的 `background-position` 属性                                                                                | `{ x: number, y: number }`          |            |
| imageSize     | 贴图所用的图片的大小，此功能的作用等同于 CSS 中的`background-size`属性。可用于实现高清屏的高清效果                                                                          | `{ width: number, height: number }` | `required` |
| imageUrl      | 贴图所用图像资源的位置                                                                                                                                                      | `string`                            | `required` |
| printImageUrl | 设置 icon 打印图片的 url，该打印图片只针对 IE6 有效，解决 IE6 使用 PNG 滤镜导致的错位问题。如果您的 icon 没有使用 PNG 格式图片或者没有使用 CSS Sprites 技术，则可忽略此配置 | `string `                           |            |

## 组件事件

| 事件名     | 说明                                                                               | 类型                   |
| ---------- | ---------------------------------------------------------------------------------- | ---------------------- |
| click      | 鼠标左键单击事件的回调函数。当双击时，产生的事件序列为：click -> click -> dblclick | `((e: Event) => void)` |
| dblclick   | 鼠标左键双击事件的回调函数                                                         | `((e: Event) => void)` |
| mousedown  | 鼠标左键在该覆盖物上按下的回调函数                                                 | `((e: Event) => void)` |
| mouseup    | 鼠标左键在该覆盖物上抬起的回调函数                                                 | `((e: Event) => void)` |
| mouseout   | 鼠标指针移出该覆盖物事件的回调函数                                                 | `((e: Event) => void)` |
| mouseover  | 鼠标指针移入该覆盖物事件的回调函数                                                 | `((e: Event) => void)` |
| remove     | 该覆盖物被移除的回调函数                                                           | `((e: Event) => void)` |
| rightclick | 鼠标右键单击事件的回调函数                                                         | `((e: Event) => void)` |
