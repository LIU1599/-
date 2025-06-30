<template>
  <!-- 分类过滤器组件模板 -->
  <div class="category-filter">
    <!-- 过滤器标题 -->
    <h3 v-if="title" class="filter-title">{{ title }}</h3>
    
    <!-- 分类标签列表 -->
    <div class="filter-tags">
      <!-- 全部标签 -->
      <button
        class="filter-tag"
        :class="{ 'filter-tag-active': selectedCategory === null }"
        @click="handleCategorySelect(null)"
      >
        <i class="fas fa-th-large tag-icon"></i>
        <span class="tag-text">全部</span>
        <span v-if="showCount" class="tag-count">{{ totalCount }}</span>
      </button>
      
      <!-- 分类标签 -->
      <button
        v-for="category in categories"
        :key="category.id"
        class="filter-tag"
        :class="{ 'filter-tag-active': selectedCategory === category.id }"
        @click="handleCategorySelect(category.id)"
      >
        <i :class="category.icon" class="tag-icon"></i>
        <span class="tag-text">{{ category.name }}</span>
        <span v-if="showCount" class="tag-count">{{ getCategoryCount(category.id) }}</span>
      </button>
    </div>
    
    <!-- 搜索框 -->
    <div v-if="showSearch" class="filter-search">
      <SearchBar
        v-model="searchKeyword"
        placeholder="搜索分类..."
        @search="handleSearch"
        @clear="handleSearchClear"
      />
    </div>
  </div>
</template>

<script>
// 分类过滤器组件脚本
import SearchBar from './SearchBar.vue'

export default {
  // 组件名称
  name: 'CategoryFilter',
  
  // 组件导入
  components: {
    SearchBar
  },
  
  // 组件属性定义
  props: {
    // 过滤器标题
    title: {
      type: String,
      default: '分类筛选'
    },
    
    // 分类列表
    categories: {
      type: Array,
      default: () => []
    },
    
    // 当前选中的分类
    modelValue: {
      type: [String, Number, null],
      default: null
    },
    
    // 是否显示数量统计
    showCount: {
      type: Boolean,
      default: true
    },
    
    // 是否显示搜索框
    showSearch: {
      type: Boolean,
      default: false
    },
    
    // 分类统计数据
    categoryCounts: {
      type: Object,
      default: () => ({})
    },
    
    // 总数量
    totalCount: {
      type: Number,
      default: 0
    },
    
    // 是否允许多选
    multiple: {
      type: Boolean,
      default: false
    },
    
    // 最大选择数量
    maxSelection: {
      type: Number,
      default: 5
    }
  },
  
  // 组件数据
  data() {
    return {
      // 选中的分类
      selectedCategory: this.modelValue,
      // 搜索关键词
      searchKeyword: '',
      // 多选模式下的选中分类列表
      selectedCategories: this.multiple ? (Array.isArray(this.modelValue) ? this.modelValue : []) : []
    }
  },
  
  // 监听器
  watch: {
    // 监听 modelValue 变化
    modelValue(newValue) {
      if (this.multiple) {
        this.selectedCategories = Array.isArray(newValue) ? newValue : []
      } else {
        this.selectedCategory = newValue
      }
    },
    
    // 监听选中分类变化
    selectedCategory(newValue) {
      this.$emit('update:modelValue', newValue)
      this.$emit('change', newValue)
    },
    
    // 监听多选分类变化
    selectedCategories(newValue) {
      this.$emit('update:modelValue', newValue)
      this.$emit('change', newValue)
    }
  },
  
  // 组件方法
  methods: {
    // 处理分类选择
    handleCategorySelect(categoryId) {
      if (this.multiple) {
        this.handleMultipleSelect(categoryId)
      } else {
        this.handleSingleSelect(categoryId)
      }
    },
    
    // 处理单选模式
    handleSingleSelect(categoryId) {
      this.selectedCategory = categoryId
      this.$emit('category-select', categoryId)
    },
    
    // 处理多选模式
    handleMultipleSelect(categoryId) {
      const index = this.selectedCategories.indexOf(categoryId)
      
      if (index > -1) {
        // 取消选择
        this.selectedCategories.splice(index, 1)
      } else {
        // 添加选择
        if (this.selectedCategories.length < this.maxSelection) {
          this.selectedCategories.push(categoryId)
        } else {
          // 显示提示信息
          this.$emit('max-selection-reached', this.maxSelection)
        }
      }
      
      this.$emit('categories-select', this.selectedCategories)
    },
    
    // 获取分类数量
    getCategoryCount(categoryId) {
      return this.categoryCounts[categoryId] || 0
    },
    
    // 处理搜索
    handleSearch(keyword) {
      this.searchKeyword = keyword
      this.$emit('search', keyword)
    },
    
    // 处理搜索清空
    handleSearchClear() {
      this.searchKeyword = ''
      this.$emit('search-clear')
    },
    
    // 重置过滤器
    reset() {
      if (this.multiple) {
        this.selectedCategories = []
      } else {
        this.selectedCategory = null
      }
      this.searchKeyword = ''
      this.$emit('reset')
    },
    
    // 获取选中的分类
    getSelectedCategories() {
      return this.multiple ? this.selectedCategories : [this.selectedCategory].filter(Boolean)
    },
    
    // 设置选中的分类
    setSelectedCategories(categories) {
      if (this.multiple) {
        this.selectedCategories = Array.isArray(categories) ? categories : []
      } else {
        this.selectedCategory = Array.isArray(categories) ? categories[0] : categories
      }
    }
  }
}
</script>

