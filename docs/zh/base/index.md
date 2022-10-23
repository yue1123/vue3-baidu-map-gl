# Map 地图

地图核心对象，地图控件、覆盖物、图层等需作为其子组件，以获得 map 的实例化对象

```ts
import { Map } from 'vue3-baidu-map-gl'
```

## 基础综合示例

<script setup lang="ts">
  import { ref } from 'vue'
  const type = ref('BMAP_NORMAL_MAP')
  const mapSetting = ref({
    enableDragging: true,
    enableInertialDragging: true,
    enableScrollWheelZoom: false,
    enableContinuousZoom: true,
    enableResizeOnCenter: true,
    enableDoubleClickZoom: false,
    enableKeyboard: true,
    enablePinchToZoom: true,
    enableAutoResize: true,
    enableTraffic: false
  })
</script>

<div>
  <label>
    <input type="checkbox" v-model="mapSetting.enableScrollWheelZoom"/>鼠标缩放
  </label>
  <br/>
  <label>
    <input type="checkbox" v-model="mapSetting.enableDragging"/>拖拽
  </label>
  <br/>
  <label>
    <input type="checkbox" v-model="mapSetting.enableInertialDragging"/>惯性拖拽
  </label>
  <br/>
  <label>
    <input type="checkbox" v-model="mapSetting.enablePinchToZoom"/>双指缩放地图
  </label>
  <br/>
  <label>
    <input type="checkbox" v-model="mapSetting.enableKeyboard"/>键盘操作
  </label>
  <br/>
  <label>
    <input type="checkbox" v-model="mapSetting.enableDoubleClickZoom"/>双击缩放，左键双击放大、右键双击缩小
  </label>
  <br/>
  <label>
    <input type="checkbox" v-model="mapSetting.enableContinuousZoom"/>双击平滑缩放效果
  </label>
  <br/>
  <label>
    <input type="checkbox" v-model="mapSetting.enableTraffic"/>显示交通路况
  </label>
  <br/>
  <br/>
  地图类型：<select class="mySelect" name="" id="" v-model="type">
    <option value="BMAP_NORMAL_MAP">常规地图 BMAP_NORMAL_MAP</option>
    <option value="BMAP_EARTH_MAP">地球模式 BMAP_EARTH_MAP</option>
    <option value="BMAP_SATELLITE_MAP">卫星图 BMAP_EARTH_MAP</option>
  </select>
  <br/>
  <br/>
  <Map
    height="400px"
    :heading="64.5"
    :tilt="73"
    :center="{
      lng:116.280190,
      lat:40.049191
    }"
    :zoom="19"
    :minZoom="3"
    :mapType="type"
    :enableDragging="mapSetting.enableDragging"
    :enableInertialDragging="mapSetting.enableInertialDragging"
    :enableScrollWheelZoom="mapSetting.enableScrollWheelZoom"
    :enableContinuousZoom="mapSetting.enableContinuousZoom"
    :enableDoubleClickZoom="mapSetting.enableDoubleClickZoom"
    :enableKeyboard="mapSetting.enableKeyboard"
    :enablePinchToZoom="mapSetting.enablePinchToZoom"
    :enableTraffic="mapSetting.enableTraffic"
  />
</div>

::: details 点击查看代码

<!-- prettier-ignore -->
```html
<div>
  <label>
    <input type="checkbox" v-model="mapSetting.enableScrollWheelZoom" />
    鼠标缩放
  </label>
  <br />
  <label>
    <input type="checkbox" v-model="mapSetting.enableDragging" />
    拖拽
  </label>
  <br />
  <label>
    <input type="checkbox" v-model="mapSetting.enableInertialDragging" />
    惯性拖拽
  </label>
  <br />
  <label>
    <input type="checkbox" v-model="mapSetting.enablePinchToZoom" />
    双指缩放地图
  </label>
  <br />
  <label>
    <input type="checkbox" v-model="mapSetting.enableKeyboard" />
    键盘操作
  </label>
  <br />
  <label>
    <input type="checkbox" v-model="mapSetting.enableDoubleClickZoom" />
    双击缩放，左键双击放大、右键双击缩小
  </label>
  <br />
  <label>
    <input type="checkbox" v-model="mapSetting.enableContinuousZoom" />
    双击平滑缩放效果
  </label>
  <br />
  <label>
    <input type="checkbox" v-model="mapSetting.enableTraffic" />
    显示交通路况
  </label>
  <br />
  <br />
  地图类型：
  <select name="" id="" v-model="type">
    <option value="BMAP_NORMAL_MAP">BMAP_NORMAL_MAP</option>
    <option value="BMAP_EARTH_MAP">BMAP_EARTH_MAP</option>
  </select>
  <br />
  <br />
  <Map
    :minZoom="3"
    height="400px"
    :mapType="type"
    :enableDragging="mapSetting.enableDragging"
    :enableInertialDragging="mapSetting.enableInertialDragging"
    :enableScrollWheelZoom="mapSetting.enableScrollWheelZoom"
    :enableContinuousZoom="mapSetting.enableContinuousZoom"
    :enableDoubleClickZoom="mapSetting.enableDoubleClickZoom"
    :enableKeyboard="mapSetting.enableKeyboard"
    :enablePinchToZoom="mapSetting.enablePinchToZoom"
    :enableTraffic="mapSetting.enableTraffic"
  />
</div>

<script setup lang="ts">
  import { ref } from 'vue'
  import { Map } from 'vue3-baidu-map-gl'
  const type = ref('BMAP_NORMAL_MAP')
  const mapSetting = ref({
    enableDragging: true,
    enableInertialDragging: true,
    enableScrollWheelZoom: false,
    enableContinuousZoom: true,
    enableResizeOnCenter: true,
    enableDoubleClickZoom: false,
    enableKeyboard: true,
    enablePinchToZoom: true,
    enableAutoResize: true,
    enableTraffic: false
  })
</script>
```

