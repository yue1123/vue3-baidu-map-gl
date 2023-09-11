import { noop } from './helper'

export interface Options {
  key: string
  src: string
  addCalToWindow: boolean
  exportGetter?: () => any | undefined
}

export const BMapScriptLoaderWrapper: Record<string, Promise<any>> = {}
function getScriptAsync({ key, src, addCalToWindow, exportGetter = noop }: Options): Promise<any> {
  const exported: any = exportGetter()
  if (!BMapScriptLoaderWrapper[key]) {
    BMapScriptLoaderWrapper[key] = new Promise<void>((resolve, reject) => {
      const script: HTMLScriptElement = document.createElement('script')
      const cal = () => {
        resolve(exportGetter())
        window.document.body.removeChild(script)
      }
      if (addCalToWindow) {
        window[key] = cal
      } else {
        script.onload = function (this: any) {
          if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
            script.onload = null
            cal()
          }
        }
      }
      script.src = src
      script.type = 'text/javascript'
      script.defer = true
      script.onerror = reject
      document.body.appendChild(script)
    })
  } else if (exported !== undefined) {
    return Promise.resolve(exported)
  }
  return BMapScriptLoaderWrapper[key]
}
export default getScriptAsync
