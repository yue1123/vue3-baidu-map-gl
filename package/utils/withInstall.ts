import { App, camelize, capitalize } from 'vue'

export type WithInstall<T> = T & {
	install(app: App): void
}

export function withInstall<T>(options: T) {
	;(options as Record<string, unknown>).install = (app: App) => {
		const { name } = options as unknown as { name: string }
		app.component(name, options)
		app.component(camelize(capitalize(name.split('-')[1])), options)
	}

	return options as WithInstall<T>
}
