# 带高度的点
在地图上绘制带高度的点覆盖物

```ts
import { Marker3d } from 'vue3-baidu-map-gl'
```

## 组件示例

<div>
<Map
  :minZoom="3"
  :zoom='16'
  :heading="64.5"
  :tilt="73"
  height="400px"
  enableScrollWheelZoom
>
  <Marker3d
			:position="{ lat: 39.915185, lng: 116.400901 }"
      :height='1800'
      :size="200"
			shape='BMAP_SHAPE_CIRCLE'
      :icon="{
        imageUrl: '/logo.png',
        imageSize: {
          width: 200,
          height: 200
        },
      }"
			enableDragging
		/>
</Map>
</div>

<script lang="ts" setup>
  import {ref} from 'vue'
</script>