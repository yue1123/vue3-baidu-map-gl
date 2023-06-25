<template>
  <BMap enableScrollWheelZoom v-bind="$attrs" :center="{ lat: 39.915185, lng: 116.400901 }" :zoom="16">
    <BMarker
      v-for="item in markers"
      :position="item.position"
      icon="blue1"
      @click="() => handleClick(item)"
      enableClicking
    />
    <BInfoWindow :show="true" :position="position" :title="title" enableAutoPan enableCloseOnClick />
  </BMap>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { BMap, BMarker, BInfoWindow } from 'vue3-baidu-map-gl'
  let markers = ref([
    {
      position: { lat: 39.915185, lng: 116.400901 },
      title: '地址一'
    },
    {
      position: { lat: 39.915185, lng: 116.400101 },
      title: '地址二'
    }
  ])
  const title = ref(markers.value[0].title)
  const position = ref(markers.value[0].position)
  function handleClick(item) {
    position.value = item.position
    title.value = item.title
  }
</script>