:::

## 静态组件 props

| 参数         | 说明                                    | 类型                 | 可选值           | 默认值  |
| ------------ | --------------------------------------- | -------------------- | ---------------- | ------- |
| ak           | 百度地图 ak [申请 ak](../guide/#申请ak) | `string`             |                  |         |
| width        | 地图显示宽度                            | `string / number`    |                  | `100%`  |
| height       | 地图显示高度                            | `string / number`    |                  | `400px` |
| minZoom      | 地图允许展示的最小级别                  | `number`             | `0-21`           | `0`     |
| maxZoom      | 地图允许展示的最大级别                  | `number`             | `0-21`           | `21`    |
| showControls | 是否显示室内图                          | `boolean`            |                  | `false` |
| plugins      | 需要注册的插件                          | `['TrackAnimation']` | `TrackAnimation` |         |

## 动态组件 Props

| 参数                   | 说明                                                                                                                                                                           | 类型                                  | 默认值            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- | ----------------- |
| center                 | 地图默认中心点，可使用城市名，如：北京市，也可以使用对象如 `{lng: 121.424333, lat: 31.228604}` 表示经纬度。                                                                    | `string / {lng: number, lat: number}` | `北京市`          |
| heading                | 地图旋转角度                                                                                                                                                                   | `number`                              | `0`               |
| tilt                   | 地图倾斜角度                                                                                                                                                                   | `number`                              | `0 `              |
| mapType                | 地图类型 [mapType](#地图类型)                                                                                                                                                  | `string`                              | `BMAP_NORMAL_MAP` |
| zoom                   | 地图缩放级别                                                                                                                                                                   | `number`                              | `14`              |
| mapStyleId             | 个性化地图样式 ID [详见](./custom)                                                                                                                                             | `string`                              |                   |
| mapStyleJson           | 个性化地图样式 Json [详见](./custom)                                                                                                                                           | `{featureType: string...}[]`          |                   |
| enableTraffic          | 是否启用交通路况图层                                                                                                                                                           | `boolean`                             | `false`           |
| enableDragging         | 启用地图拖拽                                                                                                                                                                   | `boolean`                             | `true`            |
| enableInertialDragging | 启用地图惯性拖拽                                                                                                                                                               | `boolean`                             | `true`            |
| enableScrollWheelZoom  | 允许地图可被鼠标滚轮缩放                                                                                                                                                       | `boolean`                             | `false`           |
| enableContinuousZoom   | 开启双击平滑缩放效果                                                                                                                                                           | `boolean`                             | `true`            |
| enableResizeOnCenter   | 开启图区 resize 中心点不变                                                                                                                                                     | `boolean`                             | `true`            |
| enableDoubleClickZoom  | 启用地图双击缩放，左键双击放大、右键双击缩小                                                                                                                                   | `boolean`                             | `false`           |
| enableKeyboard         | 启用键盘操作，键盘的上、下、左、右键可连续移动地图。同时按下其中两个键可使地图进行对角移动。PgUp、PgDn、Home 和 End 键会使地图平移其 1/2 的大小。 +、-键会使地图放大或缩小一级 | `boolean`                             | `true`            |
| enablePinchToZoom      | 启用双指缩放地图                                                                                                                                                               | `boolean `                            | `true`            |
| enableAutoResize       | 启用自动适应容器尺寸变化                                                                                                                                                       | `boolean `                            | `true`            |

## 地图类型

| 值                 | 描述         |
| ------------------ | ------------ |
| BMAP_NORMAL_MAP    | 标准地图     |
| BMAP_EARTH_MAP     | 地球模式     |
| BMAP_SATELLITE_MAP | 普通卫星地图 |

::: warning 注意
地球模式（BMAP_EARTH_MAP）下能支持的地图交互操作有限，如您需要卫星地图支持和标准地图（BMAP_NORMAL_MAP）一致的交互体验，请使用普通卫星图模式（BMAP_SATELLITE_MAP）
:::

## 组件事件

| 事件名          | 说明                                                                                             | 类型                   |
| --------------- | ------------------------------------------------------------------------------------------------ | ---------------------- |
| click           | 左键单击地图时触发此事件。 当双击时，产生的事件序列为： click click dblclick                     | `((e: Event) => void)` |
| dblclick        | 鼠标双击地图时会触发此事件                                                                       | `((e: Event) => void)` |
| rightclick      | 右键单击地图时触发此事件。 当双击时，产生的事件序列为： rightclick rightclick rightdblclick      | `((e: Event) => void)` |
| rightdblclick   | 右键双击地图时触发此事件                                                                         | `((e: Event) => void)` |
| maptypechange   | 地图类型发生变化时触发此事件                                                                     | `((e: Event) => void)` |
| mousemove       | 鼠标在地图区域移动过程中触发此事件                                                               | `((e: Event) => void)` |
| mouseover       | 鼠标移入地图区域时触发此事件                                                                     | `((e: Event) => void)` |
| mouseout        | 鼠标移出地图区域时触发此事件                                                                     | `((e: Event) => void)` |
| movestart       | 地图移动开始时触发此事件                                                                         | `((e: Event) => void)` |
| moving          | 地图移动过程中触发此事件                                                                         | `((e: Event) => void)` |
| moveend         | 地图移动结束时触发此事件                                                                         | `((e: Event) => void)` |
| zoomstart       | 地图更改缩放级别开始时触发触发此事件                                                             | `((e: Event) => void)` |
| zoomend         | 地图更改缩放级别结束时触发触发此事件                                                             | `((e: Event) => void)` |
| addoverlay      | 当组件 BmOverlay 被挂载到地图中时会触发此事件                                                    | `((e: Event) => void)` |
| removeoverlay   | 当组件 BmOverlay 被移除时会触发此事件                                                            | `((e: Event) => void)` |
| addcontrol      | 当组件 BmControl 被挂载到地图中时会触发此事件                                                    | `((e: Event) => void)` |
| removecontrol   | 当组件 BmControl 被移除时会触发此事件                                                            | `((e: Event) => void)` |
| clearoverlays   | 当使用 Map.clearOverlays() 方法一次性移除全部覆盖物时会触发此事件                                | `((e: Event) => void)` |
| dragstart       | 开始拖拽地图时触发                                                                               | `((e: Event) => void)` |
| dragging        | 拖拽地图过程中触发                                                                               | `((e: Event) => void)` |
| dragend         | 停止拖拽地图时触发                                                                               | `((e: Event) => void)` |
| addtilelayer    | 添加一个自定义地图图层时触发此事件                                                               | `((e: Event) => void)` |
| removetilelayer | 移除一个自定义地图图层时触发此事件                                                               | `((e: Event) => void)` |
| load            | 调用 Map.centerAndZoom()方法时会触发此事件。这表示位置、缩放层级已经确定，但可能还在载入地图图块 | `((e: Event) => void)` |
| resize          | 地图可视区域大小发生变化时会触发此事件                                                           | `((e: Event) => void)` |
| hotspotclick    | 点击热区时触发此事件                                                                             | `((e: Event) => void)` |
| hotspotover     | 鼠标移至热区时触发此事件                                                                         | `((e: Event) => void)` |
| hotspotout      | 鼠标移出热区时触发此事件                                                                         | `((e: Event) => void)` |
| tilesloaded     | 当地图所有图块完成加载时触发此事件                                                               | `((e: Event) => void)` |
| touchstart      | 触摸开始时触发此事件，仅适用移动设备                                                             | `((e: Event) => void)` |
| touchmove       | 触摸移动时触发此事件，仅适用移动设备                                                             | `((e: Event) => void)` |
| touchend        | 触摸结束时触发此事件，仅适用移动设备                                                             | `((e: Event) => void)` |
| longpress       | 长按事件，仅适用移动设备                                                                         | `((e: Event) => void)` |

## 自定义地图加载中

默认情况下，地图加载中效果是`map loading...`。如果不能满足你的需求，你可以通过提供`loading`具名作用域插槽来自定义地图加载中显示效果，在地图未完成加载前`isLoading`为 false，完成后为`true`

<!-- prettier-ignore -->
```html
<Map>
  <template #loading="{ isLoading }">
    <div class="spinner" v-if="isLoading">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  </template>
</Map>

<style lang="css">
  .spinner {
    width: 60px;
    height: 60px;

    position: relative;
    margin: 100px auto;
  }

  .double-bounce1,
  .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #42b883;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: bounce 2s infinite ease-in-out;
    animation: bounce 2s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  @-webkit-keyframes bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
</style>
```
