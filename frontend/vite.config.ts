import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import type { UserConfig } from 'vite'

export default defineConfig(({ mode }) => {
  // Load env dari direktori root
  const env = loadEnv(mode, path.resolve(__dirname, '../'), ['VITE_'])

  return {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.includes('-')
          }
        }
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '~tailwind': path.resolve(__dirname, '../node_modules/tailwindcss'),
        '~primevue': path.resolve(__dirname, '../node_modules/primevue')
      }
    },
    css: {
      postcss: './postcss.config.js'
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL || 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          configure: (proxy) => {
            proxy.on('error', (err) => {
              console.error('Proxy error:', err)
            })
          }
        }
      },
      fs: {
        strict: false
      }
    },
    define: {
      'import.meta.env.VITE_API_BASE_URL': JSON.stringify(env.VITE_API_BASE_URL)
    },
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        include: ['src/**/*.{ts,vue}']
      }
    },
    build: {
      chunkSizeWarningLimit: 1600
    }
  } as UserConfig
})