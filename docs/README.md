---
home: true
heroImage: /logo.png
heroText: Vue3 BaiduMap GL
actions:
    - text: 开始使用
      link: /docs/start
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

<select name="" id="" v-model="type">
  <option value="B_NORMAL_MAP">B_NORMAL_MAP</option>
  <option value="B_EARTH_MAP">B_EARTH_MAP</option>
</select>

<script setup>
import { ref } from 'vue'
const msg = 'Markdown 中的 Vue'
const mouseScroll = ref(true)
const count = ref(10)
const type = ref('B_NORMAL_MAP')
</script>

<style>
.red-div {
  color: red;
}
</style>

{{type}}
<baidu-map ak="4stE857hYPHbEmgKhLiTAa0QbCIULHpm" :mapType="type" :enableScrollWheelZoom="mouseScroll" :zoom="count"/>
