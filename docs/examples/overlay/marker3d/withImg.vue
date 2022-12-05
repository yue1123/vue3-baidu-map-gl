<template>
  <Map v-bind="$attrs" :zoom="16" :heading="64.5" :tilt="73" enableScrollWheelZoom>
    <Marker3d
      :position="point1"
      :height="1200"
      :size="200"
      shape="BMAP_SHAPE_CIRCLE"
      :icon="{
        imageUrl: 'https://cdn.jsdelivr.net/gh/yue1123/vue3-baidu-map-gl@0.0.21/docs/public/logo.png',
        imageSize: {
          width: 200,
          height: 200
        }
      }"
    />
    <Marker3d
      :position="point2"
      :height="800"
      :size="200"
      shape="BMAP_SHAPE_CIRCLE"
      :icon="{
        imageUrl: 'https://cdn.jsdelivr.net/gh/yue1123/vue3-baidu-map-gl@0.0.21/docs/public/logo.png',
        imageSize: {
          width: 200,
          height: 200
        }
      }"
    />
  </Map>
</template>

<script setup lang="ts">
  const point1 = { lat: 39.925185, lng: 116.400901 }
  const point2 = { lat: 39.915185, lng: 116.400901 }
</script>
