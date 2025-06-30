// Tailwind CSS 配置文件
// 用于自定义 Tailwind CSS 的样式、颜色、间距等设计系统

/** @type {import('tailwindcss').Config} */
export default {
  // 指定需要处理的文件路径
  content: [
    // 处理 index.html 文件
    "./index.html",
    // 处理 src 目录下的所有 Vue 文件
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  
  // 主题配置
  theme: {
    // 扩展默认主题
    extend: {
      // 自定义颜色
      colors: {
        // 主色调
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        // 成功色
        success: {
          500: '#10b981',
          600: '#059669',
        },
        // 警告色
        warning: {
          500: '#f59e0b',
          600: '#d97706',
        },
        // 错误色
        error: {
          500: '#ef4444',
          600: '#dc2626',
        }
      },
      // 自定义字体
      fontFamily: {
        // 中文字体
        'chinese': ['PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        // 等宽字体
        'mono': ['Fira Code', 'Monaco', 'Consolas', 'monospace']
      },
      // 自定义动画
      animation: {
        // 淡入动画
        'fade-in': 'fadeIn 0.5s ease-in-out',
        // 滑入动画
        'slide-in': 'slideIn 0.3s ease-out',
        // 脉冲动画
        'pulse-slow': 'pulse 3s infinite',
      },
      // 自定义关键帧
      keyframes: {
        // 淡入关键帧
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // 滑入关键帧
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  
  // 插件配置
  plugins: [],
} 