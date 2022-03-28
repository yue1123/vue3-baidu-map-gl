import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { capitalize, camelize } from 'vue'
const { resolve } = require('path')

export default defineUserConfig<DefaultThemeOptions>({
	// 站点配置
	lang: 'en-US',
	title: 'Vue3 BaiduMap GL',
	description: '一套基于Vue 3.0和百度地图的地图组件。',
	// 主题和它的配置
	theme: '@vuepress/theme-default',
	themeConfig: {
		logo: 'https://vuejs.org/images/logo.png'
	},

	plugins: [
		[
			'@vuepress/register-components',
			{
				componentsDir: resolve(__dirname, '../../src/lib/components'),
				componentsPatterns: ['**/*.vue'],
				getComponentName: (filename) => {
					// 转驼峰
					return camelize(capitalize(filename.replace(/\/\w+\.vue$/, '')))
				}
			}
		]
	]
})
