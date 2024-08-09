import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'live-demo') {
    return {
      base: './',
      plugins: [vue()],
      test: {
        globals: true,
      },
      resolve: {
        alias: {
          '~': resolve(__dirname, 'src', 'siriUI'),
        },
      },
      build: {
        rollupOptions: {
          input: ['index.html'],
        },
      },
    }
  }
  else {
    return {
      plugins: [vue()],
      test: {
        globals: true,
        setupFiles: 'src/setupTests.ts',
        includeSource: ['src/**/*.spec.ts', 'src/**/*.test.ts'],
      },
      resolve: {
        alias: {
          '~': resolve(__dirname, 'src', 'siriUI'),
        },
      },
      build: {
        lib: {
          entry: resolve(__dirname, 'src/siriUI/index.ts'),
          name: 'Vue3ViteNpmTemplate',
          fileName: 'vue3-vite-npm-template',
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue',
            },
          },
        },
      },
    }
  }
})
