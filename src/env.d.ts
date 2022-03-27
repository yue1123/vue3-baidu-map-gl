/// <reference types="vite/client" />

interface Window {
	_BMap: any
	BMapGL: import('../types').BMapGL
	/**
	 * 百度地图初始化方法
	 */
	_initBMap: () => void
}
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
// 百度地图
declare const BMap: any

