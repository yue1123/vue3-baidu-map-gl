<template>
  <div>
    <button class="myButton" type="button" v-if="!marker.isDrawing" @click="marker.toggle">绘制点</button>
    <button class="myButton" type="button" v-else @click="marker.toggle">禁用绘制点</button>
    <button class="myButton" type="button" v-if="!polyline.isDrawing" @click="polyline.toggle">绘制线</button>
    <button class="myButton" type="button" v-else @click="polyline.toggle">禁用绘制线</button>
    <button class="myButton" type="button" v-if="!circle.isDrawing" @click="circle.toggle">绘制圆</button>
    <button class="myButton" type="button" v-else @click="circle.toggle">禁用绘制圆</button>
    <button class="myButton" type="button" v-if="!polygon.isDrawing" @click="polygon.toggle">绘制多边形</button>
    <button class="myButton" type="button" v-else @click="polygon.toggle">禁用绘制多边形</button>
    <button class="myButton" type="button" v-if="!rectangle.isDrawing" @click="rectangle.toggle">绘制矩形</button>
    <button class="myButton" type="button" v-else @click="rectangle.toggle">禁用绘制矩形</button>
    <button class="myButton" type="button" @click="clearFn">清空</button>
    <BMap
      v-bind="$attrs"
      :center="{ lng: 116.385243, lat: 39.913063 }"
      :zoom="16"
      enable-scroll-wheel-zoom
      @initd="handleInitd"
      mapStyleId="980161f3645989feac25a0da15da4178"
    />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useDefaultMarkerIcons } from 'vue3-baidu-map-gl'
  let marker = ref({
    instance: null,
    isDrawing: false,
    toggle() {
      let _marker = marker.value
      _marker.isDrawing ? _marker.instance.closeAll() : _marker.instance.open()
      _marker.isDrawing = !_marker.isDrawing
    }
  })
  let circle = ref({
    instance: null,
    isDrawing: false,
    toggle() {
      let _circle = circle.value
      _circle.isDrawing ? _circle.instance.closeAll() : _circle.instance.open()
      _circle.isDrawing = !_circle.isDrawing
    }
  })
  let polyline = ref({
    instance: null,
    isDrawing: false,
    toggle() {
      let _polyline = polyline.value
      _polyline.isDrawing ? _polyline.instance.closeAll() : _polyline.instance.open()
      _polyline.isDrawing = !_polyline.isDrawing
    }
  })
  let polygon = ref({
    instance: null,
    isDrawing: false,
    toggle() {
      let _polygon = polygon.value
      _polygon.isDrawing ? _polygon.instance.closeAll() : _polygon.instance.open()
      _polygon.isDrawing = !_polygon.isDrawing
    }
  })
  let rectangle = ref({
    instance: null,
    isDrawing: false,
    toggle() {
      let _rectangle = rectangle.value
      _rectangle.isDrawing ? _rectangle.instance.closeAll() : _rectangle.instance.open()
      _rectangle.isDrawing = !_rectangle.isDrawing
    }
  })
  let clearFn = ref()
  function handleInitd({ map, BMapGL }) {
    import('bmap-draw').then(({ DrawScene, MarkerDraw, PolylineDraw, CircleDraw, PolygonDraw, RectDraw }) => {
      const scene = new DrawScene(map)
      clearFn.value = () => scene.clearData()
      // 点绘制
      const defaultIcons = useDefaultMarkerIcons()
      marker.value.instance = new MarkerDraw(scene, {
        isOpen: false,
        isSeries: true,
        enableDragging: true,
        baseOpts: {
          icon: defaultIcons['red1']
        }
      })
      // 折线绘制
      polyline.value.instance = new PolylineDraw(scene, {
        isOpen: false,
        enableSnap: true, // 开启吸附绘制
        matchOverlay: {
          // 自定义吸附点样式
          type: 'Marker',
          icon: new BMapGL.Icon(
            'http://maponline0.bdimg.com/sty/map_icons2x/MapRes/shenghui_1.png',
            new BMapGL.Size(10, 10),
            { offset: new BMapGL.Size(5, 5) }
          )
        }
      })
      // 多边形绘制
      polygon.value.instance = new PolygonDraw(scene, {
        isOpen: false,
        labelOptions: {
          borderRadius: '2px',
          background: '#b5d3fb',
          border: '1px solid #b5d3fb',
          color: '#333',
          fontSize: '12px',
          letterSpacing: '0',
          padding: '5px'
        },
        baseOpts: {
          fillColor: '#fff',
          strokeWeight: 5,
          strokeOpacity: 1,
          fillOpacity: 0.2
        }
      })
      // 圆形绘制
      circle.value.instance = new CircleDraw(scene, {
        isOpen: false,
        labelOptions: {
          borderRadius: '2px',
          background: '#b5d3fb',
          border: '1px solid #b5d3fb',
          color: '#333',
          fontSize: '12px',
          letterSpacing: '0',
          padding: '5px'
        },
        baseOpts: {
          strokeColor: '#6d77f9',
          fillColor: '#fff',
          strokeWeight: 5,
          strokeOpacity: 1,
          fillOpacity: 0.2
        }
      })
      // 矩形绘制
      rectangle.value.instance = new RectDraw(scene, {
        isOpen: false,
        isSeries: true,
        labelOptions: {
          borderRadius: '2px',
          background: '#b5d3fb',
          border: '1px solid #b5d3fb',
          color: '#333',
          fontSize: '12px',
          letterSpacing: '0',
          padding: '5px'
        },
        baseOpts: {
          fillColor: '#fff',
          strokeWeight: 5,
          strokeOpacity: 1,
          fillOpacity: 0.2
        }
      })
    })
  }
</script>
