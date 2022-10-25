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

## 实例 1

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
  <br/>
  地图类型：<select class="mySelect"  name="" id="" v-model="mapSetting.type">
    <option value="BMAP_NORMAL_MAP">常规地图 BMAP_NORMAL_MAP</option>
    <option value="BMAP_EARTH_MAP">地球模式 BMAP_EARTH_MAP</option>
    <option value="BMAP_SATELLITE_MAP">卫星图 BMAP_EARTH_MAP</option>
  </select>
  <br/>
  <br/>
  <Map
    :minZoom="3"
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

## 实例 2

<div>
  <label>
    <input type="checkbox" v-model="mapSetting1.enableScrollWheelZoom"/>鼠标缩放
  </label>
  <br/>
  <label>
    <input type="checkbox" v-model="mapSetting1.enableDragging"/>拖拽
  </label>
  <br/>
  <label>
    <input type="checkbox" v-model="mapSetting1.enableInertialDragging"/>惯性拖拽
  </label>
  <br/>
  <label>
    <input type="checkbox" v-model="mapSetting1.enablePinchToZoom"/>双指缩放地图
  </label>
  <br/>
  <label>
    <input type="checkbox" v-model="mapSetting1.enableKeyboard"/>键盘操作
  </label>
  <br/>
  <label>
    <input type="checkbox" v-model="mapSetting1.enableDoubleClickZoom"/>双击缩放，左键双击放大、右键双击缩小
  </label>
  <br/>
  <label>
    <input type="checkbox" v-model="mapSetting1.enableContinuousZoom"/>双击平滑缩放效果
  </label>
  <br/>
  <br/>
  地图类型：<select class="mySelect"  name="" id="" v-model="mapSetting1.type">
    <option value="BMAP_NORMAL_MAP">常规地图 BMAP_NORMAL_MAP</option>
    <option value="BMAP_EARTH_MAP">地球模式 BMAP_EARTH_MAP</option>
    <option value="BMAP_SATELLITE_MAP">卫星图 BMAP_EARTH_MAP</option>
  </select>
  <br/>
  <br/>
  <Map
    :minZoom="3"
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

<!-- prettier-ignore -->
```html
<div>
  <input type="checkbox" v-model="mapSetting.enableScrollWheelZoom" />
  鼠标缩放
  <br />
  <input type="checkbox" v-model="mapSetting.enableDragging" />
  拖拽
  <br />
  <input type="checkbox" v-model="mapSetting.enableInertialDragging" />
  惯性拖拽
  <br />
  <input type="checkbox" v-model="mapSetting.enablePinchToZoom" />
  双指缩放地图
  <br />
  <input type="checkbox" v-model="mapSetting.enableKeyboard" />
  键盘操作
  <br />
  <input type="checkbox" v-model="mapSetting.enableDoubleClickZoom" />
  双击缩放，左键双击放大、右键双击缩小
  <br />
  <input type="checkbox" v-model="mapSetting.enableContinuousZoom" />
  双击平滑缩放效果
  <br />
  <br />
  地图类型：
  <select name="" id="" v-model="mapSetting.type">
    <option value="BMAP_NORMAL_MAP">BMAP_NORMAL_MAP</option>
    <option value="BMAP_EARTH_MAP">BMAP_EARTH_MAP</option>
  </select>
  <br />
  <br />
  <Map
    :minZoom="3"
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
  <input type="checkbox" v-model="mapSetting1.enableScrollWheelZoom" />
  鼠标缩放
  <br />
  <input type="checkbox" v-model="mapSetting1.enableDragging" />
  拖拽
  <br />
  <input type="checkbox" v-model="mapSetting1.enableInertialDragging" />
  惯性拖拽
  <br />
  <input type="checkbox" v-model="mapSetting1.enablePinchToZoom" />
  双指缩放地图
  <br />
  <input type="checkbox" v-model="mapSetting1.enableKeyboard" />
  键盘操作
  <br />
  <input type="checkbox" v-model="mapSetting1.enableDoubleClickZoom" />
  双击缩放，左键双击放大、右键双击缩小
  <br />
  <input type="checkbox" v-model="mapSetting1.enableContinuousZoom" />
  双击平滑缩放效果
  <br />
  <br />
  地图类型：
  <select name="" id="" v-model="mapSetting1.type">
    <option value="BMAP_NORMAL_MAP">BMAP_NORMAL_MAP</option>
    <option value="BMAP_EARTH_MAP">BMAP_EARTH_MAP</option>
  </select>
  <br />
  <br />
  <Map
    :minZoom="3"
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
