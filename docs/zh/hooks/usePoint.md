# useAreaBoundary

通过该 hooks 可获取一个地图实例点(BMapGL.Point)。

:::tip
该 hooks 依赖于 `BMapGL` ，所以需要再 `Map` 组件初始化完毕调用 `set` 方法后数据才可用
:::

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

## 类型定义

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
   * BMapGL.Point 实例
   */
  point: Ref<BMapGL.Point | null>
  /**
   * 设置实例点坐标
   */
  set: ({ lng, lat }: { lng: number; lat: number }) => void
}
```
