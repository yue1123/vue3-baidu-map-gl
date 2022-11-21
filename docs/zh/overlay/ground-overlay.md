# GroundOverlay 地面叠加层 <Badge type="tip" text="^0.0.32" />

在地图底面上叠加覆盖物，覆盖物可以是图片、自定义 Canvas、视频。

```ts
import { GroundOverlay } from 'vue3-baidu-map-gl'
```

## 组件示例

<div>
  地面叠加层类型：
  <select class="mySelect" name="" id="" v-model="activeKey">
    <option value="image">image 图片叠加层</option>
    <option value="video">video 视频叠加层</option>
    <option value="canvas">canvas 画布叠加层</option>
  </select>
  <Map
    enableScrollWheelZoom
    noAnimation
    :displayOptions="{
      poiText: false,  // 隐藏poi标注
      poiIcon: false,  // 隐藏poi图标
      building: false  // 隐藏楼块
    }"
    :tilt="groundOverlay.tilt || 0"
    :zoom="groundOverlay.zoom"
  >
    <Marker
      :position="groundOverlay.startPoint"
      icon="start"
      :offset="{x: 0, y: -16 }"
    />
    <Marker
      :position="groundOverlay.endPoint"
      icon="end"
      :offset="{x: 0, y: -16 }"
    />
    <GroundOverlay
      autoCenter
      :type="activeKey"
      :startPoint="groundOverlay.startPoint"
      :endPoint="groundOverlay.endPoint"
      :url="groundOverlay.url"
      :opacity="groundOverlay.opacity"
    />
    <Label
      v-if="activeKey === 'canvas'"
      content="日坛公园"
      :position="{lng: 116.449921, lat: 39.921324}"
      :style="{
        color: '#fff',
        borderWidth:'1px',
        borderRadius: '5px',
        borderColor: '#fff',
        backgroundColor: '#79a913',
        fontSize: '16px',
        height: '30px',
        lineHeight: '30px'
      }"
    />
  </Map>
</div>

<script lang="ts" setup>
  import { ref, computed } from 'vue'

  const activeKey = ref<'image' | 'canvas' | 'video'>('canvas')

  const groundOverlays = ref({
    canvas: {
      zoom: 17,
      opacity: 1,
      startPoint: { lng: 116.447717, lat: 39.919173 },
      endPoint: { lng: 116.453125, lat: 39.923475 },
      url: () => {
        var textureCanvas = document.createElement('canvas')
        textureCanvas.width = textureCanvas.height = 200
        var ctx = textureCanvas.getContext('2d')
        ctx.fillStyle = '#79a913'
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 6
        ctx.lineCap = 'square'
        ctx.fillRect(0, 0, 200, 200)
        ctx.moveTo(50, 50)
        ctx.lineTo(150, 50)
        ctx.lineTo(150, 150)
        ctx.lineTo(50, 150)
        ctx.lineTo(50, 50)
        ctx.stroke()
        return textureCanvas
      }
    },
    image: {
      tilt: 45,
      zoom: 18,
      opacity: 1,
      startPoint: { lng: 117.19635, lat: 36.24093 },
      endPoint: { lng: 117.20350, lat: 36.24764 },
      url: '/shouhuimap.png'
    },
    video: {
      zoom: 4,
      opacity: 0.5,
      startPoint: { lng: 94.582033, lat: -7.989754 },
      endPoint: { lng: 145.358572, lat: 30.813867 },
      url: '/cloud.mov'
    }
  })

  const groundOverlay = computed(() => {
    return groundOverlays.value[activeKey.value]
  })
</script>

:::details 点击查看代码

