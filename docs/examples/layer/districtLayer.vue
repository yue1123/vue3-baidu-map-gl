<template>
  <BMap enable-scroll-wheel-zoom :zoom="9">
    <BDistrictLayer
      @mouseover="handleMouseover"
      @mouseout="handleMouseout"
      viewport
      :kind="DistrictType['AREA']"
      name="北京市"
    />
  </BMap>
</template>

<script lang="ts" setup>
  import { DistrictType } from 'vue3-baidu-map-gl'
  function handleMouseover(e) {
    e.currentTarget.setFillColor('#9169db')
  }

  function handleMouseout(e) {
    e.currentTarget.setFillColor(e.currentTarget.style.fillColor)
  }
</script>
