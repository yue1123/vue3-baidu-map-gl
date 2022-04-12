import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { capitalize, camelize } from 'vue'
const { resolve, join } = require('path')
const root = process.cwd()
const comNameReg = /(\w+\-\w+)/

import sidebarConfig from './sidebar.config'
console.log(process.env.NODE_ENV)
export default defineUserConfig<DefaultThemeOptions>({
	lang: 'en-US',
	title: 'Vue3 BaiduMap GL',
	description: '一套基于Vue 3.0和百度地图的地图组件。',
	// 主题和它的配置
	theme: '@vuepress/theme-default',
	dest: 'docs/dist',
	base: process.env.NODE_ENV === 'development' ? '/' : '/vue3-baidu-map-gl/dist/',
	locales: {
		'/zh/': {
			lang: 'zh-CN'
		}
	},
	themeConfig: {
		locales: {
			'/': {
				selectLanguageName: 'English'
			},
			'/zh/': {
				selectLanguageName: '简体中文'
			}
		},
		// },

		// themeConfig: {
		logo: 'https://vuejs.org/images/logo.png',
		navbar: [
			{
				text: '指南',
				link: 'guide/quick-start'
			},
			{
				text: '选择语言',
				children: [
					{
						text: 'English',
						link: '/'
					},
					{
						text: '简体中文',
						link: '/zh'
					}
				]
			},
			{
				text: '完整示例',
				link: '/example/'
			},
			{
				text: 'github',
				link: 'https://github.com/yue1123/vue3-baidu-map-gl'
			}
		],
		sidebar: sidebarConfig
	},
	plugins: [
		[
			'@vuepress/register-components',
			{
				componentsDir: resolve(__dirname, '../../src/components'),
				componentsPatterns: ['**/*.vue', '**/**/*.vue'],
				getComponentName: (filename: string) => {
					// 转驼峰
					// let comName = filename
					// if (filename.indexOf('/') > -1) {
					// 	comName = filename.split('/')[1]
					// }
					const name = camelize(capitalize(comNameReg.exec(filename)[0]))
					console.log(name)
					return name
				}
			}
		]
	],
	alias: {
		hooks: join(root, 'src/hooks'),
		types: join(root, 'types')
	}
})
