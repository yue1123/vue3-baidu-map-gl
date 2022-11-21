# usePointGeocoder <Badge type="tip" text="^0.0.39" />

通过坐标点解析地址

```ts
import { usePointGeocoder } from 'vue3-baidu-map-gl'
```

## 示例

鼠标点击地图选择坐标点解析

<div>
  <Map enableScrollWheelZoom ref="map" :center="point" @initd="handleInitd" @click="handleClick">
    <template v-if="!isLoading && !isEmpty">
      <Marker :position="markerPoint"></Marker>
    </template>
  </Map>
  <div class="state" v-if="!isLoading">
    <h5>解析结果:</h5>
    <span>地址 - {{ result?.address }}</span>
    <span>所属商圈 - {{ result?.business || '无' }}</span>
    <span>最匹配地点 - {{ result?.surroundingPois[0]?.title || '无'}}</span>
    <div class="state" v-if="isEmpty">
      没有解析到结果 ！
    </div>
  </div>
  <div class="state"  v-else>
    解析中...
  </div>
</div>

<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { usePointGeocoder } from '../../../packages'
  const map = ref()
  const { get, result, isLoading, isEmpty } = usePointGeocoder()
  const point = { lng: 116.30793520652882, lat: 40.05861561613348 }
  const markerPoint = ref(point)
  function handleInitd(){
    get(point)
  }
  function handleClick(e){
    markerPoint.value = e.latlng
    get(e.latlng)
  }

</script>

<style>
  .state {
    margin-top: 15px;
  }
  .state span {
    margin-right: 25px;
  }
</style>

:::details 点击查看代码
<!-- prettier-ignore -->
```html
<div>
  <Map enableScrollWheelZoom ref="map" :center="point" @initd="handleInitd" @click="handleClick">
    <template v-if="!isLoading && !isEmpty">
      <Marker :position="point"></Marker>
    </template>
  </map>
  <div class="state" v-if="!isLoading">
    <h5>解析结果:</h5>
    <span>地址 - {{ result?.address }}</span>
    <span>所属商圈 - {{ result?.business || '无' }}</span>
    <span>最匹配地点 - {{ result?.surroundingPois[0]?.title || '无'}}</span>
    <div class="state" v-if="isEmpty">没有解析到结果 ！</div>
  </div>
  <div class="state" v-else>解析中...</div>
</div>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { usePointGeocoder } from 'vue3-baidu-map-g;'
  const map = ref()
  const { get, result, isLoading, isEmpty } = usePointGeocoder()
  const point = ref({ lng: 116.30793520652882, lat: 40.05861561613348 })
  const markerPoint = point

  function handleInitd() {
    get(point.value)
  }
  function handleClick(e) {
    markerPoint.value = e.latlng
    get(e.latlng)
  }
</script>

<style>
  .state {
    margin-top: 15px;
  }
  .state span {
    margin-right: 25px;
  }
</style>
```

:::

## 用法

```ts
const { get, result, isLoading, isEmpty } = usePointGeocoder(cal)
```
:::tip
该 hooks 依赖于 `BMapGL` ，所以需要在 `Map` 组件初始化完毕调用 `get` 方法后数据才可用
:::

### 参数

| 参数 | 描述                 | 类型                                         | 默认值 |
| ---- | -------------------- | -------------------------------------------- | ------ |
| cal  | 定位成功后的回调函数 | `(result: Ref<PointGeocoderResult>) => void` | -      |

### 引用

| 引用      | 描述                                                         | 类型                                                                                               |
| --------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| isLoading | 是否在获取中                                                 | `boolean`                                                                                          |
| isEmpty   | 是否有解析结果                                               | `boolean`                                                                                          |
| result    | 坐标点解析结果                                               | [`PointGeocoderResult`](#pointgeocoderresult)                                                      |
| get       | 获取坐标点信息方法，需要在`Map`组件`initd`事件触发后才可调用 | `(point:{ lng: number; lat: number }, options?:` [`LocationOptions`](#locationoptions)`) => void]` |

### PointGeocoderResult

| 属性             | 描述                         | 类型                                    |
| ---------------- | ---------------------------- | --------------------------------------- |
| point            | 坐标点                       | `boolean`                               |
| string           | 地址描述                     | `string`                                |
| AddressComponent | 结构化的地址描述             | [`AddressComponent`](#AddressComponent) |
| surroundingPois  | 附近的 POI 点                | [`LocalResultPoi`](#localresultpoi)     |
| business         | 商圈字段，代表此点所属的商圈 | `string`                                |

### AddressComponent

| 属性         | 描述     | 类型     |
| ------------ | -------- | -------- |
| streetNumber | 门牌号码 | `string` |
| street       | 街道名称 | `string` |
| district     | 区县名称 | `string` |
| city         | 城市名称 | `string` |
| province     | 省份名称 | `string` |

### LocationOptions

| 属性      | 描述                                      | 类型     |
| --------- | ----------------------------------------- | -------- |
| poiRadius | 附近 POI 所处于的最大半径，默认为 100 米  | `number` |
| numPois   | 返回的 POI 点个数，默认为 10 个。取值范围 | `number` |

### LocalResultPoi

| 属性        | 描述                                                                                         | 类型                  |
| ----------- | -------------------------------------------------------------------------------------------- | --------------------- |
| title       | 结果的名称标题                                                                               | `string`              |
| point       | 该结果所在的地理位置                                                                         | `point`               |
| url         | 在百度地图中展示该结果点的详情信息链接                                                       | `string`              |
| address     | 地址（根据数据部分提供）。注：当结果点类型为公交站或地铁站时，地址信息为经过该站点的所有车次 | `string`              |
| city        | 所在城市                                                                                     | `string`              |
| phoneNumber | 电话，根据数据部分提供                                                                       | `string`              |
| postcode    | 邮政编码，根据数据部分提供                                                                   | `string`              |
| type        | 类型，根据数据部分提供                                                                       | [`PoiType`](#poitype) |
| uid         | 地点 id                                                                                      | `string`              |
| tags        | POI 的标签，如商务大厦、餐馆等。                                                             | `string[]`            |

### PoiType

| 值  | 描述           |
| --- | -------------- |
| 0   | 一般位置点     |
| 1   | 公交车站位置点 |
| 3   | 地铁车站位置点 |


## TS 类型定义参考

```ts
import { Ref } from 'vue'
import { Point } from './usePoint'
interface PointGeocoderResult {
  /**
   * 坐标点
   */
  point: Point
  /**
   * 地址描述
   */
  address: string
  /**
   * 结构化的地址描述
   */
  addressComponents: {
    city: string
    district: string
    province: string
    street: string
    streetNumber: string
  }
  /**
   * 附近的POI点
   */
  surroundingPois: Array<BMapGL.LocalResultPoi>
  /**
   * 商圈字段，代表此点所属的商圈
   */
  business: string
}
/**
 * 由地址解析坐标点
 */
export declare function usePointGeocoder(cal: (point: Ref<PointGeocoderResult>) => void): {
  get: (point: Point, options?: BMapGL.LocationOptions | null) => void
  result: Ref<PointGeocoderResult | undefined>
  isLoading: Ref<boolean>
  isEmpty: Ref<boolean>
}
```
