import { watch } from 'vue'
import DefaultTheme from 'vitepress/theme'
import baiduMapInit from '../../../packages/index'
import '../styles/main.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
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
      ak: 'cwHsf5i2fAQAlijOyELx5COtkFhItaSm'
    })
  }
}
