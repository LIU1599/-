<template>
  <!-- 面试准备页面模板 -->
  <div class="interview-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">
        <i class="fas fa-user-tie mr-3"></i>
        面试准备
      </h1>
      <p class="page-subtitle">前端面试必备知识点与技巧</p>
    </div>

    <!-- 主要内容区域 -->
    <div class="content-grid">
      <!-- 基础知识 -->
      <Card title="前端基础知识" type="primary" class="content-card">
        <div class="knowledge-section">
          <div class="knowledge-category">
            <h4 class="category-title">📚 HTML/CSS</h4>
            <div class="topic-list">
              <div class="topic-item">
                <span class="topic-name">语义化标签</span>
                <span class="topic-desc">header, nav, main, article, section, footer</span>
              </div>
              <div class="topic-item">
                <span class="topic-name">盒模型</span>
                <span class="topic-desc">标准盒模型 vs IE盒模型</span>
              </div>
              <div class="topic-item">
                <span class="topic-name">Flexbox布局</span>
                <span class="topic-desc">主轴、交叉轴、flex属性</span>
              </div>
              <div class="topic-item">
                <span class="topic-name">Grid布局</span>
                <span class="topic-desc">网格容器、网格项目</span>
              </div>
              <div class="topic-item">
                <span class="topic-name">响应式设计</span>
                <span class="topic-desc">媒体查询、视口设置</span>
              </div>
            </div>
          </div>

          <div class="knowledge-category">
            <h4 class="category-title">⚡ JavaScript</h4>
            <div class="topic-list">
              <div class="topic-item">
                <span class="topic-name">闭包</span>
                <span class="topic-desc">函数作用域、变量保存</span>
              </div>
              <div class="topic-item">
                <span class="topic-name">原型链</span>
                <span class="topic-desc">__proto__、prototype、继承</span>
              </div>
              <div class="topic-item">
                <span class="topic-name">事件循环</span>
                <span class="topic-desc">宏任务、微任务、Event Loop</span>
              </div>
              <div class="topic-item">
                <span class="topic-name">Promise/Async</span>
                <span class="topic-desc">异步编程、错误处理</span>
              </div>
              <div class="topic-item">
                <span class="topic-name">ES6+特性</span>
                <span class="topic-desc">箭头函数、解构、模块化</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <!-- 框架技术 -->
      <Card title="前端框架" type="success" class="content-card">
        <div class="framework-section">
          <div class="framework-item">
            <div class="framework-header">
              <i class="fab fa-react text-blue-500"></i>
              <h4 class="framework-title">React</h4>
            </div>
            <div class="framework-topics">
              <span class="topic-tag">虚拟DOM</span>
              <span class="topic-tag">组件生命周期</span>
              <span class="topic-tag">Hooks</span>
              <span class="topic-tag">状态管理</span>
              <span class="topic-tag">性能优化</span>
            </div>
          </div>

          <div class="framework-item">
            <div class="framework-header">
              <i class="fab fa-vuejs text-green-500"></i>
              <h4 class="framework-title">Vue</h4>
            </div>
            <div class="framework-topics">
              <span class="topic-tag">响应式原理</span>
              <span class="topic-tag">组件通信</span>
              <span class="topic-tag">Vuex状态管理</span>
              <span class="topic-tag">Vue Router</span>
              <span class="topic-tag">Composition API</span>
            </div>
          </div>

          <div class="framework-item">
            <div class="framework-header">
              <i class="fab fa-angular text-red-500"></i>
              <h4 class="framework-title">Angular</h4>
            </div>
            <div class="framework-topics">
              <span class="topic-tag">TypeScript</span>
              <span class="topic-tag">依赖注入</span>
              <span class="topic-tag">RxJS</span>
              <span class="topic-tag">NgRx</span>
              <span class="topic-tag">Angular CLI</span>
            </div>
          </div>
        </div>
      </Card>

      <!-- 算法与数据结构 -->
      <Card title="算法与数据结构" type="warning" class="content-card">
        <div class="algorithm-section">
          <div class="algorithm-category">
            <h4 class="category-title">🔢 基础算法</h4>
            <div class="algorithm-list">
              <div class="algorithm-item">
                <span class="algorithm-name">排序算法</span>
                <div class="algorithm-details">
                  <span class="detail-item">冒泡排序 O(n²)</span>
                  <span class="detail-item">快速排序 O(nlogn)</span>
                  <span class="detail-item">归并排序 O(nlogn)</span>
                </div>
              </div>
              <div class="algorithm-item">
                <span class="algorithm-name">查找算法</span>
                <div class="algorithm-details">
                  <span class="detail-item">二分查找 O(logn)</span>
                  <span class="detail-item">线性查找 O(n)</span>
                </div>
              </div>
            </div>
          </div>

          <div class="algorithm-category">
            <h4 class="category-title">🏗️ 数据结构</h4>
            <div class="algorithm-list">
              <div class="algorithm-item">
                <span class="algorithm-name">数组与链表</span>
                <div class="algorithm-details">
                  <span class="detail-item">数组：随机访问 O(1)</span>
                  <span class="detail-item">链表：插入删除 O(1)</span>
                </div>
              </div>
              <div class="algorithm-item">
                <span class="algorithm-name">栈与队列</span>
                <div class="algorithm-details">
                  <span class="detail-item">栈：LIFO 后进先出</span>
                  <span class="detail-item">队列：FIFO 先进先出</span>
                </div>
              </div>
              <div class="algorithm-item">
                <span class="algorithm-name">树与图</span>
                <div class="algorithm-details">
                  <span class="detail-item">二叉树、BST、AVL</span>
                  <span class="detail-item">深度优先、广度优先</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <!-- 网络与性能 -->
      <Card title="网络与性能优化" type="danger" class="content-card">
        <div class="network-section">
          <div class="network-category">
            <h4 class="category-title">🌐 网络基础</h4>
            <div class="network-topics">
              <div class="network-item">
                <span class="network-name">HTTP协议</span>
                <span class="network-desc">GET/POST、状态码、缓存机制</span>
              </div>
              <div class="network-item">
                <span class="network-name">HTTPS</span>
                <span class="network-desc">SSL/TLS、数字证书、加密传输</span>
              </div>
              <div class="network-item">
                <span class="network-name">WebSocket</span>
                <span class="network-desc">全双工通信、实时数据传输</span>
              </div>
            </div>
          </div>

          <div class="network-category">
            <h4 class="category-title">⚡ 性能优化</h4>
            <div class="network-topics">
              <div class="network-item">
                <span class="network-name">加载优化</span>
                <span class="network-desc">懒加载、预加载、代码分割</span>
              </div>
              <div class="network-item">
                <span class="network-name">渲染优化</span>
                <span class="network-desc">虚拟滚动、防抖节流、requestAnimationFrame</span>
              </div>
              <div class="network-item">
                <span class="network-name">缓存策略</span>
                <span class="network-desc">浏览器缓存、CDN、Service Worker</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <!-- 面试技巧 -->
      <Card title="面试技巧" type="default" class="content-card">
        <div class="interview-tips-section">
          <div class="tip-category">
            <h4 class="category-title">💼 面试准备</h4>
            <div class="tip-list">
              <div class="tip-item">
                <i class="fas fa-check-circle text-green-500"></i>
                <span>准备项目案例，突出技术难点和解决方案</span>
              </div>
              <div class="tip-item">
                <i class="fas fa-check-circle text-green-500"></i>
                <span>复习基础知识，准备手写代码题</span>
              </div>
              <div class="tip-item">
                <i class="fas fa-check-circle text-green-500"></i>
                <span>了解公司技术栈和业务方向</span>
              </div>
              <div class="tip-item">
                <i class="fas fa-check-circle text-green-500"></i>
                <span>准备自我介绍和职业规划</span>
              </div>
            </div>
          </div>

          <div class="tip-category">
            <h4 class="category-title">🎯 面试技巧</h4>
            <div class="tip-list">
              <div class="tip-item">
                <i class="fas fa-lightbulb text-yellow-500"></i>
                <span>STAR法则：情境、任务、行动、结果</span>
              </div>
              <div class="tip-item">
                <i class="fas fa-lightbulb text-yellow-500"></i>
                <span>先理解问题，再给出解决方案</span>
              </div>
              <div class="tip-item">
                <i class="fas fa-lightbulb text-yellow-500"></i>
                <span>诚实回答，不会的可以学习</span>
              </div>
              <div class="tip-item">
                <i class="fas fa-lightbulb text-yellow-500"></i>
                <span>主动提问，了解团队和项目</span>
              </div>
            </div>
          </div>

          <div class="tip-category">
            <h4 class="category-title">📝 常见问题</h4>
            <div class="question-list">
              <div class="question-item">
                <span class="question-text">"请介绍一下你自己"</span>
                <span class="question-tip">重点介绍技术背景和项目经验</span>
              </div>
              <div class="question-item">
                <span class="question-text">"为什么选择我们公司？"</span>
                <span class="question-tip">结合公司业务和个人发展</span>
              </div>
              <div class="question-item">
                <span class="question-text">"你的优缺点是什么？"</span>
                <span class="question-tip">优点要具体，缺点要改进</span>
              </div>
              <div class="question-item">
                <span class="question-text">"期望薪资是多少？"</span>
                <span class="question-tip">了解市场行情，合理报价</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <!-- 推荐资源 -->
      <Card title="推荐学习资源" type="default" class="content-card">
        <div class="resources-section">
          <div class="resource-category">
            <h4 class="category-title">📚 书籍推荐</h4>
            <div class="resource-links">
              <a href="#" class="resource-link">《JavaScript高级程序设计》</a>
              <a href="#" class="resource-link">《你不知道的JavaScript》</a>
              <a href="#" class="resource-link">《深入理解计算机系统》</a>
              <a href="#" class="resource-link">《算法导论》</a>
            </div>
          </div>

          <div class="resource-category">
            <h4 class="category-title">🌐 在线资源</h4>
            <div class="resource-links">
              <a href="https://leetcode.cn/" target="_blank" class="resource-link">LeetCode中文版</a>
              <a href="https://github.com/Advanced-Frontend/Daily-Interview-Question" target="_blank" class="resource-link">前端面试每日3+1</a>
              <a href="https://github.com/CavsZhouyou/Front-End-Interview-Notebook" target="_blank" class="resource-link">前端面试复习笔记</a>
              <a href="https://github.com/azl397985856/leetcode" target="_blank" class="resource-link">LeetCode题解</a>
            </div>
          </div>

          <div class="resource-category">
            <h4 class="category-title">🎥 视频教程</h4>
            <div class="resource-links">
              <a href="#" class="resource-link">JavaScript核心概念精讲</a>
              <a href="#" class="resource-link">React源码深度解析</a>
              <a href="#" class="resource-link">Vue.js设计与实现</a>
              <a href="#" class="resource-link">前端性能优化实战</a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
