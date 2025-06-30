<template>
  <div class="w-screen min-h-screen px-0 mx-0 p-6">
    <router-link to="/" class="inline-block mb-6 px-4 py-2 rounded-lg bg-pink-100 text-pink-700 font-semibold shadow hover:bg-pink-200 transition-all">← 回到主页</router-link>
    <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h1 class="text-3xl font-bold mb-2 text-pink-700 flex items-center"><span class="mr-2">🧩</span>Element Plus 组件库实战</h1>
      <p class="text-gray-700 mb-4">Element Plus 是基于 Vue 3 的桌面端组件库，适合后台管理系统等场景。下方展示常用组件的实用案例。</p>
    </div>

    <!-- 表单演示 -->
    <div class="bg-pink-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-pink-600">表单演示</h2>
      <el-form :model="form" :rules="rules" ref="formRef" label-width="80px" class="mb-4">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" clearable placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" clearable placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onFormSubmit" :loading="formLoading">提交</el-button>
        </el-form-item>
      </el-form>
      <el-alert v-if="formSuccess" title="提交成功！" type="success" show-icon class="mb-2" :closable="false" />
      <div class="bg-gray-100 rounded p-2 text-xs overflow-x-auto mb-2">
        <pre><code class="language-html">&lt;el-form :model="form" :rules="rules" ref="formRef" label-width="80px"&gt;
  &lt;el-form-item label="姓名" prop="name"&gt;
    &lt;el-input v-model="form.name" /&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label="邮箱" prop="email"&gt;
    &lt;el-input v-model="form.email" /&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item&gt;
    &lt;el-button type="primary" @click="onFormSubmit"&gt;提交&lt;/el-button&gt;
  &lt;/el-form-item&gt;
&lt;/el-form&gt;</code></pre>
      </div>
    </div>

    <!-- 表格演示（支持排序和分页） -->
    <div class="bg-blue-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-blue-600">表格演示（排序/分页）</h2>
      <el-table :data="pagedTableData" class="mb-4" @sort-change="onSortChange" border stripe highlight-current-row>
        <el-table-column prop="date" label="日期" sortable="custom" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="address" label="地址" />
      </el-table>
      <el-pagination
        class="mb-2"
        background
        layout="prev, pager, next"
        :total="tableData.length"
        :page-size="pageSize"
        v-model:current-page="currentPage"
      />
      <el-alert v-if="tableAlert" title="已切换到第 {{currentPage}} 页" type="info" show-icon class="mb-2" :closable="false" />
      <div class="bg-gray-100 rounded p-2 text-xs overflow-x-auto mb-2">
        <pre><code class="language-html">&lt;el-table :data="pagedTableData" @sort-change="onSortChange"&gt;
  &lt;el-table-column prop="date" label="日期" sortable="custom" /&gt;
  ...
&lt;/el-table&gt;
&lt;el-pagination :total="tableData.length" :page-size="pageSize" v-model:current-page="currentPage" /&gt;</code></pre>
      </div>
    </div>

    <!-- 弹窗与通知（弹窗内表单） -->
    <div class="bg-yellow-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-yellow-600">弹窗与通知</h2>
      <el-button @click="openDialog" class="mb-2">打开弹窗</el-button>
      <el-button @click="notify" class="mb-2 ml-2">通知</el-button>
      <el-dialog v-model="dialogVisible" title="弹窗表单" @open="onDialogOpen">
        <el-form :model="dialogForm" :rules="dialogRules" ref="dialogFormRef">
          <el-form-item label="内容" prop="content">
            <el-input v-model="dialogForm.content" clearable placeholder="请输入内容" />
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="onDialogSubmit" :loading="dialogLoading">确定</el-button>
        </template>
      </el-dialog>
      <el-alert v-if="dialogSuccess" title="弹窗表单提交成功！" type="success" show-icon class="mb-2 mt-2" :closable="false" />
      <div class="bg-gray-100 rounded p-2 text-xs overflow-x-auto mb-2 mt-2">
        <pre><code class="language-html">&lt;el-dialog v-model="dialogVisible" title="弹窗表单"&gt;
  &lt;el-form :model="dialogForm" :rules="dialogRules" ref="dialogFormRef"&gt;
    &lt;el-form-item label="内容" prop="content"&gt;
      &lt;el-input v-model="dialogForm.content" /&gt;
    &lt;/el-form-item&gt;
  &lt;/el-form&gt;
  &lt;template #footer&gt;
    &lt;el-button&gt;取消&lt;/el-button&gt;
    &lt;el-button type="primary"&gt;确定&lt;/el-button&gt;
  &lt;/template&gt;
