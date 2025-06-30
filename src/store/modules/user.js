// 用户状态管理模块
// 负责管理用户登录状态、个人信息等用户相关数据

// 导入 Pinia 相关函数
import { defineStore } from 'pinia'

// 定义用户状态管理 store
export const useUserStore = defineStore('user', {
  // 状态定义
  state: () => ({
    // 用户登录状态
    isLoggedIn: false,
    // 用户信息
    userInfo: {
      id: null,
      username: '',
      email: '',
      avatar: '',
      role: 'user', // 用户角色：user, admin
      permissions: [] // 用户权限列表
    },
    // 用户偏好设置
    preferences: {
      theme: 'light', // 主题：light, dark
      language: 'zh-CN', // 语言：zh-CN, en-US
      notifications: true // 是否开启通知
    },
    // 登录令牌
    token: null,
    // 令牌过期时间
    tokenExpiresAt: null
  }),

  // 计算属性
  getters: {
    // 获取用户是否已登录
    isAuthenticated: (state) => state.isLoggedIn && state.token,
    
    // 获取用户显示名称
    displayName: (state) => state.userInfo.username || state.userInfo.email || '游客',
    
    // 获取用户头像
    userAvatar: (state) => state.userInfo.avatar || '/default-avatar.png',
    
    // 检查用户是否有特定权限
    hasPermission: (state) => (permission) => {
      return state.userInfo.permissions.includes(permission)
    },
    
    // 检查用户是否是管理员
    isAdmin: (state) => state.userInfo.role === 'admin',
    
    // 检查令牌是否即将过期（30分钟内）
    isTokenExpiringSoon: (state) => {
      if (!state.tokenExpiresAt) return false
      const now = Date.now()
      const expiresAt = new Date(state.tokenExpiresAt).getTime()
      return expiresAt - now < 30 * 60 * 1000 // 30分钟
    }
  },

  // 操作方法
  actions: {
    // 用户登录
    async login(credentials) {
      try {
        // 这里应该调用实际的登录 API
        // const response = await api.login(credentials)
        
        // 模拟登录成功
        const mockResponse = {
          user: {
            id: 1,
            username: credentials.username,
            email: credentials.email || `${credentials.username}@example.com`,
            avatar: '',
            role: 'user',
            permissions: ['read', 'write']
          },
          token: 'mock-jwt-token',
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24小时后过期
        }
        
        // 更新状态
        this.userInfo = mockResponse.user
        this.token = mockResponse.token
        this.tokenExpiresAt = mockResponse.expiresAt
        this.isLoggedIn = true
        
        // 保存到本地存储
        this.saveToLocalStorage()
        
        return { success: true, message: '登录成功' }
      } catch (error) {
        console.error('登录失败:', error)
        return { success: false, message: '登录失败，请检查用户名和密码' }
      }
    },

    // 用户登出
    logout() {
      // 清除用户状态
      this.isLoggedIn = false
      this.userInfo = {
        id: null,
        username: '',
        email: '',
        avatar: '',
        role: 'user',
        permissions: []
      }
      this.token = null
      this.tokenExpiresAt = null
      
      // 清除本地存储
      this.clearLocalStorage()
      
      console.log('用户已登出')
    },

    // 更新用户信息
    updateUserInfo(userInfo) {
      this.userInfo = { ...this.userInfo, ...userInfo }
      this.saveToLocalStorage()
    },

    // 更新用户偏好设置
    updatePreferences(preferences) {
      this.preferences = { ...this.preferences, ...preferences }
      this.saveToLocalStorage()
    },

    // 刷新令牌
    async refreshToken() {
      try {
        // 这里应该调用实际的刷新令牌 API
        // const response = await api.refreshToken(this.token)
        
        // 模拟刷新令牌
        const newToken = 'new-mock-jwt-token'
        const newExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
        
        this.token = newToken
        this.tokenExpiresAt = newExpiresAt
        
        this.saveToLocalStorage()
        
        return { success: true }
      } catch (error) {
        console.error('刷新令牌失败:', error)
        this.logout()
        return { success: false }
      }
    },

    // 保存状态到本地存储
    saveToLocalStorage() {
      const data = {
        userInfo: this.userInfo,
        preferences: this.preferences,
        token: this.token,
        tokenExpiresAt: this.tokenExpiresAt,
        isLoggedIn: this.isLoggedIn
      }
      localStorage.setItem('user-store', JSON.stringify(data))
    },

    // 从本地存储恢复状态
    loadFromLocalStorage() {
      const saved = localStorage.getItem('user-store')
      if (saved) {
        try {
          const data = JSON.parse(saved)
          this.userInfo = data.userInfo || this.userInfo
          this.preferences = data.preferences || this.preferences
          this.token = data.token
          this.tokenExpiresAt = data.tokenExpiresAt
          this.isLoggedIn = data.isLoggedIn || false
        } catch (error) {
          console.error('恢复用户状态失败:', error)
          this.clearLocalStorage()
        }
      }
    },

    // 清除本地存储
    clearLocalStorage() {
      localStorage.removeItem('user-store')
    },

    // 初始化用户状态
    init() {
      this.loadFromLocalStorage()
      
      // 检查令牌是否过期
      if (this.tokenExpiresAt && new Date(this.tokenExpiresAt) < new Date()) {
        console.log('令牌已过期，自动登出')
        this.logout()
      }
    }
  }
}) 