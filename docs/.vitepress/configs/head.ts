import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `/vue3-baidu-map-gl/logo.svg`
    }
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  [
    'meta',
    {
      name: 'description',
      content: 'Vue 3 百度地图 GL 是一个基于 Vue 3 和百度地图 GL 的地图组件库，方便开发者快速构建地图应用。'
    }
  ],
  [
    'meta',
    {
      name: 'keywords',
      content:
        'vue3,vue component,baidu map,baidu map gl,vue3-baidu-map-gl,vue3-bmap-gl,百度地图,组件库,vue3组件库,vue百度地图'
    }
  ]
]

if (process.env.NODE_ENV === 'production') {
  head.push([
    'script',
    {},
    `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?e4de65f9c92f179b3e32b0c28b0e299b";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
        `
  ])
}
