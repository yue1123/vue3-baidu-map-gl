import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { capitalize, camelize } from 'vue'
const { resolve, join } = require('path')
const root = process.cwd()

import sidebarConfig from './sidebar.config'

export default defineUserConfig<DefaultThemeOptions>({
	// 站点配置
	lang: 'en-US',
	title: 'Vue3 BaiduMap GL',
	description: '一套基于Vue 3.0和百度地图的地图组件。',
	// 主题和它的配置
	theme: '@vuepress/theme-default',
  dest:'docs/dist',
	themeConfig: {
		logo: 'https://vuejs.org/images/logo.png',
		navbar: [
			{
				text: '文档',
				link: '/guide/install/'
			},
			{
				text: '选择语言',
				children: ['English', '简体中文']
			},
			{
				text: '完整示例',
				link: '/example/'
			}
		],
		sidebar: {
			'/guide/': [
				{
					text: '指南',
					children: [
						{
							text: '安装',
							link: '/guide/install'
						},
						{
							text: '快速上手'
						}
					]
				}
			]
			// '/reference/': [
			// 	{
			// 		text: 'Reference',
			// 		children: ['/reference/cli.md', '/reference/config.md']
			// 	}
			// ]
		}
	},
	plugins: [
		[
			'@vuepress/register-components',
			{
				componentsDir: resolve(__dirname, '../../src/components'),
				componentsPatterns: ['**/*.vue'],
				getComponentName: (filename) => {
					// 转驼峰
					return camelize(capitalize(filename.replace(/\/\w+\.vue$/, '')))
				}
			}
		]
	],
	alias: {
		hooks: join(root, 'src/hooks'),
		types: join(root, 'types')
	},
	bundlerConfig: {
		base: './'
	}
})
