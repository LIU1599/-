<template>
  <!-- 首页组件模板 -->
  <div class="home-page">
    <!-- 页面头部区域 -->
    <header class="hero-section">
      <!-- 主标题 -->
      <h1 class="main-title">
        <span class="text-gradient">前端实习生知识指南</span>
      </h1>
      
      <!-- 副标题 -->
      <p class="subtitle">
        从零开始，系统学习前端开发技术，掌握 React、Vue、ECharts 等核心技术栈
      </p>
      
      <!-- 统计信息 -->
      <div class="stats-container">
        <div class="stat-item">
          <span class="stat-number">11</span>
          <span class="stat-label">学习模块</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">100+</span>
          <span class="stat-label">知识点</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">50+</span>
          <span class="stat-label">实战项目</span>
        </div>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <!-- 学习路径导航 -->
      <section class="learning-path">
        <h2 class="section-title">学习路径</h2>
        
        <!-- 学习卡片网格 -->
        <div class="cards-grid">
          <!-- 前端简介卡片 -->
          <div class="learning-card" @click="navigateTo('/frontend-intro')">
            <div class="card-icon">
              <i class="fas fa-code"></i>
            </div>
            <h3 class="card-title">前端简介</h3>
            <p class="card-description">
              了解前端开发的基础知识、发展历程和核心技术
            </p>
            <div class="card-tags">
              <span class="tag">HTML</span>
              <span class="tag">CSS</span>
              <span class="tag">JavaScript</span>
            </div>
          </div>

          <!-- React 学习卡片 -->
          <div class="learning-card" @click="navigateTo('/react')">
            <div class="card-icon react-icon">
              <i class="fab fa-react"></i>
            </div>
            <h3 class="card-title">React 学习</h3>
            <p class="card-description">
              掌握 React 框架的核心概念、Hooks 和组件开发
            </p>
            <div class="card-tags">
              <span class="tag">React</span>
              <span class="tag">Hooks</span>
              <span class="tag">组件</span>
            </div>
          </div>

          <!-- Vue 学习卡片 -->
          <div class="learning-card" @click="navigateTo('/vue')">
            <div class="card-icon vue-icon">
              <i class="fab fa-vuejs"></i>
            </div>
            <h3 class="card-title">Vue 学习</h3>
            <p class="card-description">
              学习 Vue.js 框架、Composition API 和生态系统
            </p>
            <div class="card-tags">
              <span class="tag">Vue</span>
              <span class="tag">Composition API</span>
              <span class="tag">Vuex</span>
            </div>
          </div>

          <!-- ECharts 图表卡片 -->
          <div class="learning-card" @click="navigateTo('/echarts')">
            <div class="card-icon echarts-icon">
              <i class="fas fa-chart-bar"></i>
            </div>
            <h3 class="card-title">ECharts 图表</h3>
            <p class="card-description">
              掌握数据可视化技术，创建各种类型的图表
            </p>
            <div class="card-tags">
              <span class="tag">ECharts</span>
              <span class="tag">数据可视化</span>
              <span class="tag">图表</span>
            </div>
          </div>

          <!-- Element UI 卡片 -->
          <div class="learning-card" @click="navigateTo('/element-ui')">
            <div class="card-icon element-icon">
              <i class="fas fa-palette"></i>
            </div>
            <h3 class="card-title">Element UI</h3>
            <p class="card-description">
              学习 Element Plus 组件库的使用和自定义
            </p>
            <div class="card-tags">
              <span class="tag">Element Plus</span>
              <span class="tag">组件库</span>
              <span class="tag">UI 设计</span>
            </div>
          </div>

          <!-- Git 版本控制卡片 -->
          <div class="learning-card" @click="navigateTo('/git')">
            <div class="card-icon git-icon">
              <i class="fab fa-git-alt"></i>
            </div>
            <h3 class="card-title">Git 版本控制</h3>
            <p class="card-description">
              掌握 Git 基础命令和团队协作流程
            </p>
            <div class="card-tags">
              <span class="tag">Git</span>
              <span class="tag">版本控制</span>
              <span class="tag">团队协作</span>
            </div>
          </div>

          <!-- 测试相关卡片 -->
          <div class="learning-card" @click="navigateTo('/testing')">
            <div class="card-icon testing-icon">
              <i class="fas fa-bug"></i>
            </div>
            <h3 class="card-title">前端测试</h3>
            <p class="card-description">
              学习单元测试、集成测试和 E2E 测试
            </p>
            <div class="card-tags">
              <span class="tag">Jest</span>
              <span class="tag">Cypress</span>
              <span class="tag">测试</span>
            </div>
          </div>

          <!-- 性能优化卡片 -->
          <div class="learning-card" @click="navigateTo('/performance')">
            <div class="card-icon performance-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            <h3 class="card-title">性能优化</h3>
            <p class="card-description">
              掌握前端性能优化技巧和最佳实践
            </p>
            <div class="card-tags">
              <span class="tag">性能优化</span>
              <span class="tag">Webpack</span>
              <span class="tag">Lighthouse</span>
            </div>
          </div>

          <!-- 移动端开发卡片 -->
          <div class="learning-card" @click="navigateTo('/mobile')">
            <div class="card-icon mobile-icon">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <h3 class="card-title">移动端开发</h3>
            <p class="card-description">
              学习响应式设计和移动端适配技术
            </p>
            <div class="card-tags">
              <span class="tag">响应式</span>
              <span class="tag">PWA</span>
              <span class="tag">移动端</span>
            </div>
          </div>

          <!-- 工程化卡片 -->
          <div class="learning-card" @click="navigateTo('/engineering')">
            <div class="card-icon engineering-icon">
              <i class="fas fa-tools"></i>
            </div>
            <h3 class="card-title">前端工程化</h3>
            <p class="card-description">
              掌握构建工具、CI/CD 和自动化部署
            </p>
            <div class="card-tags">
              <span class="tag">Webpack</span>
              <span class="tag">Vite</span>
              <span class="tag">CI/CD</span>
            </div>
          </div>

          <!-- 面试准备卡片 -->
          <div class="learning-card" @click="navigateTo('/interview')">
            <div class="card-icon interview-icon">
              <i class="fas fa-user-graduate"></i>
            </div>
            <h3 class="card-title">面试准备</h3>
            <p class="card-description">
              前端面试题、算法题和项目经验分享
            </p>
            <div class="card-tags">
              <span class="tag">面试题</span>
              <span class="tag">算法</span>
              <span class="tag">项目经验</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 快速开始区域 -->
      <section class="quick-start">
        <h2 class="section-title">快速开始</h2>
        <div class="quick-start-content">
          <div class="start-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>选择学习路径</h3>
              <p>根据你的基础和目标，选择合适的起点开始学习</p>
            </div>
          </div>
          <div class="start-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>跟随教程学习</h3>
              <p>按照教程步骤，动手实践每个知识点</p>
            </div>
          </div>
          <div class="start-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>完成实战项目</h3>
              <p>通过项目实战，巩固所学知识</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- 页面底部区域 -->
    <footer class="home-footer">
      作者：liuxin，仅做学习交流使用
    </footer>
  </div>
