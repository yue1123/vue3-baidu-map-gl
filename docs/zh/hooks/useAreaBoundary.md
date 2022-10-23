# useAreaBoundary

通过该 hooks 可获取行政区域的边界。

## 代码示例

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

## 类型定义

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
