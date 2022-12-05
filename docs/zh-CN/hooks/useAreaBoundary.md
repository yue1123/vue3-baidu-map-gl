# useAreaBoundary

通过该 hooks 可获取行政区域的边界。

```ts
import { useAreaBoundary } from 'vue3-baidu-map-gl'
```

## 示例

:::demo 结合 [`Polygon`](../components/overlay/polygon) 组件, 并通过指定 `props.isBoundary` 为 `true` 实现行政区域显示效果
overlay/polygon/boundaries
:::

## 用法

```ts
const { isLoading, boundaries, get } = useAreaBoundary(cal)
```

:::tip
该 hooks 依赖于 `BMapGL` ，所以需要在 `Map` 组件初始化完毕调用 `get` 方法后数据才可用
:::

### 参数

| 参数 | 描述                         | 类型                             | 默认值 |
| ---- | ---------------------------- | -------------------------------- | ------ |
| cal  | 获取行政区域成功后的回调函数 | `(boundaries: string[]) => void` | -      |

### 引用

| 引用       | 描述                                              | 类型                 |
| ---------- | ------------------------------------------------- | -------------------- |
| isLoading  | 是否加载中                                        | `boolean`            |
| boundaries | 区域边界数据，默认为空数组，`get`方法调用后才可用 | `Ref<string[]>`      |
| get        | 获取指定区域边界方法                              | `({string}) => void` |

## 代码示例

<!-- prettier-ignore -->
```html
<Map @initd="handleInitd"></Map>

<script setup lang="ts">
  import { useAreaBoundary } from 'vue3-baidu-map-gl'

  const { isLoading, boundaries, get } = useAreaBoundary()

  function handleInitd() {
    get('北京市')
  }
</script>
```

## TS 类型定义参考

```ts
import { Ref } from 'vue'
export declare type AreaBoundary = string[]
/**
 * 获取地图区域边界
 * @param cal 获取成功后的回调函数
 * @returns { isLoading, boundaries, get }
 */
export declare function useAreaBoundary(cal?: (boundaries: Ref<AreaBoundary>) => void): {
  /**
   * 是否加载中
   */
  isLoading: Ref<boolean>
  /**
   * 区域边界数据
   */
  boundaries: Ref<string[]>
  /**
   * 获取指定区域边界
   * @param {string} area 区域名
   * @example get('北京市')
   */
  get: (area: string) => void
}
```
