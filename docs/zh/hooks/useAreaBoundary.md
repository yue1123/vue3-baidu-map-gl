# useAreaBoundary
通过该 hooks 可获取行政区域的边界。

## 代码示例

```html
<Map @initd="handleInitd"></Map>

<script setup lang="ts">
  import { useAreaBoundary } from 'vue3-baidu-map-gl'

  const { isLoading, boundaries, get } = useAreaBoundary()  

  function handleInitd(){
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

  function handleInitd(){
    get('北京市')
  }
</script>
```


## 类型定义
```ts
import { Ref } from 'vue';
export declare type AreaBoundary = string[];
export declare function useAreaBoundary(cal?: (boundaries: Ref<AreaBoundary>) => void): {
    // 是否加载中
    isLoading: Ref<boolean>;
    // 区域边界数据
    boundaries: Ref<AreaBoundary>;
    // 获取区域边界方法
    get: (area: string) => void;
};
```