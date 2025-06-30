<template>
  <!-- 输入框组件模板 -->
  <div class="input-wrapper">
    <!-- 输入框标签 -->
    <label v-if="label" :for="inputId" class="input-label">
      {{ label }}
      <span v-if="required" class="required-mark">*</span>
    </label>
    
    <!-- 输入框容器 -->
    <div class="input-container" :class="containerClasses">
      <!-- 前缀图标 -->
      <i v-if="prefixIcon" :class="prefixIconClasses" class="input-prefix-icon"></i>
      
      <!-- 输入框元素 -->
      <input
        :id="inputId"
        ref="inputRef"
        v-model="inputValue"
        :type="inputType"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :minlength="minlength"
        :pattern="pattern"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
        :name="name"
        :class="inputClasses"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        @keyup="handleKeyup"
        @paste="handlePaste"
      />
      
      <!-- 后缀图标 -->
      <i v-if="suffixIcon" :class="suffixIconClasses" class="input-suffix-icon"></i>
      
      <!-- 清除按钮 -->
      <button
        v-if="clearable && inputValue && !disabled"
        type="button"
        class="input-clear-btn"
        @click="handleClear"
      >
        <i class="fas fa-times"></i>
      </button>
      
      <!-- 密码显示切换按钮 -->
      <button
        v-if="inputType === 'password' && !disabled"
        type="button"
        class="input-password-toggle"
        @click="togglePasswordVisibility"
      >
        <i :class="passwordIconClasses"></i>
      </button>
    </div>
    
    <!-- 输入框提示信息 -->
    <div v-if="hint" class="input-hint">
      {{ hint }}
    </div>
    
    <!-- 输入框错误信息 -->
    <div v-if="error" class="input-error">
      <i class="fas fa-exclamation-circle"></i>
      {{ error }}
    </div>
    
    <!-- 字符计数 -->
    <div v-if="showCount && maxlength" class="input-count">
      {{ inputValue.length }}/{{ maxlength }}
    </div>
  </div>
</template>

<script>
// 输入框组件脚本
export default {
  // 组件名称
  name: 'BaseInput',
  
  // 组件属性定义
  props: {
    // 输入框值
    modelValue: {
      type: [String, Number],
      default: ''
    },
    
    // 输入框标签
    label: {
      type: String,
      default: ''
    },
    
    // 输入框类型
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        return ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'date', 'time', 'datetime-local'].includes(value)
      }
    },
    
    // 占位符文本
    placeholder: {
      type: String,
      default: ''
    },
    
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    
    // 是否只读
    readonly: {
      type: Boolean,
      default: false
    },
    
    // 是否必填
    required: {
      type: Boolean,
      default: false
    },
    
    // 前缀图标
    prefixIcon: {
      type: String,
      default: ''
    },
    
    // 后缀图标
    suffixIcon: {
      type: String,
      default: ''
    },
    
    // 是否可清除
    clearable: {
      type: Boolean,
      default: false
    },
    
    // 最大长度
    maxlength: {
      type: [String, Number],
      default: null
    },
    
    // 最小长度
    minlength: {
      type: [String, Number],
      default: null
    },
    
    // 验证模式
    pattern: {
      type: String,
      default: ''
    },
    
    // 自动完成
    autocomplete: {
      type: String,
      default: 'off'
    },
    
    // 是否自动聚焦
    autofocus: {
      type: Boolean,
      default: false
    },
    
    // 输入框名称
    name: {
      type: String,
      default: ''
    },
    
    // 输入框尺寸：sm, md, lg
    size: {
      type: String,
      default: 'md',
      validator: (value) => {
        return ['sm', 'md', 'lg'].includes(value)
      }
    },
    
    // 输入框状态：default, success, warning, error
    status: {
      type: String,
      default: 'default',
      validator: (value) => {
        return ['default', 'success', 'warning', 'error'].includes(value)
      }
    },
    
    // 提示信息
    hint: {
      type: String,
      default: ''
    },
    
    // 错误信息
    error: {
      type: String,
      default: ''
    },
    
    // 是否显示字符计数
    showCount: {
      type: Boolean,
      default: false
    }
  },
  
  // 组件数据
  data() {
    return {
      // 输入框值
      inputValue: this.modelValue,
      // 密码是否可见
      passwordVisible: false,
      // 输入框是否聚焦
      isFocused: false
    }
  },
  
  // 计算属性
  computed: {
    // 输入框唯一ID
    inputId() {
      return `input-${this._uid}`
    },
    
    // 实际输入框类型
    inputType() {
      if (this.type === 'password') {
        return this.passwordVisible ? 'text' : 'password'
      }
      return this.type
    },
    
    // 容器样式类
    containerClasses() {
      return [
        `input-size-${this.size}`,
        `input-status-${this.status}`,
        {
          'input-focused': this.isFocused,
          'input-disabled': this.disabled,
          'input-with-prefix': this.prefixIcon,
          'input-with-suffix': this.suffixIcon || this.clearable || this.type === 'password'
        }
      ]
    },
    
    // 输入框样式类
    inputClasses() {
      return [
        'input-field',
        {
          'input-has-prefix': this.prefixIcon,
          'input-has-suffix': this.suffixIcon || this.clearable || this.type === 'password'
        }
      ]
    },
    
    // 前缀图标样式类
    prefixIconClasses() {
      return this.prefixIcon ? `fas ${this.prefixIcon}` : ''
    },
    
    // 后缀图标样式类
    suffixIconClasses() {
      return this.suffixIcon ? `fas ${this.suffixIcon}` : ''
    },
    
    // 密码图标样式类
    passwordIconClasses() {
      return this.passwordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'
    }
  },
  
  // 监听器
  watch: {
    // 监听 modelValue 变化
    modelValue(newValue) {
      this.inputValue = newValue
    },
    
    // 监听 inputValue 变化
    inputValue(newValue) {
      this.$emit('update:modelValue', newValue)
    }
  },
  
  // 组件挂载后的生命周期钩子
  mounted() {
    // 如果设置了自动聚焦
    if (this.autofocus) {
      this.$nextTick(() => {
        this.$refs.inputRef?.focus()
      })
    }
  },
  
  // 组件方法
  methods: {
    // 处理输入事件
    handleInput(event) {
      this.$emit('input', event.target.value, event)
    },
    
    // 处理变化事件
    handleChange(event) {
      this.$emit('change', event.target.value, event)
    },
    
    // 处理聚焦事件
    handleFocus(event) {
      this.isFocused = true
      this.$emit('focus', event)
    },
    
    // 处理失焦事件
    handleBlur(event) {
      this.isFocused = false
      this.$emit('blur', event)
    },
    
    // 处理键盘按下事件
    handleKeydown(event) {
      this.$emit('keydown', event)
    },
    
    // 处理键盘释放事件
    handleKeyup(event) {
      this.$emit('keyup', event)
    },
    
    // 处理粘贴事件
    handlePaste(event) {
      this.$emit('paste', event)
    },
    
    // 处理清除事件
    handleClear() {
      this.inputValue = ''
      this.$emit('clear')
      this.$refs.inputRef?.focus()
    },
    
    // 切换密码可见性
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible
    },
    
    // 聚焦输入框
    focus() {
      this.$refs.inputRef?.focus()
    },
    
    // 失焦输入框
    blur() {
      this.$refs.inputRef?.blur()
    },
    
    // 选择输入框内容
    select() {
      this.$refs.inputRef?.select()
    }
  }
}
</script>

