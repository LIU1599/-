<template>
  <!-- 社区图标组件模板 -->
  <svg
    class="icon-community"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- 社区图标路径 -->
    <!-- 人群图标 - 代表社区和团队协作 -->
    <path
      d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-1.7 2.26A6.003 6.003 0 0 0 10 16c0 3.31 2.69 6 6 6h4v-2h-4c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.19 0 2.22.53 2.93 1.36L16 12.5V22h4zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-6H9.9l1.49-4.5c.31-.95 1.59-.95 1.9 0L14.6 16H13v6h-5.5zm-2.5-8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
      fill="currentColor"
    />
  </svg>
</template>

<script>
// 社区图标组件脚本
export default {
  // 组件名称
  name: 'IconCommunity',
  
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
/* 社区图标组件样式 */

/* 图标基础样式 */
.icon-community {
  display: inline-block;
  vertical-align: middle;
  transition: all 0.3s ease;
}

/* 图标悬停效果 */
.icon-community:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

/* 图标动画效果 */
.icon-community.animated {
  animation: communityWave 2s ease-in-out infinite;
}

@keyframes communityWave {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-3px) scale(1.05);
  }
}

/* 响应式设计 */
@media (max-width: 640px) {
  .icon-community {
    width: 20px;
    height: 20px;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .icon-community {
    filter: brightness(0.9);
  }
}
</style>
