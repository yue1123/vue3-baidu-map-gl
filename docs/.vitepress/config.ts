import { defineConfig } from 'vitepress'
import heads from './head'
import sidebarConfigZh from './sidebar.config.zh'
import { version } from '../../package.json'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Vue3 BaiduMap GL',
  description:
    '基于百度地图 JavaScript GL 版（使用了 WebGL 对地图、覆盖物等进行渲染，支持 3D 视角展示地图） API 封装设计的 Vue3 组件/hooks 库，开箱即用。',
  titleTemplate: 'Vue3 BaiduMap GL',
  lastUpdated: true,
  base: '/',
  cleanUrls: 'without-subfolders',
  head: heads,
  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/zh/guide/quick-start'
      },
      {
        text: '游乐场',
        link: 'https://sfc.vuejs.org/#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'
      },
      {
        text: '❤️ 赞助',
        link: '/sponsor/'
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
            text: '历史版本',
            link: 'https://github.com/yue1123/vue3-baidu-map-gl/releases'
          }
        ]
      }
    ],
    localeLinks: {
      text: '语言',
      items: [{ text: '简体中文', link: '/zh/' }]
    },
    algolia: {
      appId: 'RT4OHPUGD1',
      apiKey: '76ba0d807534197fb89a2644c412240b',
      indexName: 'vue3-baidu-map-gl-zh'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present dh and all contributors'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/yue1123/vue3-baidu-map-gl' }],
    sidebar: sidebarConfigZh,
    editLink: {
      pattern: 'https://github.com/yue1123/vue3-baidu-map-gl/edit/main/docs/:path',
      text: 'Suggest changes to this page'
    }
  }
})

// // 主题和它的配置
// 	theme: '@vuepress/theme-default',
// 	dest: 'docs/dist',
// 	base: process.env.NODE_ENV === 'development' ? '/' : '/vue3-baidu-map-gl/',
// 	locales: {
// 		// '/': {
// 		// 	lang: 'en-US',
// 		// 	title: 'Vue3 BaiduMap GL',
// 		// 	description: 'A set of map components based on Vue 3.0 and Baidu Maps.'
// 		// },
// 		'/zh/': {
// 			lang: 'zh-CN',
// 			title: 'Vue3 BaiduMap GL',
// 			description: '一套基于Vue 3.0和百度地图的地图组件。'
// 		}
// 	},
// 	head: heads,
// 	themeConfig: {
// 		sidebarDepth: 6,
// 		docsDir: 'docs',
// 		locales: {
// 			'/': {
// 				selectLanguageName: 'English',
// 				// page meta
// 				editLinkText: 'Edit this page on GitHub'
// 			},
// 			'/zh/': {
// 				selectLanguageName: '简体中文',
// 				selectLanguageText: '选择语言',
// 				selectLanguageAriaLabel: '选择语言',

// 				// sidebar

// 				// page meta
// 				editLinkText: '在 GitHub 上编辑此页',
// 				lastUpdatedText: '上次更新',
// 				contributorsText: '贡献者',

// 				// custom containers
// 				tip: '提示',
// 				warning: '注意',
// 				danger: '警告',

// 				// 404 page
// 				notFound: [
// 					'这里什么都没有',
// 					'我们怎么到这来了？',
// 					'这是一个 404 页面',
// 					'看起来我们进入了错误的链接'
// 				],
// 				backToHome: '返回首页',

// 				// a11y
// 				openInNewWindow: '在新窗口打开',
// 				toggleDarkMode: '切换夜间模式',
// 				toggleSidebar: '切换侧边栏',
// 				navbar: [
// 					{
// 						text: '指南',
// 						link: '/zh/guide/quick-start'
// 					},
// 					{
// 						text: 'github',
// 						link: 'https://github.com/yue1123/vue3-baidu-map-gl'
// 					}
// 				],
// 				sidebar: sidebarConfigZh
// 			}
// 		},
// 		// },

// 		// themeConfig: {
// 		logo: 'https://vuejs.org/images/logo.png'
// 	},
// 	plugins: [
// 		[
// 			'@vuepress/register-components',
// 			{
// 				componentsDir: resolve(__dirname, '../../src/components'),
// 				componentsPatterns: ['**/*.vue', '**/**/*.vue'],
// 				getComponentName: (filename: string) => {
// 					// 转驼峰
// 					// let comName = filename
// 					// if (filename.indexOf('/') > -1) {
// 					// 	comName = filename.split('/')[1]
// 					// }
// 					const comName = comNameReg.exec(filename)[0]!
// 					const name = camelize(capitalize(comName.split('-')[1]))
// 					return name
// 				}
// 			}
// 		]
// 	],
// 	alias: {
// 		hooks: join(root, 'src/hooks'),
// 		types: join(root, 'types')
// 	}
