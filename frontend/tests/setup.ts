import { expect } from 'vitest'
import matchers from '@testing-library/jest-dom/matchers'
import { config } from '@vue/test-utils'

// Extend expect dengan matchers Jest DOM
expect.extend(matchers)

// Konfigurasi global Vue Test Utils
config.global.stubs = {
	Transition: false,
	'transition-group': false
}

config.global.mocks = {
	$t: (key: string) => key // Mock untuk i18n jika digunakan
}