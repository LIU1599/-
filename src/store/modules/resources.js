// 资源状态管理模块
// 负责管理学习资源、分类、收藏等数据

// 导入 Pinia 相关函数
import { defineStore } from 'pinia'

// 定义资源状态管理 store
export const useResourcesStore = defineStore('resources', {
  // 状态定义
  state: () => ({
    // 学习资源列表
    resources: [],
    // 资源分类列表
    categories: [
      {
        id: 1,
        name: '前端基础',
        description: 'HTML、CSS、JavaScript 基础知识',
        icon: 'fas fa-code',
        color: '#3b82f6'
      },
      {
        id: 2,
        name: 'React 生态',
        description: 'React 框架及相关技术栈',
        icon: 'fab fa-react',
        color: '#61dafb'
      },
      {
        id: 3,
        name: 'Vue 生态',
        description: 'Vue 框架及相关技术栈',
        icon: 'fab fa-vuejs',
        color: '#42b883'
      },
      {
        id: 4,
        name: '数据可视化',
        description: 'ECharts、D3.js 等图表库',
        icon: 'fas fa-chart-bar',
        color: '#f59e0b'
      },
      {
        id: 5,
        name: 'UI 组件库',
        description: 'Element UI、Ant Design 等',
        icon: 'fas fa-palette',
        color: '#10b981'
      },
      {
        id: 6,
        name: '工程化工具',
        description: 'Webpack、Vite、Git 等',
        icon: 'fas fa-tools',
        color: '#8b5cf6'
      },
      {
        id: 7,
        name: '性能优化',
        description: '前端性能优化技巧',
        icon: 'fas fa-tachometer-alt',
        color: '#ef4444'
      },
      {
        id: 8,
        name: '移动端开发',
        description: '响应式设计、PWA 等',
        icon: 'fas fa-mobile-alt',
        color: '#06b6d4'
      },
      {
        id: 9,
        name: '测试与调试',
        description: '单元测试、E2E 测试等',
        icon: 'fas fa-bug',
        color: '#84cc16'
      },
      {
        id: 10,
        name: '面试准备',
        description: '面试题、算法、项目经验',
        icon: 'fas fa-user-graduate',
        color: '#f97316'
      }
    ],
    // 用户收藏的资源 ID 列表
    favorites: [],
    // 学习进度记录
    progress: {},
    // 搜索历史
    searchHistory: [],
    // 当前选中的分类
    currentCategory: null,
    // 加载状态
    loading: false,
    // 错误信息
    error: null
  }),

  // 计算属性
  getters: {
    // 获取指定分类的资源
    getResourcesByCategory: (state) => (categoryId) => {
      return state.resources.filter(resource => resource.categoryId === categoryId)
    },
    
    // 获取收藏的资源
    getFavoriteResources: (state) => {
      return state.resources.filter(resource => state.favorites.includes(resource.id))
    },
    
    // 获取热门资源（按访问量排序）
    getPopularResources: (state) => {
      return [...state.resources]
        .sort((a, b) => (b.views || 0) - (a.views || 0))
        .slice(0, 10)
    },
    
    // 获取最新资源
    getLatestResources: (state) => {
      return [...state.resources]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 10)
    },
    
    // 搜索资源
    searchResources: (state) => (keyword) => {
      if (!keyword) return state.resources
      
      const lowerKeyword = keyword.toLowerCase()
      return state.resources.filter(resource => 
        resource.title.toLowerCase().includes(lowerKeyword) ||
        resource.description.toLowerCase().includes(lowerKeyword) ||
        resource.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
      )
    },
    
    // 获取用户学习进度
    getUserProgress: (state) => (resourceId) => {
      return state.progress[resourceId] || 0
    },
    
    // 获取总体学习进度
    getOverallProgress: (state) => {
      if (state.resources.length === 0) return 0
      
      const totalProgress = Object.values(state.progress).reduce((sum, progress) => sum + progress, 0)
      return Math.round((totalProgress / state.resources.length) * 100)
    }
  },

  // 操作方法
  actions: {
    // 加载资源列表
    async loadResources() {
      this.loading = true
      this.error = null
      
      try {
        // 这里应该调用实际的 API
        // const response = await api.getResources()
        
        // 模拟数据
        const mockResources = [
          {
            id: 1,
            title: 'Vue.js 3.0 完全指南',
            description: '从零开始学习 Vue.js 3.0，包含 Composition API、TypeScript 支持等新特性',
            categoryId: 3,
            tags: ['Vue', 'JavaScript', '前端框架'],
            difficulty: 'beginner',
            duration: '8小时',
            views: 1250,
            rating: 4.8,
            createdAt: '2024-01-15',
            url: 'https://vuejs.org/guide/',
            type: 'tutorial'
          },
          {
            id: 2,
            title: 'React Hooks 深度解析',
            description: '深入理解 React Hooks 的工作原理和最佳实践',
            categoryId: 2,
            tags: ['React', 'Hooks', 'JavaScript'],
            difficulty: 'intermediate',
            duration: '6小时',
            views: 980,
            rating: 4.6,
            createdAt: '2024-01-10',
            url: 'https://react.dev/reference/react',
            type: 'article'
          },
          {
            id: 3,
            title: 'ECharts 数据可视化实战',
            description: '使用 ECharts 创建各种类型的图表和数据可视化',
            categoryId: 4,
            tags: ['ECharts', '数据可视化', '图表'],
            difficulty: 'intermediate',
            duration: '4小时',
            views: 750,
            rating: 4.7,
            createdAt: '2024-01-08',
            url: 'https://echarts.apache.org/',
            type: 'tutorial'
          }
        ]
        
        this.resources = mockResources
      } catch (error) {
        console.error('加载资源失败:', error)
        this.error = '加载资源失败，请稍后重试'
      } finally {
        this.loading = false
      }
    },

    // 添加资源到收藏
    addToFavorites(resourceId) {
      if (!this.favorites.includes(resourceId)) {
        this.favorites.push(resourceId)
        this.saveFavorites()
      }
    },

    // 从收藏中移除资源
    removeFromFavorites(resourceId) {
      const index = this.favorites.indexOf(resourceId)
      if (index > -1) {
        this.favorites.splice(index, 1)
        this.saveFavorites()
      }
    },

    // 切换收藏状态
    toggleFavorite(resourceId) {
      if (this.favorites.includes(resourceId)) {
        this.removeFromFavorites(resourceId)
      } else {
        this.addToFavorites(resourceId)
      }
    },

    // 更新学习进度
    updateProgress(resourceId, progress) {
      this.progress[resourceId] = Math.max(0, Math.min(100, progress))
      this.saveProgress()
    },

    // 添加搜索历史
    addSearchHistory(keyword) {
      if (keyword && !this.searchHistory.includes(keyword)) {
        this.searchHistory.unshift(keyword)
        // 限制搜索历史数量
        if (this.searchHistory.length > 10) {
          this.searchHistory = this.searchHistory.slice(0, 10)
        }
        this.saveSearchHistory()
      }
    },

    // 清除搜索历史
    clearSearchHistory() {
      this.searchHistory = []
      this.saveSearchHistory()
    },

    // 设置当前分类
    setCurrentCategory(categoryId) {
      this.currentCategory = categoryId
    },

    // 保存收藏到本地存储
    saveFavorites() {
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },

    // 从本地存储加载收藏
    loadFavorites() {
      const saved = localStorage.getItem('favorites')
      if (saved) {
        try {
          this.favorites = JSON.parse(saved)
        } catch (error) {
          console.error('加载收藏失败:', error)
          this.favorites = []
        }
      }
    },

    // 保存进度到本地存储
    saveProgress() {
      localStorage.setItem('learning-progress', JSON.stringify(this.progress))
    },

    // 从本地存储加载进度
    loadProgress() {
      const saved = localStorage.getItem('learning-progress')
      if (saved) {
        try {
          this.progress = JSON.parse(saved)
        } catch (error) {
          console.error('加载进度失败:', error)
          this.progress = {}
        }
      }
    },

    // 保存搜索历史到本地存储
    saveSearchHistory() {
      localStorage.setItem('search-history', JSON.stringify(this.searchHistory))
    },

    // 从本地存储加载搜索历史
    loadSearchHistory() {
      const saved = localStorage.getItem('search-history')
      if (saved) {
        try {
          this.searchHistory = JSON.parse(saved)
        } catch (error) {
          console.error('加载搜索历史失败:', error)
          this.searchHistory = []
        }
      }
    },

    // 初始化资源状态
    init() {
      this.loadFavorites()
      this.loadProgress()
      this.loadSearchHistory()
      this.loadResources()
    }
  }
}) 