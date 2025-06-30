<template>
  <!-- 生态系统图标组件模板 -->
  <svg
    class="icon-ecosystem"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- 生态系统图标路径 -->
    <!-- 网络连接图标 - 代表技术生态系统和连接 -->
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      fill="currentColor"
    />
    <!-- 连接线 -->
    <path
      d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
      fill="currentColor"
      opacity="0.3"
    />
  </svg>
</template>

<script>
// 生态系统图标组件脚本
export default {
  // 组件名称
  name: 'IconEcosystem',
  
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
/* 生态系统图标组件样式 */

/* 图标基础样式 */
.icon-ecosystem {
  display: inline-block;
  vertical-align: middle;
  transition: all 0.3s ease;
}

/* 图标悬停效果 */
.icon-ecosystem:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

/* 图标动画效果 */
.icon-ecosystem.animated {
  animation: ecosystemRotate 3s linear infinite;
}

@keyframes ecosystemRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 响应式设计 */
@media (max-width: 640px) {
  .icon-ecosystem {
    width: 20px;
    height: 20px;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .icon-ecosystem {
    filter: brightness(0.9);
  }
}
</style>