&lt;/el-dialog&gt;</code></pre>
      </div>
    </div>

    <!-- Tabs 与进度条（动态内容/动画） -->
    <div class="bg-green-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-green-600">Tabs 与进度条</h2>
      <el-tabs v-model="activeTab" class="mb-4">
        <el-tab-pane label="Tab 1" name="1">{{ tabContent[0] }}</el-tab-pane>
        <el-tab-pane label="Tab 2" name="2">{{ tabContent[1] }}</el-tab-pane>
      </el-tabs>
      <el-progress :percentage="progress" class="mb-2" status="success" />
      <el-button @click="startProgress">自动进度</el-button>
      <el-alert v-if="progress === 100" title="进度已完成！" type="success" show-icon class="mb-2 mt-2" :closable="false" />
      <div class="bg-gray-100 rounded p-2 text-xs overflow-x-auto mb-2 mt-2">
        <pre><code class="language-html">&lt;el-tabs v-model="activeTab"&gt;
  &lt;el-tab-pane label="Tab 1" name="1"&gt;内容一&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label="Tab 2" name="2"&gt;内容二&lt;/el-tab-pane&gt;
&lt;/el-tabs&gt;
&lt;el-progress :percentage="progress" /&gt;</code></pre>
      </div>
    </div>

    <!-- 更多交互组件 -->
    <div class="bg-blue-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-blue-600">更多交互组件</h2>
      <div class="flex flex-wrap gap-6 items-center mb-4">
        <el-switch v-model="switchVal" active-text="开" inactive-text="关" @change="onSwitchChange" />
        <el-slider v-model="sliderVal" :min="0" :max="100" style="width:200px" @change="onSliderChange" />
        <el-date-picker v-model="dateVal" type="date" placeholder="选择日期" @change="onDateChange" />
      </div>
      <el-alert v-if="switchAlert" title="开关已切换为：{{switchVal ? '开' : '关'}}" type="info" show-icon class="mb-2" :closable="false" />
      <el-alert v-if="sliderAlert" title="滑块值：{{sliderVal}}" type="info" show-icon class="mb-2" :closable="false" />
      <el-alert v-if="dateAlert" title="选择日期：{{dateVal}}" type="info" show-icon class="mb-2" :closable="false" />
      <div class="bg-gray-100 rounded p-2 text-xs overflow-x-auto mb-2">
        <pre><code class="language-html">&lt;el-switch v-model="switchVal" ... /&gt;
&lt;el-slider v-model="sliderVal" ... /&gt;
&lt;el-date-picker v-model="dateVal" ... /&gt;</code></pre>
      </div>
    </div>

    <!-- 更多实例分区保留 -->
    <div class="bg-purple-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-2 text-purple-600">更多实例</h2>
      <div class="mb-6">
        <h3 class="font-bold mb-1">表格</h3>
        <div class="bg-gray-100 rounded p-2 text-xs overflow-x-auto mb-2">
          <pre><code class="language-html"> <el-table :data="tableData">
   <el-table-column prop="date" label="日期" />
   <el-table-column prop="name" label="姓名" />
 </el-table>
</code></pre>
        </div>
      </div>
      <div class="mb-6">
        <h3 class="font-bold mb-1">弹窗</h3>
        <div class="bg-gray-100 rounded p-2 text-xs overflow-x-auto mb-2">
          <pre><code class="language-html"> <el-button @click="dialogVisible = true">打开弹窗</el-button>
 <el-dialog v-model="dialogVisible" title="提示">
   <span>内容</span>
 </el-dialog>
</code></pre>
        </div>
      </div>
      <div>
        <h3 class="font-bold mb-1">表单校验</h3>
        <div class="bg-gray-100 rounded p-2 text-xs overflow-x-auto mb-2">
          <pre><code class="language-js">const rules = {
  name: [ { required: true, message: '请输入姓名', trigger: 'blur' } ]
}
</code></pre>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow p-6">
      <h2 class="text-xl font-semibold mb-2 text-pink-700">推荐资源</h2>
      <ul class="list-disc ml-6">
        <li><a href="https://element-plus.org/zh-CN/" target="_blank" class="text-pink-600 underline">Element Plus 官方文档</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, nextTick, watch } from 'vue'
