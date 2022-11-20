# useAddressGeocoder

通过地址解析坐标点

```ts
import { useAddressGeocoder } from 'vue3-baidu-map-gl'
```

## 示例

<div>
  选择地址解析:
  <select class="mySelect" v-model="address">
    <option v-for="item in addressList" :value="item">{{ item.address }}</option>
  </select>
  <Map enableScrollWheelZoom ref="map" :center="point" @initd="handleInitd" >
    <template v-if="!isLoading && !isEmpty">
      <Marker :position="point"></Marker>
    </template>
  </Map>
  <div class="state" v-if="!isLoading && !isEmpty">
    <h5>解析结果:</h5>
    <span>纬度 - {{ point?.lat }}</span>
    <span>经度 - {{ point?.lng }}</span>
  </div>
  <div class="state" v-else-if="!isEmpty">
    没有解析到结果 ！
  </div>
  <div class="state"  v-else>
    解析中...
  </div>
</div>

<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { useAddressGeocoder } from '../../../packages'
  const map = ref()
  const addressList = ref([
    {
      address: '北京市海淀区上地10街',
      city: '北京市'
    },
    {
      address: '北京市海淀区海淀三山五园绿道',
      city: '北京市'
    },
    {
      address: '北京市东城区天安门东通道',
      city: '北京市'
    },
    
  ])
  const address = ref(addressList.value[0])

  watch(
    () => address,
    (n) => {
      get(n.value.address, n.value.city)
    },
    {
      deep: true
    }
  )
  const { get, point, isLoading, isEmpty } = useAddressGeocoder(() => {
    map.value.resetCenter()
  })

  function handleInitd() {
    get(address.value.address, address.value.city)
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
  选择地址解析:
  <select class="mySelect" v-model="address">
    <option v-for="item in addressList" :value="item">{{ item.address }}</option>
  </select>
  <Map enableScrollWheelZoom ref="map" :center="point" @initd="handleInitd">
    <template v-if="!isLoading && !isEmpty">
      <Marker :position="point"></Marker>
    </template>
  </Map>
  <div class="state" v-if="!isLoading && !isEmpty">
    <h5>解析结果:</h5>
    <span>纬度 - {{ point?.lat }}</span>
    <span>经度 - {{ point?.lng }}</span>
  </div>
  <div class="state" v-else-if="!isEmpty">没有解析到结果 ！</div>
  <div class="state" v-else>解析中...</div>
</div>

<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { useAddressGeocoder } from '../../../packages'
  const map = ref()
  const addressList = ref([
    {
      address: '北京市海淀区上地10街',
      city: '北京市'
    },
    {
      address: '北京市海淀区海淀三山五园绿道',
      city: '北京市'
    },
    {
      address: '北京市东城区天安门东通道',
      city: '北京市'
    }
  ])
  const address = ref(addressList.value[0])

  watch(
    () => address,
    (n) => {
      get(n.value.address, n.value.city)
    },
    {
      deep: true
    }
  )
  const { get, point, isLoading, isEmpty } = useAddressGeocoder(() => {
    map.value.resetCenter()
  })

  function handleInitd() {
    get(address.value.address, address.value.city)
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
const { get, point, isLoading, isEmpty } = useAddressGeocoder(cal)
```

:::tip
该 hooks 依赖于 `BMapGL` ，所以需要在 `Map` 组件初始化完毕调用 `get` 方法后数据才可用
:::

### 参数

| 参数 | 描述                 | 类型                                         | 默认值 |
| ---- | -------------------- | -------------------------------------------- | ------ |
| cal  | 定位成功后的回调函数 | `(result: Ref<PointGeocoderResult>) => void` | -      |

### 引用

| 引用      | 描述                                                                                                                     | 类型                                      |
| --------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| isLoading | 是否在获取中                                                                                                             | `boolean`                                 |
| isEmpty   | 是否有解析结果                                                                                                           | `boolean`                                 |
| point     | 地址解析出来的坐标点                                                                                                     | `{ lng: number; lat: number; }`           |
| get       | 获取地址到坐标点方法，需要在`Map`组件`initd`事件触发后才可调用；参数 `address`表示要解析的地址，`city`表示地址所属的城市 | `(address: string, city: string) => void` |

## TS 类型定义参考

```ts
import { Ref } from 'vue'
import { Point } from './usePoint'
/**
 * 由地址解析坐标点
 */
export declare function useAddressGeocoder(cal: (point: Ref<Point>) => void): {
  get: (address: string, city: string) => void
  point: Ref<Point | undefined>
  isLoading: Ref<boolean>
  isEmpty: Ref<boolean>
}
```
