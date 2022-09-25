# 多实例
在一个页面，显示多个地图

<script setup lang="ts">
  import { ref } from 'vue'
  const mapSetting = ref({
    type: 'BMAP_NORMAL_MAP',
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
  const mapSetting1 = ref({
    type: 'BMAP_EARTH_MAP',
    enableDragging: false,
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

## 示例 1

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
  地图类型：<select name="" id="" v-model="mapSetting.type">
    <option value="BMAP_NORMAL_MAP">BMAP_NORMAL_MAP</option>
    <option value="BMAP_EARTH_MAP">BMAP_EARTH_MAP</option>
  </select>
  <br/>
  <br/>
  <Map
    :minZoom="3"
    height="400px"
    :mapType="mapSetting.type"
    :enableDragging="mapSetting.enableDragging"
    :enableInertialDragging="mapSetting.enableInertialDragging"
    :enableScrollWheelZoom="mapSetting.enableScrollWheelZoom"
    :enableContinuousZoom="mapSetting.enableContinuousZoom"
    :enableDoubleClickZoom="mapSetting.enableDoubleClickZoom"
    :enableKeyboard="mapSetting.enableKeyboard"
    :enablePinchToZoom="mapSetting.enablePinchToZoom"
  />
</div>

## 示例 2

<div>
  <input type="checkbox" v-model="mapSetting1.enableScrollWheelZoom"/>鼠标缩放
  <br/>
  <input type="checkbox" v-model="mapSetting1.enableDragging"/>拖拽
  <br/>
  <input type="checkbox" v-model="mapSetting1.enableInertialDragging"/>惯性拖拽
  <br/>
  <input type="checkbox" v-model="mapSetting1.enablePinchToZoom"/>双指缩放地图
  <br/>
  <input type="checkbox" v-model="mapSetting1.enableKeyboard"/>键盘操作
  <br/>
  <input type="checkbox" v-model="mapSetting1.enableDoubleClickZoom"/>双击缩放，左键双击放大、右键双击缩小
  <br/>
  <input type="checkbox" v-model="mapSetting1.enableContinuousZoom"/>双击平滑缩放效果
  <br/>
  <br/>
  地图类型：<select name="" id="" v-model="mapSetting1.type">
    <option value="BMAP_NORMAL_MAP">BMAP_NORMAL_MAP</option>
    <option value="BMAP_EARTH_MAP">BMAP_EARTH_MAP</option>
  </select>
  <br/>
  <br/>
  <Map
    :minZoom="3"
    height="400px"
    :mapType="mapSetting1.type"
    :enableDragging="mapSetting1.enableDragging"
    :enableInertialDragging="mapSetting1.enableInertialDragging"
    :enableScrollWheelZoom="mapSetting1.enableScrollWheelZoom"
    :enableContinuousZoom="mapSetting1.enableContinuousZoom"
    :enableDoubleClickZoom="mapSetting1.enableDoubleClickZoom"
    :enableKeyboard="mapSetting1.enableKeyboard"
    :enablePinchToZoom="mapSetting1.enablePinchToZoom"
  />
</div>

::: details 点击查看代码
```html
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
  地图类型：<select name="" id="" v-model="mapSetting.type">
    <option value="BMAP_NORMAL_MAP">BMAP_NORMAL_MAP</option>
    <option value="BMAP_EARTH_MAP">BMAP_EARTH_MAP</option>
  </select>
  <br/>
  <br/>
  <Map
    :minZoom="3"
    height="400px"
    :mapType="mapSetting.type"
    :enableDragging="mapSetting1.enableDragging"
    :enableInertialDragging="mapSetting1.enableInertialDragging"
    :enableScrollWheelZoom="mapSetting1.enableScrollWheelZoom"
    :enableContinuousZoom="mapSetting1.enableContinuousZoom"
    :enableDoubleClickZoom="mapSetting1.enableDoubleClickZoom"
    :enableKeyboard="mapSetting1.enableKeyboard"
    :enablePinchToZoom="mapSetting1.enablePinchToZoom"
  />
</div>
<div>
  <input type="checkbox" v-model="mapSetting1.enableScrollWheelZoom"/>鼠标缩放
  <br/>
  <input type="checkbox" v-model="mapSetting1.enableDragging"/>拖拽
  <br/>
  <input type="checkbox" v-model="mapSetting1.enableInertialDragging"/>惯性拖拽
  <br/>
  <input type="checkbox" v-model="mapSetting1.enablePinchToZoom"/>双指缩放地图
  <br/>
  <input type="checkbox" v-model="mapSetting1.enableKeyboard"/>键盘操作
  <br/>
  <input type="checkbox" v-model="mapSetting1.enableDoubleClickZoom"/>双击缩放，左键双击放大、右键双击缩小
  <br/>
  <input type="checkbox" v-model="mapSetting1.enableContinuousZoom"/>双击平滑缩放效果
  <br/>
  <br/>
  地图类型：<select name="" id="" v-model="mapSetting1.type">
    <option value="BMAP_NORMAL_MAP">BMAP_NORMAL_MAP</option>
    <option value="BMAP_EARTH_MAP">BMAP_EARTH_MAP</option>
  </select>
  <br/>
  <br/>
  <Map
    :minZoom="3"
    height="400px"
    :mapType="mapSetting1.type"
    :enableDragging="mapSetting1.enableDragging"
    :enableInertialDragging="mapSetting1.enableInertialDragging"
    :enableScrollWheelZoom="mapSetting1.enableScrollWheelZoom"
    :enableContinuousZoom="mapSetting1.enableContinuousZoom"
    :enableDoubleClickZoom="mapSetting1.enableDoubleClickZoom"
    :enableKeyboard="mapSetting1.enableKeyboard"
    :enablePinchToZoom="mapSetting1.enablePinchToZoom"
  />
</div>

<script setup lang="ts">
  import { ref } from 'vue'
  import { Map } from 'vue3-baidu-map-gl'
  
  const mapSetting = ref({
    type: 'BMAP_NORMAL_MAP',
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
  const mapSetting1 = ref({
    type: 'BMAP_EARTH_MAP',
    enableDragging: false,
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

```
:::