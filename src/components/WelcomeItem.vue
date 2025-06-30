<template>
  <!-- 欢迎项组件模板 -->
  <div class="welcome-item">
    <!-- 图标容器 -->
    <div class="icon-container">
      <!-- 图标插槽，允许父组件传入自定义图标 -->
      <slot name="icon">
        <!-- 默认图标 -->
        <i class="fas fa-star"></i>
      </slot>
    </div>
    
    <!-- 内容区域 -->
    <div class="content">
      <!-- 标题插槽 -->
      <slot name="title">
        <h3 class="default-title">欢迎标题</h3>
      </slot>
      
      <!-- 描述插槽 -->
      <slot name="description">
        <p class="default-description">欢迎描述内容</p>
      </slot>
    </div>
  </div>
</template>

<script>
// 欢迎项组件脚本
export default {
  // 组件名称
  name: 'WelcomeItem',
  
  // 组件属性定义
  props: {
    // 是否显示动画效果
    animated: {
      type: Boolean,
      default: true
    },
    
    // 动画延迟时间（毫秒）
    animationDelay: {
      type: Number,
      default: 0
    }
  },
  
  // 组件数据
  data() {
    return {
      // 组件是否已显示
      isVisible: false
    }
  },
  
  // 组件挂载后的生命周期钩子
  mounted() {
    // 如果启用动画，添加进入动画
    if (this.animated) {
      this.addEnterAnimation()
    }
  },
  
  // 组件方法
  methods: {
    // 添加进入动画
    addEnterAnimation() {
      // 设置动画延迟
      this.$el.style.animationDelay = `${this.animationDelay}ms`
      
      // 添加动画类
      this.$el.classList.add('animate-fade-in')
      
      // 标记为已显示
      this.isVisible = true
    },
    
    // 移除动画类
    removeAnimation() {
      this.$el.classList.remove('animate-fade-in')
    }
  }
}
</script>

<style scoped>
/* 欢迎项组件样式 */

/* 组件容器 */
.welcome-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
}

.welcome-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

/* 图标容器 */
.icon-container {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
}

/* 内容区域 */
.content {
  flex: 1;
  min-width: 0; /* 防止内容溢出 */
}

/* 默认标题样式 */
.default-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

/* 默认描述样式 */
.default-description {
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
  font-size: 0.875rem;
}

/* 动画效果 */
.animate-fade-in {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 640px) {
  .welcome-item {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }
  
  .icon-container {
    align-self: center;
  }
  
  .default-title {
    font-size: 1rem;
  }
  
  .default-description {
    font-size: 0.8rem;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .welcome-item {
    background: #1f2937;
    border-color: #374151;
  }
  
  .default-title {
    color: #f9fafb;
  }
  
  .default-description {
    color: #d1d5db;
  }
}
</style>
