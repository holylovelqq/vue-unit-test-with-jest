
<template>
  <button :class="cssClasses" v-on:click="onClick" :disabled="disabled">
    <slot>submit</slot>
    <!-- 下面的命名插槽和作用域插槽，实际并未使用，是为了测试而存在 -->
    <slot name="namedSlot"></slot>
    <slot name="scopedSlot" :user="user"></slot>
  </button>
</template>

<script>
/**
 * 按钮组件，注册为全局组件，便于复用
 * @props type @string 非必需 默认'primary' ['primary', 'secondary', 'floating', 'text', 'link', 'danger']
 * @props size @string 非必需 默认'md' ['sm', 'md', 'lg']
 * @props disabled @boolean 非必需 默认false
 */
export default {
  name: 'AppButton',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'md'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 变量user实际并未使用只是为了展示作用于插槽的测试写法而存在
      user: {
        firstName: 'li',
        lastName: 'holy'
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('click', 'i am params') // 此处的参数'i am params'纯为测试准备，并未真正使用
    }
  },
  computed: {
    cssClasses () {
      let classes = ['app-button']
      classes.push('app-button--' + this.size)
      if (this.type && !this.disabled) {
        classes.push('app-button--' + this.type)
      }
      if (this.disabled) {
        classes.push('app-button--disabled')
      }
      return classes.join(' ')
    }
  }
}
</script>

<style scoped>
/* Base Style */
.app-button {
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  background: #eaeff3;
  cursor: pointer;
  transition-property: color, background, box-shadow;
  transition-duration: 0.1s;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
}
.app-button:focus {
  outline: 0;
}

/* With material icons */
.app-button > i {
  margin-right: 4px;
}
/* Button Type */

/* Primary */
.app-button--primary {
  color: #fff;
  background: #1c93e2;
}
.app-button--primary:hover {
  background: lighten(#1c93e2, 2%);
  box-shadow: 0px 2px 12px rgba(0, 153, 255, 0.7);
}
.app-button--primary:focus {
  background: darken(#1c93e2, 2%);
  box-shadow: 0px 2px 8px rgba(0, 153, 255, 0.7);
}

/* Secondary */
.app-button--secondary {
  color: #43555e;
  border: 2px solid #d8e0e6;
  background: #fff;
}
.app-button--secondary:hover {
  color: liten(#43555e, 20%);
  box-shadow: 0px 1px 8px rgba(150, 150, 150, 0.3);
}
.app-button--secondary:focus {
  background: darken(#fff, 1%);
  box-shadow: 0px 0px 5px rgba(150, 150, 150, 0.2);
}

/*  Floating Action */
.app-button--floating {
  color: #fff;
  background: #1c93e2;
  box-shadow: 0px 3px 12px rgba(0, 153, 255, 0.7);
}
.app-button--floating:hover {
  background: lighten(#1c93e2, 3%);
  box-shadow: 0px 5px 16px rgba(0, 153, 255, 0.7);
}
.app-button--floating:focus {
  background: darken(#1c93e2, 3%);
  box-shadow: 0px 4px 12px rgba(0, 153, 255, 0.7);
}

/* Text */
.app-button--text {
  color: #43555e;
  background: none;
}
.app-button--text:hover {
  color: #1c93e2;
  background-color: rgba(160, 217, 255, 0.26);
}
.app-button--text:focus {
  background-color: darken(rgba(160, 217, 255, 0.26), 12%);
}

/* Link */
.app-button--link {
  color: #96acb7;
  background: none;
}
.app-button--link:hover {
  color: #1c93e2;
}

/* Danger (like a delete button) */
.app-button--danger {
  color: #f9486c;
  background: none;
}
.app-button--danger:hover {
  color: darken(#f9486c, 6%);
  background: rgba(255, 155, 161, 0.18);
}
.app-button--danger:focus {
  background-color: darken(rgba(255, 155, 161, 0.18), 12%);
}

/* Disabled */
.app-button--disabled {
  color: lighten(#96acb7, 6%);
  background: darken(#eaeff3, 2%);
  cursor: not-allowed;
}
.app-button--disabled:hover {
  color: lighten(#96acb7, 6%);
  background: darken(#eaeff3, 2%);
}

/* Size */

/* Small */
.app-button--sm {
  font-size: 12px;
  padding: 8px 10px;
}
.app-button--sm .app-button--secondary {
  padding: 4px 6px;
}
.app-button--sm .app-button--link {
  padding: 0;
}
/* Middle */
.app-button--md {
  font-size: 14px;
  padding: 10px 14px;
}
.app-button--md .app-button--secondary {
  padding: 8px 12px;
}
.app-button--md .app-button--link {
  padding: 0;
}

/* Large */
.app-button--lg {
  font-size: 16px;
  padding: 12px 16px;
}
.app-button--lg .app-button--secondary {
  padding: 8px 12px;
}
.app-button--lg .app-button--link {
  padding: 0;
}
</style>
