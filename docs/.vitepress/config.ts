import { defineConfig } from 'vitepress'
// import type { DefaultThemeOptions } from 'vitepress'
import { capitalize, camelize } from 'vue'
import heads from './head'
const { resolve, join } = require('path')
const root = process.cwd()
const comNameReg = /(\w+\-\w+)/

import sidebarConfigZh from './sidebar.config.zh'
export default defineConfig({
	lang: 'en-US',
	title: 'VitePress',
	description: 'Vite & Vue powered static site generator.',

	themeConfig: {
		nav: [
			{
				text: '指南',
				link: '/zh/guide/quick-start'
			}
		],
		socialLinks: [{ icon: 'github', link: 'https://github.com/yue1123/vue3-baidu-map-gl' }],
		sidebar: sidebarConfigZh
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
