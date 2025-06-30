<template>
  <!-- 前端测试页面模板 -->
  <div class="testing-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">
        <i class="fas fa-vial mr-3"></i>
        前端测试
      </h1>
      <p class="page-subtitle">保障前端应用质量的测试体系与工具</p>
    </div>

    <!-- 主要内容区域 -->
    <div class="content-grid">
      <!-- 单元测试 -->
      <Card title="单元测试" type="primary" class="content-card">
        <div class="test-section">
          <div class="test-item">
            <h4 class="test-title">Jest</h4>
            <p class="test-desc">主流JavaScript测试框架，支持快照、Mock等</p>
          </div>
          <div class="test-item">
            <h4 class="test-title">Mocha</h4>
            <p class="test-desc">灵活的测试框架，适合多种断言库</p>
          </div>
          <div class="test-item">
            <h4 class="test-title">Vitest</h4>
            <p class="test-desc">Vite生态下的极速单元测试工具</p>
          </div>
        </div>
      </Card>

      <!-- 端到端测试 -->
      <Card title="端到端测试" type="success" class="content-card">
        <div class="e2e-section">
          <div class="e2e-item">
            <h4 class="e2e-title">Cypress</h4>
            <p class="e2e-desc">现代前端端到端测试工具，易用且强大</p>
          </div>
          <div class="e2e-item">
            <h4 class="e2e-title">Playwright</h4>
            <p class="e2e-desc">支持多浏览器自动化的E2E测试工具</p>
          </div>
          <div class="e2e-item">
            <h4 class="e2e-title">Selenium</h4>
            <p class="e2e-desc">经典的自动化测试工具，支持多语言</p>
          </div>
        </div>
      </Card>

      <!-- 覆盖率与Mock -->
      <Card title="测试覆盖率与Mock" type="warning" class="content-card">
        <div class="coverage-section">
          <div class="coverage-item">
            <h4 class="coverage-title">覆盖率工具</h4>
            <p class="coverage-desc">Istanbul、nyc等，统计测试覆盖率</p>
          </div>
          <div class="coverage-item">
            <h4 class="coverage-title">Mock工具</h4>
            <p class="coverage-desc">Mock Service Worker、faker.js等</p>
          </div>
        </div>
      </Card>

      <!-- 推荐资源 -->
      <Card title="推荐学习资源" type="default" class="content-card">
        <div class="resources-section">
          <div class="resource-category">
            <h4 class="category-title">📚 官方文档</h4>
            <div class="resource-links">
              <a href="https://jestjs.io/" target="_blank" class="resource-link">Jest官方文档</a>
              <a href="https://mochajs.org/" target="_blank" class="resource-link">Mocha官方文档</a>
              <a href="https://vitest.dev/" target="_blank" class="resource-link">Vitest官方文档</a>
              <a href="https://www.cypress.io/" target="_blank" class="resource-link">Cypress官方文档</a>
              <a href="https://playwright.dev/" target="_blank" class="resource-link">Playwright官方文档</a>
              <a href="https://www.selenium.dev/" target="_blank" class="resource-link">Selenium官方文档</a>
            </div>
          </div>
          <div class="resource-category">
            <h4 class="category-title">🎥 视频教程</h4>
            <div class="resource-links">
              <a href="https://www.bilibili.com/video/BV1hE411x7h7" target="_blank" class="resource-link">Jest单元测试实战</a>
              <a href="https://www.bilibili.com/video/BV1vK4y1C7N1" target="_blank" class="resource-link">Cypress端到端测试</a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
// 前端测试页面脚本
import Card from '@/components/atoms/Card.vue'

export default {
  // 组件名称
  name: 'TestingPage',
  
  // 组件依赖
  components: {
    Card
  },
  
  // 页面元信息
  metaInfo: {
    title: '前端测试 - 前端实习生知识库',
    meta: [
      {
        name: 'description',
        content: '前端单元测试、端到端测试、覆盖率与Mock工具及推荐资源'
      },
      {
        name: 'keywords',
        content: '前端测试, 单元测试, E2E, Jest, Cypress, Playwright'
      }
    ]
  },
  
  // 组件数据
  data() {
    return {
      // 页面数据
      pageData: {
        title: '前端测试',
        description: '保障前端应用质量的测试体系与工具'
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
/* 前端测试页面样式 */

/* 页面基础样式 */
.testing-page {
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

/* 测试部分样式 */
.test-section {
  padding: 1rem 0;
  display: grid;
  gap: 1.5rem;
}

.test-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.06);
  transition: all 0.2s ease;
}

.test-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.test-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.test-desc {
  color: #6b7280;
  font-size: 0.95rem;
}

/* E2E部分样式 */
.e2e-section {
  padding: 1rem 0;
  display: grid;
  gap: 1.5rem;
}

.e2e-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.06);
  transition: all 0.2s ease;
}

.e2e-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.e2e-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.e2e-desc {
  color: #6b7280;
  font-size: 0.95rem;
}

/* 覆盖率部分样式 */
.coverage-section {
  padding: 1rem 0;
  display: grid;
  gap: 1.5rem;
}

.coverage-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.06);
  transition: all 0.2s ease;
}

.coverage-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.coverage-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.coverage-desc {
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
  .testing-page {
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
  
  .test-title,
  .e2e-title,
  .coverage-title,
  .category-title {
    color: #f9fafb;
  }
  
  .test-desc,
  .e2e-desc,
  .coverage-desc {
    color: #d1d5db;
  }
  
  .test-item,
  .e2e-item,
  .coverage-item {
    background: #374151;
  }
  
  .test-item:hover,
  .e2e-item:hover,
  .coverage-item:hover {
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