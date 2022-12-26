# GroundOverlay 地面叠加层 <Badge type="tip" text="^0.0.32" />

在地图底面上叠加覆盖物，覆盖物可以是图片、自定义 Canvas、视频。

```ts
import { GroundOverlay } from 'vue3-baidu-map-gl'
```

## 组件示例

:::demo 在地图上添加三种不同类型的地面叠加物，可通过下拉框切换显示不同类型
overlay/groundOverlay
:::

## 动态组件 Props

| 属性       | 说明                                                 | 类型                          | 默认值     |
| ---------- | ---------------------------------------------------- | ----------------------------- | ---------- |
| type       | 地面叠加物类型                                       | `video \| canvas \| image`    | `required` |
| url        | 叠加物 image url、video url 或者自定义的 canvas 对象 | [`urlType` ](#urltype)        | `required` |
| startPoint | 显示区域开始点，见[图示](#bounds-图示)               | `{ lng: number, lat: number}` | `required` |
| endPoint   | 显示区域结束点，见[图示](#bounds-图示)               | `{ lng: number, lat: number}` | `required` |
| autoCenter | 是否自动根据地面叠加物显示区域居中地图               | `boolean `                    | `true`     |
| opacity    | 透明度，范围 0-1                                     | `number`                      |            |

### bounds 图示

<br />
<div class="bounds-image">
  <img src="/bounds.svg" alt="">
</div>

<style>
  .dark .bounds-image{
    width: 60%;
    background: var(--vp-c-text-1);
  }
</style>

### urlType

```ts
type url =
  | string
  | HTMLCanvasElement
  | Ref<HTMLCanvasElement | string>
  | (() => HTMLCanvasElement | Ref<HTMLCanvasElement | string>)
```

## 组件事件

| 事件名    | 说明                                                                                   | 类型                        |
| --------- | -------------------------------------------------------------------------------------- | --------------------------- |
| initd     | 组件初始化后，调用的方法，返回一个地图实例                                             | `{ map, BmapGL, instance }` |
| unload    | 组件卸载时会调用此方法                                                                 | -                           |
| click     | 鼠标左键单击事件的回调函数。 当双击时，产生的事件序列为： `click -> click -> dblclick` | ` ((e: Event) => void)`     |
| dblclick  | 鼠标左键双击事件的回调函数                                                             | ` ((e: Event) => void)`     |
| mouseout  | 鼠标指针移出该覆盖物事件的回调函数                                                     | ` ((e: Event) => void)`     |
| mouseover | 鼠标指针移入该覆盖物事件的回调函数                                                     | ` ((e: Event) => void)`     |
| mousemove | 鼠标指针在该覆盖物移动的事件的回调函数                                                 | ` ((e: Event) => void)`     |
