import type { App, ComponentOptions } from 'vue'
import * as components from './components'

function createPlugin(options?: any): any {
	return (app: App) => {
		console.log('installing the plugin with the options(?):', options)
		// globally register directives / components / properties here
		for (const key in components) {
			app.component(key, components[key as keyof typeof components] as unknown as ComponentOptions)
		}
	}
}

export * from './components'
export * as tailwindcss from '../../tailwind.config'

export { createPlugin }
