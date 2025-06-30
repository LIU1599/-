<template>
  <!-- 文档图标组件模板 -->
  <svg
    class="icon-documentation"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- 文档图标路径 -->
    <!-- 文档图标 - 代表文档和教程 -->
    <path
      d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
      fill="currentColor"
    />
  </svg>
</template>

<script>
// 文档图标组件脚本
export default {
  // 组件名称
  name: 'IconDocumentation',
  
  // 组件属性定义
  props: {
    // 图标颜色
    color: {
      type: String,
      default: 'currentColor'
    },
    
    // 图标尺寸
    size: {
      type: [String, Number],
      default: 24
    },
    
    // 图标类名
    className: {
      type: String,
      default: ''
    }
  },
  
  // 计算属性
  computed: {
    // 图标样式
    iconStyle() {
      return {
        color: this.color,
        width: typeof this.size === 'number' ? `${this.size}px` : this.size,
        height: typeof this.size === 'number' ? `${this.size}px` : this.size
      }
    }
  }
}
</script>

<style scoped>
/* 文档图标组件样式 */

/* 图标基础样式 */
.icon-documentation {
  display: inline-block;
  vertical-align: middle;
  transition: all 0.3s ease;
}

/* 图标悬停效果 */
.icon-documentation:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

/* 图标动画效果 */
.icon-documentation.animated {
  animation: documentationBounce 2s ease-in-out infinite;
}

@keyframes documentationBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* 响应式设计 */
@media (max-width: 640px) {
  .icon-documentation {
    width: 20px;
    height: 20px;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .icon-documentation {
    filter: brightness(0.9);
  }
}
</style>
