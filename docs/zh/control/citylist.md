# CityList 城市选择控件

缩放控件，默认位于地图右下角

```ts
import { CityList } from 'vue3-baidu-map-gl'
```

## 组件示例

<div>
  <Map
    :minZoom="3"
    height="400px"
  >
    <CityList />
  </Map>
</div>

::: warning
组件示例样式被 vitepress 样式影响，实际使用不受影响，请参考官方示例为准
https://lbs.baidu.com/jsdemo.htm#cCityList
:::

::: details 点击查看代码

<!-- prettier-ignore -->
```html
<Map :minZoom="3" height="400px">
  <CityList />
</Map>

<script setup lang="ts">
  import { Map, CityList } from 'vue3-baidu-map-gl'
</script>
```

:::

## 静态组件 Props

| 属性   | 说明             | 类型                      | 可选值            | 默认值                    |
| ------ | ---------------- | ------------------------- | ----------------- | ------------------------- |
| anchor | 控件的停靠位置   | `string`                  | [anchor](#anchor) | `BMAP_ANCHOR_BOTTOM_LEFT` |
| offset | 控件的偏移值     | `{x: number, y: number }` | -                 | `{ x: 18, y: 18 }`        |
| expand | 默认列表是否展开 | `boolean`                 | -                 | `false`                   |

## anchor

| 值                       | 说明 |
| ------------------------ | ---- |
| BMAP_ANCHOR_TOP_LEFT     | 左上 |
| BMAP_ANCHOR_TOP_RIGHT    | 右上 |
| BMAP_ANCHOR_BOTTOM_LEFT  | 左下 |
| BMAP_ANCHOR_BOTTOM_RIGHT | 右下 |


## 组件事件

| 事件名          | 说明                                                                                             | 类型                                     |
| --------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| initd           | 组件初始化后，调用的方法，返回一个地图实例                                                       | `{ map: BmapGL }`                        |
| unload          | 组件卸载时会调用此方法                                                                           | -                                        |