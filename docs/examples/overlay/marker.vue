<template>
  <Map v-bind="$attrs" :zoom="16">
    <!-- 起点图标 -->
    <Marker :zIndex="99" :position="{ lat: 39.915185, lng: 116.403901 }" icon="start" />
    <!-- 终点图标 -->
    <Marker :position="{ lat: 39.915185, lng: 116.404901 }" icon="end" />
    <!-- 红色图标1 -->
    <Marker :position="{ lat: 39.915185, lng: 116.405901 }" icon="red1" />
    <!-- 红色图标2 -->
    <Marker :position="{ lat: 39.915185, lng: 116.403901 }" icon="simple_red" />
    <!-- 自定义图标 -->
    <Marker
      :position="{ lat: 39.915185, lng: 116.400901 }"
      :icon="{
        imageUrl: 'https://cdn.jsdelivr.net/gh/yue1123/vue3-baidu-map-gl@0.0.21/docs/public/logo.png',
        imageSize: {
          width: 100,
          height: 100
        }
      }"
      enableDragging
    />
  </Map>
</template>
