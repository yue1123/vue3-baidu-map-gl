# 上下文菜单 <Badge type="tip" text="^0.0.29" />

在地图上添加自定义内容的右键菜单

```ts
import { ContextMenu } from 'vue3-baidu-map-gl'
```

:::tip
目前只支持 map 组件添加上下文菜单，后续百度地图 GL SDK 更新了，再支持覆盖物一类组件添加上下文菜单
:::

## 组件示例

<!-- prettier-ignore -->
<Map :center="center">
  <ContextMenu :menuItems="list" />
</Map>

<script lang="ts" setup>
  import { ref } from 'vue'
  const center = ref('北京市')
  const list = ref([
    {
      text: '放大一级',
      callback: function ({map}) {
        map.zoomIn();
      }
    },
    {
      text: '缩小一级',
      callback: function ({map}) {
          map.zoomOut();
      }
    },
    '-',
    {
      text: '去上海',
      callback: function () {
        center.value = center.value === '上海市' ? '北京市' : '上海市';
        setTimeout(() => {
          list.value[2].text = '回北京'
        })
      }
    },
  ])
</script>

::: details 点击查看代码

```html
<map :center="center">
  <ContextMenu :menuItems="list" />
</map>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { ContextMenu } from 'vue3-baidu-map-gl'
  const center = ref('北京市')
  const list = ref([
    {
      text: '放大一级',
      callback: function ({ map }) {
        map.zoomIn()
      }
    },
    {
      text: '缩小一级',
      callback: function ({ map }) {
        map.zoomOut()
      }
    },
    '-',
    {
      text: '去上海',
      callback: function () {
        center.value = center.value === '上海市' ? '北京市' : '上海市'
        setTimeout(() => {
          list.value[2].text = '回北京'
        })
      }
    }
  ])
</script>
```

:::

## 静态组件 Props

| 属性  | 说明              | 类型     | 默认值 |
| ----- | ----------------- | -------- | ------ |
| width | 菜单宽度(单位 px) | `number` | `100`  |

## 动态组件 Props

| 属性      | 说明                  | 类型                                                | 可选值 | 默认值 |
| --------- | --------------------- | --------------------------------------------------- | ------ | ------ |
| menuItems | 菜单项，`-`添加分割线 | ([`ContextMenuItem`](#contextmenuitem) \| `-`) `[]` | -      | -      |

## ContextMenuItem

| 属性     | 说明                     | 类型                                            | 可选值  | 默认值     |
| -------- | ------------------------ | ----------------------------------------------- | ------- | ---------- |
| text     | 菜单项文字               | `string`                                        | -       | `required` |
| callback | 菜单项点击触发的回调函数 | `({point, pixel, map, BMapGL, target}) => void` | -       | `required` |
| disabled | 是否禁用该菜单项         | `boolean`                                       | `false` | -          |

## 组件事件

| 事件名 | 说明                                                                             | 类型                        |
| ------ | -------------------------------------------------------------------------------- | --------------------------- |
| initd  | 组件初始化后，调用的方法，返回一个地图实例                                       | `{ map, BmapGL, instance }` |
| unload | 组件卸载时会调用此方法                                                           | -                           |
| open   | 右键菜单打开时触发，事件参数 point 和 pixel 分别表示菜单开启时的地理和像素坐标点 | ((e: Event) => void)        |
| close  | 右键菜单关闭时触发，事件参数 point 和 pixel 分别表示菜单开启时的地理和像素坐标点 | ((e: Event) => void)        |
