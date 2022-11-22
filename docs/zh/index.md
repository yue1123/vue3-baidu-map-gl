---
layout: home

title: Vue3 BaiduMap GL

hero:
  name: Vue3 BaiduMap GL
  text: 易用 & 完整 & 高性能
  tagline: 基于 Vue 3.0 和 百度地图GL的高质量地图组件/hooks库
  image:
    src: /logo.png
    alt: Vue3 BaiduMap GL
    id: J_index_logo
  actions:
    - theme: brand
      text: 开始使用
      link: /zh/guide/quick-start
    - theme: alt
      text: View on GitHub
      link: https://github.com/yue1123/vue3-baidu-map-gl

features:
  - icon: 🚀
    title: 繁 => 简
    details: 将百度地图繁琐的Api封装进组件，你只需关注组件本身

  - icon: 📦
    title: 完整
    details: 20+ 高质量的开箱即用 Vue 3 组件以及 5+ hooks 封装

  - icon: 📐
    title: 易用
    details: 遵循直觉的、简约的 Api 设计

  - icon: ⚡
    title: 高性能
    details: Composition Api，更好的性能

  - icon: 🔨
    title: 不是 AnyScript
    details: 完整的 TypeScript 支持，更好的体验

  - icon: 🌏
    title: WebGl
    details: 基于百度地图Gl版SDK，WebGL对地图、覆盖物等进行渲染，支持3D视角展示地图
---

<script>
  import VanillaTilt from 'vanilla-tilt';
  if(typeof window !== 'undefined'){
    window.onload = function () {
      const element = document.getElementById('J_index_logo')
      const div = document.createElement('div')
      const _element = element.cloneNode(true)
      const parent = element.parentNode
      div.classList.add('image-src')
      div.classList.add('index_logo-container')
      div.appendChild(_element)
      _element.classList.remove('image-src')
      element.remove()
      parent.append(div)
      VanillaTilt.init(_element, { reverse: true, transition: true })
    }
  }
</script>

<style>
  .index_logo-container{
    width: 320px;
  }
</style>
