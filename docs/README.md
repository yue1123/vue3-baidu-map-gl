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
    details: 模块分包,做到真真的按需引入
  - title: 易用的组件
    details: 与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念
---

<input type="checkbox" v-model="mouseScroll"/>鼠标缩放
<button @click="count++">点我！</button>

<select name="" id="" v-model="type">
  <option value="BMAP_NORMAL_MAP">BMAP_NORMAL_MAP</option>
  <option value="BMAP_EARTH_MAP">BMAP_EARTH_MAP</option>
</select>

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
</script>

<style>
.red-div {
  color: red;
}
</style>

{{type}}
<BaiduMap ak="4stE857hYPHbEmgKhLiTAa0QbCIULHpm" :mapType="type" @unload="onUnload" @initd="onReady" @aaa="syncCenterAndZoom" @mouseover="syncCenterAndZoom" :enableScrollWheelZoom="mouseScroll" :zoom="count"/>
