# BDistrictLayer 行政区图层 <Badge type="tip" text="^1.1.2" />

在地图上显示行政区划分

```ts
import { BDistrictLayer } from 'vue3-baidu-map-gl'
```

## 组件示例

:::demo 渲染北京市行政区划分，绑定鼠标事件
layer/districtLayer
:::

## 静态组件 Props

| 属性        | 说明             | 类型                            | 可选值 | 默认值                 |
| ----------- | ---------------- | ------------------------------- | ------ | ---------------------- |
| name        | 行政区名字       | `string`                        | -      | `required`             |
| kind        | 行政区类型       | [`DistrictType`](#districttype) | -      | `DistrictType['AREA']` |
| fillColor   | 填充颜色         | `string`                        | -      | `#fdfd27`              |
| fillOpacity | 填充透明度       | `number`                        | -      | `1`                    |
| strokeColor | 线条颜色         | `string`                        | -      | `#231cf8`              |
| viewport    | 自动聚焦地图中心 | `boolean`                       | -      | `false`                |

## 动态组件 Props

| 属性    | 说明     | 类型      | 可选值 | 默认值 | 版本                               |
| ------- | -------- | --------- | ------ | ------ | ---------------------------------- |
| visible | 是否显示 | `boolean` | -      | `true` | <Badge type="tip" text="^2.1.4" /> |

## DistrictType

| 值       | 说明    |
| -------- | ------- |
| PROVINCE | 省级    |
| CITY     | 市级    |
| AREA     | 县/区级 |

## 组件事件

| 事件名    | 说明                                       | 类型                        |
| --------- | ------------------------------------------ | --------------------------- |
| initd     | 组件初始化后，调用的方法，返回一个地图实例 | `{ map, BmapGL, instance }` |
| unload    | 组件卸载时会调用此方法                     | -                           |
| mouseover | 鼠标移入行政区域时触发此事件               | `{type, target}`            |
| mouseout  | 鼠标移出行政区域时触发此事件               | `{type, target}`            |
