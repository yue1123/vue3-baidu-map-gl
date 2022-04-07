/// <reference types="vite/client" />

interface Window {
	/**
	 * 百度地图jsonp初始化方法
	 */
	_initBMap: () => void
	[key: string]: any
}
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}
