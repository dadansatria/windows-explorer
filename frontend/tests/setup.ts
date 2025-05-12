import { vi } from 'vitest'

// Mock PrimeVue config globally
vi.mock('primevue/config', () => ({
  ripple: true, 
  inputStyle: 'filled', 
  config: {} // Mock the config property that seems to be causing the error
}))

// Add any other global mocks needed for testing here
