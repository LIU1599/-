<template>
  <div class="w-screen min-h-screen px-0 mx-0 p-6">
    <router-link to="/" class="inline-block mb-6 px-4 py-2 rounded-lg bg-purple-100 text-purple-700 font-semibold shadow hover:bg-purple-200 transition-all">← 回到主页</router-link>
    <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h1 class="text-3xl font-bold mb-2 text-purple-700 flex items-center"><span class="mr-2">📊</span>Echarts 数据可视化</h1>
      <p class="text-gray-700 mb-4">Echarts 是一个基于 JavaScript 的开源可视化图表库，适合数据可视化展示。下方可切换不同数据集和图表类型，体验交互式图表。</p>
      <div class="border-l-4 border-purple-400 pl-4 mb-6 text-gray-600">
        <b>交互演示：</b>选择不同数据集和图表类型，实时切换展示。
      </div>
    </div>

    <div class="bg-purple-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-purple-600">图表演示</h2>
      <div class="flex flex-wrap gap-4 mb-4">
        <label class="flex items-center gap-2">
          <input type="radio" v-model="chartType" value="line" /> 折线图
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" v-model="chartType" value="bar" /> 柱状图
        </label>
        <select v-model="dataSet" class="border rounded px-2 py-1">
          <option value="week">本周数据</option>
          <option value="month">本月数据</option>
          <option value="quarter">本季度数据</option>
        </select>
      </div>
      <div id="echarts-demo" class="w-full h-72 bg-gray-100 rounded shadow"></div>
      <div class="text-gray-500 text-sm mt-2">可通过上方控件切换图表类型和数据集，体验交互。</div>
    </div>

    <div class="bg-blue-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-blue-600">代码片段</h2>
      <div class="bg-gray-100 rounded p-4 mb-4 overflow-x-auto text-sm">
        <pre><code class="language-js">import * as echarts from 'echarts';
const chart = echarts.init(document.getElementById('echarts-demo'));
chart.setOption({
  xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
  yAxis: { type: 'value' },
  series: [{ data: [120, 200, 150, 80, 70], type: 'line' }]
});</code></pre>
      </div>
    </div>

    <div class="bg-yellow-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-yellow-600">实用技巧 & 常见坑</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-700">
        <li>容器必须有宽高，否则图表无法显示。</li>
        <li>数据量大时建议开启懒加载。</li>
        <li>图表自适应可用 <code>window.onresize</code> 监听。</li>
        <li>可通过 <code>setOption</code> 动态切换数据和类型。</li>
        <li>交互性强时建议用 <code>tooltip</code>、<code>legend</code>、<code>toolbox</code> 等配置。</li>
      </ul>
    </div>

    <div class="bg-green-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-green-600">更多实例</h2>
      <div class="mb-6">
        <h3 class="font-bold mb-1">多系列折线图</h3>
        <div id="echarts-demo-multi" class="w-full h-60 bg-gray-100 rounded mb-2"></div>
        <div class="bg-gray-100 rounded p-2 text-xs overflow-x-auto mb-2">
          <pre><code class="language-js">option = {
  tooltip: { trigger: 'axis' },
  legend: { data: ['邮件营销', '联盟广告'] },
  xAxis: { type: 'category', data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] },
  yAxis: { type: 'value' },
  series: [
    { name: '邮件营销', type: 'line', data: [120, 132, 101, 134, 90, 230, 210] },
    { name: '联盟广告', type: 'line', data: [220, 182, 191, 234, 290, 330, 310] }
  ]
}
</code></pre>
        </div>
      </div>
      <div class="mb-6">
        <h3 class="font-bold mb-1">饼图</h3>
        <div id="echarts-demo-pie" class="w-full h-60 bg-gray-100 rounded mb-2"></div>
        <div class="bg-gray-100 rounded p-2 text-xs overflow-x-auto mb-2">
          <pre><code class="language-js">option = {
  tooltip: { trigger: 'item' },
  legend: { top: '5%', left: 'center' },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
      label: { show: false, position: 'center' },
      emphasis: { label: { show: true, fontSize: 18, fontWeight: 'bold' } },
      labelLine: { show: false },
      data: [
        { value: 1048, name: '搜索引擎' },
        { value: 735, name: '直接访问' },
        { value: 580, name: '邮件营销' },
        { value: 484, name: '联盟广告' },
        { value: 300, name: '视频广告' }
      ]
    }
  ]
}
</code></pre>
        </div>
      </div>
      <div>
        <h3 class="font-bold mb-1">动态数据</h3>
        <div id="echarts-demo-dynamic" class="w-full h-60 bg-gray-100 rounded mb-2"></div>
        <div class="bg-gray-100 rounded p-2 text-xs overflow-x-auto mb-2">
          <pre><code class="language-js">// setInterval 动态更新数据
</code></pre>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow p-6">
      <h2 class="text-xl font-semibold mb-2 text-purple-700">推荐资源</h2>
      <ul class="list-disc ml-6">
        <li><a href="https://echarts.apache.org/zh/index.html" target="_blank" class="text-purple-600 underline">Echarts 官方文档</a></li>
        <li><a href="https://echarts.apache.org/examples/zh/index.html" target="_blank" class="text-purple-600 underline">Echarts 示例</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
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
  if (!chart) {
    chart = echarts.init(document.getElementById('echarts-demo'))
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
  // 多系列折线图
  const chartMulti = echarts.init(document.getElementById('echarts-demo-multi'))
  chartMulti.setOption({
    tooltip: { trigger: 'axis' },
    legend: { data: ['邮件营销', '联盟广告'] },
    xAxis: { type: 'category', data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] },
    yAxis: { type: 'value' },
    series: [
      { name: '邮件营销', type: 'line', data: [120, 132, 101, 134, 90, 230, 210] },
      { name: '联盟广告', type: 'line', data: [220, 182, 191, 234, 290, 330, 310] }
    ]
  })
  // 饼图
  const chartPie = echarts.init(document.getElementById('echarts-demo-pie'))
  chartPie.setOption({
    tooltip: { trigger: 'item' },
    legend: { top: '5%', left: 'center' },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
        label: { show: false, position: 'center' },
        emphasis: { label: { show: true, fontSize: 18, fontWeight: 'bold' } },
        labelLine: { show: false },
        data: [
          { value: 1048, name: '搜索引擎' },
          { value: 735, name: '直接访问' },
          { value: 580, name: '邮件营销' },
          { value: 484, name: '联盟广告' },
          { value: 300, name: '视频广告' }
        ]
      }
    ]
  })
  // 动态数据
  const chartDynamic = echarts.init(document.getElementById('echarts-demo-dynamic'))
  let dynamicData = [120, 132, 101, 134, 90, 230, 210]
  chartDynamic.setOption({
    xAxis: { type: 'category', data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] },
    yAxis: { type: 'value' },
    series: [{ data: dynamicData, type: 'line', smooth: true }]
  })
  setInterval(() => {
    dynamicData = dynamicData.map(v => v + Math.round(Math.random()*20-10))
    chartDynamic.setOption({ series: [{ data: dynamicData }] })
  }, 1500)
})

watch([chartType, dataSet], renderChart)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style> 