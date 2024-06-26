---
layout: home
title: Vue3 Baidu Map Gl 

hero:
  name: Vue3 Baidu Map Gl 
  text: Vue3 & BMapGL 组件库 + hooks 库
  tagline: 易用 & 完整 & 性能不错
  image:
    src: /logo.svg
    alt: Vue3 BaiduMap GL
  actions:
    - theme: brand
      text: 开始使用
      link: /zh-CN/guide/introduction
    - theme: alt
      text: View on GitHub
      link: https://github.com/yue1123/vue3-baidu-map-gl

features:
  - icon: <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" />
    title: 化繁 => 为简
    details: 将百度地图繁琐的 API 封装进组件，你只需关注组件本身

  - icon: <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Package.png" alt="Package" width="25" height="25" />
    title: 完整
    details: 20+ 高质量的开箱即用 Vue 3 组件以及 5+ hooks 封装

  - icon: <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Triangular%20Ruler.png" alt="Triangular Ruler" width="25" height="25" />
    title: 易用
    details: 遵循直觉的、简约的 Api 设计

  - icon: <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png" alt="High Voltage" width="25" height="25" />
    title: 高性能
    details: Composition Api，更好的性能

  - icon: <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Hammer.png" alt="Hammer" width="25" height="25" />
    title: 不是 AnyScript
    details: 完整的 TypeScript 支持，更好的体验

  - icon: <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Globe%20Showing%20Asia-Australia.png" alt="Globe Showing Asia-Australia" width="25" height="25" />
    title: WebGL
    details: 基于百度地图Gl版SDK，WebGL对地图、覆盖物等进行渲染，支持3D视角展示地图
---

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import VanillaTilt from 'vanilla-tilt';


  onMounted(() => {
    const element = document.querySelector('.image')
    VanillaTilt.init(element, { reverse: true, transition: true })
  })
</script>