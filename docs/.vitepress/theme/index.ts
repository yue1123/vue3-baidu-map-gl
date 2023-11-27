import { watch } from 'vue'
import defaultTheme from 'vitepress/theme'
import baiduMapInit from 'vue3-baidu-map-gl'
import '../styles/index.less'

import Demo from '../components/vp-demo.vue'
import tooltipDirective from '../components/Tooltip/directive'
import Tooltip from '../components/Tooltip/index.vue'

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
    tooltipDirective(app)
    app.component('Demo', Demo)
    app.component('Tooltip', Tooltip)
    app.use(baiduMapInit, {
      ak: 'cwHsf5i2fAQAlijOyELx5COtkFhItaSm'
    })
  }
}
