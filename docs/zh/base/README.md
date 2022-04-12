# 基础类

### Map 地图

地图核心对象，地图控件、覆盖物、图层等需作为其子组件，以获得 map 的实例化对象

```ts
import { BaiduMap } from 'vue3-baidu-map-gl'
```

```html
<BaiduMap 
  :minZoom="10"
  height="400px"
  mapType="BMAP_NORMAL_MAP" 
/>
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
  <BaiduMap
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
    enableScrollWheelZoom: true,
    enableContinuousZoom: true,
    enableResizeOnCenter: true,
    enableDoubleClickZoom: false,
    enableKeyboard: true,
    enablePinchToZoom: true,
    enableAutoResize: true
  })
</script>