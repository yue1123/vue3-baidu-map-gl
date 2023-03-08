<template>
  <div>
    <div class="state" v-if="!isLoading && !isError">
      <h5>定位:</h5>
      <span>
        城市 - {{ location.address?.province }}-{{ location.address?.city }}-{{ location.address?.district }}-{{
          location.address?.street
        }}
      </span>
      <span>纬度 - {{ location.point?.lat }}</span>
      <span>经度 - {{ location.point?.lng }}</span>
      <br />
      <span>定位精度 - {{ location.accuracy }}m</span>
    </div>
    <div class="state" v-else-if="isError">出错了，{{ status }}</div>
    <div class="state" v-else>定位中...</div>
    <button v-if="!isLoading" class="myButton" @click="get">重新获取</button>
    <BMap v-bind="$attrs" enableScrollWheelZoom ref="map" @initd="get" :center="location.point || undefined">
      <template v-if="!isLoading">
        <BMarker :position="location.point"></BMarker>
        <BCircle
          strokeStyle="solid"
          strokeColor="#0099ff"
          :strokeOpacity="0.8"
          fillColor="#0099ff"
          :fillOpacity="0.5"
          :center="location.point"
          :radius="location.accuracy"
        />
      </template>
    </BMap>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useBrowserLocation } from 'vue3-baidu-map-gl'
  const map = ref()
  const { get, location, isLoading, isError, status } = useBrowserLocation(null, () => {
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
