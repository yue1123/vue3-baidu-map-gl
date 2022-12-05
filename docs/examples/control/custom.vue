<template>
  <div>
    <Map v-bind="$attrs" @initd="handleInitd" :zoom="zoom">
      <Control style="display: flex; background-color: #fff; padding: 10px" :offset="{ x: 0, y: 0 }">
        <button @click="handleZoomOut">缩小</button>
        <button @click="handleZoomIn">放大</button>
      </Control>
    </Map>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const zoom = ref(10)
  let _map
  function handleInitd({ map }) {
    _map = map
  }
  function handleZoomOut() {
    zoom.value = _map.getZoom() - 1
  }
  function handleZoomIn() {
    zoom.value = _map.getZoom() + 1
  }
</script>

<style scoped>
  button {
    outline: none;
    border: none;
    background: #41b883;
    margin: 0 5px;
    padding: 5px 15px;
    border-radius: 4px !important;
  }
</style>
