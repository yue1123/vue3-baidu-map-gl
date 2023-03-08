<template>
  <div>
    <BMap
      v-bind="$attrs"
      :center="{
        lng: 116.308301,
        lat: 40.050566
      }"
      :zoom="16"
      :plugins="['TrackAnimation']"
      ref="map"
      @pluginReady="handleInitd"
    />
    <div class="state">
      <span>动画状态: {{ status !== 'INITIAL' ? '已开始' : '未开始' }}</span>
      <span>播放状态: {{ status === 'INITIAL' || status === 'STOPPING' ? '未播放' : '播放中' }}</span>
    </div>
    <button class="myButton no-m-b" type="button" @click="start">开始</button>
    <button class="myButton no-m-b" type="button" @click="stop">暂停</button>
    <button class="myButton no-m-b" type="button" @click="proceed">继续</button>
    <button class="myButton no-m-b" type="button" @click="cancel">取消</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useTrackAnimation } from 'vue3-baidu-map-gl'
  const map = ref(null)
  const { setPath, start, cancel, stop, proceed, status } = useTrackAnimation(map, {
    duration: 10000,
    delay: 0
  })
  const path = [
    {
      lng: 116.297611,
      lat: 40.047363
    },
    {
      lng: 116.302839,
      lat: 40.048219
    },
    {
      lng: 116.308301,
      lat: 40.050566
    },
    {
      lng: 116.305732,
      lat: 40.054957
    },
    {
      lng: 116.304754,
      lat: 40.057953
    },
    {
      lng: 116.306487,
      lat: 40.058312
    },
    {
      lng: 116.307223,
      lat: 40.056379
    }
  ]
  function handleInitd() {
    setPath(path)
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
