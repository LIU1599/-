npm install<script setup>
// 已移除初始组件引用
</script>

<template>
  <!-- 应用根组件模板 -->
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- 路由视图容器 -->
    <!-- 根据当前路由显示对应的页面组件 -->
    <router-view />
  </div>
</template>

<script>
// 应用根组件脚本
export default {
  // 组件名称
  name: 'App',
  
  // 组件创建时的生命周期钩子
  created() {
    // 在组件创建时执行的初始化逻辑
    console.log('前端实习生知识指南应用已启动')
  },
  
  // 组件挂载后的生命周期钩子
  mounted() {
    // 在组件挂载到 DOM 后执行的逻辑
    this.initApp()
  },
  
  // 组件方法
  methods: {
    // 初始化应用
    initApp() {
      // 设置页面标题
      document.title = '前端实习生知识指南'
      
      // 检查浏览器兼容性
      this.checkBrowserCompatibility()
      
      // 初始化主题
      this.initTheme()
    },
    
    // 检查浏览器兼容性
    checkBrowserCompatibility() {
      // 检查是否支持现代 JavaScript 特性
      if (!window.Promise) {
        alert('您的浏览器版本过低，请升级到最新版本以获得最佳体验')
      }
    },
    
    // 初始化主题
    initTheme() {
      // 检查用户主题偏好
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      // 根据系统主题设置应用主题
      if (prefersDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
</script>

<style>
/* 应用根组件样式 */

/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 根元素样式 */
html {
  /* 设置根字体大小，便于 rem 单位计算 */
  font-size: 16px;
  /* 平滑滚动 */
  scroll-behavior: smooth;
}

/* 应用容器样式 */
#app {
  /* 最小高度占满视口 */
  min-height: 100vh;
  /* 宽度占满视口 */
  width: 100vw;
  /* 背景色 */
  background-color: #f9fafb;
  /* 字体设置 */
  font-family: 'PingFang SC', 'Microsoft YaHei', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  /* 字体渲染优化 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* 文本颜色 */
  color: #374151;
  /* 行高 */
  line-height: 1.6;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* 链接样式 */
a {
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #2563eb;
}

/* 按钮样式 */
button {
  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.3s ease;
}

/* 输入框样式 */
input, textarea {
  outline: none;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 8px 12px;
  transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
  border-color: #3b82f6;
}

/* 响应式设计 */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
  
  #app {
    padding: 0;
  }
}

/* 动画效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
