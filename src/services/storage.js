// 本地存储服务模块
// 负责处理浏览器本地存储（localStorage、sessionStorage）的操作

// 存储键名前缀，避免与其他应用冲突
const STORAGE_PREFIX = 'frontend_guide_'

// 存储类型枚举
const StorageType = {
  LOCAL: 'localStorage',
  SESSION: 'sessionStorage'
}

// 获取存储实例
const getStorage = (type = StorageType.LOCAL) => {
  return type === StorageType.LOCAL ? localStorage : sessionStorage
}

// 生成完整的存储键名
const getFullKey = (key) => {
  return `${STORAGE_PREFIX}${key}`
}

// 设置存储项
export const setItem = (key, value, type = StorageType.LOCAL) => {
  try {
    const storage = getStorage(type)
    const fullKey = getFullKey(key)
    
    // 将值转换为 JSON 字符串存储
    const serializedValue = JSON.stringify(value)
    storage.setItem(fullKey, serializedValue)
    
    console.log(`存储数据: ${fullKey}`, value)
    return true
  } catch (error) {
    console.error(`存储数据失败: ${key}`, error)
    return false
  }
}

// 获取存储项
export const getItem = (key, defaultValue = null, type = StorageType.LOCAL) => {
  try {
    const storage = getStorage(type)
    const fullKey = getFullKey(key)
    
    const item = storage.getItem(fullKey)
    
    if (item === null) {
      return defaultValue
    }
    
    // 解析 JSON 字符串
    const parsedValue = JSON.parse(item)
    console.log(`获取数据: ${fullKey}`, parsedValue)
    return parsedValue
  } catch (error) {
    console.error(`获取数据失败: ${key}`, error)
    return defaultValue
  }
}

// 移除存储项
export const removeItem = (key, type = StorageType.LOCAL) => {
  try {
    const storage = getStorage(type)
    const fullKey = getFullKey(key)
    
    storage.removeItem(fullKey)
    console.log(`删除数据: ${fullKey}`)
    return true
  } catch (error) {
    console.error(`删除数据失败: ${key}`, error)
    return false
  }
}

// 清空所有存储项
export const clear = (type = StorageType.LOCAL) => {
  try {
    const storage = getStorage(type)
    
    // 只删除带有前缀的项
    const keysToRemove = []
    for (let i = 0; i < storage.length; i++) {
      const key = storage.key(i)
      if (key && key.startsWith(STORAGE_PREFIX)) {
        keysToRemove.push(key)
      }
    }
    
    keysToRemove.forEach(key => storage.removeItem(key))
    console.log(`清空存储: ${type}`)
    return true
  } catch (error) {
    console.error(`清空存储失败: ${type}`, error)
    return false
  }
}

// 检查存储项是否存在
export const hasItem = (key, type = StorageType.LOCAL) => {
  const storage = getStorage(type)
  const fullKey = getFullKey(key)
  return storage.getItem(fullKey) !== null
}

// 获取存储项的大小（字节）
export const getItemSize = (key, type = StorageType.LOCAL) => {
  try {
    const storage = getStorage(type)
    const fullKey = getFullKey(key)
    const item = storage.getItem(fullKey)
    
    if (item === null) {
      return 0
    }
    
    // 计算字符串的字节大小（UTF-8编码）
    return new Blob([item]).size
  } catch (error) {
    console.error(`获取数据大小失败: ${key}`, error)
    return 0
  }
}

// 获取存储使用情况
export const getStorageUsage = (type = StorageType.LOCAL) => {
  try {
    const storage = getStorage(type)
    let totalSize = 0
    let itemCount = 0
    
    // 计算所有带前缀的存储项的大小
    for (let i = 0; i < storage.length; i++) {
      const key = storage.key(i)
      if (key && key.startsWith(STORAGE_PREFIX)) {
        const item = storage.getItem(key)
        if (item) {
          totalSize += new Blob([item]).size
          itemCount++
        }
      }
    }
    
    return {
      totalSize, // 总大小（字节）
      itemCount, // 项目数量
      totalSizeKB: Math.round(totalSize / 1024 * 100) / 100, // 总大小（KB）
      totalSizeMB: Math.round(totalSize / (1024 * 1024) * 100) / 100 // 总大小（MB）
    }
  } catch (error) {
    console.error(`获取存储使用情况失败: ${type}`, error)
    return { totalSize: 0, itemCount: 0, totalSizeKB: 0, totalSizeMB: 0 }
  }
}

