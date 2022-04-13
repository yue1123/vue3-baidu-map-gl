# Map 地图

地图核心对象，地图控件、覆盖物、图层等需作为其子组件，以获得 map 的实例化对象

```ts:no-line-numbers
import { Map } from 'vue3-baidu-map-gl'
```

```html:no-line-numbers
<Map :minZoom="10" height="400px" mapType="BMAP_NORMAL_MAP" />
```

### 基础综合示例

<br/>
<div>
  <input type="checkbox" v-model="mapSetting.enableScrollWheelZoom"/>鼠标缩放
  <br/>
  <input type="checkbox" v-model="mapSetting.enableDragging"/>拖拽
  <br/>
  <input type="checkbox" v-model="mapSetting.enableInertialDragging"/>惯性拖拽
  <br/>
  <input type="checkbox" v-model="mapSetting.enablePinchToZoom"/>双指缩放地图
  <br/>
  <input type="checkbox" v-model="mapSetting.enableKeyboard"/>键盘操作
  <br/>
  <input type="checkbox" v-model="mapSetting.enableDoubleClickZoom"/>双击缩放，左键双击放大、右键双击缩小
  <br/>
  <input type="checkbox" v-model="mapSetting.enableContinuousZoom"/>双击平滑缩放效果
  <br/>
  <br/>
  地图类型: <select name="" id="" v-model="type">
    <option value="BMAP_NORMAL_MAP">BMAP_NORMAL_MAP</option>
    <option value="BMAP_EARTH_MAP">BMAP_EARTH_MAP</option>
  </select>
  <br/>
  <br/>
  <Map
  :ak="'4stE857hYPHbEmgKhLiTAa0QbCIULHpm'"
  :minZoom="10"
  height="400px"
  :mapType="type"
  :enableDragging="mapSetting.enableDragging"
  :enableInertialDragging="mapSetting.enableInertialDragging"
  :enableScrollWheelZoom="mapSetting.enableScrollWheelZoom"
  :enableContinuousZoom="mapSetting.enableContinuousZoom"
  :enableDoubleClickZoom="mapSetting.enableDoubleClickZoom"
  :enableKeyboard="mapSetting.enableKeyboard"
  :enablePinchToZoom="mapSetting.enablePinchToZoom"
/>
</div>

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
    enableAutoResize: true
  })
</script>

### 组件 props


