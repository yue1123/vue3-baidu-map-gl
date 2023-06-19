<template>
  显示区域:
  <select class="mySelect" name="" id="" v-model="showRegion">
    <option value="outside">局部影藏</option>
    <option value="inside">局部显示</option>
  </select>
  <BMap
    v-bind="$attrs"
    :center="center"
    :zoom="16"
    @initd="handleInitd"
    enable-scroll-wheel-zoom
    :backgroundColor="[192, 214, 213, 100]"
  >
    <BMarker :position="center"></BMarker>
    <BMapMask :path="path" :show-region="showRegion" isPoiMask isBuildingMask isMapMask></BMapMask>
  </BMap>
</template>

<script setup lang="ts">
  import { ref, shallowRef, triggerRef } from 'vue'
  import { BMap, BMarker, BMapMask, Point, type MapMaskShowRegion } from 'vue3-baidu-map-gl'
  const path = shallowRef<Point[]>([])
  const center = ref<BMapGL.Point>()
  const showRegion = ref<MapMaskShowRegion>('outside')
  function handleInitd() {
    center.value = new BMapGL.Point(116.31951444701689, 40.03514188328609)
    path.value = [
      new BMapGL.Point(116.31951444701689, 40.03514188328609),
      new BMapGL.Point(116.31914525270483, 40.03627653457813),
      new BMapGL.Point(116.31887119442595, 40.03712933826661),
      new BMapGL.Point(116.31862381043088, 40.037753816069426),
      new BMapGL.Point(116.31846085080458, 40.03827800880047),
      new BMapGL.Point(116.31800011574751, 40.03960034324275),
      new BMapGL.Point(116.3176890313816, 40.0403207681881),
      new BMapGL.Point(116.31747304954207, 40.04023658043798),
      new BMapGL.Point(116.31689403073578, 40.040120567399384),
      new BMapGL.Point(116.31419172285828, 40.03965310472413),
      new BMapGL.Point(116.31437612880998, 40.03919415930771),
      new BMapGL.Point(116.31462581129936, 40.03876546296739),
      new BMapGL.Point(116.31525321239126, 40.037930670509574),
      new BMapGL.Point(116.315488510584, 40.0377117230615),
      new BMapGL.Point(116.31601289759325, 40.037228304952336),
      new BMapGL.Point(116.31692309046987, 40.03662665953143),
      new BMapGL.Point(116.31817328272946, 40.03584288930924),
      new BMapGL.Point(116.31924096994166, 40.03521921152976)
    ]
    triggerRef(path)
  }
</script>
