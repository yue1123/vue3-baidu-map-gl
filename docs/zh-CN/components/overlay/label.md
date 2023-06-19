# BLabel 文本标注

在地图上显示文本标注

```ts
import { BLabel } from 'vue3-baidu-map-gl'
```

## 组件示例

:::demo 在地图上添加动态更新的，试试改变文本输入框内容 class="p-top"
overlay/label
:::

## 动态组件 Props

| 属性            | 说明                                      | 类型                                                                                          | 默认值     | 版本                               |
| --------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------- | ---------- | ---------------------------------- |
| content         | 设置文本标注的内容                        | `string `                                                                                     | `required` | -                                  |
| offset          | 文本标注的像素偏移                        | `{x: number, y: number } `                                                                    | -          | -                                  |
| enableMassClear | 是否在调用 map.clearOverlays 清除此覆盖物 | `boolean `                                                                                    | `true `    | -                                  |
| style           | 设置文本标注的样式                        | [`CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration) | -          | -                                  |
| position        | 文本标注的坐标                            | `{ lng: number, lat: number} `                                                                | `required` | -                                  |
| zIndex          | 显示层级                                  | `number`                                                                                      | -          | <Badge type="tip" text="^2.2.0" /> |
| visible         | 是否显示                                  | `boolean`                                                                                     | `true`     | <Badge type="tip" text="^2.2.0" /> |

::: tip 提示
style 可以是任何符合规范的 css 样式，样式属性需使用驼峰命名法
:::

## 组件事件

| 事件名     | 说明                                                                                   | 类型                        |
| ---------- | -------------------------------------------------------------------------------------- | --------------------------- |
| initd      | 组件初始化后，调用的方法，返回一个地图实例                                             | `{ map, BmapGL, instance }` |
| unload     | 组件卸载时会调用此方法                                                                 | -                           |
| click      | 鼠标左键单击事件的回调函数。 当双击时，产生的事件序列为： `click -> click -> dblclick` | ` ((e: Event) => void)`     |
| dblclick   | 鼠标左键双击事件的回调函数                                                             | ` ((e: Event) => void)`     |
| mousedown  | 鼠标左键在该覆盖物上按下的回调函数                                                     | ` ((e: Event) => void)`     |
| mouseup    | 鼠标左键在该覆盖物上抬起的回调函数                                                     | ` ((e: Event) => void)`     |
| mouseout   | 鼠标指针移出该覆盖物事件的回调函数                                                     | ` ((e: Event) => void)`     |
| mouseover  | 鼠标指针移入该覆盖物事件的回调函数                                                     | ` ((e: Event) => void)`     |
| remove     | 该覆盖物被移除的回调函数                                                               | ` ((e: Event) => void)`     |
| lineupdate | 覆盖物被编辑后的回调函数                                                               | ` ((e: Event) => void)`     |
