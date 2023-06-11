# BAutoComplete 自动填充 <Badge type="tip" text="^2.1.3" />

地址检索关键词提示

```ts
import { BAutoComplete } from 'vue3-baidu-map-gl'
```

:::tip
目前这个组件所使用的百度地图 api 还不稳定 (在写这个组件时候深有体会)
:::

## 组件示例

:::demo
autoComplete/index
:::

## 动态组件 Props

| 属性     | 说明                                 | 类型                            | 可选值 | 默认值       |
| -------- | ------------------------------------ | ------------------------------- | ------ | ------------ |
| location | 设定返回结果的所属范围。例如“北京市” | `string \| Point \| BMapGL.Map` | -      | `BMapGL.Map` |
| types    | 返回数据类型                         | `string[]`                      | -      |

## 组件事件

| 事件名         | 说明                                                    | 类型                        |
| -------------- | ------------------------------------------------------- | --------------------------- |
| initd          | 组件初始化后，调用的方法，返回一个地图实例              | `{ map, BmapGL, instance }` |
| unload         | 组件卸载时会调用此方法                                  | -                           |
| searchComplete | 在 input 框中输入字符后，发起列表检索，完成后的回调函数 | ((e: Event) => void)        |
| highlight      | 键盘或者鼠标移动，某条记录高亮之后                      | ((e: Event) => void)        |
| confirm        | 鼠标点击或回车选中某条记录后触发                        | ((e: Event) => void)        |
