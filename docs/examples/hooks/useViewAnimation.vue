<template>
  <div>
    <Map
      v-bind="$attrs"
      :center="{
        lng: 116.308301,
        lat: 40.050566
      }"
      :zoom="16"
      :plugins="['TrackAnimation']"
      ref="map"
      @initd="handleInitd"
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
  import { useViewAnimation, ViewAnimationKeyFrames } from 'vue3-baidu-map-gl'
  const map = ref(null)
  const { setKeyFrames, start, stop, proceed, cancel, status } = useViewAnimation(map, {
    duration: 10000,
    delay: 0,
    loop: 'INFINITE'
  })
  function handleInitd() {
    const keyFrames: ViewAnimationKeyFrames[] = [
      {
        center: { lng: 116.307092, lat: 40.054922 },
        zoom: 18,
        tilt: 50,
        heading: 0,
        percentage: 0
      },
      {
        center: { lng: 116.307631, lat: 40.055391 },
        zoom: 19,
        tilt: 70,
        heading: 0,
        percentage: 0.1
      },
      {
        center: { lng: 116.306858, lat: 40.057887 },
        zoom: 19,
        tilt: 70,
        heading: 0,
        percentage: 0.25
      },
      {
        center: { lng: 116.306858, lat: 40.057887 },
        zoom: 19,
        tilt: 70,
        heading: -90,
        percentage: 0.35
      },
      {
        center: { lng: 116.307904, lat: 40.058118 },
        zoom: 19,
        tilt: 70,
        heading: -90,
        percentage: 0.45
      },
      {
        center: { lng: 116.307904, lat: 40.058118 },
        zoom: 19,
        tilt: 70,
        heading: -180,
        percentage: 0.55
      },
      {
        center: { lng: 116.308902, lat: 40.055954 },
        zoom: 19,
        tilt: 70,
        heading: -180,
        percentage: 0.75
      },
      {
        center: { lng: 116.308902, lat: 40.055954 },
        zoom: 19,
        tilt: 70,
        heading: -270,
        percentage: 0.85
      },
      {
        center: { lng: 116.307779, lat: 40.055754 },
        zoom: 19,
        tilt: 70,
        heading: -360,
        percentage: 0.95
      },
      {
        center: { lng: 116.307092, lat: 40.054922 },
        zoom: 18,
        tilt: 50,
        heading: -360,
        percentage: 1
      }
    ]
    setKeyFrames(keyFrames)
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
