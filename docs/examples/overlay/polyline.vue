<template>
  <BMap v-bind="$attrs" :zoom="16">
    <BPolyline
      :path="[
        { lng: 116.404, lat: 39.915 },
        { lng: 116.404, lat: 39.92 },
        { lng: 116.41, lat: 39.92 },
        { lng: 116.41, lat: 39.915 }
      ]"
      stroke-color="#000"
      :stroke-opacity="1"
      :stroke-weight="3"
      enableEditing
    />
  </BMap>
</template>
