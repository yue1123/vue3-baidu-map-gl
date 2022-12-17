/// <reference types="vite/client" />

declare module 'bmap-draw'

interface Window {
	[key: string]: any
}
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}