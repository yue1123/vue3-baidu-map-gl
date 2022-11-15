# useAreaBoundary

通过该 hooks 可获取行政区域的边界。

:::tip
该 hooks 依赖于 `BMapGL` ，所以需要再 `Map` 组件初始化完毕调用 `get` 方法后数据才可用
:::

## 用法

```ts
const { isLoading, boundaries, get } = useAreaBoundary()
```

### 参数

无

### 引用

| 引用       | 描述                                              | 类型                 |
| ---------- | ------------------------------------------------- | -------------------- |
| isLoading  | 是否加载中                                        | `boolean`            |
| boundaries | 区域边界数据，默认为空数组，`get`方法调用后才可用 | `string[]`           |
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

自定义回调

<!-- prettier-ignore -->
```html
<Map @initd="handleInitd"></Map>

<script setup lang="ts">
  import { useAreaBoundary } from 'vue3-baidu-map-gl'

  const { isLoading, boundaries, get } = useAreaBoundary(() => {
    // do somethings
  })

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
