<template>
  <div class="max-w-3xl mx-auto p-6">
    <router-link to="/" class="inline-block mb-6 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-semibold shadow hover:bg-blue-200 transition-all">← 回到主页</router-link>
    <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h1 class="text-3xl font-bold mb-2 text-blue-700">前端简介与发展</h1>
      <p class="text-gray-700 mb-4">前端开发是通过 HTML、CSS、JavaScript 等技术实现网页和 Web 应用的用户界面。随着互联网的发展，前端技术不断演进，推动了 Web 体验的极大提升。</p>
      <div class="border-l-4 border-blue-400 pl-4 mb-6 text-gray-600">
        <b>发展历程：</b>
        <ul class="list-disc ml-6">
          <li><b>1990s：</b> HTML 诞生，静态网页为主</li>
          <li><b>2000s：</b> CSS、JavaScript 普及，出现动态网页</li>
          <li><b>2010s：</b> jQuery、Ajax、响应式设计流行</li>
          <li><b>2014+：</b> React、Vue、Angular 等现代框架兴起</li>
          <li><b>现在：</b> 前后端分离、全栈开发、低代码、Web3 等新趋势</li>
        </ul>
      </div>
    </div>
    <div class="bg-blue-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-blue-600">主流技术栈</h2>
      <ul class="list-disc ml-6 mb-2">
        <li>HTML5 / CSS3 / JavaScript (ES6+)</li>
        <li>主流框架：React、Vue、Angular</li>
        <li>构建工具：Webpack、Vite、npm</li>
        <li>UI库：Element Plus、Ant Design、Bootstrap</li>
      </ul>
    </div>
    <div class="bg-yellow-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-yellow-600">实战建议 & 常见坑</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li>重视语义化 HTML，利于 SEO 和可维护性。</li>
        <li>CSS 命名建议采用 BEM、模块化等规范。</li>
        <li>JavaScript 推荐用 ES6+ 语法，提升开发效率。</li>
      </ul>
    </div>
    <div class="bg-white rounded-xl shadow p-6">
      <h2 class="text-xl font-semibold mb-2 text-blue-700">推荐资源</h2>
      <ul class="list-disc ml-6">
        <li><a href="https://developer.mozilla.org/zh-CN/" target="_blank" class="text-blue-600 underline">MDN Web Docs</a></li>
        <li><a href="https://www.ruanyifeng.com/blog/" target="_blank" class="text-blue-600 underline">阮一峰的网络日志</a></li>
        <li><a href="https://juejin.cn/frontend" target="_blank" class="text-blue-600 underline">掘金前端</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// 可添加页面逻辑
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style> 