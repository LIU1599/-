// Vue Router 路由配置文件
// 负责管理应用的路由规则和导航逻辑

// 导入 Vue Router 相关函数
import { createRouter, createWebHistory } from 'vue-router'

// 导入路由配置
import routes from './routes'

// 创建路由实例
const router = createRouter({
  // 使用 HTML5 历史模式
  history: createWebHistory(import.meta.env.BASE_URL),
  
  // 路由配置数组
  routes,
  
  // 路由滚动行为配置
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（如浏览器前进后退），则滚动到该位置
    if (savedPosition) {
      return savedPosition
    }
    
    // 如果路由有 hash，则滚动到对应元素
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    
    // 默认滚动到页面顶部
    return { top: 0 }
  }
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = `${to.meta.title} - 前端实习生知识指南`
  } else {
    document.title = '前端实习生知识指南'
  }
  
  // 记录路由访问日志
  console.log(`路由跳转: ${from.path} -> ${to.path}`)
  
  // 继续导航
  next()
})

// 全局后置钩子
router.afterEach((to, from) => {
  // 路由切换完成后的处理逻辑
  // 例如：关闭加载动画、更新统计信息等
  console.log(`路由切换完成: ${to.path}`)
})

// 导出路由实例
export default router 