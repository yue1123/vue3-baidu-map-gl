<template>
  <BMap v-bind="$attrs" :zoom="16" :heading="64.5" :tilt="73" enableScrollWheelZoom>
    <BMarker3d
      :position="point1"
      :height="1200"
      :size="200"
      fillColor="#454399"
      :fillOpacity="0.5"
      shape="BMAP_SHAPE_CIRCLE"
    />
  </BMap>
</template>

<script setup lang="ts">
  const point1 = { lat: 39.915185, lng: 116.400901 }
</script>
