<template>
  <Map v-bind="$attrs" :zoom="16">
    <Circle stroke-style="dashed" :center="{ lat: 39.915185, lng: 116.403901 }" :radius="300" />
  </Map>
</template>