import { ElNotification } from 'element-plus'
const form = reactive({ name: '', email: '' })
const rules = {
  name: [ { required: true, message: '请输入姓名', trigger: 'blur' } ],
  email: [ { required: true, message: '请输入邮箱', trigger: 'blur' } ]
}
const formRef = ref()
const formLoading = ref(false)
const formSuccess = ref(false)
function onFormSubmit() {
  formLoading.value = true
  formRef.value.validate((valid) => {
    if (valid) {
      setTimeout(() => {
        formLoading.value = false
        formSuccess.value = true
        ElNotification({ title: '提交成功', message: `${form.name} / ${form.email}`, type: 'success' })
        setTimeout(() => { formSuccess.value = false }, 2000)
      }, 800)
    } else {
      formLoading.value = false
    }
  })
}

const tableData = ref([
  { date: '2023-01-01', name: '张三', address: '北京' },
  { date: '2023-01-02', name: '李四', address: '上海' },
  { date: '2023-01-03', name: '王五', address: '广州' },
  { date: '2023-01-04', name: '赵六', address: '深圳' },
  { date: '2023-01-05', name: '钱七', address: '杭州' },
  { date: '2023-01-06', name: '孙八', address: '南京' },
  { date: '2023-01-07', name: '周九', address: '成都' }
])
const pageSize = 3
const currentPage = ref(1)
const tableAlert = ref(false)
const sortProp = ref('date')
const sortOrder = ref('')
const pagedTableData = computed(() => {
  let data = [...tableData.value]
  if (sortOrder.value) {
    data.sort((a, b) => {
      if (sortOrder.value === 'ascending') return a[sortProp.value] > b[sortProp.value] ? 1 : -1
      if (sortOrder.value === 'descending') return a[sortProp.value] < b[sortProp.value] ? 1 : -1
      return 0
    })
  }
  const start = (currentPage.value - 1) * pageSize
  return data.slice(start, start + pageSize)
})
function onSortChange({ prop, order }) {
  sortProp.value = prop
  sortOrder.value = order
}
watch(currentPage, () => {
  tableAlert.value = true
  setTimeout(() => { tableAlert.value = false }, 1200)
})

const dialogVisible = ref(false)
const dialogForm = reactive({ content: '' })
const dialogRules = { content: [ { required: true, message: '请输入内容', trigger: 'blur' } ] }
const dialogFormRef = ref()
const dialogLoading = ref(false)
const dialogSuccess = ref(false)
function openDialog() {
  dialogVisible.value = true
  dialogSuccess.value = false
}
function onDialogOpen() {
  dialogForm.content = ''
}
function onDialogSubmit() {
  dialogLoading.value = true
  dialogFormRef.value.validate((valid) => {
    if (valid) {
      setTimeout(() => {
        dialogLoading.value = false
        dialogSuccess.value = true
        dialogVisible.value = false
        ElNotification({ title: '弹窗表单', message: dialogForm.content, type: 'success' })
        setTimeout(() => { dialogSuccess.value = false }, 2000)
      }, 800)
    } else {
      dialogLoading.value = false
    }
  })
}
function notify() {
  ElNotification({ title: '通知', message: '操作成功', type: 'success' })
}

const activeTab = ref('1')
const tabContent = ref(['这是 Tab 1 的内容', '这是 Tab 2 的内容'])
const progress = ref(30)
let progressTimer = null
function startProgress() {
  if (progressTimer) clearInterval(progressTimer)
  progress.value = 0
  progressTimer = setInterval(() => {
    if (progress.value >= 100) {
      clearInterval(progressTimer)
      progressTimer = null
    } else {
      progress.value += 5
    }
  }, 200)
}

const switchVal = ref(true)
const sliderVal = ref(50)
const dateVal = ref('')
const switchAlert = ref(false)
const sliderAlert = ref(false)
const dateAlert = ref(false)
function onSwitchChange() {
  switchAlert.value = true
  setTimeout(() => { switchAlert.value = false }, 1200)
}
function onSliderChange() {
  sliderAlert.value = true
  setTimeout(() => { sliderAlert.value = false }, 1200)
}
function onDateChange() {
  dateAlert.value = true
  setTimeout(() => { dateAlert.value = false }, 1200)
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style> 