---
home: true
heroImage: https://store-images.s-microsoft.com/image/apps.37575.13783124751175315.ba4b8b6f-eea3-4a11-acfa-02aa77b7a37f.126ae42f-f991-40e8-8dd4-130dfbb2a605?mode=scale&q=90&h=200&w=200&background=%23ffffff
heroText: Vue3 BaiduMap GL
features:
  - title: 基于Vue3 + vite
    details: 面向未来
  - title: Typescript 完整支持
    details: 更好的组件类型提示
  - title: 易用的组件
    details: 与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念
---

<input type="checkbox" v-model="mouseScroll"/>鼠标缩放
<button @click="count++">点我！</button>

<script setup>
import { ref } from 'vue'
const msg = 'Markdown 中的 Vue'
const mouseScroll = ref(true)
const count = ref(10)
</script>

<style>
.red-div {
  color: red;
}
</style>

<baidu-map ak="4stE857hYPHbEmgKhLiTAa0QbCIULHpm" :enableScrollWheelZoom="mouseScroll" :zoom="count"/>
