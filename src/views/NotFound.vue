<template>
  <!-- 404页面模板 -->
  <div class="not-found-page">
    <!-- 错误内容容器 -->
    <div class="error-container">
      <!-- 错误图标 -->
      <div class="error-icon">
        <i class="fas fa-exclamation-triangle"></i>
      </div>
      
      <!-- 错误标题 -->
      <h1 class="error-title">404</h1>
      
      <!-- 错误描述 -->
      <p class="error-description">
        抱歉，您访问的页面不存在
      </p>
      
      <!-- 错误提示 -->
      <p class="error-hint">
        可能的原因：
      </p>
      
      <!-- 错误原因列表 -->
      <ul class="error-reasons">
        <li>页面已被移动或删除</li>
        <li>您输入的网址有误</li>
        <li>页面正在维护中</li>
      </ul>
      
      <!-- 操作按钮 -->
      <div class="error-actions">
        <button 
          class="btn-primary"
          @click="goHome"
        >
          <i class="fas fa-home mr-2"></i>
          返回首页
        </button>
        
        <button 
          class="btn-secondary"
          @click="goBack"
        >
          <i class="fas fa-arrow-left mr-2"></i>
          返回上页
        </button>
      </div>
      
      <!-- 搜索建议 -->
      <div class="search-suggestion">
        <p class="suggestion-text">或者您可以：</p>
        <div class="search-box">
          <input 
            v-model="searchQuery"
            type="text"
            placeholder="搜索页面内容..."
            class="search-input"
            @keyup.enter="performSearch"
          />
          <button 
            class="search-btn"
            @click="performSearch"
          >
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 404页面脚本
export default {
  // 组件名称
  name: 'NotFoundPage',
  
  // 页面元信息
  metaInfo: {
    title: '404 - 页面未找到',
    meta: [
      {
        name: 'description',
        content: '抱歉，您访问的页面不存在'
      },
      {
        name: 'robots',
        content: 'noindex, nofollow'
      }
    ]
  },
  
  // 组件数据
  data() {
    return {
      // 搜索查询
      searchQuery: '',
      
      // 页面数据
      pageData: {
        title: '404 - 页面未找到',
        description: '抱歉，您访问的页面不存在'
      }
    }
  },
  
  // 生命周期钩子
  mounted() {
    // 页面加载完成后的初始化操作
    this.initializePage()
  },
  
  // 方法
  methods: {
    // 初始化页面
    initializePage() {
      // 设置页面标题
      document.title = this.pageData.title
      
      // 添加页面加载动画
      this.addPageAnimation()
      
      // 记录404错误
      this.logError()
    },
    
    // 添加页面动画
    addPageAnimation() {
      // 为页面元素添加渐入动画
      const elements = document.querySelectorAll('.error-container > *')
      elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`
      })
    },
    
    // 记录错误日志
    logError() {
      // 记录404错误到控制台
      console.warn('404 Error: Page not found', {
        path: this.$route.path,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      })
    },
    
    // 返回首页
    goHome() {
      this.$router.push('/')
    },
    
    // 返回上一页
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    },
    
    // 执行搜索
    performSearch() {
      if (this.searchQuery.trim()) {
        // 这里可以实现搜索功能
        // 例如跳转到搜索结果页面或显示搜索结果
        console.log('Searching for:', this.searchQuery)
        
        // 示例：跳转到首页并传递搜索参数
        this.$router.push({
          path: '/',
          query: { search: this.searchQuery }
        })
      }
    }
  }
}
</script>

<style scoped>
/* 404页面样式 */

/* 页面基础样式 */
.not-found-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  text-align: center;
}

/* 错误容器样式 */
.error-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  animation: containerSlideIn 0.8s ease-out;
}

/* 错误图标样式 */
.error-icon {
  margin-bottom: 2rem;
}

.error-icon i {
  font-size: 4rem;
  color: #f59e0b;
  animation: iconBounce 2s ease-in-out infinite;
}

/* 错误标题样式 */
.error-title {
  font-size: 6rem;
  font-weight: bold;
  color: #1f2937;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  animation: titleGlow 2s ease-in-out infinite alternate;
}

/* 错误描述样式 */
.error-description {
  font-size: 1.5rem;
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
}

/* 错误提示样式 */
.error-hint {
  font-size: 1.125rem;
  color: #374151;
  margin-bottom: 1rem;
  font-weight: 500;
}

/* 错误原因列表样式 */
.error-reasons {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  text-align: left;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.error-reasons li {
  padding: 0.5rem 0;
  color: #6b7280;
  position: relative;
  padding-left: 1.5rem;
}

.error-reasons li::before {
  content: '•';
  color: #f59e0b;
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 1.5rem;
  line-height: 1;
}

/* 操作按钮样式 */
.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.btn-secondary {
  background: #f3f4f6;
  color: #374151;
  border: 1px solid #d1d5db;
}

.btn-secondary:hover {
  background: #e5e7eb;
  transform: translateY(-2px);
}

/* 搜索建议样式 */
.search-suggestion {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.suggestion-text {
  color: #6b7280;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.search-box {
  display: flex;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.search-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  background: white;
}

.search-input::placeholder {
  color: #9ca3af;
}

.search-btn {
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
}

.search-btn:hover {
  background: #2563eb;
}

/* 动画效果 */
@keyframes containerSlideIn {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes iconBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes titleGlow {
  from {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  to {
    text-shadow: 2px 2px 20px rgba(245, 158, 11, 0.3);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .not-found-page {
    padding: 1rem;
  }
  
  .error-container {
    padding: 2rem;
  }
  
  .error-title {
    font-size: 4rem;
  }
  
  .error-description {
    font-size: 1.25rem;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
  
  .search-box {
    flex-direction: column;
  }
  
  .search-input,
  .search-btn {
    width: 100%;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .error-container {
    background: rgba(31, 41, 55, 0.95);
    color: #f9fafb;
  }
  
  .error-title {
    color: #f9fafb;
  }
  
  .error-description,
  .error-hint,
  .suggestion-text {
    color: #d1d5db;
  }
  
  .error-reasons li {
    color: #9ca3af;
  }
  
  .btn-secondary {
    background: #374151;
    color: #f9fafb;
    border-color: #4b5563;
  }
  
  .btn-secondary:hover {
    background: #4b5563;
  }
  
  .search-input {
    background: #374151;
    color: #f9fafb;
  }
  
  .search-input::placeholder {
    color: #6b7280;
  }
}
</style> 