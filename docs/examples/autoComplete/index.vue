<template>
  <BMap :center="(point as Point)">
    <BAutoComplete style="width: 100%" @confirm="handleConfirm" />
    <BMarker :position="(point as Point)"></BMarker>
  </BMap>
</template>

<script setup lang="ts">
  import { BMap, BAutoComplete, BMarker, type Point, useAddressGeocoder } from 'vue3-baidu-map-gl'
  const { get, point } = useAddressGeocoder()
  function handleConfirm(e) {
    const value = e.item.value
    get(value.city || value.business, value.province + value.city + value.district + value.street + value.business)
  }
</script>

<style scoped></style>
