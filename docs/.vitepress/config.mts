import { defineConfig } from 'vitepress'
import { head, nav, sidebarConfigZh, mdPlugin, pwa } from './configs'
import { withPwa } from '@vite-pwa/vitepress'

export default withPwa(
  defineConfig({
    lang: 'zh-CN',
    title: 'Vue3 Baidu Map Gl',
    description:
      '基于百度地图 JavaScript GL 版（使用了 WebGL 对地图、覆盖物等进行渲染，支持 3D 视角展示地图） API 封装设计的 Vue3 组件/hooks 库。',
    lastUpdated: true,
    base: '/vue3-baidu-map-gl/',
    cleanUrls: true,
    head,
    markdown: {
      config: (md) => mdPlugin(md)
    },
    pwa: pwa,
    // locales: {
    //   text: '语言',
    //   items: [{ text: '简体中文', link: '/zh-CN/' }]
    // },
    themeConfig: {
      i18nRouting: true,
      returnToTopLabel: 'top',
      logo: '/logo.svg',
      nav,
      outlineTitle: '目录',
      outline: [2, 5],
      search: {
        provider: 'local'
        // provider: 'algolia',
        // options: {
        //   appId: 'RT4OHPUGD1',
        //   apiKey: '76ba0d807534197fb89a2644c412240b',
        //   indexName: 'vue3-baidu-map-gl-zh'
        // }
      },

      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2022-present dh and all contributors'
      },
      socialLinks: [{ icon: 'github', link: 'https://github.com/yue1123/vue3-baidu-map-gl' }],
      sidebar: sidebarConfigZh,
      editLink: {
        pattern: 'https://github.com/yue1123/vue3-baidu-map-gl/edit/main/docs/:path',
        text: 'Edit this page on GitHub'
      }
    }
  })
)
