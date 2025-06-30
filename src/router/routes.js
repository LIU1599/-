// 路由配置数组
// 定义应用的所有路由规则和页面组件映射

// 导入页面组件
import Home from '@/views/Home.vue'
import FrontendIntro from '@/views/FrontendIntro.vue'
import ReactPage from '@/views/ReactPage.vue'
import VuePage from '@/views/VuePage.vue'
import EchartsPage from '@/views/EchartsPage.vue'
import ElementUIPage from '@/views/ElementUIPage.vue'
import Git from '@/views/Git.vue'
import Testing from '@/views/Testing.vue'
import Performance from '@/views/Performance.vue'
import Mobile from '@/views/Mobile.vue'
import Engineering from '@/views/Engineering.vue'
import Interview from '@/views/Interview.vue'
import Category from '@/views/Category.vue'
import ResourceDetail from '@/views/ResourceDetail.vue'
import UserLogin from '@/views/UserLogin.vue'
import NotFound from '@/views/NotFound.vue'

// 路由配置数组
const routes = [
  {
    // 根路径路由
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      description: '前端实习生知识指南首页'
    }
  },
  {
    // 前端简介页面
    path: '/frontend-intro',
    name: 'FrontendIntro',
    component: FrontendIntro,
    meta: {
      title: '前端简介',
      description: '前端开发基础知识介绍'
    }
  },
  {
    // React 学习页面
    path: '/react',
    name: 'ReactPage',
    component: ReactPage,
    meta: {
      title: 'React 学习',
      description: 'React 框架学习指南'
    }
  },
  {
    // Vue 学习页面
    path: '/vue',
    name: 'VuePage',
    component: VuePage,
    meta: {
      title: 'Vue 学习',
      description: 'Vue 框架学习指南'
    }
  },
  {
    // ECharts 图表页面
    path: '/echarts',
    name: 'EchartsPage',
    component: EchartsPage,
    meta: {
      title: 'ECharts 图表',
      description: 'ECharts 数据可视化学习'
    }
  },
  {
    // Element UI 组件库页面
    path: '/element-ui',
    name: 'ElementUIPage',
    component: ElementUIPage,
    meta: {
      title: 'Element UI',
      description: 'Element UI 组件库使用指南'
    }
  },
  {
    // Git 版本控制页面
    path: '/git',
    name: 'Git',
    component: Git,
    meta: {
      title: 'Git 版本控制',
      description: 'Git 版本控制工具学习'
    }
  },
  {
    // 测试相关页面
    path: '/testing',
    name: 'Testing',
    component: Testing,
    meta: {
      title: '前端测试',
      description: '前端测试方法和工具'
    }
  },
  {
    // 性能优化页面
    path: '/performance',
    name: 'Performance',
    component: Performance,
    meta: {
      title: '性能优化',
      description: '前端性能优化技巧'
    }
  },
  {
    // 移动端开发页面
    path: '/mobile',
    name: 'Mobile',
    component: Mobile,
    meta: {
      title: '移动端开发',
      description: '移动端开发技术指南'
    }
  },
  {
    // 工程化页面
    path: '/engineering',
    name: 'Engineering',
    component: Engineering,
    meta: {
      title: '前端工程化',
      description: '前端工程化实践'
    }
  },
  {
    // 面试相关页面
    path: '/interview',
    name: 'Interview',
    component: Interview,
    meta: {
      title: '面试准备',
      description: '前端面试题和技巧'
    }
  },
  {
    // 分类页面
    path: '/category/:id',
    name: 'Category',
    component: Category,
    meta: {
      title: '分类浏览',
      description: '按分类浏览学习资源'
    }
  },
  {
    // 资源详情页面
    path: '/resource/:id',
    name: 'ResourceDetail',
    component: ResourceDetail,
    meta: {
      title: '资源详情',
      description: '学习资源详细信息'
    }
  },
  {
    // 用户登录页面
    path: '/login',
    name: 'UserLogin',
    component: UserLogin,
    meta: {
      title: '用户登录',
      description: '用户登录和注册'
    }
  },
  {
    // 404 错误页面 - 必须放在最后
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '页面未找到',
      description: '404 错误页面'
    }
  }
]

// 导出路由配置
export default routes 