<style scoped>
/* 分类过滤器组件样式 */

/* 过滤器容器 */
.category-filter {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* 过滤器标题 */
.filter-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

/* 过滤器标签容器 */
.filter-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* 过滤器标签 */
.filter-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.filter-tag:hover {
  border-color: #3b82f6;
  background-color: #f8fafc;
}

.filter-tag-active {
  background-color: #3b82f6;
  border-color: #3b82f6;
  color: white;
}

.filter-tag-active:hover {
  background-color: #2563eb;
  border-color: #2563eb;
}

/* 标签图标 */
.tag-icon {
  font-size: 0.875rem;
}

/* 标签文本 */
.tag-text {
  font-weight: 500;
}

/* 标签数量 */
.tag-count {
  background: rgba(0, 0, 0, 0.1);
  color: inherit;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  min-width: 1.5rem;
  text-align: center;
}

.filter-tag-active .tag-count {
  background: rgba(255, 255, 255, 0.2);
}

/* 过滤器搜索 */
.filter-search {
  margin-top: 0.5rem;
}

/* 响应式设计 */
@media (max-width: 640px) {
  .filter-tags {
    gap: 0.375rem;
  }
  
  .filter-tag {
    padding: 0.375rem 0.625rem;
    font-size: 0.8rem;
  }
  
  .tag-icon {
    font-size: 0.8rem;
  }
  
  .tag-count {
    font-size: 0.7rem;
    min-width: 1.25rem;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .filter-title {
    color: #f9fafb;
  }
  
  .filter-tag {
    background: #1f2937;
    border-color: #4b5563;
    color: #f9fafb;
  }
  
  .filter-tag:hover {
    border-color: #3b82f6;
    background-color: #374151;
  }
  
  .filter-tag-active {
    background-color: #3b82f6;
    border-color: #3b82f6;
    color: white;
  }
  
  .filter-tag-active:hover {
    background-color: #2563eb;
    border-color: #2563eb;
  }
}

/* 动画效果 */
.filter-tag {
  animation: fadeInUp 0.3s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 加载状态 */
.filter-tag.loading {
  opacity: 0.6;
  cursor: wait;
}

/* 禁用状态 */
.filter-tag.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
</style> 