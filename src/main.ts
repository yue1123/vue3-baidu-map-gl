import { createApp } from 'vue'
import App from './App.vue'
// import baiduMap from './index'

// if (typeof (window as any).global === 'undefined') {
// 	;(window as any).global = window
// }
const app = createApp(App)
// app.use(baiduMap, { ak: '4stE857hYPHbEmgKhLiTAa0QbCIULHpm' })
app.mount('#app')
