export interface Options {
  key: string
  src: string
  addCalToWindow: boolean
}

const BMapScriptLoaderWrapper: Record<string, Promise<any>> = {}
function getScriptAsync({ key, src, addCalToWindow }: Options): Promise<any> {
  if (!BMapScriptLoaderWrapper[key]) {
    BMapScriptLoaderWrapper[key] = new Promise<void>((resolve, reject) => {
      const script: HTMLScriptElement = document.createElement('script')
      const cal = () => {
        resolve()
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
  }
  return BMapScriptLoaderWrapper[key]
}
export default getScriptAsync
