<template>
  <Map v-bind="$attrs" :minZoom="3" :zoom="zoom" enableScrollWheelZoom @initd="handleInitd">
    <Control
      style="
        border-radius: 4px;
        box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
        color: #666;
        background: #fff;
        padding: 10px;
      "
      :offset="{ x: 15, y: 15 }"
    >
      <span>地区：</span>
      <select class="mySelect light no-m-b no-m-t" v-model="area">
        <option value="北京市">北京市</option>
        <option value="顺义区">北京市顺义区</option>
        <option value="四川">四川</option>
        <option value="成都">成都</option>
      </select>
    </Control>
    <Polygon :key="area" isBoundary :path="pathPoints" stroke-color="#000" fillColor="blue" :stroke-weight="1" />
  </Map>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useAreaBoundary } from 'vue3-baidu-map-gl'
  const zoom = ref<number>(11)
  const area = ref<string>('顺义区')
  const areaZoomMap = {
    北京市: 9,
    顺义区: 11,
    四川: 7,
    成都: 9
  }

  const { boundaries: pathPoints, get } = useAreaBoundary(() => {
    zoom.value = areaZoomMap[area.value]
  })

  function handleInitd() {
    get(area.value)
  }
  watch(() => area.value, get)
</script>
