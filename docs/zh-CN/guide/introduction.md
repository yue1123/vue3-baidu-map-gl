# Vue3 BaiduMap Gl

<div style="display:flex;justify-content:flex-start;margin-top:15px;">
<img src="https://img.shields.io/github/license/yue1123/img-previewer?style=flat-square" alt="GitHub license" >
<img src="https://img.shields.io/github/package-json/v/yue1123/vue3-baidu-map-gl?color=f90&style=flat-square" alt="" style="margin-left:10px">
<img alt="npm" src="https://img.shields.io/npm/dm/vue3-baidu-map-gl?logo=npm&style=flat-square" style="margin-left:10px">
</div>

基于百度地图 JavaScript GL 版（使用了 WebGL 对地图、覆盖物等进行渲染，支持 3D 视角展示地图） API 封装设计的 Vue3 组件库，开发体验良好，代码优雅。

## :sparkles: 特性

- 🚀 自动加载百度地图 SDK，将百度地图繁琐的 Api 封装进组件，你只需关注组件本身
- 📦 20+ 高质量的开箱即用 Vue 3 组件以及 8+ hooks 封装
- 📐 遵循直觉的、简约的 Api 设计
- ⚡ Composition Api，更好的性能
- 🔨 完整的 TypeScript 支持，更好的体验
- 🧩 tree shaking 支持，模块分包，只打包你想要的的
- 🌏 基于百度地图 Gl 版 SDK，通过 WebGL 对地图、覆盖物等进行渲染，支持 3D 视角展示地图
- 🚀 支持 volar，组件提供完善的代码提示

<script lang="ts" setup>
import { ref } from 'vue'
import { VPTeamMembers } from 'vitepress/theme'

const members = ref<any[]>([])
const isLoading = ref(true)
fetch('https://api.github.com/repos/yue1123/vue3-baidu-map-gl/contributors?anon=1').then(res => res.json()).then(res => {
  isLoading.value = false
  members.value = res.map(({ avatar_url, login, html_url }, index) => {
    return {
      avatar: avatar_url,
      name: login,
      title: index === 0 ? 'Creator' : 'Contributor',
      links: [
        { icon: 'github', link: html_url },
      ]
    }
  })
})
</script>

## 贡献者

<div v-if="isLoading">Loading Contributors...</div>
<VPTeamMembers v-else size="small" :members="members" />

## License

[MIT licenses](https://opensource.org/licenses/MIT)
