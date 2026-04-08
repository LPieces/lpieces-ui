import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { readdirSync } from "fs";

function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

export default defineConfig({
  plugins: [
    vue(), 
    dts({
      tsconfigPath: '../../tsconfig.build.json',
      outDir: 'dist/types',
    })
  ],
  build: {
    outDir: 'dist/es',
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'LPieces-UI',
      fileName: 'index',
      formats: ['es'],
    },
    rolldownOptions: {
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@popperjs/core',
        'async-validator',
      ],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
        assetFileNames: '[name][extname]',
        // 新的 codeSplitting 配置替代 manualChunks
        codeSplitting: {
          groups: [
            // 1. vendor 组：所有 node_modules 依赖
            {
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              priority: 10
            },
            // 2. hooks 组
            {
              name: 'hooks',
              test: /[\\/]packages[\\/]hooks[\\/]/,
              priority: 20
            },
            // 3. utils 组
            {
              name: 'utils',
              test: /[\\/]packages[\\/]utils[\\/]/,
              priority: 20
            },
            // 4. 动态组件分组：每个组件单独打包
            ...getDirectoriesSync(resolve(__dirname, '../components')).map(componentName => ({
              name: componentName,
              test: new RegExp(`[\\\\/]packages[\\\\/]components[\\\\/]${componentName}[\\\\/]`),
              priority: 30
            }))
          ]
        }
      }
    }
  }
})