<template>
  <div class="w-screen min-h-screen px-0 mx-0 p-6">
    <router-link to="/" class="inline-block mb-6 px-4 py-2 rounded-lg bg-green-100 text-green-700 font-semibold shadow hover:bg-green-200 transition-all">← 回到主页</router-link>
    <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h1 class="text-3xl font-bold mb-2 text-green-700 flex items-center"><span class="mr-2">🟩</span>Vue 基础与进阶</h1>
      <p class="text-gray-700 mb-4">Vue 是一套用于构建用户界面的渐进式 JavaScript 框架，易学易用，灵活高效。</p>
      <div class="border-l-4 border-green-400 pl-4 mb-6 text-gray-600">
        <b>适用场景：</b>中小型项目、后台管理、移动端、渐进式集成。
      </div>
    </div>

    <div class="bg-green-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-green-600">基础用法</h2>
      <p class="mb-2">1. 响应式数据与模板语法：</p>
      <div class="bg-gray-100 rounded p-4 mb-4 overflow-x-auto text-sm">
        <pre><code class="language-js">&lt;script setup&gt;
import { ref } from 'vue'
const count = ref(0)
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click=\"count++\"&gt;计数：{{ count }}&lt;/button&gt;
&lt;/template&gt;</code></pre>
      </div>
      <p class="mb-2">2. 组件与 Props：</p>
      <div class="bg-gray-100 rounded p-4 mb-4 overflow-x-auto text-sm">
        <pre><code class="language-js">// 父组件
&lt;Child :msg=\"'Hello'\" /&gt;

// 子组件
defineProps(['msg'])</code></pre>
      </div>
    </div>

    <div class="bg-blue-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-blue-600">进阶与优化技巧</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li>使用 <code>watch</code>、<code>computed</code> 实现复杂逻辑。</li>
        <li>合理拆分组件，提升复用性。</li>
        <li>使用 <code>v-memo</code>、<code>v-once</code> 优化渲染。</li>
        <li>异步组件、路由懒加载提升性能。</li>
      </ul>
    </div>

    <div class="bg-yellow-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-yellow-600">实战建议 & 常见坑</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li>避免直接修改 props，需用 emit 通信。</li>
        <li>v-for 建议加唯一 key。</li>
        <li>setup 里不要滥用 watch，优先 computed。</li>
        <li>注意响应式丢失问题（如对象新增属性）。</li>
      </ul>
    </div>

    <div class="bg-purple-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-purple-600">更多实例</h2>
      <div class="mb-6">
        <h3 class="font-bold mb-1">自定义指令</h3>
        <div class="bg-gray-100 rounded p-2 text-xs overflow-x-auto mb-2">
          <pre><code class="language-js">// main.js
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})
// 使用：<input v-focus />
</code></pre>
        </div>
      </div>
      <div class="mb-6">
        <h3 class="font-bold mb-1">插槽用法</h3>
        <div class="bg-gray-100 rounded p-2 text-xs overflow-x-auto mb-2">
          <pre><code class="language-html">// 父组件
<MyCard>
  <template #header>标题</template>
  <div>内容</div>
</MyCard>
// 子组件
<slot name="header"></slot>
<slot></slot>
</code></pre>
        </div>
      </div>
      <div>
        <h3 class="font-bold mb-1">watch/computed 实例</h3>
        <div class="bg-gray-100 rounded p-2 text-xs overflow-x-auto mb-2">
          <pre><code class="language-js">import { ref, computed, watch } from 'vue'
