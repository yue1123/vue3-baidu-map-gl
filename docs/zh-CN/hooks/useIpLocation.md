# useIpLocation <Badge type="tip" text="^0.0.33" />

用于获取用户所在的城市位置信息。(根据用户 IP 自动定位到城市)

```ts
import { useIpLocation } from 'vue3-baidu-map-gl'
```

## 示例

:::demo
hooks/useIpLocation
:::

## 用法

```ts
const { get, location, isLoading } = useIpLocation(cal)
```

:::tip
该 hooks 依赖于 `BMapGL` ，所以需要在 `Map` 组件初始化完毕调用 `get` 方法后数据才可用
:::

### 参数

| 参数 | 描述                 | 类型                                | 默认值 |
| ---- | -------------------- | ----------------------------------- | ------ |
| cal  | 定位成功后的回调函数 | `(location: Ref<Location>) => void` | -      |

### 返回值

| 返回值    | 描述                                                   | 类型                                         |
| --------- | ------------------------------------------------------ | -------------------------------------------- |
| isLoading | 是否在获取中                                           | `boolean`                                    |
| location  | 定位信息                                               | `{ point: Point code: number name: string }` |
| get       | 获取定位方法，需要在`Map`组件`initd`事件触发后才可调用 | `() => void`                                 |

## TS 类型定义参考

```ts
import { Ref } from 'vue'
import { type Point } from 'vue3-baidu-map-gl'
interface Location {
  point: Point
  code: number
  name: string
}
/**
 * ip定位
 */
export declare function useIpLocation(cal?: (location: Ref<Location>) => void): {
  location: Ref<Location>
  isLoading: Ref<boolean>
  get: () => void
}
```
