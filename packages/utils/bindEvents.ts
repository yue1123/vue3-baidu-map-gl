export type Callback = (...args: any[]) => void
export default function bindEvents(props: any, VueEmit: any, instance: any) {
  for (const key of Object.keys(props)) {
    if (/^on/.test(key) && props[key]) {
      const _key = key.replace(/^on/, '').toLocaleLowerCase()
      instance.addEventListener(_key, (e: any) => {
        e.preventDefault = e.preventDefault || e.domEvent?.preventDefault.bind(e.domEvent)
        e.stopPropagation = e.stopPropagation || e.domEvent?.stopPropagation.bind(e.domEvent)
        VueEmit(_key, e)
      })
    }
  }
}
