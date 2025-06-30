<template>
  <!-- 工程化与自动化页面模板 -->
  <div class="engineering-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">
        <i class="fas fa-cogs mr-3"></i>
        工程化与自动化
      </h1>
      <p class="page-subtitle">提升开发效率与项目质量的必备技能</p>
    </div>

    <!-- 主要内容区域 -->
    <div class="content-grid">
      <!-- 构建工具 -->
      <Card title="构建工具" type="primary" class="content-card">
        <div class="tool-section">
          <div class="tool-item">
            <h4 class="tool-title">Webpack</h4>
            <p class="tool-desc">模块打包、代码分割、热更新、插件机制</p>
          </div>
          <div class="tool-item">
            <h4 class="tool-title">Vite</h4>
            <p class="tool-desc">极速冷启动、原生ESM、按需编译、现代前端开发体验</p>
          </div>
          <div class="tool-item">
            <h4 class="tool-title">Rollup</h4>
            <p class="tool-desc">库打包、Tree Shaking、体积优化</p>
          </div>
        </div>
      </Card>

      <!-- 自动化工具 -->
      <Card title="自动化工具" type="success" class="content-card">
        <div class="automation-section">
          <div class="automation-item">
            <h4 class="automation-title">NPM Scripts</h4>
            <p class="automation-desc">自定义脚本任务，自动化构建、测试、部署</p>
          </div>
          <div class="automation-item">
            <h4 class="automation-title">CI/CD</h4>
            <p class="automation-desc">持续集成与持续部署，自动化测试与上线</p>
          </div>
          <div class="automation-item">
            <h4 class="automation-title">Git Hooks</h4>
            <p class="automation-desc">代码提交前自动检查、格式化、测试</p>
          </div>
        </div>
      </Card>

      <!-- 代码规范 -->
      <Card title="代码规范与质量" type="warning" class="content-card">
        <div class="quality-section">
          <div class="quality-item">
            <h4 class="quality-title">ESLint</h4>
            <p class="quality-desc">代码风格检查，自动修复常见问题</p>
          </div>
          <div class="quality-item">
            <h4 class="quality-title">Prettier</h4>
            <p class="quality-desc">统一代码格式，提升可读性</p>
          </div>
          <div class="quality-item">
            <h4 class="quality-title">Husky</h4>
            <p class="quality-desc">管理Git钩子，保障提交质量</p>
          </div>
        </div>
      </Card>

      <!-- 推荐资源 -->
      <Card title="推荐学习资源" type="default" class="content-card">
        <div class="resources-section">
          <div class="resource-category">
            <h4 class="category-title">📚 官方文档</h4>
            <div class="resource-links">
              <a href="https://webpack.js.org/" target="_blank" class="resource-link">Webpack官方文档</a>
              <a href="https://vitejs.dev/" target="_blank" class="resource-link">Vite官方文档</a>
              <a href="https://rollupjs.org/" target="_blank" class="resource-link">Rollup官方文档</a>
              <a href="https://eslint.org/" target="_blank" class="resource-link">ESLint官方文档</a>
              <a href="https://prettier.io/" target="_blank" class="resource-link">Prettier官方文档</a>
              <a href="https://typicode.github.io/husky/" target="_blank" class="resource-link">Husky官方文档</a>
            </div>
          </div>
          <div class="resource-category">
            <h4 class="category-title">🎥 视频教程</h4>
            <div class="resource-links">
              <a href="https://www.bilibili.com/video/BV1hE411x7h7" target="_blank" class="resource-link">Webpack5实战</a>
              <a href="https://www.bilibili.com/video/BV1vK4y1C7N1" target="_blank" class="resource-link">Vite原理与实践</a>
              <a href="https://www.bilibili.com/video/BV1hK4y1C7N2" target="_blank" class="resource-link">前端自动化CI/CD</a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
// 工程化与自动化页面脚本
import Card from '@/components/atoms/Card.vue'

export default {
  // 组件名称
  name: 'EngineeringPage',
  
  // 组件依赖
  components: {
    Card
  },
  
  // 页面元信息
  metaInfo: {
    title: '工程化与自动化 - 前端实习生知识库',
    meta: [
      {
        name: 'description',
        content: '前端工程化、自动化工具、代码规范与推荐资源'
      },
      {
        name: 'keywords',
        content: '工程化, 自动化, Webpack, Vite, ESLint, Prettier, CI/CD'
      }
    ]
  },
  
  // 组件数据
  data() {
    return {
      // 页面数据
      pageData: {
        title: '工程化与自动化',
        description: '提升开发效率与项目质量的必备技能'
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
/* 工程化与自动化页面样式 */

/* 页面基础样式 */
.engineering-page {
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

/* 工具部分样式 */
.tool-section {
  padding: 1rem 0;
  display: grid;
  gap: 1.5rem;
}

.tool-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.06);
  transition: all 0.2s ease;
}

.tool-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.tool-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.tool-desc {
  color: #6b7280;
  font-size: 0.95rem;
}

/* 自动化部分样式 */
.automation-section {
  padding: 1rem 0;
  display: grid;
  gap: 1.5rem;
}

.automation-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.06);
  transition: all 0.2s ease;
}

.automation-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.automation-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.automation-desc {
  color: #6b7280;
  font-size: 0.95rem;
}

/* 质量部分样式 */
.quality-section {
  padding: 1rem 0;
  display: grid;
  gap: 1.5rem;
}

.quality-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.06);
  transition: all 0.2s ease;
}

.quality-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.quality-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.quality-desc {
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
  .engineering-page {
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
  
  .tool-title,
  .automation-title,
  .quality-title,
  .category-title {
    color: #f9fafb;
  }
  
  .tool-desc,
  .automation-desc,
  .quality-desc {
    color: #d1d5db;
  }
  
  .tool-item,
  .automation-item,
  .quality-item {
    background: #374151;
  }
  
  .tool-item:hover,
  .automation-item:hover,
  .quality-item:hover {
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