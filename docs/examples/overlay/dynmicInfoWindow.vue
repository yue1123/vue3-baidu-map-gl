<template>
  <BMap enableScrollWheelZoom v-bind="$attrs" :center="{ lat: 39.915185, lng: 116.400901 }" :zoom="16">
    <BMarker
      v-for="(item, index) in markers"
      :position="item.position"
      :icon="`blue${index + 1 as 1 | 2}`"
      @click="() => handleClick(item)"
      enableClicking
    />
    <BInfoWindow
      v-model:show="show"
      :position="position"
      :title="title"
      enableAutoPan
      enableCloseOnClick
      :offset="{
        x: 0,
        y: -10
      }"
    />
  </BMap>
</template>

<script lang="ts" setup>
  import { ref, type UnwrapRef } from 'vue'
  import { BMap, BMarker, BInfoWindow } from 'vue3-baidu-map-gl'
  let markers = ref([
    {
      position: { lat: 39.915185, lng: 116.400101 },
      title: '地址一'
    },
    {
      position: { lat: 39.915185, lng: 116.400901 },
      title: '地址二'
    }
  ])
  const title = ref(markers.value[0].title)
  const position = ref(markers.value[0].position)
  const show = ref<boolean>(true)
  function handleClick(item: UnwrapRef<typeof markers>[0]) {
    position.value = item.position
    title.value = item.title
    show.value = true
  }
</script>
