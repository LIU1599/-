<template>
  <!-- 性能优化页面模板 -->
  <div class="performance-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">
        <i class="fas fa-tachometer-alt mr-3"></i>
        性能优化
      </h1>
      <p class="page-subtitle">提升前端应用速度与用户体验的关键技术</p>
    </div>

    <!-- 主要内容区域 -->
    <div class="content-grid">
      <!-- 加载优化 -->
      <Card title="加载优化" type="primary" class="content-card">
        <div class="optimize-section">
          <div class="optimize-item">
            <h4 class="optimize-title">懒加载</h4>
            <p class="optimize-desc">按需加载资源，减少首屏体积</p>
          </div>
          <div class="optimize-item">
            <h4 class="optimize-title">预加载/预渲染</h4>
            <p class="optimize-desc">提前加载关键资源，提升响应速度</p>
          </div>
          <div class="optimize-item">
            <h4 class="optimize-title">代码分割</h4>
            <p class="optimize-desc">拆分大文件，按需加载模块</p>
          </div>
        </div>
      </Card>

      <!-- 渲染优化 -->
      <Card title="渲染优化" type="success" class="content-card">
        <div class="render-section">
          <div class="render-item">
            <h4 class="render-title">虚拟滚动</h4>
            <p class="render-desc">只渲染可视区域内容，提升大列表性能</p>
          </div>
          <div class="render-item">
            <h4 class="render-title">防抖与节流</h4>
            <p class="render-desc">减少高频操作带来的性能消耗</p>
          </div>
          <div class="render-item">
            <h4 class="render-title">requestAnimationFrame</h4>
            <p class="render-desc">优化动画与渲染时机</p>
          </div>
        </div>
      </Card>

      <!-- 缓存优化 -->
      <Card title="缓存优化" type="warning" class="content-card">
        <div class="cache-section">
          <div class="cache-item">
            <h4 class="cache-title">浏览器缓存</h4>
            <p class="cache-desc">利用HTTP缓存头提升资源复用率</p>
          </div>
          <div class="cache-item">
            <h4 class="cache-title">CDN加速</h4>
            <p class="cache-desc">分发静态资源到全球节点，降低延迟</p>
          </div>
          <div class="cache-item">
            <h4 class="cache-title">Service Worker</h4>
            <p class="cache-desc">离线缓存与PWA支持</p>
          </div>
        </div>
      </Card>

      <!-- 性能监控 -->
      <Card title="性能监控与分析" type="danger" class="content-card">
        <div class="monitor-section">
          <div class="monitor-item">
            <h4 class="monitor-title">Lighthouse</h4>
            <p class="monitor-desc">Google官方性能分析工具</p>
          </div>
          <div class="monitor-item">
            <h4 class="monitor-title">Performance API</h4>
            <p class="monitor-desc">浏览器内置性能监控接口</p>
          </div>
          <div class="monitor-item">
            <h4 class="monitor-title">Web Vitals</h4>
            <p class="monitor-desc">衡量用户体验的核心指标</p>
          </div>
        </div>
      </Card>

      <!-- 推荐资源 -->
      <Card title="推荐学习资源" type="default" class="content-card">
        <div class="resources-section">
          <div class="resource-category">
            <h4 class="category-title">📚 官方文档</h4>
            <div class="resource-links">
              <a href="https://web.dev/performance/" target="_blank" class="resource-link">Web.dev性能优化</a>
              <a href="https://developers.google.com/web/tools/lighthouse" target="_blank" class="resource-link">Lighthouse官方文档</a>
              <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Performance" target="_blank" class="resource-link">MDN Performance API</a>
            </div>
          </div>
          <div class="resource-category">
            <h4 class="category-title">🎥 视频教程</h4>
            <div class="resource-links">
              <a href="https://www.bilibili.com/video/BV1hE411x7h7" target="_blank" class="resource-link">前端性能优化实战</a>
              <a href="https://www.bilibili.com/video/BV1vK4y1C7N1" target="_blank" class="resource-link">Lighthouse实战</a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
// 性能优化页面脚本
import Card from '@/components/atoms/Card.vue'

export default {
  // 组件名称
  name: 'PerformancePage',
  
  // 组件依赖
  components: {
    Card
  },
  
  // 页面元信息
  metaInfo: {
    title: '性能优化 - 前端实习生知识库',
    meta: [
      {
        name: 'description',
        content: '前端性能优化、加载优化、渲染优化、缓存优化与性能监控'
      },
      {
        name: 'keywords',
        content: '性能优化, 加载优化, 渲染优化, 缓存, Lighthouse, Web Vitals'
      }
    ]
  },
  
  // 组件数据
  data() {
    return {
      // 页面数据
      pageData: {
        title: '性能优化',
        description: '提升前端应用速度与用户体验的关键技术'
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
/* 性能优化页面样式 */

/* 页面基础样式 */
.performance-page {
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

/* 优化部分样式 */
.optimize-section {
  padding: 1rem 0;
  display: grid;
  gap: 1.5rem;
}

.optimize-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.06);
  transition: all 0.2s ease;
}

.optimize-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.optimize-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.optimize-desc {
  color: #6b7280;
  font-size: 0.95rem;
}

/* 渲染部分样式 */
.render-section {
  padding: 1rem 0;
  display: grid;
  gap: 1.5rem;
}

.render-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.06);
  transition: all 0.2s ease;
}

.render-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.render-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.render-desc {
  color: #6b7280;
  font-size: 0.95rem;
}

/* 缓存部分样式 */
.cache-section {
  padding: 1rem 0;
  display: grid;
  gap: 1.5rem;
}

.cache-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.06);
  transition: all 0.2s ease;
}

.cache-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.cache-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.cache-desc {
  color: #6b7280;
  font-size: 0.95rem;
}

/* 监控部分样式 */
.monitor-section {
  padding: 1rem 0;
  display: grid;
  gap: 1.5rem;
}

.monitor-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.06);
  transition: all 0.2s ease;
}

.monitor-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.monitor-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.monitor-desc {
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
  .performance-page {
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
  
  .optimize-title,
  .render-title,
  .cache-title,
  .monitor-title,
  .category-title {
    color: #f9fafb;
  }
  
  .optimize-desc,
  .render-desc,
  .cache-desc,
  .monitor-desc {
    color: #d1d5db;
  }
  
  .optimize-item,
  .render-item,
  .cache-item,
  .monitor-item {
    background: #374151;
  }
  
  .optimize-item:hover,
  .render-item:hover,
  .cache-item:hover,
  .monitor-item:hover {
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