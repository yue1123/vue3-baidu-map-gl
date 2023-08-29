# useAddressGeocoder <Badge type="tip" text="^0.0.39" />

通过地址解析坐标点

```ts
import { useAddressGeocoder } from 'vue3-baidu-map-gl'
```

## 单个地址解析

使用地址字符串作为 `get` 方法参数解析单个地址
:::demo 通过下拉框切换地址解析坐标点
hooks/useAddressGeocoder/index
:::

:::tip
在 Ts 中使用单个解析地址时，使用泛型`Point`内部可推断`point`为可推断为`Point`，从而避免读取值时 ts 的报错。

```ts
import { Point } from 'vue3-baidu-map-gl'
const { point } = useAddressGeocoder<Point>()
```

:::

## 批量解析地址

使用地址字符串数组作为 `get` 方法参数批量解析地址
:::demo
hooks/useAddressGeocoder/batch
:::

:::tip
在 Ts 中使用批量解析地址时，使用泛型`Point[]`内部可推断`point`为可推断为`Point[]`，从而避免遍历时 ts 的报错。

```ts
import { Point } from 'vue3-baidu-map-gl'
const { point: points } = useAddressGeocoder<Point[]>()
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

| 参数 | 描述                 | 类型                                                          | 默认值 |
| ---- | -------------------- | ------------------------------------------------------------- | ------ |
| cal  | 定位成功后的回调函数 | `(point: Ref<Point \| Point[] \| null \| undefined>) => void` | -      |

### 返回值

| 返回值      | 描述                                                                                                                                                 | 类型                                                  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| isLoading | 是否在获取中                                                                                                                                         | `boolean`                                             |
| isEmpty   | 是否有解析结果。批量解析时，所有地址都未解析到正确坐标点，该值才为`false`                                                                            | `boolean`                                             |
| point     | 地址解析出来的坐标点。批量解析地址时，point 为数组。                                                                                                 | `Ref<Point \| Point[] \| null \| undefined>`          |
| get       | 获取地址到坐标点方法，需要在`Map`组件`initd`事件触发后才可调用；参数 `address`表示要解析的地址，可以传数组一次解析多个地址；`city`表示地址所属的城市 | `(address: string \| string[], city: string) => void` |

#### Point

```ts
type Point = { lng: number; lat: number }
```

## TS 类型定义参考

```ts
import { Ref } from 'vue'
import { type Point } from 'vue3-baidu-map-gl'

export declare type AddressGeocoderResult = Point | Point[]
/**
 * 由地址解析坐标点
 */
export declare function useAddressGeocoder<T extends AddressGeocoderResult = AddressGeocoderResult>(
  cal?: (point: Ref<T>) => void
): {
  get: (address: T extends Point ? string : string[], city: string) => void
  point: Ref<T | null | undefined>
  isLoading: Ref<boolean>
  isEmpty: Ref<boolean>
}
```
