# usePoint

通过该 hooks 可获取一个地图实例点 (BMapGL.Point)。

```ts
import { usePoint } from 'vue3-baidu-map-gl'
```

## 用法

```ts
const { point, set } = usePoint()
```

:::tip
该 hooks 依赖于 `BMapGL`，所以需要在 `Map` 组件初始化完毕调用 `set` 方法后数据才可用
:::

### 参数

无

### 返回值

| 返回值 | 描述                                                            | 类型                                     |
| ------ | --------------------------------------------------------------- | ---------------------------------------- |
| point  | `BMapGL.Point` 实例对象，默认为 `null`，调用 `set` 方法后才可用 | `BMapGL.Point`                           |
| set    | 设置实例点坐标方法，需要在`Map`组件`initd`事件触发后才可调用    | `({ lng: number; lat: number }) => void` |

## 代码示例

<!-- prettier-ignore -->
```html
<Map @initd="handleInitd"></Map>

<script setup lang="ts">
  import { usePoint } from 'vue3-baidu-map-gl'

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
import { Point } from '../utils'
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
  set: ({ lng, lat }: Point) => void
}
```
