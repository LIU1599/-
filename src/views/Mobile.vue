<template>
  <!-- 移动端开发页面模板 -->
  <div class="mobile-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">
        <i class="fas fa-mobile-alt mr-3"></i>
        移动端开发
      </h1>
      <p class="page-subtitle">移动Web与混合开发的核心知识与实践</p>
    </div>

    <!-- 主要内容区域 -->
    <div class="content-grid">
      <!-- 移动端适配 -->
      <Card title="移动端适配" type="primary" class="content-card">
        <div class="adapt-section">
          <div class="adapt-item">
            <h4 class="adapt-title">视口与布局</h4>
            <p class="adapt-desc">viewport、rem/em、百分比布局</p>
          </div>
          <div class="adapt-item">
            <h4 class="adapt-title">媒体查询</h4>
            <p class="adapt-desc">响应式断点、适配不同设备</p>
          </div>
          <div class="adapt-item">
            <h4 class="adapt-title">Flex与Grid</h4>
            <p class="adapt-desc">弹性盒与网格布局，适配多屏幕</p>
          </div>
        </div>
      </Card>

      <!-- 触控与交互 -->
      <Card title="触控与交互" type="success" class="content-card">
        <div class="touch-section">
          <div class="touch-item">
            <h4 class="touch-title">Touch事件</h4>
            <p class="touch-desc">tap、swipe、longpress等手势识别</p>
          </div>
          <div class="touch-item">
            <h4 class="touch-title">移动端动画</h4>
            <p class="touch-desc">CSS动画、transform、transition、帧动画</p>
          </div>
          <div class="touch-item">
            <h4 class="touch-title">点击穿透</h4>
            <p class="touch-desc">移动端300ms延迟、fastclick、事件冒泡</p>
          </div>
        </div>
      </Card>

      <!-- 混合开发 -->
      <Card title="混合开发" type="warning" class="content-card">
        <div class="hybrid-section">
          <div class="hybrid-item">
            <h4 class="hybrid-title">H5+Native</h4>
            <p class="hybrid-desc">WebView、JSBridge、原生交互</p>
          </div>
          <div class="hybrid-item">
            <h4 class="hybrid-title">小程序</h4>
            <p class="hybrid-desc">微信/支付宝/百度小程序开发</p>
          </div>
          <div class="hybrid-item">
            <h4 class="hybrid-title">跨端框架</h4>
            <p class="hybrid-desc">uni-app、Taro、React Native等</p>
          </div>
        </div>
      </Card>

      <!-- 推荐资源 -->
      <Card title="推荐学习资源" type="default" class="content-card">
        <div class="resources-section">
          <div class="resource-category">
            <h4 class="category-title">📚 官方文档</h4>
            <div class="resource-links">
              <a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/Mobile" target="_blank" class="resource-link">MDN移动Web开发</a>
              <a href="https://uniapp.dcloud.io/" target="_blank" class="resource-link">uni-app官方文档</a>
              <a href="https://taro.zone/" target="_blank" class="resource-link">Taro官方文档</a>
              <a href="https://reactnative.dev/" target="_blank" class="resource-link">React Native官方文档</a>
            </div>
          </div>
          <div class="resource-category">
            <h4 class="category-title">🎥 视频教程</h4>
            <div class="resource-links">
              <a href="https://www.bilibili.com/video/BV1hE411x7h7" target="_blank" class="resource-link">移动端适配实战</a>
              <a href="https://www.bilibili.com/video/BV1vK4y1C7N1" target="_blank" class="resource-link">小程序开发入门</a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
// 移动端开发页面脚本
import Card from '@/components/atoms/Card.vue'

export default {
  // 组件名称
  name: 'MobilePage',
  
  // 组件依赖
  components: {
    Card
  },
  
  // 页面元信息
  metaInfo: {
    title: '移动端开发 - 前端实习生知识库',
    meta: [
      {
        name: 'description',
        content: '移动端适配、触控交互、混合开发与推荐资源'
      },
      {
        name: 'keywords',
        content: '移动端, 适配, 触控, 小程序, uni-app, Taro, React Native'
      }
    ]
  },
  
  // 组件数据
  data() {
    return {
      // 页面数据
      pageData: {
        title: '移动端开发',
        description: '移动Web与混合开发的核心知识与实践'
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
    },
    
    // 添加页面动画
    addPageAnimation() {
      // 为页面元素添加渐入动画
      const cards = document.querySelectorAll('.content-card')
      cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`
      })
    }
  }
}
</script>

<style scoped>
/* 移动端开发页面样式 */

/* 页面基础样式 */
.mobile-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

/* 页面头部样式 */
.page-header {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
}

.page-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.page-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* 内容网格布局 */
.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* 内容卡片样式 */
.content-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: cardSlideIn 0.6s ease-out;
}

.content-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

/* 适配部分样式 */
.adapt-section {
  padding: 1rem 0;
  display: grid;
  gap: 1.5rem;
}

.adapt-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.06);
  transition: all 0.2s ease;
}

.adapt-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.adapt-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.adapt-desc {
  color: #6b7280;
  font-size: 0.95rem;
}

/* 触控部分样式 */
.touch-section {
  padding: 1rem 0;
  display: grid;
  gap: 1.5rem;
}

.touch-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.06);
  transition: all 0.2s ease;
}

.touch-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.touch-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.touch-desc {
  color: #6b7280;
  font-size: 0.95rem;
}

/* 混合开发部分样式 */
.hybrid-section {
  padding: 1rem 0;
  display: grid;
  gap: 1.5rem;
}

.hybrid-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.06);
  transition: all 0.2s ease;
}

.hybrid-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.hybrid-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.hybrid-desc {
  color: #6b7280;
  font-size: 0.95rem;
}

/* 资源部分样式 */
.resources-section {
  padding: 1rem 0;
}

.resource-category {
  margin-bottom: 2rem;
}

.category-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
}

.resource-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.resource-link {
  display: inline-block;
  padding: 0.75rem 1rem;
  background: #f8fafc;
  color: #3b82f6;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  border: 1px solid #e5e7eb;
}

.resource-link:hover {
  background: #3b82f6;
  color: white;
  transform: translateX(5px);
  text-decoration: none;
}

/* 动画效果 */
@keyframes cardSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .mobile-page {
    padding: 1rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .content-card {
    background: rgba(31, 41, 55, 0.95);
    color: #f9fafb;
  }
  
  .adapt-title,
  .touch-title,
  .hybrid-title,
  .category-title {
    color: #f9fafb;
  }
  
  .adapt-desc,
  .touch-desc,
  .hybrid-desc {
    color: #d1d5db;
  }
  
  .adapt-item,
  .touch-item,
  .hybrid-item {
    background: #374151;
  }
  
  .adapt-item:hover,
  .touch-item:hover,
  .hybrid-item:hover {
    background: #4b5563;
  }
  
  .resource-link {
    background: #374151;
    border-color: #4b5563;
  }
  
  .resource-link:hover {
    background: #3b82f6;
  }
}
</style> 