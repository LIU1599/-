<template>
  <!-- 按钮组件模板 -->
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    :type="type"
    @click="handleClick"
  >
    <!-- 加载状态图标 -->
    <i v-if="loading" class="fas fa-spinner fa-spin mr-2"></i>
    
    <!-- 按钮图标 -->
    <i v-if="icon && !loading" :class="iconClasses" class="mr-2"></i>
    
    <!-- 按钮内容插槽 -->
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script>
// 按钮组件脚本
export default {
  // 组件名称
  name: 'BaseButton',
  
  // 组件属性定义
  props: {
    // 按钮文本
    text: {
      type: String,
      default: ''
    },
    
    // 按钮类型：primary, secondary, success, warning, danger, outline
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => {
        return ['primary', 'secondary', 'success', 'warning', 'danger', 'outline'].includes(value)
      }
    },
    
    // 按钮尺寸：sm, md, lg
    size: {
      type: String,
      default: 'md',
      validator: (value) => {
        return ['sm', 'md', 'lg'].includes(value)
      }
    },
    
    // 按钮图标
    icon: {
      type: String,
      default: ''
    },
    
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    
    // 是否显示加载状态
    loading: {
      type: Boolean,
      default: false
    },
    
    // 按钮类型：button, submit, reset
    type: {
      type: String,
      default: 'button',
      validator: (value) => {
        return ['button', 'submit', 'reset'].includes(value)
      }
    },
    
    // 是否块级显示
    block: {
      type: Boolean,
      default: false
    },
    
    // 是否圆角
    rounded: {
      type: Boolean,
      default: false
    }
  },
  
  // 计算属性
  computed: {
    // 按钮样式类
    buttonClasses() {
      return [
        'btn',
        `btn-${this.variant}`,
        `btn-${this.size}`,
        {
          'btn-block': this.block,
          'btn-rounded': this.rounded,
          'btn-loading': this.loading,
          'btn-disabled': this.disabled
        }
      ]
    },
    
    // 图标样式类
    iconClasses() {
      return this.icon ? `fas ${this.icon}` : ''
    }
  },
  
  // 组件方法
  methods: {
    // 处理点击事件
    handleClick(event) {
      // 如果按钮被禁用或正在加载，阻止点击
      if (this.disabled || this.loading) {
        event.preventDefault()
        return
      }
      
      // 触发点击事件
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped>
/* 按钮组件样式 */

/* 基础按钮样式 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

/* 按钮尺寸 */
.btn-sm {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
}

.btn-md {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.375rem;
}

.btn-lg {
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  border-radius: 0.5rem;
}

/* 按钮变体 */
.btn-primary {
  background-color: #3b82f6;
  border-color: #3b82f6;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #2563eb;
  border-color: #2563eb;
}

.btn-secondary {
  background-color: #6b7280;
  border-color: #6b7280;
  color: white;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #4b5563;
  border-color: #4b5563;
}

.btn-success {
  background-color: #10b981;
  border-color: #10b981;
  color: white;
}

.btn-success:hover:not(:disabled) {
  background-color: #059669;
  border-color: #059669;
}

.btn-warning {
  background-color: #f59e0b;
  border-color: #f59e0b;
  color: white;
}

.btn-warning:hover:not(:disabled) {
  background-color: #d97706;
  border-color: #d97706;
}

.btn-danger {
  background-color: #ef4444;
  border-color: #ef4444;
  color: white;
}

.btn-danger:hover:not(:disabled) {
  background-color: #dc2626;
  border-color: #dc2626;
}

.btn-outline {
  background-color: transparent;
  border-color: #d1d5db;
  color: #374151;
}

.btn-outline:hover:not(:disabled) {
  background-color: #f9fafb;
  border-color: #9ca3af;
}

/* 块级按钮 */
.btn-block {
  display: flex;
  width: 100%;
}

/* 圆角按钮 */
.btn-rounded {
  border-radius: 9999px;
}

/* 禁用状态 */
.btn:disabled,
.btn-disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

/* 加载状态 */
.btn-loading {
  cursor: wait;
}

.btn-loading .fa-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 焦点状态 */
.btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* 活跃状态 */
.btn:active:not(:disabled) {
  transform: translateY(1px);
}

/* 响应式设计 */
@media (max-width: 640px) {
  .btn-md {
    padding: 0.5rem 0.875rem;
    font-size: 0.875rem;
  }
  
  .btn-lg {
    padding: 0.625rem 1.25rem;
    font-size: 1rem;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .btn-outline {
    border-color: #4b5563;
    color: #f9fafb;
  }
  
  .btn-outline:hover:not(:disabled) {
    background-color: #374151;
    border-color: #6b7280;
  }
}
</style> 