/// <reference types="vite/client" />
/// <reference types="vitest" />

declare module '*.vue' {
	import { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}

declare module '*.scss' {
	const content: Record<string, string>
	export default content
}