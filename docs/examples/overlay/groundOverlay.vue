<template>
  <div>
    地面叠加层类型：
    <select class="mySelect" name="" id="" v-model="activeKey">
      <option value="image">image 图片叠加层</option>
      <option value="video">video 视频叠加层</option>
      <option value="canvas">canvas 画布叠加层</option>
    </select>
    <BMap
      v-bind="$attrs"
      enableScrollWheelZoom
      noAnimation
      :displayOptions="{
        poiText: false, // 隐藏poi标注
        poiIcon: false, // 隐藏poi图标
        building: false // 隐藏楼块
      }"
      :tilt="groundOverlay.tilt"
      :zoom="groundOverlay.zoom"
    >
      <BMarker :position="groundOverlay.startPoint" icon="start" :offset="{ x: 0, y: -16 }" />
      <BMarker :position="groundOverlay.endPoint" icon="end" :offset="{ x: 0, y: -16 }" />
      <BGroundOverlay
        autoCenter
        :type="activeKey"
        :startPoint="groundOverlay.startPoint"
        :endPoint="groundOverlay.endPoint"
        :url="groundOverlay.url"
        :opacity="groundOverlay.opacity"
      />
      <BLabel
        v-if="activeKey === 'canvas'"
        content="日坛公园"
        :position="{ lng: 116.449921, lat: 39.921324 }"
        :style="{
          color: '#fff',
          borderWidth: '1px',
          borderRadius: '5px',
          borderColor: '#fff',
          backgroundColor: '#79a913',
          fontSize: '16px',
          height: '30px',
          lineHeight: '30px'
        }"
      />
    </BMap>
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'

  const activeKey = ref<'image' | 'canvas' | 'video'>('canvas')

  const groundOverlays = ref({
    canvas: {
      tilt: 0,
      zoom: 17,
      opacity: 1,
      startPoint: { lng: 116.447717, lat: 39.919173 },
      endPoint: { lng: 116.453125, lat: 39.923475 },
      url: () => {
        var textureCanvas = document.createElement('canvas')
        textureCanvas.width = textureCanvas.height = 200
        var ctx = textureCanvas.getContext('2d')!
        ctx.fillStyle = '#79a913'
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 6
        ctx.lineCap = 'square'
        ctx.fillRect(0, 0, 200, 200)
        ctx.moveTo(50, 50)
        ctx.lineTo(150, 50)
        ctx.lineTo(150, 150)
        ctx.lineTo(50, 150)
        ctx.lineTo(50, 50)
        ctx.stroke()
        return textureCanvas
      }
    },
    image: {
      tilt: 45,
      zoom: 18,
      opacity: 1,
      startPoint: { lng: 117.19635, lat: 36.24093 },
      endPoint: { lng: 117.2035, lat: 36.24764 },
      url: '/vue3-baidu-map-gl/shouhuimap.png'
    },
    video: {
      tilt: 0,
      zoom: 4,
      opacity: 0.5,
      startPoint: { lng: 94.582033, lat: -7.989754 },
      endPoint: { lng: 145.358572, lat: 30.813867 },
      url: '/vue3-baidu-map-gl/cloud.mov'
    }
  })

  const groundOverlay = computed(() => {
    return groundOverlays.value[activeKey.value]
  })
</script>
