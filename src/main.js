// Vue 应用主入口文件
// 负责初始化 Vue 应用、配置插件、挂载到 DOM

// 导入 Vue 核心库
import { createApp } from 'vue'

// 导入根组件
import App from './App.vue'

// 导入路由配置
import router from './router'

// 导入状态管理
import { createPinia } from 'pinia'

// 导入 Element Plus UI 库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入全局样式
import './assets/main.css'
import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// 创建 Pinia 状态管理实例
const pinia = createPinia()

// 创建 Vue 应用实例
const app = createApp(App)

// 注册插件
app.use(router)    // 注册路由
app.use(pinia)     // 注册状态管理
app.use(ElementPlus) // 注册 Element Plus

// 将应用挂载到 DOM
app.mount('#app')
