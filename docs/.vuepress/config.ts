import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { capitalize, camelize } from 'vue'
const { resolve, join } = require('path')

console.log(
	join(__dirname, '../../types/'),
	'===================================='
)
export default defineUserConfig<DefaultThemeOptions>({
	// 站点配置
	lang: 'en-US',
	title: 'Vue3 BaiduMap GL',
	description: '一套基于Vue 3.0和百度地图的地图组件。',
	// 主题和它的配置
	theme: '@vuepress/theme-default',
	themeConfig: {
		logo: 'https://vuejs.org/images/logo.png',
		navbar: [
			// NavbarItem
			{
				text: '文档',
				link: '/foo/'
			},
			// NavbarGroup
			{
				text: '选择语言',
				children: ['English', '简体中文']
			},
			{
				text: '完整示例',
				link: '/example/'
			}
		]
	},
	plugins: [
		[
			'@vuepress/register-components',
			{
				componentsDir: resolve(__dirname, '../../src/lib/components'),
				componentsPatterns: ['**/*.vue'],
				getComponentName: (filename) => {
					// 转驼峰
					return camelize(
						capitalize(filename.replace(/\/\w+\.vue$/, ''))
					)
				}
			}
		]
	]
})
