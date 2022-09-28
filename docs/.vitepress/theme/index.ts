import DefaultTheme from 'vitepress/theme'
import baiduMapInit from '../../../package/index'
import '../styles/main.css'

export default {
	...DefaultTheme,
	enhanceApp(ctx) {
		const { app } = ctx
		app.use(baiduMapInit, { ak: 'cwHsf5i2fAQAlijOyELx5COtkFhItaSm' })
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
// E4805d16520de693a3fe707cdc962045