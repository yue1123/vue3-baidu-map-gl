export type Callback = (...args: any[]) => void
export default function bindEvents(props: any, VueEmit: any, instance: any) {
	for (const key of Object.keys(props)) {
		if (/^on/.test(key) && props[key]) {
			let _key = key.replace(/^on/, '').toLocaleLowerCase()
			instance.addEventListener(_key, (e: any) => VueEmit(_key, e))
		}
	}
}
