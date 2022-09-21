/// <reference types="vite/client" />

interface Window {
	[key: string]: any
}
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}


// 环境变量
interface ImportMetaEnv {
	/**
	 * 百度地图ak
	*/
	readonly VITE_APP_BAIDU_MAP_AK: string
}
interface ImportMeta {
	readonly env: ImportMetaEnv
}