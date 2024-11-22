import { resolve } from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const storybookBuild = process.env.STORYBOOK_BUILD === 'true'

export default defineConfig({
  // plugins: [react()],
  resolve: {
    alias: {
      lib: resolve(__dirname, './src/lib'),
      components: resolve(__dirname, './src/components'),
      common: resolve(__dirname, './src/common'),
      ui: resolve(__dirname, './src/components/ui')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'design-system-bmr',
      fileName: 'design-system-bmr'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
          'react/jsx-runtime': 'react/jsx-runtime'
        }
      }
    }
  },
  plugins: [
    react(),
    !storybookBuild && dts({ rollupTypes: true }),
    viteStaticCopy({
      targets: [
        {
          src: './tailwind-presets/*', // Source file to copy
          dest: '.' // Destination directory in the dist folder
        }
        // {
        //   src: './assets/*', // Source file to copy
        //   dest: './assets/', // Destination directory in the dist folder
        // },
      ]
    })
  ].filter(Boolean)
})