const count = ref(0)
const double = computed(() => count.value * 2)
watch(count, val => console.log(val))
</code></pre>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow p-6">
      <h2 class="text-xl font-semibold mb-2 text-green-700">推荐资源</h2>
      <ul class="list-disc ml-6">
        <li><a href="https://cn.vuejs.org/" target="_blank" class="text-green-600 underline">Vue 官方文档</a></li>
        <li><a href="https://vuejs.bootcss.com/" target="_blank" class="text-green-600 underline">Vue 中文文档</a></li>
        <li><a href="https://juejin.cn/tag/Vue.js" target="_blank" class="text-green-600 underline">掘金 Vue 专题</a></li>
      </ul>
    </div>

    <div class="content-grid">
      <!-- Vue2 和 Vue3 区别 -->
      <Card title="Vue2 与 Vue3 的区别" type="primary" class="content-card card-bar-primary">
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li><b>响应式原理：</b>Vue2 使用 Object.defineProperty，Vue3 使用 Proxy，性能更优，支持更多数据类型。</li>
          <li><b>Composition API：</b>Vue3 新增 Composition API（setup、ref、reactive 等），更灵活的逻辑复用。</li>
          <li><b>性能优化：</b>Vue3 编译更快、体积更小，支持 Tree-shaking。</li>
          <li><b>TypeScript 支持：</b>Vue3 原生支持 TypeScript。</li>
          <li><b>Fragment/Teleport/Suspense：</b>Vue3 新增无根节点、传送门、异步组件等特性。</li>
        </ul>
      </Card>

      <!-- 生命周期钩子 -->
      <Card title="生命周期钩子" type="success" class="content-card card-bar-success">
        <div class="lifecycle-section">
          <div class="table-scroll">
            <table class="lifecycle-table">
              <thead>
                <tr>
                  <th>阶段</th>
                  <th>Vue2 钩子</th>
                  <th>Vue3 钩子</th>
                  <th>说明</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>创建</td><td>beforeCreate<br>created</td><td>setup</td><td>实例初始化、数据响应式</td></tr>
                <tr><td>挂载</td><td>beforeMount<br>mounted</td><td>onBeforeMount<br>onMounted</td><td>DOM 挂载前后</td></tr>
                <tr><td>更新</td><td>beforeUpdate<br>updated</td><td>onBeforeUpdate<br>onUpdated</td><td>数据变更、DOM 更新前后</td></tr>
                <tr><td>销毁/卸载</td><td>beforeDestroy<br>destroyed</td><td>onBeforeUnmount<br>onUnmounted</td><td>组件销毁前后</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      <!-- 父子组件函数传递方式 -->
      <Card title="父子组件函数传递方式" type="warning" class="content-card card-bar-warning">
        <div class="parent-child-section">
          <h4>父传子（通过 props 传递函数）</h4>
          <div class="code-block-wrap">
            <pre class="code-block"><code id="code1" v-pre>&#47;&#47; 父组件
&lt;MyChild :onAction=&quot;handleAction&quot; /&gt;

