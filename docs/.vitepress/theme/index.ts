import DefaultTheme from 'vitepress/theme'
import baiduMapInit from '../../../src/index'

export default {
	...DefaultTheme,
	enhanceApp(ctx) {
		const { app } = ctx
		const { VITE_APP_BAIDU_MAP_AK } = import.meta.env
		app.use(baiduMapInit, { ak: VITE_APP_BAIDU_MAP_AK })
		// // if (process.env.NODE_ENV === 'production') {
		// router.beforeEach((to, from, next) => {
		// 	console.log('object', to, form)
		// 	// if (typeof window._hmt != 'undefined') {
		// 	// 	if (to.path) {
		// 	// 		window._hmt.push(['_trackPageview', to.fullPath])
		// 	// 		console.log('update:', to.fullPath)
		// 	// 	}
		// 	// }
		// 	next()
		// })
		// }
		// console.log(app, router)
	}
}
