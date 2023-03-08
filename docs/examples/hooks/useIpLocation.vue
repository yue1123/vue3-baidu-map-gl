<template>
  <div>
    <div class="state" v-if="!isLoading">
      <h5>定位结果:</h5>
      <span>城市 - {{ location.name }}</span>
      <span>纬度 - {{ location.point?.lat }}</span>
      <span>经度 - {{ location.point?.lng }}</span>
    </div>
    <div class="state" v-else>定位中...</div>
    <button v-if="!isLoading" class="myButton" @click="get">重新获取</button>
    <BMap v-bind="$attrs" enableScrollWheelZoom ref="map" :center="location.point || undefined" @initd="get">
      <template v-if="!isLoading">
        <BMarker :position="location.point"></BMarker>
      </template>
    </BMap>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useIpLocation } from 'vue3-baidu-map-gl'
  const map = ref()
  const { get, location, isLoading } = useIpLocation(() => {
    map.value.resetCenter()
  })
</script>

<style>
  .state {
    margin-top: 15px;
  }
  .state span {
    margin-right: 25px;
  }
</style>