<!-- prettier-ignore -->
```html
<div>
  地面叠加层类型：
  <select class="mySelect" name="" id="" v-model="activeKey">
    <option value="image">image 图片叠加层</option>
    <option value="video">video 视频叠加层</option>
    <option value="canvas">canvas 画布叠加层</option>
  </select>
  <Map
    enableScrollWheelZoom
    noAnimation
    :displayOptions="{
      poiText: false,  // 隐藏poi标注
      poiIcon: false,  // 隐藏poi图标
      building: false  // 隐藏楼块
    }"
    :tilt="groundOverlay.tilt || 0"
    :zoom="groundOverlay.zoom"
  >
    <Marker
      :position="groundOverlay.startPoint"
      icon="start"
      :offset="{x: 0, y: -16 }"
    />
    <Marker
      :position="groundOverlay.endPoint"
      icon="end"
      :offset="{x: 0, y: -16 }"
    />
    <GroundOverlay
      autoCenter
      :type="activeKey"
      :startPoint="groundOverlay.startPoint"
      :endPoint="groundOverlay.endPoint"
      :url="groundOverlay.url"
      :opacity="groundOverlay.opacity"
    />
    <Label
      v-if="activeKey === 'canvas'"
      content="日坛公园"
      :position="{lng: 116.449921, lat: 39.921324}"
      :style="{
        color: '#fff',
        borderWidth:'1px',
        borderRadius: '5px',
        borderColor: '#fff',
        backgroundColor: '#79a913',
        fontSize: '16px',
        height: '30px',
        lineHeight: '30px'
      }"
    />
  </Map>
</div>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import { GroundOverlay } from 'vue3-baidu-map-gl'
  const activeKey = ref<'image' | 'canvas' | 'video'>('image')

  const groundOverlays = ref({
    canvas: {
      zoom: 17,
      opacity: 1,
      startPoint: { lng: 116.447717, lat: 39.919173 },
      endPoint: { lng: 116.453125, lat: 39.923475 },
      url: () => {
        var textureCanvas = document.createElement('canvas')
        textureCanvas.width = textureCanvas.height = 200
        var ctx = textureCanvas.getContext('2d')
        ctx.fillStyle = '#79a913'
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 6
        ctx.lineCap = 'square'
        ctx.fillRect(0, 0, 200, 200)
        ctx.moveTo(50, 50)
        ctx.lineTo(150, 50)
        ctx.lineTo(150, 150)
        ctx.lineTo(50, 150)
        ctx.lineTo(50, 50)
        ctx.font = '148px serif'
        ctx.fillText('Hello world', 50, 50)
        // ctx.stroke()
        return textureCanvas
      }
    },
    image: {
      tilt: 45,
      zoom: 18,
      opacity: 1,
      startPoint: { lng: 117.19635, lat: 36.24093 },
      endPoint: { lng: 117.2035, lat: 36.24764 },
      url: '/shouhuimap.png'
    },
    video: {
      zoom: 4,
      opacity: 0.5,
      startPoint: { lng: 94.582033, lat: -7.989754 },
      endPoint: { lng: 145.358572, lat: 30.813867 },
      url: '/cloud.mov'
    }
  })

  const groundOverlay = computed(() => {
    return groundOverlays.value[activeKey.value]
  })
</script>
```

:::

## 动态组件 Props

| 属性       | 说明                                                 | 类型                          | 默认值     |
| ---------- | ---------------------------------------------------- | ----------------------------- | ---------- |
| type       | 地面叠加物类型                                       | `video \| canvas \| image`    | `required` |
| url        | 叠加物 image url、video url 或者自定义的 canvas 对象 | [`urlType` ](#urltype)        | `required` |
| startPoint | 显示区域开始点，见[图示](#bounds-图示)               | `{ lng: number, lat: number}` | `required` |
| endPoint   | 显示区域结束点，见[图示](#bounds-图示)               | `{ lng: number, lat: number}` | `required` |
| autoCenter | 是否自动根据地面叠加物显示区域居中地图               | `boolean `                    | `true`     |
| opacity    | 透明度，范围 0-1                                     | `RangeOf2<0, 1>`              |            |

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
