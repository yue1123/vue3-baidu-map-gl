<template>
  <div>
    选择地址解析:
    <select class="mySelect" v-model="currentAddress">
      <option v-for="item in addressList" :value="item">{{ item.address }}</option>
    </select>
    <div class="state" v-if="!isLoading && !isEmpty">
      <h5>解析结果:</h5>
      <span>纬度 - {{ point?.lat }}</span>
      <span>经度 - {{ point?.lng }}</span>
    </div>
    <div class="state" v-else-if="isEmpty">没有解析到结果 ！</div>
    <div class="state" v-else>解析中...</div>
    <br />
    <BMap v-bind="$attrs" ref="map" :center="point" @initd="handleInitd">
      <template v-if="!isLoading && !isEmpty">
        <BMarker :position="point"></BMarker>
      </template>
    </BMap>
  </div>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { useAddressGeocoder, Point } from 'vue3-baidu-map-gl'
  const map = ref()
  const addressList = ref([
    {
      address: '北京市海淀区上地10街',
      city: '北京市'
    },
    {
      address: '北京市海淀区海淀三山五园绿道',
      city: '北京市'
    },
    {
      address: '北京市东城区天安门东通道',
      city: '北京市'
    }
  ])
  const currentAddress = ref(addressList.value[0])

  watch(
    () => currentAddress,
    (n) => {
      get(n.value.address, n.value.city)
    },
    {
      deep: true
    }
  )
  const { get, point, isLoading, isEmpty } = useAddressGeocoder<Point>(() => {
    map.value.resetCenter()
  })

  function handleInitd() {
    get(currentAddress.value.address, currentAddress.value.city)
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
