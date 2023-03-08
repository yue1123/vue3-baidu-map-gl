<template>
  <BMap v-bind="$attrs" :zoom="16">
    <BCircle stroke-style="dashed" :center="{ lat: 39.915185, lng: 116.403901 }" :radius="300" />
  </BMap>
</template>
