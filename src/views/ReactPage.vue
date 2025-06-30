<template>
  <div class="w-screen min-h-screen px-0 mx-0 p-6">
    <router-link to="/" class="inline-block mb-6 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-semibold shadow hover:bg-blue-200 transition-all">← 回到主页</router-link>
    <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h1 class="text-3xl font-bold mb-2 text-blue-700 flex items-center"><span class="mr-2">⚛️</span>React 基础与进阶</h1>
      <p class="text-gray-700 mb-4">React 是用于构建用户界面的 JavaScript 库，强调组件化和声明式开发。</p>
      <div class="border-l-4 border-blue-400 pl-4 mb-6 text-gray-600">
        <b>适用场景：</b>单页应用、复杂交互、组件复用需求强的项目。
      </div>
    </div>
    <div class="bg-blue-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-blue-600">基础用法</h2>
      <p class="mb-2">1. 创建函数组件：</p>
      <div class="bg-gray-100 rounded p-4 mb-4 overflow-x-auto text-sm">
        <pre><code class="language-js">import React from 'react';
function Hello(props) {
  return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}</code></pre>
      </div>
      <p class="mb-2">2. 使用 useState 管理状态：</p>
      <div class="bg-gray-100 rounded p-4 mb-4 overflow-x-auto text-sm">
        <pre><code class="language-js">import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    &lt;div&gt;
      &lt;p&gt;计数：{count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;加一&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      </div>
    </div>
    <div class="bg-green-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-green-600">进阶与优化技巧</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li><b>Hooks 组合：</b>合理拆分自定义 Hook，提升复用性。</li>
        <li><b>性能优化：</b>使用 <code>React.memo</code>、<code>useMemo</code>、<code>useCallback</code> 避免不必要的渲染。</li>
        <li><b>异步数据管理：</b>推荐用 <code>react-query</code>、<code>Redux Toolkit</code> 管理异步状态。</li>
        <li><b>代码分割：</b>用 <code>React.lazy</code> 和 <code>Suspense</code> 实现路由级懒加载。</li>
      </ul>
    </div>
    <div class="bg-yellow-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-yellow-600">实战建议 & 常见坑</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li>避免直接修改 state，始终用 setState。</li>
        <li>组件 key 必须唯一且稳定，避免用 index 作为 key。</li>
        <li>事件处理函数建议用 useCallback 包裹，减少子组件重复渲染。</li>
        <li>注意闭包陷阱，Hooks 依赖项要写全。</li>
      </ul>
    </div>
    <div class="bg-purple-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-purple-600">更多实例</h2>
      <div class="mb-6">
        <h3 class="font-bold mb-1">受控表单</h3>
        <div class="bg-gray-100 rounded p-2 text-xs overflow-x-auto mb-2">
          <pre><code class="language-js">import React, { useState } from 'react';
function MyForm() {
  const [value, setValue] = useState('');
  return (
    &lt;input value=&#123;value&#125; onChange=&#123;e =&gt; setValue(e.target.value)&#125; /&gt;
  );
}</code></pre>
        </div>
      </div>
      <div class="mb-6">
        <h3 class="font-bold mb-1">父子通信</h3>
        <div class="bg-gray-100 rounded p-2 text-xs overflow-x-auto mb-2">
          <pre><code class="language-js">function Parent() {
  const [msg, setMsg] = useState('Hello');
  return &lt;Child msg=&#123;msg&#125; /&gt;;
}
function Child(&#123; msg &#125;) {
  return &lt;div&gt;&#123;msg&#125;&lt;/div&gt;;
}</code></pre>
        </div>
      </div>
      <div>
        <h3 class="font-bold mb-1">列表渲染</h3>
        <div class="bg-gray-100 rounded p-2 text-xs overflow-x-auto mb-2">
          <pre><code class="language-js">const list = ['A', 'B', 'C'];
&lt;ul&gt;
  &#123;list.map(item =&gt; &lt;li key=&#123;item&#125;&gt;&#123;item&#125;&lt;/li&gt;)&#125;
&lt;/ul&gt;
</code></pre>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-xl shadow p-6">
      <h2 class="text-xl font-semibold mb-2 text-blue-700">推荐资源</h2>
      <ul class="list-disc ml-6">
        <li><a href="https://react.dev/" target="_blank" class="text-blue-600 underline">React 官方文档</a></li>
        <li><a href="https://zh-hans.react.dev/learn" target="_blank" class="text-blue-600 underline">React 中文学习</a></li>
        <li><a href="https://react.dev/learn/optimizing-performance" target="_blank" class="text-blue-600 underline">性能优化官方指南</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// 可添加页面逻辑
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.6s cubic-bezier(.55,0,.1,1);
}
.slide-fade-enter-from {
  transform: translateX(40px);
  opacity: 0;
}
</style> 