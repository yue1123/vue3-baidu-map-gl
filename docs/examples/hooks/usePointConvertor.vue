<template>
  <BMap v-bind="$attrs" @initd="handleInitd" :center="googlePoint">
    <template v-if="!isLoading && !isError">
      <template v-for="(point) in result">
        <BMarker :position="point"></BMarker>
        <BLabel :position="point" style="color: #333; font-size: 9px" content="转换后的百度标注（正确）"></BLabel>
      </template>
    </template>
    <BMarker :position="googlePoint"></BMarker>
    <BLabel :position="googlePoint" style="color: #333; font-size: 9px" content="未转换的谷歌标注（错误）"></BLabel>
  </BMap>
</template>

<script lang="ts" setup>
  import { CoordinatesFromType, CoordinatesToType, usePointConvertor } from 'vue3-baidu-map-gl'
  const { convert, result, isLoading, isError } = usePointConvertor()
  const googlePoint = { lng: 116.32715863448607, lat: 39.990912172420714 }
  function handleInitd() {
    convert([googlePoint], CoordinatesFromType['COORDINATES_GCJ02'], CoordinatesToType['COORDINATES_BD09'])
  }
</script>
