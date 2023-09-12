import type { DefaultTheme } from 'vitepress'
import { version } from '../../../package.json'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '文档',
    activeMatch: '/guide|components|hooks/',
    items: [
      {
        text: '指南',
        link: '/zh-CN/guide/installation',
        activeMatch: '/guide/'
      },
      {
        text: '组件',
        link: 'zh-CN/components/map',
        activeMatch: '/components/'
      },
      {
        text: 'Hooks',
        activeMatch: '/hooks/',
        link: '/zh-CN/hooks/usePoint'
      }
    ]
  },
  {
    text: '赞助',
    link: '/sponsor'
  },
  {
    text: '演练场',
    link: 'https://play.vuejs.org/#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'
  },
  {
    text: '相关链接',
    items: [
      {
        text: '百度拾取坐标系统',
        link: 'https://api.map.baidu.com/lbsapi/getpoint/index.html'
      },
      {
        text: '百度地图开放平台',
        link: 'https://lbsyun.baidu.com/index.php?title=%E9%A6%96%E9%A1%B5'
      },
      {
        text: '个性化地图编辑器',
        link: 'https://lbsyun.baidu.com/index.php?title=open/custom'
      },
      {
        text: '百度地图开发资源下载',
        link: 'https://lbsyun.baidu.com/index.php?title=open/dev-res'
      },
      {
        text: '百度地图GL v1.0类参考',
        link: 'https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_webgl_1_0.html'
      }
    ]
  },
  {
    text: `v${version}`,
    items: [
      {
        text: 'CHANGELOG',
        link: 'https://github.com/yue1123/vue3-baidu-map-gl/blob/main/CHANGELOG.md'
      },
      {
        text: 'V1',
        link: 'https://yue1123.github.io/vue3-baidu-map-gl/v1/'
      },
      {
        text: '历史版本',
        link: 'https://github.com/yue1123/vue3-baidu-map-gl/releases'
      }
    ]
  }
]