&#47;&#47; 子组件 props 接收
props: {
  onAction: Function
},
&#47;&#47; 子组件调用
this.onAction(&#39;参数&#39;)</code></pre>
            <button class="copy-btn" @click="copyCode('code1')">复制</button>
          </div>
          <h4>子传父（通过 $emit 事件）</h4>
          <div class="code-block-wrap">
            <pre class="code-block"><code id="code2" v-pre>&#47;&#47; 子组件
this.$emit(&#39;customEvent&#39;, &#39;参数&#39;)

&#47;&#47; 父组件
&lt;MyChild @customEvent=&quot;handleCustomEvent&quot; /&gt;</code></pre>
            <button class="copy-btn" @click="copyCode('code2')">复制</button>
          </div>
        </div>
      </Card>

      <!-- v-if 与 v-show 区别 -->
      <Card title="v-if 与 v-show 的区别" type="danger" class="content-card card-bar-danger">
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li><b>v-if：</b>条件渲染，真正的 DOM 销毁与重建，适合切换不频繁的场景。</li>
          <li><b>v-show：</b>仅切换 display 样式，频繁切换时性能更优。</li>
          <li><b>对比：</b>v-if 有更高的切换开销，v-show 有初始渲染开销。</li>
        </ul>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const chartType = ref('line')
const dataSet = ref('week')
let chart = null

const dataMap = {
  week: {
    x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    y: [120, 200, 150, 80, 70, 110, 130]
  },
  month: {
    x: Array.from({length: 30}, (_, i) => `${i+1}日`),
    y: Array.from({length: 30}, () => Math.floor(Math.random()*200+50))
  },
  quarter: {
    x: ['1月', '2月', '3月'],
    y: [800, 950, 700]
  }
}

function renderChart() {
  const dom = document.getElementById('echarts-demo')
  if (!dom) return
  if (!chart) {
    chart = echarts.init(dom)
  }
  const { x, y } = dataMap[dataSet.value]
  chart.setOption({
    tooltip: { trigger: 'axis' },
    legend: { data: ['数据'] },
    toolbox: { feature: { saveAsImage: {} } },
    xAxis: { type: 'category', data: x },
    yAxis: { type: 'value' },
    series: [{ name: '数据', data: y, type: chartType.value, smooth: true }]
  })
  chart.resize()
}

onMounted(() => {
  renderChart()
  window.addEventListener('resize', () => chart && chart.resize())
})

onBeforeUnmount(() => {
  if (chart) {
    chart.dispose()
    chart = null
  }
})

watch([chartType, dataSet], renderChart)
</script>

<script>
export default {
  name: 'VuePage',
  methods: {
    copyCode(id) {
      const code = document.getElementById(id)?.innerText || ''
      if (code) {
        navigator.clipboard.writeText(code.replace(/\\n/g, '\n'))
        alert('代码已复制！')
      }
    }
  }
}
</script>

<style scoped>
.vue-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
}

.page-title {
  font-size: 2.7rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.13);
  letter-spacing: 2px;
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.92;
  max-width: 600px;
  margin: 0 auto;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.content-card {
  background: rgba(255,255,255,0.97);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.10);
  padding: 2.2rem 1.5rem 1.5rem 1.5rem;
  border: none;
  position: relative;
  transition: box-shadow 0.3s, transform 0.3s;
}
.content-card:hover {
  box-shadow: 0 16px 48px rgba(0,0,0,0.18);
  transform: translateY(-4px) scale(1.02);
}
.card-bar-primary::before {
  content: '';
  display: block;
  height: 6px;
  width: 100%;
  border-radius: 8px 8px 0 0;
  background: linear-gradient(90deg,#6366f1,#a5b4fc);
  position: absolute;
  left: 0; top: 0;
}
.card-bar-success::before {
  content: '';
  display: block;
  height: 6px;
  width: 100%;
  border-radius: 8px 8px 0 0;
  background: linear-gradient(90deg,#10b981,#6ee7b7);
  position: absolute;
  left: 0; top: 0;
}
.card-bar-warning::before {
  content: '';
  display: block;
  height: 6px;
  width: 100%;
  border-radius: 8px 8px 0 0;
  background: linear-gradient(90deg,#f59e0b,#fde68a);
  position: absolute;
  left: 0; top: 0;
}
.card-bar-danger::before {
  content: '';
  display: block;
  height: 6px;
  width: 100%;
  border-radius: 8px 8px 0 0;
  background: linear-gradient(90deg,#ef4444,#fca5a5);
  position: absolute;
  left: 0; top: 0;
}
.content-card h4 {
  font-size: 1.18rem;
  font-weight: 700;
  color: #4f46e5;
  margin-bottom: 0.7rem;
}
.list-disc {
  margin-left: 1.5rem;
  color: #374151;
  font-size: 1rem;
  line-height: 1.8;
}
.list-disc li {
  margin-bottom: 0.5rem;
}
.code-block-wrap {
  position: relative;
  margin-bottom: 1.2rem;
}
.code-block {
  background: #1e293b;
  color: #f1f5f9;
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.98rem;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  margin: 0.5rem 0 0.2rem 0;
  overflow-x: auto;
  line-height: 1.7;
}
.copy-btn {
  position: absolute;
  top: 10px;
  right: 16px;
  background: #6366f1;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.25rem 0.7rem;
  font-size: 0.95rem;
  cursor: pointer;
  opacity: 0.85;
  transition: background 0.2s, opacity 0.2s;
  z-index: 2;
}
.copy-btn:hover {
  background: #4338ca;
  opacity: 1;
}
.table-scroll {
  overflow-x: auto;
}
.lifecycle-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.2rem 0;
  background: #f8fafc;
  border-radius: 8px;
  overflow: hidden;
  font-size: 1rem;
  min-width: 600px;
}
.lifecycle-table th, .lifecycle-table td {
  border: 1px solid #e5e7eb;
  padding: 0.7rem 0.5rem;
  text-align: center;
}
.lifecycle-table th {
  background: #6366f1;
  color: #fff;
  font-weight: 600;
}
.lifecycle-table tr:nth-child(even) td {
  background: #f3f4f6;
}
@media (max-width: 768px) {
  .vue-page {
    padding: 1rem;
  }
  .content-card {
    padding: 1rem 0.5rem 0.8rem 0.5rem;
  }
  .content-grid {
    gap: 0.8rem;
  }
  .page-title {
    font-size: 1.3rem;
  }
  .lifecycle-table th, .lifecycle-table td {
    font-size: 0.92rem;
    padding: 0.5rem 0.2rem;
  }
  .lifecycle-table {
    min-width: 400px;
  }
}
@media (prefers-color-scheme: dark) {
  .content-card {
    background: rgba(31,41,55,0.97);
    color: #f9fafb;
  }
  .list-disc {
    color: #d1d5db;
  }
  .lifecycle-table {
    background: #374151;
  }
  .lifecycle-table th {
    background: #6366f1;
    color: #fff;
  }
  .lifecycle-table td {
    color: #f9fafb;
    border-color: #4b5563;
  }
  .lifecycle-table tr:nth-child(even) td {
    background: #4b5563;
  }
  .code-block {
    background: #0f172a;
    color: #e0e7ef;
  }
}
</style> 