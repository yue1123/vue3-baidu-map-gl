---
home: true
heroImage: https://artice-code-1258339218.cos.ap-beijing.myqcloud.com/vuepress/element-index.png
heroText: Element
features:
    - title: 一致性 Consistency
      details: 与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念
    - title: 反馈 Feedback
      details: 通过界面样式和交互动效让用户可以清晰的感知自己的操作
    - title: 效率 Efficiency
      details: 界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
footer: by饿了么
---

### 设计原则

<div style="display:flex;justify-content: space-between;padding-bottom:40px">
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img style="width:100px" src="https://artice-code-1258339218.cos.ap-beijing.myqcloud.com/vuepress/consistency.png" alt="一致性">
    <p style="margin:5px">一致性</p>
    <p style="margin:0px;font-size: 12px;color:#666">Consistency</p>
  </div>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img style="width:100px" src="https://artice-code-1258339218.cos.ap-beijing.myqcloud.com/vuepress/feedback.png" alt="反馈">
    <p style="margin:5px">反馈</p>
    <p style="margin:0px;font-size: 12px;color:#666"> Feedback</p>
  </div>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img style="width:100px" src="https://artice-code-1258339218.cos.ap-beijing.myqcloud.com/vuepress/efficiency.png" alt="效率">
    <p style="margin:5px">效率</p>
    <p style="margin:0px;font-size: 12px;color:#666">Efficiency</p>
  </div>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img style="width:100px" src="https://artice-code-1258339218.cos.ap-beijing.myqcloud.com/vuepress/controllability%20%20.png" alt="可控">
    <p style="margin:5px">可控</p>
    <p style="margin:0px;font-size: 12px;color:#666">Controllability</p>
  </div>
</div>

这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />

一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>

_你好， {{ msg }}_

<RedDiv>

_当前计数为： {{ count }}_

</RedDiv>

<button @click="count++">点我！</button>

<script setup>
import { h, ref } from 'vue'
// import { BaiduMap } from '/src/lib/components/baidu-map'
const RedDiv = (_, ctx) => h(
  'div',
  {
    class: 'red-div',
  },
  ctx.slots.default()
)
const msg = 'Markdown 中的 Vue'
const count = ref(10)
</script>

<style>
.red-div {
  color: red;
}
</style>


<baidu-map ak="4stE857hYPHbEmgKhLiTAa0QbCIULHpm" :zoom="count"/>
