<template>
  <div>
    <Map v-bind="$attrs" enableScrollWheelZoom ref="map" :center="point" @initd="handleInitd" @click="handleClick">
      <template v-if="!isLoading && !isEmpty">
        <Marker :position="point"></Marker>
        <Label
          style="color: #333; font-size: 9px"
          :position="result.point"
          :content="`地址: ${result?.address} 所属商圈:${result?.business} 最匹配地点: ${
            result?.surroundingPois[0]?.title || '无'
          }`"
        />
      </template>
    </Map>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { usePointGeocoder, PointGeocoderResult } from 'vue3-baidu-map-gl'
  const map = ref()
  const { get, result, isLoading, isEmpty } = usePointGeocoder<PointGeocoderResult>()
  const point = ref({ lng: 116.30793520652882, lat: 40.05861561613348 })
  const markerPoint = point

  function handleInitd() {
    get(point.value)
  }
  function handleClick(e) {
    markerPoint.value = e.latlng
    get(e.latlng)
  }
</script>

<style>
  .state {
    margin-top: 15px;
  }
  .state span {
    margin-right: 25px;
  }
</style>
