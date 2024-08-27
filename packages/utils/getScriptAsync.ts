import { noop } from './helper'

export interface Options {
  key: string
  src: string
  addCalToWindow?: boolean
  exportGetter?: () => any | undefined
}

export const BMapScriptLoaderWrapper: Record<string, Promise<any>> = {}
function getScriptAsync({ key, src, addCalToWindow = false, exportGetter = noop }: Options): Promise<any> {
  let exported: any
  try {
    exported = exportGetter()
  } catch (e) {
    //
  }

  if (!BMapScriptLoaderWrapper[key] && !exported) {
    BMapScriptLoaderWrapper[key] = new Promise<{ [x: string]: any }>((resolve, reject) => {
      const script: HTMLScriptElement = document.createElement('script')
      const cal = () => {
        resolve({ [key]: exportGetter() })
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
    return Promise.resolve({ [key]: exported })
  }
  return BMapScriptLoaderWrapper[key]
}
export default getScriptAsync
