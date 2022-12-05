<template>
  <Map v-bind="$attrs">
    <Polygon
      enableEditing
      :path="[
        { lng: 116.387112, lat: 39.920977 },
        { lng: 116.385243, lat: 39.913063 },
        { lng: 116.394226, lat: 39.917988 },
        { lng: 116.401772, lat: 39.921364 },
        { lng: 116.41248, lat: 39.92789 }
      ]"
      stroke-color="#000"
      fillColor="#f90"
      :stroke-opacity="0.4"
      :stroke-weight="1"
    />
  </Map>
</template>
