import { vi } from 'vitest'
import { config } from '@vue/test-utils'

// Mock PrimeVue components
config.global.components = {
  InputText: {
    template: '<input v-bind="$attrs" />'
  },
  Dropdown: {
    template: '<select v-bind="$attrs" />'
  },
  Button: {
    template: '<button v-bind="$attrs" />'
  }
}

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
}) 