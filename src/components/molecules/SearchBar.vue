<template>
  <!-- 搜索栏组件模板 -->
  <div class="search-bar">
    <!-- 搜索输入框 -->
    <div class="search-input-container">
      <!-- 搜索图标 -->
      <i class="fas fa-search search-icon"></i>
      
      <!-- 搜索输入框 -->
      <input
        ref="searchInput"
        v-model="searchQuery"
        type="text"
        :placeholder="placeholder"
        class="search-input"
        @input="handleSearch"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown.enter="handleEnter"
        @keydown.escape="handleEscape"
      />
      
      <!-- 清除按钮 -->
      <button
        v-if="searchQuery && showClear"
        type="button"
        class="clear-button"
        @click="handleClear"
      >
        <i class="fas fa-times"></i>
      </button>
    </div>
    
    <!-- 搜索建议下拉框 -->
    <div v-if="showSuggestions && suggestions.length > 0" class="suggestions-dropdown">
      <div
        v-for="(suggestion, index) in suggestions"
        :key="index"
        class="suggestion-item"
        :class="{ 'suggestion-active': index === activeIndex }"
        @click="handleSuggestionClick(suggestion)"
        @mouseenter="activeIndex = index"
      >
        <i class="fas fa-search suggestion-icon"></i>
        <span class="suggestion-text">{{ suggestion }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// 搜索栏组件脚本
export default {
  // 组件名称
  name: 'SearchBar',
  
  // 组件属性定义
  props: {
    // 搜索占位符
    placeholder: {
      type: String,
      default: '搜索...'
    },
    
    // 初始搜索值
    modelValue: {
      type: String,
      default: ''
    },
    
    // 搜索建议列表
    suggestions: {
      type: Array,
      default: () => []
    },
    
    // 是否显示清除按钮
    showClear: {
      type: Boolean,
      default: true
    },
    
    // 是否显示搜索建议
    showSuggestions: {
      type: Boolean,
      default: true
    },
    
    // 搜索延迟时间（毫秒）
    debounceTime: {
      type: Number,
      default: 300
    },
    
    // 最小搜索字符数
    minLength: {
      type: Number,
      default: 1
    }
  },
  
  // 组件数据
  data() {
    return {
      // 搜索查询
      searchQuery: this.modelValue,
      // 当前激活的建议索引
      activeIndex: -1,
      // 搜索防抖定时器
      debounceTimer: null,
      // 是否聚焦
      isFocused: false
    }
  },
  
  // 监听器
  watch: {
    // 监听 modelValue 变化
    modelValue(newValue) {
      this.searchQuery = newValue
    },
    
    // 监听搜索查询变化
    searchQuery(newValue) {
      this.$emit('update:modelValue', newValue)
    }
  },
  
  // 组件挂载后的生命周期钩子
  mounted() {
    // 添加全局点击事件监听器
    document.addEventListener('click', this.handleGlobalClick)
    
    // 添加键盘事件监听器
    document.addEventListener('keydown', this.handleGlobalKeydown)
  },
  
  // 组件销毁前的生命周期钩子
  beforeUnmount() {
    // 移除事件监听器
    document.removeEventListener('click', this.handleGlobalClick)
    document.removeEventListener('keydown', this.handleGlobalKeydown)
    
    // 清除定时器
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer)
    }
  },
  
  // 组件方法
  methods: {
    // 处理搜索输入
    handleSearch() {
      // 清除之前的定时器
      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer)
      }
      
      // 设置防抖定时器
      this.debounceTimer = setTimeout(() => {
        // 检查最小长度
        if (this.searchQuery.length >= this.minLength) {
          this.$emit('search', this.searchQuery)
        } else if (this.searchQuery.length === 0) {
          // 空搜索时触发清空事件
          this.$emit('clear')
        }
      }, this.debounceTime)
    },
    
    // 处理输入框聚焦
    handleFocus() {
      this.isFocused = true
      this.$emit('focus')
    },
    
    // 处理输入框失焦
    handleBlur() {
      this.isFocused = false
      this.$emit('blur')
    },
    
    // 处理回车键
    handleEnter() {
      if (this.activeIndex >= 0 && this.suggestions[this.activeIndex]) {
        this.handleSuggestionClick(this.suggestions[this.activeIndex])
      } else {
        this.$emit('search', this.searchQuery)
      }
    },
    
    // 处理 ESC 键
    handleEscape() {
      this.searchQuery = ''
      this.activeIndex = -1
      this.$emit('clear')
      this.$refs.searchInput?.blur()
    },
    
    // 处理清除按钮点击
    handleClear() {
      this.searchQuery = ''
      this.activeIndex = -1
      this.$emit('clear')
      this.$refs.searchInput?.focus()
    },
    
    // 处理建议项点击
    handleSuggestionClick(suggestion) {
      this.searchQuery = suggestion
      this.activeIndex = -1
      this.$emit('suggestion-select', suggestion)
      this.$emit('search', suggestion)
    },
    
    // 处理全局点击事件
    handleGlobalClick(event) {
      // 如果点击的不是搜索栏内部，隐藏建议
      if (!this.$el.contains(event.target)) {
        this.activeIndex = -1
      }
    },
    
    // 处理全局键盘事件
    handleGlobalKeydown(event) {
      if (!this.isFocused) return
      
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault()
          this.navigateSuggestions(1)
          break
        case 'ArrowUp':
          event.preventDefault()
          this.navigateSuggestions(-1)
          break
      }
    },
    
    // 导航建议列表
    navigateSuggestions(direction) {
      if (this.suggestions.length === 0) return
      
      const newIndex = this.activeIndex + direction
      
      if (newIndex >= -1 && newIndex < this.suggestions.length) {
        this.activeIndex = newIndex
      } else if (direction > 0 && this.activeIndex === this.suggestions.length - 1) {
        // 循环到第一个
        this.activeIndex = 0
      } else if (direction < 0 && this.activeIndex === 0) {
        // 循环到最后一个
        this.activeIndex = this.suggestions.length - 1
      }
    },
    
    // 聚焦搜索框
    focus() {
      this.$refs.searchInput?.focus()
    },
    
    // 失焦搜索框
    blur() {
      this.$refs.searchInput?.blur()
    }
  }
}
</script>

