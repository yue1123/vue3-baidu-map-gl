<template>
  <div>
    <BMap
      v-bind="$attrs"
      enableScrollWheelZoom
      :zoom="13"
      :center="{ lng: 116.328749, lat: 40.026922 }"
      @initd="handleInitd"
    >
      <BControl class="point-list" :offset="{ x: 10, y: 10 }">
        <ul>
          <li v-for="(item, index) in points" :key="index">
            <div>
              <span>{{ index + 1 }}.</span>
              <span>纬度 - {{ item.lat }}</span>
              <span>经度 - {{ item.lng }}</span>
            </div>
          </li>
        </ul>
      </BControl>
      <template v-if="!isLoading">
        <template v-for="(item, index) in result">
          <BMarker :position="item.point"></BMarker>
          <BLabel
            style="color: #333; font-size: 9px"
            :position="item.point"
            :content="`${index}. 地址: ${item.address} 所属商圈:${item.business} 最匹配地点: ${
              item?.surroundingPois[0]?.title || '无'
            }`"
          ></BLabel>
        </template>
      </template>
    </BMap>
  </div>
</template>

<script lang="ts" setup>
  import { usePointGeocoder, PointGeocoderResult } from 'vue3-baidu-map-gl'
  const points = [
    { lng: 116.307852, lat: 40.057031 },
    { lng: 116.313082, lat: 40.047674 },
    { lng: 116.328749, lat: 40.026922 },
    { lng: 116.347571, lat: 39.988698 },
    { lng: 116.316163, lat: 39.997753 },
    { lng: 116.345867, lat: 39.998333 },
    { lng: 116.403472, lat: 39.999411 },
    { lng: 116.307901, lat: 40.05901 }
  ]
  const { get, result, isLoading } = usePointGeocoder<BPointGeocoderResult[]>()
  function handleInitd() {
    get(points)
  }
</script>

<style>
  .point-list {
    color: #333;
    background-color: #fff;
    font-size: 10px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 15%) 1px 2px 1px;
  }
  .point-list ul {
    margin: 0;
    padding: 0;
  }
  .point-list li {
    list-style: none;
    border-bottom: 1px solid #f1f1f1;
  }
  .point-list span {
    margin-right: 15px;
  }
</style>
