<template>
  <BMap v-bind="$attrs" :center="{ lng: 113.399, lat: 39.91 }" :zoom="8">
    <BBezierCurve
      :path="[
        { lng: 116.399, lat: 39.911 },
        { lng: 113.399, lat: 39.91 },
        { lng: 110.399, lat: 39.91 }
      ]"
      :controlPoints="[
        [
          { lng: 115.399, lat: 40.91 },
          { lng: 114.399, lat: 38.91 }
        ],
        [
          { lng: 112.399, lat: 38.911 },
          { lng: 112.399, lat: 38.41 }
        ]
      ]"
      stroke-color="#000"
      :stroke-opacity="1"
      :stroke-weight="2"
    />
  </BMap>
</template>
