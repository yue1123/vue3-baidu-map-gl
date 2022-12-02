import { watch } from 'vue'
import defaultTheme from 'vitepress/theme'
import baiduMapInit from 'vue3-baidu-map-gl'
import '../styles/main.css'
import '../styles/code.css'

import Demo from '../components/vp-demo.vue'

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
    app.component('Demo', Demo)
    app.use(baiduMapInit, {
      ak: 'cwHsf5i2fAQAlijOyELx5COtkFhItaSm'
    })
  }
}
