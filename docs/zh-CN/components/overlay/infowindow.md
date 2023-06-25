# BInfoWindow 信息窗口

使用 slot 模式渲染子节点向地图添加信息窗口，以及与地图相关的一些交互。

```ts
import { BInfoWindow } from 'vue3-baidu-map-gl'
```

::: tip 提示
地图上只能同时显示一个`infoWindow`，所以当地图上有多个`infoWindow`组件同时绑定`v-model="true"`，只有最后一个 `infoWindow`组件会在地图上显示。
:::

## 组件示例

:::demo 通过 slot 插槽渲染不同内容 infoWindow class="p-top"
overlay/infowindow
:::

:::demo 动态位置
overlay/dynmicInfoWindow
:::

<style scoped>
  :deep(img) {
    max-width: none;
  }
  :deep(h2) {
    margin: 0;
    border-top: none;
    padding-top: 0;
    letter-spacing: initial;
    line-height: initial;
  }
</style>
<br>

## 动态组件 Props

| 属性               | 说明                                                                                                                                                                                               | 类型                            | 可选值    | 默认值          | 版本                               |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | --------- | --------------- | ---------------------------------- |
| show               | 是否开启信息窗体, 支持 `v-model:show`                                                                                                                                                              | `boolean `                      | -         | `false`         | <Badge type="tip" text="^2.2.2" /> |
| position           | 信息窗体所在坐标                                                                                                                                                                                   | `{ lng: number, lat: number}[]` | -         | `required`      | -                                  |
| title              | 信息窗标题文字                                                                                                                                                                                     | `string`                        | -         | -               | -                                  |
| width              | 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为 0，则信息窗口的宽度将按照其内容自动调整                                                                                             | `number`                        | `220-730` | `0`             | -                                  |
| height             | 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为 0，则信息窗口的高度将按照其内容自动调整                                                                                              | `number`                        | `60-650`  | `0`             | -                                  |
| offset             | 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的 infoWindowOffset 属性值，您可以为信息窗添加偏移量来改变默认位置 | `{x: number, y: number }`       | -         | `{x: 0, y: 0 }` | -                                  |
| enableAutoPan      | 是否开启信息窗口打开时地图自动移动                                                                                                                                                                 | `boolean`                       | -         | ` true`         | -                                  |
| enableCloseOnClick | 是否开启点击地图关闭信息窗口                                                                                                                                                                       | `boolean`                       | -         | ` true`         | -                                  |

## 组件事件

| 事件名     | 说明                                       | 属性                         |
| ---------- | ------------------------------------------ | ---------------------------- |
| initd      | 组件初始化后，调用的方法，返回一个地图实例 | `{ map, BmapGL, instance }`  |
| unload     | 组件卸载时会调用此方法                     | -                            |
| close      | 信息窗口被关闭时触发此事件                 | `event{type, target, point}` |
| open       | 信息窗口被打开时触发此事件                 | `event{type, target, point}` |
| clickclose | 点击信息窗口的关闭按钮时触发此事件         | `event{type, target}`        |

<!-- maximize	event{type, target}	信息窗口最大化后触发此事件
restore	event{type, target}	信息窗口还原时触发此事件 -->
