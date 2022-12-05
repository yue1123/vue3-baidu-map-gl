<template>
  <Map
    v-bind="$attrs"
    :zoom="10"
    :tilt="50"
    enableScrollWheelZoom
    mapStyleId="980161f3645989feac25a0da15da4178"
    @initd="handleInitd"
  >
    <Prism
      isBoundary
      :path="pathPoints"
      :autoCenter="false"
      :topFillOpacity="topFillOpacity"
      :sideFillOpacity="0.9"
      :altitude="5000"
      sideFillColor="#5679ea"
      topFillColor="#5679ea"
      @mouseover="handleMouseover"
      @mouseout="handleMouseout"
    />
  </Map>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useAreaBoundary } from 'vue3-baidu-map-gl'
  const topFillOpacity = ref<number>(0.5)
  const area = ref<string>('北京市')
  const { boundaries: pathPoints, get } = useAreaBoundary()

  function handleInitd() {
    get(area.value)
  }

  function handleMouseover() {
    topFillOpacity.value = 1
  }

  function handleMouseout() {
    topFillOpacity.value = 0.5
  }
</script>
