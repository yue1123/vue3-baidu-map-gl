# Label 文本标注

在地图上显示文本标注

```ts
import { Label } from 'vue3-baidu-map-gl'
```

## 组件实例

<div>
<Map
  :minZoom="3"
  height="400px"
>
  <Label
    content="欢迎使用百度地图GL版Vue3组件库"
    :position="{lng: 116.404, lat: 39.915 }"
    :style="{
      color:'#fff',
      backgroundColor: '#f90',
      border: 'none',
      borderRadius: '3px',
      padding: '5px 10px',
      fontSize: '16px'
    }"
  />
</Map>
</div>

::: details 点击查看代码
```html
<Map :minZoom="3" height="400px">
	<Label
		content="欢迎使用百度地图GL版Vue3组件库"
		:position="{lng: 116.404, lat: 39.915 }"
		:style="{
      color:'#fff',
      backgroundColor: '#f90',
      border: 'none',
      borderRadius: '3px',
      padding: '5px 10px',
      fontSize: '16px'
    }"
	/>
</Map>

<script setup lang="ts">
import { Map, Label } from 'vue3-baidu-map-gl'
</script>
```
:::


## 动态组件 Props

| 参数            | 说明                                      | 类型                           | 默认值     |
| --------------- | ----------------------------------------- | ------------------------------ | ---------- |
| content         | 设置文本标注的内容                        | `string `                      | `required` |
| offset          | 文本标注的像素偏移                        | `{x: number, y: number } `     |            |
| enableMassClear | 是否在调用 map.clearOverlays 清除此覆盖物 | `boolean `                     | `true `    |
| style           | 设置文本标注的样式                        | `css style object `            |            |
| position        | 文本标注的坐标                            | `{ lng: number, lat: number} ` | `required` |

::: tip
style 可以是任何符合规范的 css 样式，样式属性需使用驼峰命名法
:::

## 组件事件

| 事件名     | 说明                                                                                   | 类型                    |
| ---------- | -------------------------------------------------------------------------------------- | ----------------------- |
| click      | 鼠标左键单击事件的回调函数。 当双击时，产生的事件序列为： `click -> click -> dblclick` | ` ((e: Event) => void)` |
| dblclick   | 鼠标左键双击事件的回调函数                                                             | ` ((e: Event) => void)` |
| mousedown  | 鼠标左键在该覆盖物上按下的回调函数                                                     | ` ((e: Event) => void)` |
| mouseup    | 鼠标左键在该覆盖物上抬起的回调函数                                                     | ` ((e: Event) => void)` |
| mouseout   | 鼠标指针移出该覆盖物事件的回调函数                                                     | ` ((e: Event) => void)` |
| mouseover  | 鼠标指针移入该覆盖物事件的回调函数                                                     | ` ((e: Event) => void)` |
| remove     | 该覆盖物被移除的回调函数                                                               | ` ((e: Event) => void)` |
| lineupdate | 覆盖物被编辑后的回调函数                                                               | ` ((e: Event) => void)` |