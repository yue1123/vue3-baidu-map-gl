# Polygon 多边形

在地图上绘制简单的多边形

```ts
import { Polygon } from 'vue3-baidu-map-gl'
```

## 组件示例

<div>
  <Map
    :minZoom="3"
  >
    <Polygon 
      :path="[
        { lng: 116.387112, lat: 39.920977 },
        { lng: 116.385243, lat: 39.913063 },
        { lng: 116.394226, lat: 39.917988 },
        { lng: 116.401772, lat: 39.921364 },
        { lng: 116.41248, lat: 39.92789 }
      ]"
      stroke-color="#000"
      fillColor="#f90"
      :stroke-opacity="0.4"
      :stroke-weight="1"
    />
  </Map>
</div>

::: details 点击查看代码

<!-- prettier-ignore -->
```html
<Map :minZoom="3" >
  <Polygon
    :path="[
      { lng: 116.404, lat: 39.915 },
      { lng: 116.405, lat: 39.92 },
      { lng: 116.405, lat: 39.92 },
	  ]"
    stroke-color="#000"
    :stroke-opacity="1"
    :stroke-weight="5"
    enableEditing
  />
</Map>

<script setup lang="ts">
  import { Map, Polygon } from 'vue3-baidu-map-gl'
</script>
```

:::

## 镂空面绘制 / 行政区域边界

结合 [`useAreaBoundary`](../hooks/useAreaBoundary) hooks, 并通过指定 `props.isBoundary` 为 `true` 实现行政区域显示效果

<div>
  <Map
    :minZoom="3"
    :zoom="zoom"
    enableScrollWheelZoom
    @initd="handleInitd"
  >
    <Control style="border-radius:4px;box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);color: #666;background:#fff;padding:10px;" :offset="{ x: 15, y: 15 }">
     <span> 地区：</span>
      <select class="mySelect light no-m-b no-m-t" v-model="area">
        <option value="北京市">北京市</option>
        <option value="顺义区">北京市顺义区</option>
        <option value="四川">四川</option>
        <option value="成都">成都</option>
      </select>
    </Control>
    <Polygon 
      :key="area"
      isBoundary
      :path="point" 
      stroke-color="#000"
      fillColor='blue'
      :stroke-weight="1"
    />
  </Map>
</div>

::: details 点击查看代码

<!-- prettier-ignore -->
```html
<div>
  <Map :minZoom="3" :zoom="zoom"  enableScrollWheelZoom>
    <Control
      style="border-radius:4px;box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);color: #666;background:#fff;padding:10px;"
      :offset="{ x: 15, y: 15 }"
    >
      <span>地区：</span>
      <select v-model="area">
        <option value="北京市">北京市</option>
        <option value="顺义区">北京市顺义区</option>
        <option value="四川">四川</option>
        <option value="成都">成都</option>
      </select>
    </Control>
    <Polygon
      :key="area"
      @initd="handleInitd"
      isBoundary
      :path="point"
      stroke-color="#000"
      fillColor="blue"
      :stroke-weight="1"
    />
  </Map>
</div>

<script setup lang="ts">
  import {  ref, watch  } from 'vue-demi'
  import { Map, Control, Polygon, useAreaBoundary } from 'vue3-baidu-map-gl'
  const zoom = ref<number>(11)
  const area = ref<string>('顺义区')
  const areaZoomMap = {
    北京市: 9,
    顺义区: 11,
    四川: 7,
    成都: 9
  }

  const {
    isLoading,
    boundaries: point,
    get
  } = useAreaBoundary(() => {
    zoom.value = areaZoomMap[area.value]
  })

  function handleInitd() {
    get(area.value)
  }
  watch(() => area.value, get)
</script>
```

:::

<script setup lang="ts">
  import {  ref, watch  } from 'vue-demi'
  import { useAreaBoundary } from 'vue3-baidu-map-gl'
  const zoom = ref<number>(11)
  const area = ref<string>('顺义区')
  const areaZoomMap = {
    北京市: 9,
    顺义区: 11,
    四川: 7,
    成都: 9,
  }

  const { isLoading, boundaries: point, get } = useAreaBoundary(() => {
    zoom.value = areaZoomMap[area.value]
  })  

  function handleInitd(){
    console.log(11)
    get(area.value)
  }
  watch(() => area.value, get)
</script>

## 静态组件 Props

| 属性           | 说明                                                       | 类型       | 默认值   |
| -------------- | ---------------------------------------------------------- | ---------- | -------- |
| clip           | 是否进行跨经度 180 度裁剪，绘制跨精度 180 时为了优化效果， | `boolean ` | `true `  |
| geodesic       | 是否开启大地线模式，true 时，两点连线将以大地线的形式。    | `boolean ` | `false ` |
| isBoundary     | 是否是行政区域的边界多边形                                 | `boolean ` | `false ` |
| autoCenter     | 是否自动根据多边形居中地图                                 | `boolean ` | `true`   |
| enableClicking | 是否响应点击事件                                           | `boolean ` | `true `  |

## 动态组件 Props

| 属性            | 说明                                        | 类型                             | 可选值                    | 默认值     |
| --------------- | ------------------------------------------- | -------------------------------- | ------------------------- | ---------- |
| path            | 多边形的坐标数组                            | ` { lng: number, lat: number}[]` | -                         | `required` |
| strokeColor     | 描边的颜色，同 CSS 颜色                     | `string`                         | -                         | `#000000`  |
| strokeWeight    | 描边的宽度，单位为像素                      | `string `                        | -                         | `2 `       |
| strokeOpacity   | 描边的透明度，范围 0-1                      | `number `                        | -                         | `1 `       |
| strokeStyle     | 描边的样式，为实线、虚线、或者点状线        | `string `                        | `solid / dashed / dotted` | -          |
| fillColor       | 面填充颜色，同 CSS 颜色                     | `string `                        | -                         | `#fff`     |
| fillOpacity     | 面填充的透明度，范围 0-1                    | `number `                        | `0-1`                     | `0.3 `     |
| enableMassClear | 是否在调用 `map.clearOverlays` 清除此覆盖物 | `boolean`                        | -                         | ` true`    |
| enableEditing   | 开启可编辑模式                              | `boolean `                       | -                         | `false `   |

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
