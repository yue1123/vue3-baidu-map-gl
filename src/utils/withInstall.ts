import { App, capitalize } from 'vue'

export type WithInstall<T> = T & {
	install(app: App): void
}

export function withInstall<T>(options: T) {
	;(options as Record<string, unknown>).install = (app: App) => {
		const { name } = options as unknown as { name: string }
		// 短横线命名
		app.component(name, options)
		// 大驼峰命名
		let _nameArray = name.split('-').slice(1)
		if (_nameArray) {
			_nameArray = _nameArray.map((item) => capitalize(item))
			app.component(_nameArray.join(''), options)
		}
	}

	return options as WithInstall<T>
}
