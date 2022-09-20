import DefaultTheme from 'vitepress/theme'
import baiduMapInit from '../../../src/index.ts'

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
    app.use(baiduMapInit, { ak: '4stE857hYPHbEmgKhLiTAa0QbCIULHpm' })
		// console.log(baiduMapInit)
	}
}
