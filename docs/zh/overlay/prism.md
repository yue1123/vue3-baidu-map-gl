# Prism 3d棱柱

在地图上绘制简单的多边形

```ts
import { Prism } from 'vue3-baidu-map-gl'
```

## 示例

结合 [`useAreaBoundary`](../hooks/useAreaBoundary) hooks, 并通过指定 `props.isBoundary` 为 `true` 实现3d行政区域显示效果

<div>
  <Map
    :zoom="10"
    :tilt='50'
    enableScrollWheelZoom
    mapStyleId='980161f3645989feac25a0da15da4178'
  >
    <Prism
      isBoundary
      :autoCenter='false'
      @initd="handleInitd"
      topFillColor='#5679ea'
      :topFillOpacity='0.5'
      sideFillColor='#5679ea'
      :sideFillOpacity='0.9'
      :altitude='5000'
      :path="point" 
    />
  </Map>
</div>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useAreaBoundary } from '../../../packages/index.ts'
  const area = ref<string>('北京市')

  const { isLoading, boundaries: point, get } = useAreaBoundary()  

  function handleInitd(){
    get(area.value)
  }
</script>


## 静态组件 Props

| 参数           | 说明                                                       | 类型       | 默认值   |
| -------------- | ---------------------------------------------------------- | ---------- | -------- |
| clip           | 是否进行跨经度 180 度裁剪，绘制跨精度 180 时为了优化效果， | `boolean ` | `true `  |
| geodesic       | 是否开启大地线模式，true 时，两点连线将以大地线的形式。    | `boolean ` | `false ` |
| isBoundary     | 是否是行政区域的边界多边形                                 | `boolean ` | `false ` |
| autoCenter     | 是否自动根据多边形居中地图                                 | `boolean ` | `true`   |
| enableClicking | 是否响应点击事件                                           | `boolean ` | `true `  |

## 动态组件 Props

| 参数            | 说明                                        | 类型                             | 可选值                    | 默认值     |
| --------------- | ------------------------------------------- | -------------------------------- | ------------------------- | ---------- |
| path            | 多边形的坐标数组                            | ` { lng: number, lat: number}[]` |                           | `required` |
| strokeColor     | 描边的颜色，同 CSS 颜色                     | `string`                         |                           | `#000000`  |
| strokeWeight    | 描边的宽度，单位为像素                      | `string `                        |                           | `2 `       |
| strokeOpacity   | 描边的透明度，范围 0-1                      | `number `                        |                           | `1 `       |
| strokeStyle     | 描边的样式，为实线、虚线、或者点状线        | `string `                        | `solid / dashed / dotted` |            |
| fillColor       | 面填充颜色，同 CSS 颜色                     | `string `                        |                           | `#fff`     |
| fillOpacity     | 面填充的透明度，范围 0-1                    | `number `                        | `0-1`                     | `0.3 `     |
| enableMassClear | 是否在调用 `map.clearOverlays` 清除此覆盖物 | `boolean`                        |                           | ` true`    |
| enableEditing   | 开启可编辑模式                              | `boolean `                       |                           | `false `   |

## 组件事件

| 事件名     | 说明                                                                                    | 类型                   |
| ---------- | --------------------------------------------------------------------------------------- | ---------------------- |
| click      | 鼠标左键单击事件的回调函数。 当双击时，产生的事件序列为： `click -> click -> dblclick ` | `((e: Event) => void)` |
| dblclick   | 鼠标左键双击事件的回调函数                                                              | `((e: Event) => void)` |
| mousedown  | 鼠标左键在该覆盖物上按下的回调函数                                                      | `((e: Event) => void)` |
| mouseup    | 鼠标左键在该覆盖物上抬起的回调函数                                                      | `((e: Event) => void)` |
| mouseout   | 鼠标指针移出该覆盖物事件的回调函数                                                      | `((e: Event) => void)` |
| mouseover  | 鼠标指针移入该覆盖物事件的回调函数                                                      | `((e: Event) => void)` |
| remove     | 该覆盖物被移除的回调函数                                                                | `((e: Event) => void)` |
| lineupdate | 覆盖物被编辑后的回调函数                                                                | `((e: Event) => void)` |