// 存储项过期时间管理
export const setItemWithExpiry = (key, value, expiryHours = 24, type = StorageType.LOCAL) => {
  const item = {
    value,
    expiry: Date.now() + (expiryHours * 60 * 60 * 1000) // 转换为毫秒
  }
  
  return setItem(key, item, type)
}

// 获取带过期时间的存储项
export const getItemWithExpiry = (key, defaultValue = null, type = StorageType.LOCAL) => {
  const item = getItem(key, null, type)
  
  if (item === null) {
    return defaultValue
  }
  
  // 检查是否过期
  if (Date.now() > item.expiry) {
    // 已过期，删除该项
    removeItem(key, type)
    return defaultValue
  }
  
  return item.value
}

// 用户相关存储操作
export const userStorage = {
  // 保存用户信息
  saveUser: (user) => setItem('user', user),
  
  // 获取用户信息
  getUser: () => getItem('user'),
  
  // 保存认证令牌
  saveToken: (token) => setItem('token', token),
  
  // 获取认证令牌
  getToken: () => getItem('token'),
  
  // 清除用户数据
  clearUser: () => {
    removeItem('user')
    removeItem('token')
  }
}

// 设置相关存储操作
export const settingsStorage = {
  // 保存用户设置
  saveSettings: (settings) => setItem('settings', settings),
  
  // 获取用户设置
  getSettings: () => getItem('settings', {
    theme: 'light',
    language: 'zh-CN',
    notifications: true
  }),
  
  // 更新单个设置项
  updateSetting: (key, value) => {
    const settings = settingsStorage.getSettings()
    settings[key] = value
    settingsStorage.saveSettings(settings)
  }
}

// 学习进度相关存储操作
export const progressStorage = {
  // 保存学习进度
  saveProgress: (resourceId, progress) => {
    const allProgress = getItem('learning_progress', {})
    allProgress[resourceId] = progress
    setItem('learning_progress', allProgress)
  },
  
  // 获取学习进度
  getProgress: (resourceId) => {
    const allProgress = getItem('learning_progress', {})
    return allProgress[resourceId] || 0
  },
  
  // 获取所有学习进度
  getAllProgress: () => getItem('learning_progress', {}),
  
  // 清除学习进度
  clearProgress: () => removeItem('learning_progress')
}

// 收藏相关存储操作
export const favoritesStorage = {
  // 保存收藏列表
  saveFavorites: (favorites) => setItem('favorites', favorites),
  
  // 获取收藏列表
  getFavorites: () => getItem('favorites', []),
  
  // 添加收藏
  addFavorite: (resourceId) => {
    const favorites = favoritesStorage.getFavorites()
    if (!favorites.includes(resourceId)) {
      favorites.push(resourceId)
      favoritesStorage.saveFavorites(favorites)
    }
  },
  
  // 移除收藏
  removeFavorite: (resourceId) => {
    const favorites = favoritesStorage.getFavorites()
    const index = favorites.indexOf(resourceId)
    if (index > -1) {
      favorites.splice(index, 1)
      favoritesStorage.saveFavorites(favorites)
    }
  },
  
  // 检查是否已收藏
  isFavorite: (resourceId) => {
    const favorites = favoritesStorage.getFavorites()
    return favorites.includes(resourceId)
  }
}

// 搜索历史相关存储操作
export const searchHistoryStorage = {
  // 保存搜索历史
  saveSearchHistory: (history) => setItem('search_history', history),
  
  // 获取搜索历史
  getSearchHistory: () => getItem('search_history', []),
  
  // 添加搜索记录
  addSearchRecord: (keyword) => {
    const history = searchHistoryStorage.getSearchHistory()
    const index = history.indexOf(keyword)
    
    // 如果已存在，先移除
    if (index > -1) {
      history.splice(index, 1)
    }
    
    // 添加到开头
    history.unshift(keyword)
    
    // 限制历史记录数量
    if (history.length > 20) {
      history.splice(20)
    }
    
    searchHistoryStorage.saveSearchHistory(history)
  },
  
  // 清除搜索历史
  clearSearchHistory: () => removeItem('search_history')
}

// 导出存储类型枚举
export { StorageType } 