# Circle 圆形

在地图上绘制简单的圆形

```ts
import { Circle } from 'vue3-baidu-map-gl'
```

## 组件示例

<div>
<Map
  :minZoom="3"
  :zoom="16"
  height="400px"
>
  <Circle
    enableEditing
    stroke-style="dashed"
    :center="{ lat: 39.915185, lng: 116.403901 }"
    :radius="300"
  />
</Map>
</div>

::: details 点击查看代码

```html
<map :minZoom="3" height="400px">
  <Circle stroke-style="dashed" :center="{ lat: 39.915185, lng: 116.403901 }" :radius="300" enableEditing />
</map>

<script setup lang="ts">
  import { Map, Circle } from 'vue3-baidu-map-gl'
</script>
```

:::

## 静态组件 Props

| 参数           | 说明                                                     | 类型      | 默认值  |
| -------------- | -------------------------------------------------------- | --------- | ------- |
| enableClicking | 是否响应点击事件                                         | `boolean` | `true ` |
| geodesic       | 是否开启大地线模式，true 时，两点连线将以大地线的形式    | `boolean` | `false` |
| clip           | 是否进行跨经度 180 度裁剪，绘制跨精度 180 时为了优化效果 | `boolean` | `true ` |

## 动态组件 Props

| 参数            | 说明                                        | 类型                          | 可选值                    | 默认值     |
| --------------- | ------------------------------------------- | ----------------------------- | ------------------------- | ---------- |
| center          | 圆形中心点经纬度                            | `{ lng: number, lat: number}` |                           | `required` |
| radius          | 圆形的半径，单位为米                        | `number`                      |                           | `required` |
| strokeColor     | 描边的颜色，同 CSS 颜色                     | `string`                      |                           | `#000`     |
| strokeOpacity   | 描边的透明度，范围 0-1                      | `number`                      | `0-1 `                    | 1          |
| fillColor       | 面填充颜色，同 CSS 颜色                     | `string`                      |                           | `#fff`     |
| fillOpacity     | 面填充的透明度，范围 0-1                    | `number`                      | `0-1 `                    | `0.3 `     |
| strokeWeight    | 描边的宽度，单位为像素                      | `number`                      |                           | `2 `       |
| strokeStyle     | 描边的样式，为实线、虚线、或者点状线        | `string`                      | `solid / dashed / dotted` | `solid `   |
| enableMassClear | 是否在调用 `map.clearOverlays` 清除此覆盖物 | `boolean`                     |                           | `true `    |
| enableEditing   | 是否启用线编辑                              | `boolean`                     |                           | `false `   |

## 组件事件

| 事件名     | 说明                                                                                  | 类型                    |
| ---------- | ------------------------------------------------------------------------------------- | ----------------------- |
| click      | 鼠标左键单击事件的回调函数。 当双击时，产生的事件序列为：`click -> click -> dblclick` | `((e: Event) => void) ` |
| dblclick   | 鼠标左键双击事件的回调函数                                                            | `((e: Event) => void) ` |
| mousedown  | 鼠标左键在该覆盖物上按下的回调函数                                                    | `((e: Event) => void) ` |
| mouseup    | 鼠标左键在该覆盖物上抬起的回调函数                                                    | `((e: Event) => void) ` |
| mouseout   | 鼠标指针移出该覆盖物事件的回调函数                                                    | `((e: Event) => void) ` |
| mouseover  | 鼠标指针移入该覆盖物事件的回调函数                                                    | `((e: Event) => void) ` |
| remove     | 该覆盖物被移除的回调函数                                                              | `((e: Event) => void) ` |
| lineupdate | 覆盖物被编辑后的回调函数                                                              | `((e: Event) => void) ` |