<style scoped>
/* 输入框组件样式 */

/* 输入框包装器 */
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* 输入框标签 */
.input-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
}

.required-mark {
  color: #ef4444;
  margin-left: 0.25rem;
}

/* 输入框容器 */
.input-container {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: white;
  transition: all 0.3s ease;
}

.input-container:hover:not(.input-disabled) {
  border-color: #9ca3af;
}

.input-focused {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* 输入框尺寸 */
.input-size-sm {
  min-height: 2rem;
}

.input-size-md {
  min-height: 2.5rem;
}

.input-size-lg {
  min-height: 3rem;
}

/* 输入框状态 */
.input-status-success {
  border-color: #10b981;
}

.input-status-success.input-focused {
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.input-status-warning {
  border-color: #f59e0b;
}

.input-status-warning.input-focused {
  border-color: #f59e0b;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
}

.input-status-error {
  border-color: #ef4444;
}

.input-status-error.input-focused {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* 禁用状态 */
.input-disabled {
  background-color: #f9fafb;
  color: #9ca3af;
  cursor: not-allowed;
}

/* 输入框字段 */
.input-field {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
  color: #374151;
  padding: 0.5rem 0.75rem;
}

.input-field::placeholder {
  color: #9ca3af;
}

.input-field:disabled {
  cursor: not-allowed;
}

/* 前缀和后缀图标 */
.input-prefix-icon,
.input-suffix-icon {
  color: #6b7280;
  font-size: 1rem;
  padding: 0 0.75rem;
  flex-shrink: 0;
}

.input-with-prefix .input-field {
  padding-left: 0;
}

.input-with-suffix .input-field {
  padding-right: 0;
}

/* 清除按钮 */
.input-clear-btn {
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 0.25rem;
  margin-right: 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
}

.input-clear-btn:hover {
  background-color: #f3f4f6;
  color: #6b7280;
}

/* 密码切换按钮 */
.input-password-toggle {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.25rem;
  margin-right: 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
}

.input-password-toggle:hover {
  background-color: #f3f4f6;
  color: #374151;
}

/* 提示信息 */
.input-hint {
  font-size: 0.75rem;
  color: #6b7280;
}

/* 错误信息 */
.input-error {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #ef4444;
}

.input-error i {
  font-size: 0.875rem;
}

/* 字符计数 */
.input-count {
  text-align: right;
  font-size: 0.75rem;
  color: #6b7280;
}

/* 响应式设计 */
@media (max-width: 640px) {
  .input-size-md {
    min-height: 2.25rem;
  }
  
  .input-size-lg {
    min-height: 2.75rem;
  }
  
  .input-field {
    font-size: 0.875rem;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .input-label {
    color: #f9fafb;
  }
  
  .input-container {
    background-color: #1f2937;
    border-color: #4b5563;
  }
  
  .input-field {
    color: #f9fafb;
  }
  
  .input-field::placeholder {
    color: #6b7280;
  }
  
  .input-disabled {
    background-color: #374151;
    color: #6b7280;
  }
  
  .input-clear-btn:hover,
  .input-password-toggle:hover {
    background-color: #374151;
  }
}
</style> 