</template>

<script>
// 首页组件脚本
export default {
  // 组件名称
  name: 'HomePage',
  
  // 组件数据
  data() {
    return {
      // 页面加载状态
      loading: false,
      // 统计数据
      stats: {
        modules: 11,
        topics: 100,
        projects: 50
      }
    }
  },
  
  // 组件创建时的生命周期钩子
  created() {
    // 设置页面标题
    document.title = '前端实习生知识指南 - 首页'
    
    // 记录页面访问
    this.trackPageView()
  },
  
  // 组件挂载后的生命周期钩子
  mounted() {
    // 添加页面进入动画
    this.addPageAnimation()
    
    // 3D卡片悬浮交互
    const cards = document.querySelectorAll('.learning-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 8; // 最大8度
        const rotateY = ((x - centerX) / centerX) * 8;
        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  },
  
  // 组件方法
  methods: {
    // 页面导航方法
    navigateTo(path) {
      // 添加点击动画效果
      this.addClickAnimation()
      
      // 延迟导航，让动画完成
      setTimeout(() => {
        this.$router.push(path)
      }, 200)
    },
    
    // 添加页面进入动画
    addPageAnimation() {
      // 为卡片添加延迟动画
      const cards = document.querySelectorAll('.learning-card')
      cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`
        card.classList.add('animate-fade-in')
      })
    },
    
    // 添加点击动画效果
    addClickAnimation(event) {
      if (event) {
        const card = event.currentTarget
        card.classList.add('animate-bounce-in')
        
        // 移除动画类，以便下次可以再次触发
        setTimeout(() => {
          card.classList.remove('animate-bounce-in')
        }, 600)
      }
    },
    
    // 记录页面访问
    trackPageView() {
      // 这里可以添加页面访问统计
      console.log('首页访问记录')
    },
    
    // 获取学习进度
    getLearningProgress() {
      // 从本地存储获取学习进度
      const progress = localStorage.getItem('learning-progress')
      return progress ? JSON.parse(progress) : {}
    },
    
    // 更新学习进度
    updateLearningProgress(moduleId, progress) {
      const allProgress = this.getLearningProgress()
      allProgress[moduleId] = progress
      localStorage.setItem('learning-progress', JSON.stringify(allProgress))
    }
  }
}
</script>

<style scoped>
/* 首页组件样式 */

/* 页面容器 */
.home-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 1rem;
}

/* 头部英雄区域 */
.hero-section {
  text-align: center;
  padding: 4rem 0;
  color: white;
}

/* 主标题 */
.main-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* 副标题 */
.subtitle {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* 统计信息容器 */
.stats-container {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

/* 统计项 */
.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
}

/* 主要内容区域 */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

/* 区域标题 */
.section-title {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 3rem;
  color: white;
}

/* 卡片网格 */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

/* 学习卡片 */
.learning-card {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.10);
  border-radius: 16px;
  transition: box-shadow 0.3s, transform 0.25s cubic-bezier(.25,.8,.25,1);
  padding: 2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  will-change: transform;
}

.learning-card:hover {
  box-shadow: 0 16px 48px rgba(0,0,0,0.18);
  transform: translateY(-4px) scale(1.02);
}

/* 卡片图标 */
.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* 不同卡片的图标颜色 */
.react-icon {
  background: linear-gradient(135deg, #61dafb 0%, #21d4fd 100%);
}

.vue-icon {
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
}

.echarts-icon {
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
}

.element-icon {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.git-icon {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}

.testing-icon {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.performance-icon {
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
}

.mobile-icon {
  background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%);
}

.engineering-icon {
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
}

.interview-icon {
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
}

/* 卡片标题 */
.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

/* 卡片描述 */
.card-description {
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

/* 卡片标签 */
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #f3f4f6;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

/* 快速开始区域 */
.quick-start {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 3rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.quick-start-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

/* 开始步骤 */
.start-step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  color: #667eea;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.125rem;
  flex-shrink: 0;
}

.step-content h3 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.step-content p {
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-title {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .stats-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .cards-grid {
    grid-template-columns: 1fr;
  }
  
  .quick-start-content {
    grid-template-columns: 1fr;
  }
}

/* 动画效果 */
.animate-fade-in {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-bounce-in {
  animation: bounceIn 0.6s ease-out;
}

@keyframes bounceIn {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* 页面底部区域 */
.home-footer {
  width: 100%;
  text-align: center;
  color: #e0e7ff;
  font-size: 1rem;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
  opacity: 0.85;
}
</style> 