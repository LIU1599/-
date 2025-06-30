// Pinia 状态管理主配置文件
// 负责创建和配置 Pinia 状态管理实例

// 导入 Pinia 相关函数
import { createPinia } from 'pinia'

// 导入状态模块
import { useUserStore } from './modules/user'
import { useResourcesStore } from './modules/resources'

// 创建 Pinia 实例
const pinia = createPinia()

// 配置 Pinia 插件
pinia.use(({ store }) => {
  // 为每个 store 添加通用方法
  store.$reset = () => {
    // 重置 store 到初始状态
    store.$patch(store.$state)
  }
  
  // 添加持久化功能
  store.$persist = (key) => {
    // 从 localStorage 恢复状态
    const saved = localStorage.getItem(key)
    if (saved) {
      store.$patch(JSON.parse(saved))
    }
    
    // 监听状态变化并保存到 localStorage
    store.$subscribe((mutation, state) => {
      localStorage.setItem(key, JSON.stringify(state))
    })
  }
})

// 导出 Pinia 实例
export default pinia

// 导出所有 store 模块
export {
  useUserStore,
  useResourcesStore
} 