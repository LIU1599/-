<template>
  <!-- 卡片组件模板 -->
  <div 
    class="card"
    :class="cardClasses"
    :style="cardStyles"
    @click="handleClick"
  >
    <!-- 卡片头部 -->
    <div v-if="$slots.header || title" class="card-header">
      <slot name="header">
        <h3 v-if="title" class="card-title">{{ title }}</h3>
      </slot>
    </div>
    
    <!-- 卡片内容 -->
    <div class="card-content">
      <slot></slot>
    </div>
    
    <!-- 卡片底部 -->
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
// 卡片组件脚本
export default {
  // 组件名称
  name: 'Card',
  
  // 组件属性定义
  props: {
    // 卡片标题
    title: {
      type: String,
      default: ''
    },
    
    // 卡片类型
    type: {
      type: String,
      default: 'default',
      validator: value => ['default', 'primary', 'success', 'warning', 'danger'].includes(value)
    },
    
    // 卡片尺寸
    size: {
      type: String,
      default: 'medium',
      validator: value => ['small', 'medium', 'large'].includes(value)
    },
    
    // 是否可点击
    clickable: {
      type: Boolean,
      default: false
    },
    
    // 是否显示阴影
    shadow: {
      type: Boolean,
      default: true
    },
    
    // 是否显示边框
    bordered: {
      type: Boolean,
      default: true
    },
    
    // 自定义样式
    customStyle: {
      type: Object,
      default: () => ({})
    }
  },
  
  // 计算属性
  computed: {
    // 卡片类名
    cardClasses() {
      return {
        [`card--${this.type}`]: true,
        [`card--${this.size}`]: true,
        'card--clickable': this.clickable,
        'card--shadow': this.shadow,
        'card--bordered': this.bordered
      }
    },
    
    // 卡片样式
    cardStyles() {
      return {
        ...this.customStyle
      }
    }
  },
  
  // 方法
  methods: {
    // 处理点击事件
    handleClick(event) {
      if (this.clickable) {
        this.$emit('click', event)
      }
    }
  }
}
</script>

<style scoped>
/* 卡片组件样式 */

/* 卡片基础样式 */
.card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

/* 卡片边框样式 */
.card--bordered {
  border: 1px solid #e5e7eb;
}

/* 卡片阴影样式 */
.card--shadow {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card--shadow:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* 卡片尺寸样式 */
.card--small {
  padding: 12px;
}

.card--medium {
  padding: 16px;
}

.card--large {
  padding: 24px;
}

/* 卡片类型样式 */
.card--primary {
  border-left: 4px solid #3b82f6;
}

.card--success {
  border-left: 4px solid #10b981;
}

.card--warning {
  border-left: 4px solid #f59e0b;
}

.card--danger {
  border-left: 4px solid #ef4444;
}

/* 可点击卡片样式 */
.card--clickable {
  cursor: pointer;
}

.card--clickable:hover {
  transform: translateY(-2px);
}

/* 卡片头部样式 */
.card-header {
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f3f4f6;
}

.card-title {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
}

/* 卡片内容样式 */
.card-content {
  line-height: 1.6;
}

/* 卡片底部样式 */
.card-footer {
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #f3f4f6;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

/* 响应式设计 */
@media (max-width: 640px) {
  .card--medium {
    padding: 12px;
  }
  
  .card--large {
    padding: 16px;
  }
  
  .card-title {
    font-size: 1rem;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .card {
    background: #1f2937;
    color: #f9fafb;
  }
  
  .card--bordered {
    border-color: #374151;
  }
  
  .card-title {
    color: #f9fafb;
  }
  
  .card-header,
  .card-footer {
    border-color: #374151;
  }
}

/* 动画效果 */
.card {
  animation: cardFadeIn 0.3s ease-out;
}

@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 