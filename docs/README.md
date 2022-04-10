---
home: true
heroImage: /logo.png
heroText: Vue3 BaiduMap GL
actions:
  - text: 开始使用
    link: /docs/start
features:
  - title: 基于Vue3 + Ts
    details: 面向未来,更好的性能,更好的体验,更好的组件类型提示
  - title: 真真的按需加载
    details: 模块分包,做到真正的按需引入
  - title: 易用的组件
    details: 与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念
---

<input type="checkbox" v-model="mouseScroll"/>鼠标缩放

<select name="" id="" v-model="type">
  <option value="BMAP_NORMAL_MAP">BMAP_NORMAL_MAP</option>
  <option value="BMAP_EARTH_MAP">BMAP_EARTH_MAP</option>
</select>
<BaiduMap
:ak="'4stE857hYPHbEmgKhLiTAa0QbCIULHpm'"
:enable-keyboard="false"
:zoom="zoom"
:enableScrollWheelZoom="mouseScroll"
enableDragging
:minZoom="10"
:mapType="type"
>
<BmControl
  style='display: flex; background-color: #f90; padding: 10px'
  :offset='{ x: 0, y: 0 }'
>
  <p>
    <button @click="handleZoomOut">缩小</button>
  <button @click="handleZoomIn">放大</button>
  </p>
</BmControl>
<BmNavigation3d />
<BmMarker
        :position="{
          lng: 116.404,
          lat: 39.925
        }"
        icon="../docs/.vuepress/public/logo.png"
        dragging
      />
<BmMarker
        :position="{
          lng: 116.404,
          lat: 39.926
        }"
      />
<BmLabel
        content="123123"
        :position="{
          lng: 116.404,
          lat: 39.937
        }"
        :style="{
          color: 'blue',
          borderRadius: '5px',
          borderColor: '#ccc',
          padding: '10px',
          fontSize: '26px',
          height: '30px',
          lineHeight: '30px',
          fontFamily: '微软雅黑'
        }"
      />
<BmCircle
        stroke-style="dashed"
        :center="{
          lng: 116.406,
          lat: 39.937
        }"
        :radius="300"
        editing
      />
<BmPolygon
        :path="polylinePath"
        stroke-color="#f90"
        :stroke-opacity="1"
        :stroke-weight="10"
        editing
      ></BmPolygon>

<BmScale></BmScale>
</BaiduMap>


<script setup>
import { ref } from 'vue'
const msg = 'Markdown 中的 Vue'
const mouseScroll = ref(true)
const count = ref(10)
const type = ref('BMAP_NORMAL_MAP')
function syncCenterAndZoom(a) {
  console.log(a)
}
function onReady(map){
  console.log('我已准备就绪',map)
}
function onUnload(){
  console.log('我卸载了')
}
const zoom = ref(16)
const polylinePath = [
		{ lng: 116.404, lat: 39.915 },
		{ lng: 116.405, lat: 39.92 },
		{ lng: 116.423493, lat: 39.907445 }
	]
	// setTimeout(() => {
	// 	show.value = false
	//   console.log('yingcang');
	// }, 5000)
	function handleZoomIn() {
		zoom.value += 1
		console.log(zoom.value)
	}
	function handleZoomOut() {
		zoom.value -= 1
		console.log(zoom.value)
	}
	const cal = () => {
		show.value = !show.value
	}
</script>

<style>
.red-div {
  color: red;
}
</style>
