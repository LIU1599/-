<template>
  <!-- Git版本控制页面模板 -->
  <div class="git-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">
        <i class="fas fa-code-branch mr-3"></i>
        Git 版本控制
      </h1>
      <p class="page-subtitle">掌握现代软件开发的核心工具</p>
    </div>

    <!-- 主要内容区域 -->
    <div class="content-grid">
      <!-- Git基础概念 -->
      <Card title="Git基础概念" type="primary" class="content-card">
        <div class="concept-section">
          <h3 class="section-title">什么是Git？</h3>
          <p class="section-text">
            Git是一个分布式版本控制系统，用于跟踪文件的变化。它允许多人协作开发，
            记录项目的完整历史，并支持分支管理。
          </p>
          
          <div class="feature-list">
            <div class="feature-item">
              <i class="fas fa-save text-blue-500"></i>
              <span>版本控制 - 记录每次代码变更</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-users text-green-500"></i>
              <span>协作开发 - 多人同时工作</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-code-branch text-purple-500"></i>
              <span>分支管理 - 并行开发不同功能</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-undo text-orange-500"></i>
              <span>回滚能力 - 随时回到历史版本</span>
            </div>
          </div>
        </div>
      </Card>

      <!-- 常用命令 -->
      <Card title="常用Git命令" type="success" class="content-card">
        <div class="commands-section">
          <div class="command-group">
            <h4 class="group-title">初始化与配置</h4>
            <div class="command-item">
              <code class="command-code">git init</code>
              <span class="command-desc">初始化新的Git仓库</span>
            </div>
            <div class="command-item">
              <code class="command-code">git config --global user.name "姓名"</code>
              <span class="command-desc">设置全局用户名</span>
            </div>
            <div class="command-item">
              <code class="command-code">git config --global user.email "邮箱"</code>
              <span class="command-desc">设置全局邮箱</span>
            </div>
          </div>

          <div class="command-group">
            <h4 class="group-title">基本操作</h4>
            <div class="command-item">
              <code class="command-code">git add .</code>
              <span class="command-desc">添加所有文件到暂存区</span>
            </div>
            <div class="command-item">
              <code class="command-code">git commit -m "提交信息"</code>
              <span class="command-desc">提交暂存区的更改</span>
            </div>
            <div class="command-item">
              <code class="command-code">git status</code>
              <span class="command-desc">查看仓库状态</span>
            </div>
            <div class="command-item">
              <code class="command-code">git log</code>
              <span class="command-desc">查看提交历史</span>
            </div>
          </div>

          <div class="command-group">
            <h4 class="group-title">分支操作</h4>
            <div class="command-item">
              <code class="command-code">git branch</code>
              <span class="command-desc">查看所有分支</span>
            </div>
            <div class="command-item">
              <code class="command-code">git branch 分支名</code>
              <span class="command-desc">创建新分支</span>
            </div>
            <div class="command-item">
              <code class="command-code">git checkout 分支名</code>
              <span class="command-desc">切换到指定分支</span>
            </div>
            <div class="command-item">
              <code class="command-code">git merge 分支名</code>
              <span class="command-desc">合并指定分支到当前分支</span>
            </div>
          </div>
        </div>
      </Card>

      <!-- 工作流程 -->
      <Card title="Git工作流程" type="warning" class="content-card">
        <div class="workflow-section">
          <div class="workflow-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">克隆仓库</h4>
              <p class="step-desc">从远程仓库克隆项目到本地</p>
              <code class="step-code">git clone 仓库地址</code>
            </div>
          </div>

          <div class="workflow-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">创建分支</h4>
              <p class="step-desc">为新功能创建独立分支</p>
              <code class="step-code">git checkout -b feature/新功能</code>
            </div>
          </div>

          <div class="workflow-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">开发修改</h4>
              <p class="step-desc">在分支上进行代码开发</p>
              <code class="step-code">git add . && git commit -m "描述"</code>
            </div>
          </div>

          <div class="workflow-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">推送分支</h4>
              <p class="step-desc">将本地分支推送到远程</p>
              <code class="step-code">git push origin 分支名</code>
            </div>
          </div>

          <div class="workflow-step">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4 class="step-title">合并请求</h4>
              <p class="step-desc">创建Pull Request进行代码审查</p>
              <code class="step-code">在GitHub/GitLab上创建PR</code>
            </div>
          </div>
        </div>
      </Card>

      <!-- 最佳实践 -->
      <Card title="Git最佳实践" type="danger" class="content-card">
        <div class="best-practices-section">
          <div class="practice-item">
            <h4 class="practice-title">📝 提交信息规范</h4>
            <p class="practice-desc">
              使用清晰的提交信息，遵循约定式提交格式：
            </p>
            <ul class="practice-list">
              <li><code>feat:</code> 新功能</li>
              <li><code>fix:</code> 修复bug</li>
              <li><code>docs:</code> 文档更新</li>
              <li><code>style:</code> 代码格式调整</li>
              <li><code>refactor:</code> 代码重构</li>
            </ul>
          </div>

          <div class="practice-item">
            <h4 class="practice-title">🌿 分支管理策略</h4>
            <p class="practice-desc">
              采用Git Flow或GitHub Flow等分支策略：
            </p>
            <ul class="practice-list">
              <li><strong>main/master:</strong> 主分支，保持稳定</li>
              <li><strong>develop:</strong> 开发分支，集成功能</li>
              <li><strong>feature/*:</strong> 功能分支，开发新功能</li>
              <li><strong>hotfix/*:</strong> 热修复分支，紧急修复</li>
            </ul>
          </div>

          <div class="practice-item">
            <h4 class="practice-title">🔒 安全注意事项</h4>
            <p class="practice-desc">
              保护敏感信息，避免提交不必要的文件：
            </p>
            <ul class="practice-list">
              <li>使用.gitignore忽略敏感文件</li>
              <li>不要提交密码、密钥等敏感信息</li>
              <li>定期更新依赖包修复安全漏洞</li>
              <li>使用SSH密钥进行身份验证</li>
            </ul>
          </div>
        </div>
      </Card>

      <!-- 推荐资源 -->
      <Card title="推荐学习资源" type="default" class="content-card">
        <div class="resources-section">
          <div class="resource-category">
            <h4 class="category-title">📚 官方文档</h4>
            <div class="resource-links">
              <a href="https://git-scm.com/doc" target="_blank" class="resource-link">
                Git官方文档
              </a>
              <a href="https://git-scm.com/book/zh/v2" target="_blank" class="resource-link">
                Git中文手册
              </a>
            </div>
          </div>

          <div class="resource-category">
            <h4 class="category-title">🎥 视频教程</h4>
            <div class="resource-links">
              <a href="https://www.bilibili.com/video/BV1FE411P7B3" target="_blank" class="resource-link">
                廖雪峰Git教程
              </a>
              <a href="https://www.youtube.com/watch?v=SWYqp7iY_Tc" target="_blank" class="resource-link">
                Git & GitHub Crash Course
              </a>
            </div>
          </div>

          <div class="resource-category">
            <h4 class="category-title">🛠️ 实用工具</h4>
            <div class="resource-links">
              <a href="https://desktop.github.com/" target="_blank" class="resource-link">
                GitHub Desktop
              </a>
              <a href="https://www.sourcetreeapp.com/" target="_blank" class="resource-link">
                Sourcetree
              </a>
              <a href="https://gitkraken.com/" target="_blank" class="resource-link">
                GitKraken
              </a>
            </div>
          </div>

          <div class="resource-category">
            <h4 class="category-title">📖 进阶学习</h4>
            <div class="resource-links">
              <a href="https://learngitbranching.js.org/" target="_blank" class="resource-link">
                Learn Git Branching
              </a>
              <a href="https://github.com/k88hudson/git-flight-rules" target="_blank" class="resource-link">
                Git飞行规则
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
// Git版本控制页面脚本
import Card from '@/components/atoms/Card.vue'

export default {
  // 组件名称
  name: 'GitPage',
  
  // 组件依赖
  components: {
    Card
  },
  
  // 页面元信息
  metaInfo: {
    title: 'Git版本控制 - 前端实习生知识库',
    meta: [
      {
        name: 'description',
        content: '学习Git版本控制的基础概念、常用命令、工作流程和最佳实践'
      },
      {
        name: 'keywords',
        content: 'Git, 版本控制, 分支管理, 协作开发, 前端开发'
      }
    ]
  },
  
  // 组件数据
  data() {
    return {
      // 页面数据
      pageData: {
        title: 'Git版本控制',
        description: '掌握现代软件开发的核心工具'
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
/* Git版本控制页面样式 */

