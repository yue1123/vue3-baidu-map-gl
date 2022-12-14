# useBrowserLocation <Badge type="tip" text="^0.0.33" />

用于获取用户所在的城市位置信息(根据浏览器原生定位或者结合安卓定位 SDK 辅助定位)，相比[Ip 定位](./useIpLocation)获取的信息更丰富，但稳定性并不高，有时候很精准，有时候飘半个中国。

```ts
import { useBrowserLocation } from 'vue3-baidu-map-gl'
```

:::warning 注意

1. 由于 Chrome、iOS10 以上系统等已不再支持非安全域的浏览器定位请求，为保证定位成功率和精度，请尽快升级您的站点到 HTTPS。
2. iOS15 系统浏览器默认关闭位置请求，需要用户设置手机为允许/询问后方可获取精确的定位,定位权限的开启方式请参见 iOS15 定位问题。
3. 由于浏览器原生定位成功率并不高，可以尝试 [Ip 定位](./useIpLocation) 和 [安卓 SDK 定位](https://lbsyun.baidu.com/index.php?title=android-locsdk/guide/addition-func/assistant-h5) 进行辅助，如果定位精准在城市级别，可联系百度地图提供 ak 以提高定位精准度。

:::

## 示例

:::demo
hooks/useBrowserLocation
:::

## 用法

```ts
const { get, location, isLoading, isError, status } = useBrowserLocation(options, cal)
```

:::tip
该 hooks 依赖于 `BMapGL` ，所以需要在 `Map` 组件初始化完毕调用 `get` 方法后数据才可用
:::

### 参数

| 参数    | 描述                 | 类型                                                      | 默认值 |
| ------- | -------------------- | --------------------------------------------------------- | ------ |
| options | 浏览器定位配置项     | [`UseBrowserLocationOptions`](#usebrowserlocationoptions) | -      |
| cal     | 定位成功后的回调函数 | `(location: Ref<Location>) => void`                       | -      |

#### UseBrowserLocationOptions

| 属性               | 描述                                                                                                                                                     | 类型      | 默认值    |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------- |
| enableSDKLocation  | 是否启用安卓定位 SDK 辅助定位，适用于安卓 WebView 页面，[详见](https://lbsyun.baidu.com/index.php?title=android-locsdk/guide/addition-func/assistant-h5) | `boolean` | `false`   |
| enableHighAccuracy | 是否要求浏览器获取最佳效果，同[浏览器定位](https://developer.mozilla.org/zh-CN-CN/docs/Web/API/Geolocation/getCurrentPosition)接口参数                   | `boolean` | `false`   |
| timeout            | 超时时间                                                                                                                                                 | `number`  | `10000`   |
| maximumAge         | 允许返回指定事件内的缓存结果，单位为毫秒。如果为`0`，则每次请求都获取最新的定位结果。默认为`10`分钟                                                      | `number`  | `600,000` |

### 引用

| 引用      | 描述                                                   | 类型                    |
| --------- | ------------------------------------------------------ | ----------------------- |
| isLoading | 是否在获取中                                           | `boolean`               |
| location  | 定位信息                                               | [`Location`](#location) |
| get       | 获取定位方法，需要在`Map`组件`initd`事件触发后才可调用 | `() => void`            |
| isError   | 是否定位出错                                           | `boolean`               |
| status    | 定位状态                                               | [`Status`](#status)     |

#### Location

| 属性     | 描述     | 类型                          |
| -------- | -------- | ----------------------------- |
| accuracy | 定位精度 | `number`                      |
| point    | 经纬度点 | `{ lng: number lat: number }` |
| address  | 定位地址 | [`Address`](#address)         |

#### Status

| status                   | 描述                 |
| ------------------------ | -------------------- |
| BMAP_STATUS_SUCCESS      | 定位成功             |
| ERR_POSITION_TIMEOUT     | 定位超时             |
| ERR_POSITION_UNAVAILABLE | 定位不可用           |
| ERR_PERMISSION_DENIED    | 没有权限，定位被拒绝 |

#### Address

| 属性          | 描述      | 类型     |
| ------------- | --------- | -------- |
| country       | 国家      | `string` |
| city          | 城市      | `string` |
| city_code     | 城市 code | `string` |
| district      | 行政区    | `string` |
| province      | 省份      | `string` |
| street        | 街道      | `string` |
| street_number | 城市 code | `string` |

## TS 类型定义参考

```ts
import { Ref } from 'vue'
import { type Point } from 'vue3-baidu-map-gl'

interface UseBrowserLocationOptions {
  /**
   * 是否开启SDK辅助定位，仅当使用环境为移动web混合开发，且开启了定位sdk辅助定位功能后生效
   */
  enableSDKLocation?: boolean
  /**
   * 是否要求浏览器获取最佳效果，同浏览器定位接口参数。默认为false
   */
  enableHighAccuracy?: boolean
  /**
   * 超时事件，单位为毫秒。默认为10秒
   */
  timeout?: number
  /**
   * 允许返回指定事件内的缓存结果，单位为毫秒。如果为0，则每次请求都获取最新的定位结果。默认为10分钟
   */
  maximumAge?: number
  /**
   * 是否开启SDK辅助定位
   */
  SDKLocation?: boolean
}
declare type Status =
  | 'BMAP_STATUS_SUCCESS'
  | 'ERR_PERMISSION_DENIED'
  | 'ERR_POSITION_UNAVAILABLE'
  | 'ERR_POSITION_TIMEOUT'
interface Location {
  accuracy: number
  point: Point
  address: {
    country: string
    city: string
    city_code: string
    district: string
    province: string
    street: string
    street_number: string
  }
}
export declare function useBrowserLocation(
  options?: UseBrowserLocationOptions,
  cal?: (location: Ref<Location>) => void
): {
  get: () => void
  isLoading: Ref<boolean>
  isError: Ref<boolean>
  status: Ref<Status | undefined>
  location: Ref<Location>
}
```
