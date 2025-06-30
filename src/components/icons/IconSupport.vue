<template>
  <!-- 支持图标组件模板 -->
  <svg
    class="icon-support"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- 支持图标路径 -->
    <!-- 问号图标 - 代表帮助和支持 -->
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
      fill="currentColor"
    />
  </svg>
</template>

<script>
// 支持图标组件脚本
export default {
  // 组件名称
  name: 'IconSupport',
  
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
/* 支持图标组件样式 */

/* 图标基础样式 */
.icon-support {
  display: inline-block;
  vertical-align: middle;
  transition: all 0.3s ease;
}

/* 图标悬停效果 */
.icon-support:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

/* 图标动画效果 */
.icon-support.animated {
  animation: supportPulse 2s ease-in-out infinite;
}

@keyframes supportPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* 响应式设计 */
@media (max-width: 640px) {
  .icon-support {
    width: 20px;
    height: 20px;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .icon-support {
    filter: brightness(0.9);
  }
}
</style>
