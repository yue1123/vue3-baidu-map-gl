<template>
  <div>
    <button class="myButton" type="button" v-if="!distance.isMeasuring" @click="distance.toggle">测量距离</button>
    <button class="myButton" type="button" v-else @click="distance.toggle">取消测量距离</button>
    <button class="myButton" type="button" v-if="!measure.isMeasuring" @click="measure.toggle">测量面积</button>
    <button class="myButton" type="button" v-else @click="measure.toggle">取消测量面积</button>
    <BMap
      v-bind="$attrs"
      :center="{ lng: 116.385243, lat: 39.913063 }"
      :zoom="13.5"
      enable-scroll-wheel-zoom
      @initd="handleInitd"
    />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  let distance = ref({
    instance: null,
    isMeasuring: true,
    toggle() {
      let _distance = distance.value
      _distance.isMeasuring ? _distance.instance.close() : _distance.instance.open()
      _distance.isMeasuring = !_distance.isMeasuring
    }
  })
  let measure = ref({
    instance: null,
    isMeasuring: true,
    toggle() {
      let _measure = measure.value
      _measure.isMeasuring ? _measure.instance.close() : _measure.instance.open()
      _measure.isMeasuring = !_measure.isMeasuring
    }
  })
  function handleInitd({ map }) {
    import('bmap-draw').then(({ DrawScene, DistanceMeasure, AreaMeasure }) => {
      const scene = new DrawScene(map)
      // 测量距离
      distance.value.instance = new DistanceMeasure(scene)
      distance.value.toggle()
      distance.value.instance.addEventListener('measure-length-end', (e) => {
        console.log('measure-end', e)
      })
      // 测量面积
      measure.value.instance = new AreaMeasure(scene)
      measure.value.toggle()
      measure.value.instance.addEventListener('measure-area-end', (e) => {
        console.log('measure-end', e)
      })
    })
  }
</script>
