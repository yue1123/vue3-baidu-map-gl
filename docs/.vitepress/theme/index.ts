import DefaultTheme from 'vitepress/theme'
import baiduMapInit from '../../../src/index'

export default {
	...DefaultTheme,
	enhanceApp(ctx) {
		const { app, router } = ctx
		app.use(baiduMapInit, { ak: '4stE857hYPHbEmgKhLiTAa0QbCIULHpm' })
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
