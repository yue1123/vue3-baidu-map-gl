import {  watch  } from 'vue-demi'
import defaultTheme from 'vitepress/theme'
import baiduMapInit from 'vue3-baidu-map-gl'
import '../styles/main.css'

export default {
  ...defaultTheme,
  enhanceApp(ctx) {
    defaultTheme.enhanceApp(ctx)
    const { app, router } = ctx
    if (process.env.NODE_ENV === 'production') {
      if (typeof window !== 'undefined') {
        watch(
          () => router.route.data.relativePath,
          (path) => {
            if (path && typeof (window as any)._hmt != 'undefined') {
              ;(window as any)._hmt.push(['_trackPageview', path])
            }
          },
          { immediate: true }
        )
      }
    }

    app.use(baiduMapInit, {
      ak: 'rxc8tkdjxtk5gQt4gtzdTuvp5NO4442t'
    })
  }
}