| 参数                   | 说明                                                                                                                                                                          | 类型                                | 可选值              | 默认值          |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------- | --------------- |
| ak                     | 百度地图 ak [申请ak](../guide/quick-start.html#申请ak)                                                                                                                        | string                              |                     |                 |
| width                  | 地图显示宽度                                                                                                                                                                  | string / number                     |                     | 100%            |
| height                 | 地图显示高度                                                                                                                                                                  | string / number                     |                     | 400px           |
| center                 | 地图默认中心点,可使用城市名,如:北京市，也可以使用对象如 {lng: 121.424333, lat: 31.228604} 表示经纬度。                                                                        | string / {lng: number, lat: number} |                     | 北京市          |
| mapType                | 地图显示类型                                                                                                                                                                  | string                              | [mapType](#maptype) | BMAP_NORMAL_MAP |
| zoom                   | 缩放级别                                                                                                                                                                      | number                              |                     | 16              |
| heading                | 地图旋转角度                                                                                                                                                                  | number                              |                     | 0               |
| tilt                   | 地图倾斜角度                                                                                                                                                                  | number                              |                     | 0               |
| minZoom                | 地图允许展示的最小级别                                                                                                                                                        | number                              | -                   | 0               |
| enableDragging         | 启用地图拖拽                                                                                                                                                                  | boolean                             | -                   | true            |
| enableInertialDragging | 启用地图惯性拖拽                                                                                                                                                              | boolean                             | -                   | true            |
| enableScrollWheelZoom  | 允许地图可被鼠标滚轮缩放                                                                                                                                                      | boolean                             | -                   | true            |
| enableContinuousZoom   | 开启双击平滑缩放效果                                                                                                                                                          | boolean                             | -                   | true            |
| enableResizeOnCenter   | 开启图区 resize 中心点不变                                                                                                                                                    | boolean                             | -                   | true            |
| enableDoubleClickZoom  | 启用地图双击缩放，左键双击放大、右键双击缩小                                                                                                                                  | boolean                             | -                   | false           |
| enableKeyboard         | 启用键盘操作,键盘的上、下、左、右键可连续移动地图。同时按下其中两个键可使地图进行对角移动。PgUp、PgDn、Home 和 End 键会使地图平移其 1/2 的大小。 +、-键会使地图放大或缩小一级 | boolean                             | -                   | true            |
| enablePinchToZoom      | 启用双指缩放地图。                                                                                                                                                            | boolean                             | -                   | true            |
| enableAutoResize       | 启用自动适应容器尺寸变化                                                                                                                                                      | boolean                             | -                   | true            |

### mapType

| 值              | 描述                       |
| --------------- | -------------------------- |
| BMAP_NORMAL_MAP | 此地图类型展示普通街道视图 |
| BMAP_EARTH_MAP  | 此地图类型展示地球卫星视图 |

<!-- BMAP_NORMAL_MAP / BMAP_EARTH_MAP -->
<!-- 百度拾取坐标系统 -->

### 组件事件

| 参数              | 说明                                                                                             | 类型                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| onClick           | 左键单击地图时触发此事件。 当双击时，产生的事件序列为： click click dblclick                     | (event: {type: string, target: any, point: Point, pixel: Pixel, overlay: Overlay }): void; |
| onDblClick        | 鼠标双击地图时会触发此事件                                                                       | (event: {type: string, target: any, pixel: Pixel, point: Point }): void;                   |
| onRightClick      | 右键单击地图时触发此事件。 当双击时，产生的事件序列为： rightclick rightclick rightdblclick      | (event: {type: string, target: any, point: Point, pixel: Pixel, overlay: Overlay }): void; |
| onRightdblClick   | 右键双击地图时触发此事件                                                                         | (event: {type: string, target: any, point: Point, pixel: Pixel, overlay: Overlay }): void; |
| onMapTypeChange   | 地图类型发生变化时触发此事件                                                                     | (event: {type: string, target: any }): void;                                               |
| onMouseMove       | 鼠标在地图区域移动过程中触发此事件                                                               | (event: {type: string, target: any, point: Point, pixel: Pixel, overlay: Overlay }): void; |
| onMouseOver       | 鼠标移入地图区域时触发此事件                                                                     | (event: {type: string, target: any }): void;                                               |
| onMouseOut        | 鼠标移出地图区域时触发此事件                                                                     | (event: {type: string, target: any }): void;                                               |
| onMoveStart       | 地图移动开始时触发此事件                                                                         | (event: {type: string, target: any }): void;                                               |
| onMoving          | 地图移动过程中触发此事件                                                                         | (event: {type: string, target: any }): void;                                               |
| onMoveEnd         | 地图移动结束时触发此事件                                                                         | (event: {type: string, target: any }): void;                                               |
| onZoomStart       | 地图更改缩放级别开始时触发触发此事件                                                             | (event: {type: string, target: any }): void;                                               |
| onZoomEnd         | 地图更改缩放级别结束时触发触发此事件                                                             | (event: {type: string, target: any }): void;                                               |
| onAddOverlay      | 当组件 BmOverlay 被挂载到地图中时会触发此事件                                                    | (event: {type: string, target: any }): void;                                               |
| onRemoveOverlay   | 当组件 BmOverlay 被移除时会触发此事件                                                            | (event: {type: string, target: any }): void;                                               |
| onAddControl      | 当组件 BmControl 被挂载到地图中时会触发此事件                                                    | (event: {type: string, target: any }): void;                                               |
| onRemoveControl   | 当组件 BmControl 被移除时会触发此事件                                                            | (event: {type: string, target: any }): void;                                               |
| onClearOverlays   | 当使用 Map.clearOverlays() 方法一次性移除全部覆盖物时会触发此事件                                | (event: {type: string, target: any }): void;                                               |
| onDragStart       | 开始拖拽地图时触发                                                                               | (event: {type: string, target: any, pixel: Pixel, point: Point }): void;                   |
| onDragging        | 拖拽地图过程中触发                                                                               | (event: {type: string, target: any, pixel: Pixel, point: Point }): void;                   |
| onDragEnd         | 停止拖拽地图时触发                                                                               | (event: {type: string, target: any, pixel: Pixel, point: Point }): void;                   |
| onAddTileLayer    | 添加一个自定义地图图层时触发此事件                                                               | (event: {type: string, target: any }): void;                                               |
| onRemoveTileLayer | 移除一个自定义地图图层时触发此事件                                                               | (event: {type: string, target: any }): void;                                               |
| onLoad            | 调用 Map.centerAndZoom()方法时会触发此事件。这表示位置、缩放层级已经确定，但可能还在载入地图图块 | (event: {type: string, target: any, pixel: Pixel, point: Point, zoom: number }): void;     |
| onReSize          | 地图可视区域大小发生变化时会触发此事件                                                           | (event: {type: string, target: any, size: Size }): void;                                   |
| onHotspotClick    | 点击热区时触发此事件                                                                             | (event: {type: string, target: any, spots: HotspotOptions }): void;                        |
| onHotspotOver     | 鼠标移至热区时触发此事件                                                                         | (event: {type: string, target: any, spots: HotspotOptions }): void;                        |
| onHotspotOut      | 鼠标移出热区时触发此事件                                                                         | (event: {type: string, target: any, spots: HotspotOptions }): void;                        |
| onTilesLoaded     | 当地图所有图块完成加载时触发此事件                                                               | (event: {type: string, target: any }): void;                                               |
| onTouchStart      | 触摸开始时触发此事件，仅适用移动设备                                                             | (event: {type: string, target: any, point: Point, pixel}): void;                           |
| onTouchMove       | 触摸移动时触发此事件，仅适用移动设备                                                             | (event: {type: string, target: any, point: Point, pixel}): void;                           |
| onTouchEnd        | 触摸结束时触发此事件，仅适用移动设备                                                             | (event: {type: string, target: any, point: Point, pixel}): void;                           |
| onLongPress       | 长按事件，仅适用移动设备                                                                         | (event: {type: string, target: any, point: Point, pixel}): void;                           |
