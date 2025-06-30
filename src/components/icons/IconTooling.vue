<!-- This icon is from <https://github.com/Templarian/MaterialDesign>, distributed under Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0) license-->
<template>
  <!-- 工具图标组件模板 -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    class="iconify iconify--mdi"
    width="24"
    height="24"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <!-- 工具图标路径 -->
    <!-- 扳手图标 - 代表开发工具和工程化 -->
    <path
      d="M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z"
      fill="currentColor"
    ></path>
  </svg>
</template>

<script>
// 工具图标组件脚本
export default {
  // 组件名称
  name: 'IconTooling',
  
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
/* 工具图标组件样式 */

/* 图标基础样式 */
.icon-tooling {
  display: inline-block;
  vertical-align: middle;
  transition: all 0.3s ease;
}

/* 图标悬停效果 */
.icon-tooling:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

/* 图标动画效果 */
.icon-tooling.animated {
  animation: toolingSpin 2s linear infinite;
}

@keyframes toolingSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 响应式设计 */
@media (max-width: 640px) {
  .icon-tooling {
    width: 20px;
    height: 20px;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .icon-tooling {
    filter: brightness(0.9);
  }
}
</style>
