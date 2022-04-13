import { createApp } from 'vue'
import App from './App.vue'
// import baiduMap from './index'

// if (typeof (window as any).global === 'undefined') {
// 	;(window as any).global = window
// }
import baiduMapInitPlugin from './index'

// import baiduMapInitPlugin from 'vue3-baidu-map-gl'

const app = createApp(App)
// app.use(baiduMapInitPlugin)
app.use(baiduMapInitPlugin, { ak: '4stE857hYPHbEmgKhLiTAa0QbCIULHpm' })
app.mount('#app')
