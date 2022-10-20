# Copyright 版权控件
地图3D控件，可以控制地图的旋转、倾斜，默认位于地图右下角

```ts
import { Copyright } from 'vue3-baidu-map-gl'
```



## 组件示例
多个相同位置版权控件会自动排列，避免重叠

<div>
<Map
  height="400px"
>
  <Copyright anchor="BMAP_ANCHOR_TOP_RIGHT" v-if="show">
    <div style="display: flex; align-items:flex-end;">
      <img width='40' src="https://s1.ax1x.com/2022/09/29/xmTpcT.png" alt="">
      @我是自定义版权控件呀
    </div>
  </Copyright>
  <Copyright anchor="BMAP_ANCHOR_BOTTOM_RIGHT">
      <h3>动态内容1{{count}}</h3>
  </Copyright>
  <Copyright anchor="BMAP_ANCHOR_BOTTOM_RIGHT">
      <h3>动态内容2{{count}}</h3>
  </Copyright>
</Map>
<button class="myButton no-m-b" @click="toggle">{{ show ? '隐藏': '显示' }}右上角版权</button>  
</div>

<script setup lang="ts">
import {ref} from 'vue'
const count = ref<number>(1)
const show = ref<boolean>(true)
function toggle(){     
  show.value = !show.value
} 
if(typeof window !== 'undefined'){
  setInterval(() => {
    count.value ++ 
  }, 1000); 
}
</script>


::: details 点击查看代码
```html
<Map>
  <Copyright anchor="BMAP_ANCHOR_TOP_RIGHT" v-if="show">
    <div style="display: flex; align-items:flex-end;">
      <img width='40' src="https://s1.ax1x.com/2022/09/29/xmTpcT.png" alt="">
      @我是自定义版权控件呀
    </div>
  </Copyright>
  <Copyright anchor="BMAP_ANCHOR_BOTTOM_RIGHT">
      <h3>动态内容1{{count}}</h3>
  </Copyright>
  <Copyright anchor="BMAP_ANCHOR_BOTTOM_RIGHT">
      <h3>动态内容2{{count}}</h3>
  </Copyright>
</Map>
<button @click="toggle">{{ show ? '隐藏': '显示' }}右上角版权</button>  

<script setup lang="ts">
import { Map, Copyright } from 'vue3-baidu-map-gl'
import {ref} from 'vue'
const count = ref<number>(1)
const show = ref<boolean>(true)
function toggle(){     
  show.value = !show.value
} 
setInterval(() => {
  count.value ++ 
}, 1000); 
</script>
```
:::

::: warning
如果动态内容中有图片会导致闪烁，建议将图片和文字拆分成两个自定义版权
:::

## 静态组件 Props
| 参数   | 说明           | 类型                      | 可选值            | 默认值                    |
| ------ | -------------- | ------------------------- | ----------------- | ------------------------- |
| anchor | 控件的停靠位置 | `string`                  | [anchor](#anchor) | `BMAP_ANCHOR_BOTTOM_LEFT` |
| offset | 控件的偏移值   | `{x: number, y: number }` |                   | `{ x: 83, y: 18 }`        |


## anchor
| 值                       | 说明 |
| ------------------------ | ---- |
| BMAP_ANCHOR_TOP_LEFT     | 左上 |
| BMAP_ANCHOR_TOP_RIGHT    | 右上 |
| BMAP_ANCHOR_BOTTOM_LEFT  | 左下 |
| BMAP_ANCHOR_BOTTOM_RIGHT | 右下 |

