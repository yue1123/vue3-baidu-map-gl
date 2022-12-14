/// <reference types="vite/client" />
interface Window {
  [key: string]: any
  mapv: any
}
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'mapvgl'
declare module 'mapv'
declare module 'mapvgl/dist/mapvgl.threelayers.min'

interface ImportMeta {
  readonly env: ImportMetaEnv
}