// 面试准备页面脚本
import Card from '@/components/atoms/Card.vue'

export default {
  // 组件名称
  name: 'InterviewPage',
  
  // 组件依赖
  components: {
    Card
  },
  
  // 页面元信息
  metaInfo: {
    title: '面试准备 - 前端实习生知识库',
    meta: [
      {
        name: 'description',
        content: '前端面试必备知识点、算法题、面试技巧和推荐资源'
      },
      {
        name: 'keywords',
        content: '前端面试, JavaScript, React, Vue, 算法, 面试技巧'
      }
    ]
  },
  
  // 组件数据
  data() {
    return {
      // 页面数据
      pageData: {
        title: '面试准备',
        description: '前端面试必备知识点与技巧'
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
/* 面试准备页面样式 */

/* 页面基础样式 */
.interview-page {
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

/* 知识部分样式 */
.knowledge-section {
  padding: 1rem 0;
}

.knowledge-category {
  margin-bottom: 2rem;
}

.category-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
}

.topic-list {
  display: grid;
  gap: 0.75rem;
}

.topic-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.topic-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.topic-name {
  font-weight: 500;
  color: #1f2937;
}

.topic-desc {
  color: #6b7280;
  font-size: 0.875rem;
}

/* 框架部分样式 */
.framework-section {
  padding: 1rem 0;
}

.framework-item {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid #10b981;
  transition: all 0.2s ease;
}

.framework-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.framework-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.framework-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.framework-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.topic-tag {
  background: #dbeafe;
  color: #1e40af;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

/* 算法部分样式 */
.algorithm-section {
  padding: 1rem 0;
}

.algorithm-category {
  margin-bottom: 2rem;
}

.algorithm-list {
  display: grid;
  gap: 1rem;
}

.algorithm-item {
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid #f59e0b;
  transition: all 0.2s ease;
}

.algorithm-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.algorithm-name {
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
  display: block;
}

.algorithm-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.detail-item {
  color: #6b7280;
  font-size: 0.875rem;
}

/* 网络部分样式 */
.network-section {
  padding: 1rem 0;
}

.network-category {
  margin-bottom: 2rem;
}

.network-topics {
  display: grid;
  gap: 1rem;
}

.network-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 8px;
  border-left: 4px solid #ef4444;
  transition: all 0.2s ease;
}

.network-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.network-name {
  font-weight: 500;
  color: #1f2937;
}

.network-desc {
  color: #6b7280;
  font-size: 0.875rem;
  text-align: right;
}

/* 面试技巧样式 */
.interview-tips-section {
  padding: 1rem 0;
}

.tip-category {
  margin-bottom: 2rem;
}

.tip-list {
  display: grid;
  gap: 0.75rem;
}

.tip-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.tip-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.tip-item i {
  font-size: 1.125rem;
  width: 20px;
}

.question-list {
  display: grid;
  gap: 1rem;
}

.question-item {
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid #8b5cf6;
  transition: all 0.2s ease;
}

.question-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.question-text {
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
  display: block;
}

.question-tip {
  color: #6b7280;
  font-size: 0.875rem;
}

/* 资源部分样式 */
.resources-section {
  padding: 1rem 0;
}

.resource-category {
  margin-bottom: 2rem;
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
  .interview-page {
    padding: 1rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .topic-item,
  .network-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .topic-desc,
  .network-desc {
    text-align: left;
  }
  
  .framework-topics {
    justify-content: flex-start;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .content-card {
    background: rgba(31, 41, 55, 0.95);
    color: #f9fafb;
  }
  
  .category-title,
  .framework-title,
  .algorithm-name,
  .network-name,
  .question-text {
    color: #f9fafb;
  }
  
  .topic-desc,
  .detail-item,
  .network-desc,
  .question-tip {
    color: #d1d5db;
  }
  
  .topic-item,
  .framework-item,
  .algorithm-item,
  .network-item,
  .tip-item,
  .question-item {
    background: #374151;
  }
  
  .topic-item:hover,
  .framework-item:hover,
  .algorithm-item:hover,
  .network-item:hover,
  .tip-item:hover,
  .question-item:hover {
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