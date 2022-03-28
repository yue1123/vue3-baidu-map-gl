import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { capitalize, camelize } from 'vue'
const { resolve } = require('path')

export default defineUserConfig<DefaultThemeOptions>({
	// 站点配置
	lang: 'en-US',
	title: 'vue3-BmapGl',
	description: 'Just playing around',

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
					return camelize(
						capitalize(filename.replace(/\/\w+\.vue$/, ''))
					)
				}
			}
		]
	]
})
