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
