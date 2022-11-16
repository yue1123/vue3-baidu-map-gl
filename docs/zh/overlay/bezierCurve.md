# BezierCurve 折线

在地图上绘制二阶贝塞尔曲线

```ts
import { BezierCurve } from 'vue3-baidu-map-gl'
```

::: tip 提示
不了解贝塞尔曲线的小伙伴可以先学习一下: https://zh.javascript.info/bezier-curve
:::

## 组件示例

<div>
<Map
  :minZoom="3"
  :center="{ lng: 113.399, lat: 39.910 }"
  :zoom="8"
>
  <BezierCurve 
    :path="[
      { lng: 116.399, lat: 39.911 },
      { lng: 113.399, lat: 39.910 },
      { lng: 110.399, lat: 39.910 },
	  ]" 
    :controlPoints="[
      [
        {lng:115.399,lat:40.910},
        {lng:114.399,lat:38.910},
      ],
      [
        {lng:112.399,lat:38.911},
        {lng:112.399,lat:38.410},
      ]
    ]"
    stroke-color="#000"
    :stroke-opacity="1"
    :stroke-weight="2"
  />
</Map>
</div>

::: details 点击查看代码

<!-- prettier-ignore -->
```html
<Map
  :minZoom="3"
  :center="{ lng: 113.399, lat: 39.910 }"
  :zoom="8"
>
  <BezierCurve 
    :path="[
      { lng: 116.399, lat: 39.911 },
      { lng: 113.399, lat: 39.910 },
      { lng: 110.399, lat: 39.910 },
	  ]" 
    :controlPoints="[
      [
        {lng:115.399,lat:40.910},
        {lng:114.399,lat:38.910},
      ],
      [
        {lng:112.399,lat:38.911},
        {lng:112.399,lat:38.410},
      ]
    ]"
    stroke-color="#000"
    :stroke-opacity="1"
    :stroke-weight="2"
  />
</Map>

<script setup lang="ts">
  import { Map, BezierCurve } from 'vue3-baidu-map-gl'
</script>
```

:::

## 动态组件 Props

| 属性            | 说明                                        | 类型                              | 可选值                    | 默认值     |
| --------------- | ------------------------------------------- | --------------------------------- | ------------------------- | ---------- |
| path            | 贝塞尔曲线的坐标数组                        | `{ lng: number, lat: number}[]`   | -                         | `required` |
| controlPoints   | 贝塞尔曲线控制点的坐标数组                  | `{ lng: number, lat: number}[][]` | -                         | `required` |
| strokeColor     | 描边的颜色，同 CSS 颜色                     | `string`                          | -                         | `#000000`  |
| strokeWeight    | 描边的宽度，单位为像素                      | `string`                          | -                         | `2`        |
| strokeOpacity   | 描边的透明度，范围 `0-1`                    | ` number`                         | -                         | ` 1`       |
| strokeStyle     | 描边的样式，为实线、虚线、或者点状线        | `string`                          | `solid / dashed / dotted` | -          |
| enableMassClear | 是否在调用 `map.clearOverlays` 清除此覆盖物 | `boolean`                         | -                         | `true `    |

## 组件事件

| 事件名     | 说明                                                                           | 类型                        |
| ---------- | ------------------------------------------------------------------------------ | --------------------------- |
| initd      | 组件初始化后，调用的方法，返回一个地图实例                                     | `{ map, BmapGL, instance }` |
| unload     | 组件卸载时会调用此方法                                                         | -                           |
| click      | 鼠标左键单击事件的回调函数。 当双击时，产生的事件序列为： click click dblclick | ((e: Event) => void)        |
| dblclick   | 鼠标左键双击事件的回调函数                                                     | ((e: Event) => void)        |
| mousedown  | 鼠标左键在该覆盖物上按下的回调函数                                             | ((e: Event) => void)        |
| mouseup    | 鼠标左键在该覆盖物上抬起的回调函数                                             | ((e: Event) => void)        |
| mouseout   | 鼠标指针移出该覆盖物事件的回调函数                                             | ((e: Event) => void)        |
| mouseover  | 鼠标指针移入该覆盖物事件的回调函数                                             | ((e: Event) => void)        |
| remove     | 该覆盖物被移除的回调函数                                                       | ((e: Event) => void)        |
| lineupdate | 覆盖物被编辑后的回调函数                                                       | ((e: Event) => void)        |
