<template>
  <div class="map-wrapper">
    <div class="map-item">
      <BMap v-bind="$attrs" />
    </div>
    <div class="map-item">
      <BMap v-bind="$attrs" />
    </div>
  </div>
</template>

<style scoped>
  .map-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .map-wrapper .map-item {
    flex-basis: calc(50% - 7.5px);
  }
</style>
