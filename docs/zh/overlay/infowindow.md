# 信息窗口
使用 slot 模式渲染子节点向地图添加信息窗口，以及与地图相关的一些交互。

```ts 
import { InfoWindow } from 'vue3-baidu-map-gl'
```

::: tip 提示
地图上只能同时显示一个`infoWindow`，所以当地图上有多个`infoWindow`组件同时绑定`v-model="true"`，只有最后一个 `infoWindow`组件会在地图上显示。
:::

## 示例
<div>
  <label>
    显示infoWindow1: <input type="checkbox" v-model="show">
  </label>
  <br />
  <label>
    显示infoWindow2: <input type="checkbox" v-model="show1">
  </label>
  <br />
  <label>
    显示infoWindow2: <input type="checkbox" v-model="show2">
  </label>
  <br />
  <br />
  <Map
   enableScrollWheelZoom
  >
    <InfoWindow 
      v-model="show"
      enableMaximize
      :position="{ lng: 116.404, lat: 39.925 }"
      title="文字内容"
    >
      地址：北京市东城区王府井大街88号乐天银泰百货八层
      <template #maxContent>
        <h1>最大化内容</h1>
      </template>
    </InfoWindow>
    <InfoWindow 
      v-model="show1"
      :position="{ lng: 116.404, lat: 39.925 }"
      title="动态内容"
    >
      <h2>{{count}}</h2>
    </InfoWindow>
    <InfoWindow 
      v-model="show2"
      :position="{ lng: 116.404, lat: 39.925 }"
      title="图文组合排版"
    >
      <h2>天安门</h2>
      <div class="infoWindow-content">
        <p>天安门坐落在中国北京市中心，故宫的南侧，与天安门广场隔长安街相望，是清朝皇城的大门。..</p>
        <img width='139' height='104' src="https://lbs.baidu.com/jsdemo/img/tianAnMen.jpg" alt="">
      </div>
    </InfoWindow>
  </Map>
</div>

<script lang="ts" setup>
  import {ref} from 'vue'
  const show = ref<boolean>(true)
  const show1 = ref<boolean>(false)
  const show2 = ref<boolean>(false)
  const count = ref<number>(1)
  setInterval(() => {
    count.value += 1
  },1000)
</script>

<style>
  .baidu-map-container img{
    max-width: none;
  }
  .baidu-map-container h2{
    margin: 0;
    border-top: none;
    padding-top: 0;
    letter-spacing: initial;
    line-height: initial;
  }
  .infoWindow-content {
    display: flex;
    justify-content: space-between;
  }
  .infoWindow-content p{
    margin: 0;
    line-height: initial;
  }
</style>

:::details 点击查看代码
```html
<div>
  <label>
    显示infoWindow1: <input type="checkbox" v-model="show">
  </label>
  <br />
  <label>
    显示infoWindow2: <input type="checkbox" v-model="show1">
  </label>
  <br />
  <label>
    显示infoWindow2: <input type="checkbox" v-model="show2">
  </label>
  <br />
  <br />
  <Map
   enableScrollWheelZoom
  >
    <InfoWindow 
      v-model="show"
      :position="{ lng: 116.404, lat: 39.925 }"
      title="文字内容"
    >
      地址：北京市东城区王府井大街88号乐天银泰百货八层
    </InfoWindow>
    <InfoWindow 
      v-model="show1"
      :position="{ lng: 116.404, lat: 39.925 }"
      title="动态内容"
    >
      <h2>{{count}}</h2>
    </InfoWindow>
    <InfoWindow 
      v-model="show2"
      :position="{ lng: 116.404, lat: 39.925 }"
      title="图文组合排版"
    >
      <h2>天安门</h2>
      <div class="infoWindow-content">
        <p>天安门坐落在中国北京市中心，故宫的南侧，与天安门广场隔长安街相望，是清朝皇城的大门。..</p>
        <img width='139' height='104' src="https://lbs.baidu.com/jsdemo/img/tianAnMen.jpg" alt="">
      </div>
    </InfoWindow>
  </Map>
</div>

<script lang="ts" setup>
  import {ref} from 'vue'
  const show = ref<boolean>(true)
  const show1 = ref<boolean>(false)
  const show2 = ref<boolean>(false)
  const count = ref<number>(1)
  setInterval(() => {
    count.value += 1
  },1000)
</script>

<style>
  .infoWindow-content {
    display: flex;
    justify-content: space-between;
  }
  .infoWindow-content p{
    margin: 0;
    line-height: initial;
  }
</style>
```
:::

## 动态组件 Props

| 参数                 | 说明                                                                                                                                                                                             | 类型                            | 可选值    | 默认值          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- | --------- | --------------- |
| modelValue / v-model | 是否开启信息窗体                                                                                                                                                                                 | `boolean `                      | -         | `false`         |
| position             | 信息窗体所在坐标                                                                                                                                                                                 | `{ lng: number, lat: number}[]` | -         | `required`      |
| title                | 信息窗标题文字                                                                                                                                                                                   | `string`                        |     -      | -      |
| width                | 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整                                                                                            | `number`                        | `220-730` | `0`             |
| height               | 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整                                                                                             | `number`                        | `60-650`  | `0`             |
| offset               | 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置 | `{x: number, y: number }`       | -         | `{x: 0, y: 0 }` |
| enableAutoPan        | 是否开启信息窗口打开时地图自动移动                                                                                                                                                               | `boolean`                       | -         | ` true`         |
| enableCloseOnClick   | 是否开启点击地图关闭信息窗口                                                                                                                                                                     | `boolean`                       | -         | ` true`         |

## 组件事件

| 事件名     | 说明                               | 参数                         |
| ---------- | ---------------------------------- | ---------------------------- |
| close      | 信息窗口被关闭时触发此事件         | `event{type, target, point}` |
| open       | 信息窗口被打开时触发此事件         | `event{type, target, point}` |
| clickclose | 点击信息窗口的关闭按钮时触发此事件 | `event{type, target}`        |

<!-- maximize	event{type, target}	信息窗口最大化后触发此事件
restore	event{type, target}	信息窗口还原时触发此事件 -->