/* 页面基础样式 */
.git-page {
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

/* 概念部分样式 */
.concept-section {
  padding: 1rem 0;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.section-text {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.feature-list {
  display: grid;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.feature-item:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.feature-item i {
  font-size: 1.25rem;
  width: 24px;
}

/* 命令部分样式 */
.commands-section {
  padding: 1rem 0;
}

.command-group {
  margin-bottom: 2rem;
}

.group-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
}

.command-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.command-item:hover {
  background: #e2e8f0;
}

.command-code {
  background: #1f2937;
  color: #f9fafb;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.875rem;
  white-space: nowrap;
}

.command-desc {
  color: #6b7280;
  font-size: 0.875rem;
}

/* 工作流程样式 */
.workflow-section {
  padding: 1rem 0;
}

.workflow-step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.workflow-step:hover {
  background: #e2e8f0;
  transform: translateX(5px);
}

.step-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.125rem;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.step-desc {
  color: #6b7280;
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.step-code {
  background: #1f2937;
  color: #f9fafb;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.875rem;
  display: inline-block;
}

/* 最佳实践样式 */
.best-practices-section {
  padding: 1rem 0;
}

.practice-item {
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid #ef4444;
}

.practice-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
}

.practice-desc {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.practice-list {
  list-style: none;
  padding: 0;
}

.practice-list li {
  padding: 0.5rem 0;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
}

.practice-list li:last-child {
  border-bottom: none;
}

.practice-list code {
  background: #f3f4f6;
  color: #dc2626;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
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
  .git-page {
    padding: 1rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .command-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .command-code {
    font-size: 0.75rem;
  }
  
  .workflow-step {
    flex-direction: column;
    text-align: center;
  }
  
  .step-number {
    align-self: center;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .content-card {
    background: rgba(31, 41, 55, 0.95);
    color: #f9fafb;
  }
  
  .section-title,
  .group-title,
  .step-title,
  .practice-title,
  .category-title {
    color: #f9fafb;
  }
  
  .section-text,
  .command-desc,
  .step-desc,
  .practice-desc {
    color: #d1d5db;
  }
  
  .feature-item,
  .command-item,
  .workflow-step,
  .practice-item {
    background: #374151;
  }
  
  .feature-item:hover,
  .command-item:hover,
  .workflow-step:hover {
    background: #4b5563;
  }
  
  .command-code,
  .step-code {
    background: #111827;
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