<style scoped>
/* 搜索栏组件样式 */

/* 搜索栏容器 */
.search-bar {
  position: relative;
  width: 100%;
}

/* 搜索输入框容器 */
.search-input-container {
  position: relative;
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.search-input-container:focus-within {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* 搜索图标 */
.search-icon {
  position: absolute;
  left: 0.75rem;
  color: #6b7280;
  font-size: 1rem;
  pointer-events: none;
}

/* 搜索输入框 */
.search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  font-size: 1rem;
  color: #374151;
}

.search-input::placeholder {
  color: #9ca3af;
}

/* 清除按钮 */
.clear-button {
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
}

.clear-button:hover {
  background-color: #f3f4f6;
  color: #6b7280;
}

/* 搜索建议下拉框 */
.suggestions-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #d1d5db;
  border-top: none;
  border-radius: 0 0 0.5rem 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
}

/* 建议项 */
.suggestion-item {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.suggestion-item:hover,
.suggestion-active {
  background-color: #f3f4f6;
}

/* 建议图标 */
.suggestion-icon {
  color: #6b7280;
  font-size: 0.875rem;
  margin-right: 0.75rem;
}

/* 建议文本 */
.suggestion-text {
  color: #374151;
  font-size: 0.875rem;
}

/* 响应式设计 */
@media (max-width: 640px) {
  .search-input {
    font-size: 0.875rem;
    padding: 0.625rem 0.625rem 0.625rem 2.25rem;
  }
  
  .search-icon {
    left: 0.625rem;
    font-size: 0.875rem;
  }
  
  .clear-button {
    right: 0.625rem;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .search-input-container {
    background: #1f2937;
    border-color: #4b5563;
  }
  
  .search-input {
    color: #f9fafb;
  }
  
  .search-input::placeholder {
    color: #6b7280;
  }
  
  .suggestions-dropdown {
    background: #1f2937;
    border-color: #4b5563;
  }
  
  .suggestion-item:hover,
  .suggestion-active {
    background-color: #374151;
  }
  
  .suggestion-text {
    color: #f9fafb;
  }
  
  .clear-button:hover {
    background-color: #374151;
  }
}
</style> 