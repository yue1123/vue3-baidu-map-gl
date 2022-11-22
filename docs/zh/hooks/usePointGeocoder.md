# usePointGeocoder <Badge type="tip" text="^0.0.39" />

由坐标点解析地址信息

```ts
import { usePointGeocoder } from 'vue3-baidu-map-gl'
```

## 示例

鼠标点击地图选择坐标点解析

<div>
  <Map enableScrollWheelZoom ref="map" :center="point" @initd="handleInitd" @click="handleClick">
    <template v-if="!isLoading && !isEmpty">
      <Marker :position="markerPoint"></Marker>
      <Label
        style="color:#333;font-size:9px"
        :position="result.point"
        :content="`地址: ${result?.address} 所属商圈:${result?.business} 最匹配地点: ${result?.surroundingPois[0]?.title || '无'}`"
      />
    </template>
  </Map>
</div>

<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { usePointGeocoder } from 'vue3-baidu-map-gl'
  const map = ref()
  const { get, result, isLoading, isEmpty } = usePointGeocoder()
  const point = { lng: 116.30793520652882, lat: 40.05861561613348 }
  const points = [
    { lng: 116.307852, lat: 40.057031 },
    { lng: 116.313082, lat: 40.047674 },
    { lng: 116.328749, lat: 40.026922 },
    { lng: 116.347571, lat: 39.988698 },
    { lng: 116.316163, lat: 39.997753 },
    { lng: 116.345867, lat: 39.998333 },
    { lng: 116.403472, lat: 39.999411 },
    { lng: 116.307901, lat: 40.05901 }
  ]
  const {
    get: get1,
    result: result1,
    isLoading: isLoading1
  } = usePointGeocoder()
  const markerPoint = ref(point)
  function handleInitd() {
    get(point)
  }
  function handleInitd1() {
    get1(points)
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
  .point-list {
    color:#333; 
    background-color: #fff;
    font-size:10px; 
    padding: 10px;
    border-radius:8px;
    box-shadow: rgb(0 0 0 / 15%) 1px 2px 1px;
  }
  .point-list ul{
    margin:0;
    padding:0;
  }
  .point-list li{
    list-style: none;
    border-bottom:1px solid #f1f1f1;
  }
  .point-list span{
    margin-right: 15px;
  }
</style>

:::details 点击查看代码

<!-- prettier-ignore -->
```html
<div>
  <Map enableScrollWheelZoom ref="map" :center="point" @initd="handleInitd" @click="handleClick">
    <template v-if="!isLoading && !isEmpty">
      <Marker :position="point"></Marker>
      <Label
        style="color:#333;font-size:9px"
        :position="result.point"
        :content="`地址: ${result?.address} 所属商圈:${result?.business} 最匹配地点: ${result?.surroundingPois[0]?.title || '无'}`"
      />
    </template>
  </Map>
</div>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { Map, Marker, usePointGeocoder } from 'vue3-baidu-map-gl'
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

## 批量解析坐标点

<div>
  <Map enableScrollWheelZoom :zoom="13" :center="{ lng: 116.328749, lat: 40.026922 }" @initd="handleInitd1">
    <Control class="point-list" :offset="{ x: 10, y: 10 }">
      <ul>
        <li v-for="(item, index) in points" :key="item">
          <div>
            <span>{{ index + 1 }}.</span>
            <span>纬度 - {{ item.lat }}</span>
            <span>经度 - {{ item.lng }}</span>
          </div>
        </li>
      </ul>
    </Control>
    <template v-if="!isLoading1">
      <template v-for="(item, index) in result1">
        <Marker :position="item.point"></Marker>
        <Label
          style="color:#333;font-size:9px"
          :position="item.point"
          :content="`${index}. 地址: ${item.address} 所属商圈:${item.business} 最匹配地点: ${item?.surroundingPois[0]?.title || '无'}`"
        ></Label>
      </template>
    </template>
  </Map>
</div>

:::details 点击查看代码

<!-- prettier-ignore -->
```html
<div>
  <Map enableScrollWheelZoom :zoom="13" :center="{ lng: 116.328749, lat: 40.026922 }" @initd="handleInitd">
    <Control class="point-list" :offset="{ x: 10, y: 10 }">
      <ul>
        <li v-for="(item, index) in points" :key="item">
          <div>
            <span>{{ index + 1 }}.</span>
            <span>纬度 - {{ item.lat }}</span>
            <span>经度 - {{ item.lng }}</span>
          </div>
        </li>
      </ul>
    </Control>
    <template v-if="!isLoading">
      <template v-for="(item, index) in result">
        <Marker :position="item.point"></Marker>
        <Label
          style="color:#333;font-size:9px"
          :position="item.point"
          :content="`${index}. 地址: ${item.address} 所属商圈:${item.business} 最匹配地点: ${item?.surroundingPois[0]?.title || '无'}`"
        ></Label>
      </template>
    </template>
  </Map>
</div>
<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { Map, Control, Marker, Label, usePointGeocoder } from 'vue3-baidu-map-gl'
  const points = [
    { lng: 116.307852, lat: 40.057031 },
    { lng: 116.313082, lat: 40.047674 },
    { lng: 116.328749, lat: 40.026922 },
    { lng: 116.347571, lat: 39.988698 },
    { lng: 116.316163, lat: 39.997753 },
    { lng: 116.345867, lat: 39.998333 },
    { lng: 116.403472, lat: 39.999411 },
    { lng: 116.307901, lat: 40.05901 }
  ]
  const {
    get,
    result,
    isLoading
  } = usePointGeocoder()
  function handleInitd() {
    get1(points)
  }
</script>

<style>
  .point-list {
    color:#333; 
    background-color: #fff;
    font-size:10px; 
    padding: 10px;
    border-radius:8px;
    box-shadow: rgb(0 0 0 / 15%) 1px 2px 1px;
  }
  .point-list ul{
    margin:0;
    padding:0;
  }
  .point-list li{
    list-style: none;
    border-bottom:1px solid #f1f1f1;
  }
  .point-list span{
    margin-right: 15px;
  }
</style>
```

:::

## 用法

```ts
const { get, result, isLoading, isEmpty } = usePointGeocoder(options, cal)
```

:::tip
该 hooks 依赖于 `BMapGL` ，所以需要在 `Map` 组件初始化完毕调用 `get` 方法后数据才可用
:::

### 参数

| 参数    | 描述                 | 类型                                                                          | 默认值 |
| ------- | -------------------- | ----------------------------------------------------------------------------- | ------ |
| options | 解析配置             | [`UsePointGeocoderOptions`](#usepointgeocoderoptions)                         | -      |
| cal     | 定位成功后的回调函数 | `(result: Ref<PointGeocoderResult \| PointGeocoderResult[] \| null>) => void` | -      |

### UsePointGeocoderOptions

| 属性      | 描述                                      | 类型     |
| --------- | ----------------------------------------- | -------- |
| poiRadius | 附近 POI 所处于的最大半径，默认为 100 米  | `number` |
| numPois   | 返回的 POI 点个数，默认为 10 个。取值范围 | `number` |

### 引用

| 引用      | 描述                                                         | 类型                                                                                |
| --------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| isLoading | 是否在获取中                                                 | `boolean`                                                                           |
| isEmpty   | 是否有解析结果                                               | `boolean`                                                                           |
| result    | 坐标点解析结果                                               | [`Ref<PointGeocoderResult \| PointGeocoderResult[] \| null>`](#pointgeocoderresult) |
| get       | 获取坐标点信息方法，需要在`Map`组件`initd`事件触发后才可调用 | `(point: Point \| Point[]) => void]`                                                |

### Point

```ts
type Point = { lng: number; lat: number }
```

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
declare type Result = PointGeocoderResult | PointGeocoderResult[] | null
/**
 * 由地址解析坐标点
 */
export declare function usePointGeocoder(
  options: BMapGL.LocationOptions | null | undefined,
  cal: (point: Ref<Result>) => void
): {
  get: (point: Point | Point[]) => void
  result: Ref<Result | undefined>
  isLoading: Ref<boolean>
  isEmpty: Ref<boolean>
}
```
