// API 服务模块
// 负责处理与后端服务器的 HTTP 请求和响应

// 导入 Axios HTTP 客户端
import axios from 'axios'

// 创建 Axios 实例
const api = axios.create({
  // 基础 URL，根据环境变量配置
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  
  // 请求超时时间（毫秒）
  timeout: 10000,
  
  // 请求头配置
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    // 从本地存储获取认证令牌
    const token = localStorage.getItem('auth-token')
    
    // 如果有令牌，添加到请求头
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    // 添加请求时间戳
    config.metadata = { startTime: new Date() }
    
    console.log(`发送请求: ${config.method?.toUpperCase()} ${config.url}`)
    
    return config
  },
  (error) => {
    console.error('请求拦截器错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    // 计算请求耗时
    const endTime = new Date()
    const startTime = response.config.metadata?.startTime
    const duration = startTime ? endTime - startTime : 0
    
    console.log(`请求完成: ${response.config.method?.toUpperCase()} ${response.config.url} (${duration}ms)`)
    
    // 直接返回响应数据
    return response.data
  },
  (error) => {
    // 计算请求耗时
    const endTime = new Date()
    const startTime = error.config?.metadata?.startTime
    const duration = startTime ? endTime - startTime : 0
    
    console.error(`请求失败: ${error.config?.method?.toUpperCase()} ${error.config?.url} (${duration}ms)`, error)
    
    // 处理不同类型的错误
    if (error.response) {
      // 服务器返回错误状态码
      const { status, data } = error.response
      
      switch (status) {
        case 401:
          // 未授权，清除本地令牌并跳转到登录页
          localStorage.removeItem('auth-token')
          window.location.href = '/login'
          break
        case 403:
          // 禁止访问
          console.error('没有权限访问该资源')
          break
        case 404:
          // 资源未找到
          console.error('请求的资源不存在')
          break
        case 500:
          // 服务器内部错误
          console.error('服务器内部错误')
          break
        default:
          console.error(`HTTP 错误 ${status}:`, data)
      }
    } else if (error.request) {
      // 请求已发送但没有收到响应
      console.error('网络错误，请检查网络连接')
    } else {
      // 请求配置错误
      console.error('请求配置错误:', error.message)
    }
    
    return Promise.reject(error)
  }
)

// 用户相关 API
export const userAPI = {
  // 用户登录
  login: (credentials) => api.post('/auth/login', credentials),
  
  // 用户注册
  register: (userData) => api.post('/auth/register', userData),
  
  // 用户登出
  logout: () => api.post('/auth/logout'),
  
  // 获取用户信息
  getProfile: () => api.get('/user/profile'),
  
  // 更新用户信息
  updateProfile: (userData) => api.put('/user/profile', userData),
  
  // 刷新访问令牌
  refreshToken: () => api.post('/auth/refresh'),
  
  // 修改密码
  changePassword: (passwordData) => api.put('/user/password', passwordData)
}

// 资源相关 API
export const resourcesAPI = {
  // 获取资源列表
  getResources: (params = {}) => api.get('/resources', { params }),
  
  // 获取单个资源详情
  getResource: (id) => api.get(`/resources/${id}`),
  
  // 创建新资源
  createResource: (resourceData) => api.post('/resources', resourceData),
  
  // 更新资源
  updateResource: (id, resourceData) => api.put(`/resources/${id}`, resourceData),
  
  // 删除资源
  deleteResource: (id) => api.delete(`/resources/${id}`),
  
  // 搜索资源
  searchResources: (keyword) => api.get('/resources/search', { params: { q: keyword } }),
  
  // 获取热门资源
  getPopularResources: () => api.get('/resources/popular'),
  
  // 获取最新资源
  getLatestResources: () => api.get('/resources/latest')
}

// 分类相关 API
export const categoriesAPI = {
  // 获取分类列表
  getCategories: () => api.get('/categories'),
  
  // 获取单个分类详情
  getCategory: (id) => api.get(`/categories/${id}`),
  
  // 获取分类下的资源
  getCategoryResources: (id, params = {}) => api.get(`/categories/${id}/resources`, { params })
}

// 收藏相关 API
export const favoritesAPI = {
  // 获取用户收藏列表
  getFavorites: () => api.get('/user/favorites'),
  
  // 添加收藏
  addFavorite: (resourceId) => api.post('/user/favorites', { resourceId }),
  
  // 移除收藏
  removeFavorite: (resourceId) => api.delete(`/user/favorites/${resourceId}`),
  
  // 检查是否已收藏
  checkFavorite: (resourceId) => api.get(`/user/favorites/${resourceId}`)
}

// 学习进度相关 API
export const progressAPI = {
  // 获取学习进度
  getProgress: (resourceId) => api.get(`/user/progress/${resourceId}`),
  
  // 更新学习进度
  updateProgress: (resourceId, progress) => api.put(`/user/progress/${resourceId}`, { progress }),
  
  // 获取总体学习进度
  getOverallProgress: () => api.get('/user/progress/overall')
}

// 文件上传相关 API
export const uploadAPI = {
  // 上传文件
  uploadFile: (file, onProgress) => {
    const formData = new FormData()
    formData.append('file', file)
    
    return api.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress) {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          onProgress(percentCompleted)
        }
      }
    })
  },
  
  // 上传图片
  uploadImage: (file) => uploadAPI.uploadFile(file),
  
  // 上传头像
  uploadAvatar: (file) => {
    const formData = new FormData()
    formData.append('avatar', file)
    
    return api.post('/user/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

// 统计相关 API
export const statsAPI = {
  // 获取用户学习统计
  getUserStats: () => api.get('/user/stats'),
  
  // 获取资源访问统计
  getResourceStats: (resourceId) => api.get(`/resources/${resourceId}/stats`),
  
  // 记录资源访问
  recordView: (resourceId) => api.post(`/resources/${resourceId}/view`)
}

// 导出默认 API 实例
export default api 
import { getItem } from './storage'
export const fetchResources = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resources = getItem('learnhubResources') || []
      resolve(resources)
    }, 500)
  })
} 