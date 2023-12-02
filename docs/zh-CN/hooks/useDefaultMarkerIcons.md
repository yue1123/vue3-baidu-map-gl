# useDefaultMarkerIcons

通过该 hooks 可获取一些内置的地图图标(BMapGL.Icon)。

```ts
import { useDefaultMarkerIcons } from 'vue3-baidu-map-gl'
```

> 参考: [marker 图标可选值](/zh-CN/components/overlay/marker#默认图标可选值)

## 用法

```ts
const icons = useDefaultMarkerIcons()
```

:::tip
该 hooks 依赖于 `BMapGL` ，所以需要在 `Map` 组件初始化完毕调用 `set` 方法后数据才可用
:::

### 参数

无

### 返回值

| 返回值 | 描述                                    | 类型                                      |
| ------ | --------------------------------------- | ----------------------------------------- |
| icons  | 所有内置的 `BMapGL.Icon` 实例对象键值对 | `Record<DefaultMarkerIcons, BMapGL.Icon>` |

## 代码示例

```vue
<template>
  <Map @initd="handleInitd"></Map>
</template>

<script setup lang="ts">
  import { useAreaBoundary } from 'vue3-baidu-map-gl'

  function handleInitd() {
    const icons = useDefaultMarkerIcons()
    // ...
  }
</script>
```

## TS 类型定义参考

```ts
export declare type DefaultMarkerIcons =
  | 'simple_red'
  | 'simple_blue'
  | 'loc_red'
  | 'loc_blue'
  | 'start'
  | 'end'
  | 'location'
  | 'red1'
  | 'red2'
  | 'red3'
  | 'red4'
  | 'red5'
  | 'red6'
  | 'red7'
  | 'red8'
  | 'red9'
  | 'red10'
  | 'blue1'
  | 'blue2'
  | 'blue3'
  | 'blue4'
  | 'blue5'
  | 'blue6'
  | 'blue7'
  | 'blue8'
  | 'blue9'
  | 'blue10'
export declare function useDefaultMarkerIcons(): Record<DefaultMarkerIcons, BMapGL.Icon>
```
