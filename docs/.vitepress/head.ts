import type { HeadConfig } from 'vitepress'
const heads: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `/vue3-baidu-map-gl/logo.png`
    }
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'keywords', content: 'vue3,vue,baidu map,baidu map gl,vue3-baidu-map-gl,vue3-bmap-gl' }]
]

if (process.env.NODE_ENV === 'production') {
  heads.push([
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

export default heads
