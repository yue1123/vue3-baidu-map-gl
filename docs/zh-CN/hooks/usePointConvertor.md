# usePointConvertor 坐标点转换

用于将其他坐标系的坐标转换为百度坐标。

```ts
import { usePointConvertor } from 'vue3-baidu-map-gl'
```

## 示例

:::demo 将谷歌坐标转换为百度坐标
hooks/usePointConvertor
:::

## 用法

```ts
const { result, convert, isLoading, isError, status } = usePointConvertor()
```

:::tip
该 hooks 依赖于 `BMapGL` ，所以需要在 `Map` 组件初始化完毕调用 `convert` 方法后数据才可用
:::

### 参数

无

### 返回值

| 返回值      | 描述                                                     | 类型                                                                                                                                    |
| --------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| result    | 目标坐标点数组                                           | `{ lng: number; lat: number }[]`                                                                                                        |
| isLoading | 是否加载中                                               | `boolean`                                                                                                                               |
| isError   | 是否出错                                                 | `boolean`                                                                                                                               |
| status    | 当前状态                                                 | [`UsePointConvertorStatus`](#usepointconvertorstatus)                                                                                   |
| convert   | 点坐标转换方法，需要在`Map`组件`initd`事件触发后才可调用 | `({ lng: number; lat: number }[], `[`CoordinatesFromType, `](#coordinatesfromtype) [`CoordinatesToType`](#coordinatestotype)`) => void` |

### CoordinatesFromType

原坐标类型

```ts
export enum CoordinatesFromType {
  /**
   *  WGS84坐标（GPS标准坐标）
   */
  'COORDINATES_WGS84' = 1,
  /**
   *  WGS84的平面墨卡托坐标（搜狗地图坐标）
   */
  'COORDINATES_WGS84_MC' = 2,
  /**
   * GCJ02坐标(火星坐标)，即高德地图、腾讯地图、谷歌坐标和MapABC等地图使用的坐标；
   */
  'COORDINATES_GCJ02' = 3,
  /**
   *  GCJ02的平面墨卡托坐标（火星坐标对应的墨卡托平面坐标）
   */
  'COORDINATES_GCJ02_MC' = 4,
  /**
   *  百度地图采用的经纬度坐标（bd09ll）
   */
  'COORDINATES_BD09' = 5,
  /**
   * 百度地图采用的墨卡托平面坐标（bd09mc）
   */
  'COORDINATES_BD09_MC' = 6,
  /**
   * 图吧地图坐标
   */
  'COORDINATES_MAPBAR' = 7,
  /**
   * 51地图坐标
   */
  'COORDINATES_51' = 8
}
```

### CoordinatesToType

目标坐标类型

```ts
export enum CoordinatesToType {
  /**
   * GCJ02坐标(火星坐标)，即高德地图、腾讯地图、谷歌坐标和MapABC等地图使用的坐标；
   */
  'COORDINATES_GCJ02' = 3,
  /**
   * 百度地图采用的经纬度坐标（bd09ll）
   */
  'COORDINATES_BD09' = 5,
  /**
   * 百度地图采用的墨卡托平面坐标（bd09mc）
   */
  'COORDINATES_BD09_MC' = 6
}
```

### UsePointConvertorStatus

:::warning 警告
当转换不被允许的坐标系，如：X→GPS，可能不会响应返回以下错误 code，会拒绝响应，浏览器直接报跨域请求
:::

| code | 描述                                                                       |
| ---- | -------------------------------------------------------------------------- |
| 0    | ok 正常 服务请求正常召回                                                   |
| 1    | 内部错误                                                                   |
| 4    | 转换失败 X→GPS 时必现，根据法律规定，不支持将任何类型的坐标转换为 GPS 坐标 |
| 21   | from 非法                                                                  |
| 22   | to 非法                                                                    |
| 24   | coords 格式非法                                                            |
| 25   | coords 个数非法，超过限制                                                  |
| 26   | 参数错误                                                                   |

## 代码示例

<!-- prettier-ignore -->
```html
<Map @initd="handleInitd"></Map>

<script setup lang="ts">
  import { useAreaBoundary } from 'vue3-baidu-map-gl'

  const { point, set } = usePoint()

  function handleInitd() {
    set({
      lng: 116.297611,
      lat: 40.047363
    })
  }
</script>
```

## TS 类型定义参考

```ts
import { Ref } from 'vue'
/**
 * 地图经纬度点
 */
export declare type Point = {
  lng: number
  lat: number
}
/**
 * 获取一个地图经纬度点实例
 */
export declare function usePoint(): {
  /**
   * BMapGL.Point 实例对象
   */
  point: Ref<BMapGL.Point | null>
  /**
   * 设置实例点坐标
   */
  set: ({ lng, lat }: { lng: number; lat: number }) => void
}
```
