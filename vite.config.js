// Vite 构建工具配置文件
// 用于配置项目的构建、开发服务器、插件等设置

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // 配置 Vue 插件
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  
  // 开发服务器配置
  server: {
    // 服务器端口号
    port: 3000,
    // 是否自动打开浏览器
    open: true,
    // 主机地址，允许外部访问
    host: '0.0.0.0'
  },
  
  // 构建配置
  build: {
    // 输出目录
    outDir: 'dist',
    // 是否生成 source map
    sourcemap: false,
    // 代码分割配置
    rollupOptions: {
      // 输出文件命名规则
      output: {
        // 入口文件命名
        entryFileNames: 'js/[name]-[hash].js',
        // 块文件命名
        chunkFileNames: 'js/[name]-[hash].js',
        // 资源文件命名
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
})
