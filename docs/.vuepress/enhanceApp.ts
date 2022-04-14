
export default ({ router }) => {
  if (process.env.NODE_ENV === 'production') {
		router.beforeEach((to, from, next) => {
			if (typeof (window as any)._hmt != 'undefined') {
				if (to.path) {
					;(window as any)._hmt.push(['_trackPageview', to.fullPath])
					console.log('update:', to.fullPath)
				}
			}
			next()
		})
	}
}
