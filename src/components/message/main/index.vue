<template>
  <!-- message 消息框组件 使用方式基本和element相同 -->
  <transition name="message-fade">
    <div
      :class="[
        'message',
        type ? `message-${type}` : '',
        center ? 'center' : '',
        showClose ? 'closable' : '',
        customClass
      ]"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="message-content">
          {{ message }}
        </p>
        <p v-else v-html="message" class="message-content"></p>
      </slot>
      <i
        v-if="showClose"
        class="message-close-btn icon-close"
        @click="close"
      ></i>
    </div>
  </transition>
</template>

<script>
const typeMap = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "error"
};
export default {
  data() {
    return {
      visible: false, // 显示隐藏
      message: "", // 内容
      duration: 3000, // 关闭延迟
      type: "info", // "success", "warning", "info", "error"
      customClass: "", // 自定义样式
      onClose: null, // 自定义关闭回调
      showClose: false, // 显示关闭按钮
      closed: false,
      timer: null,
      dangerouslyUseHTMLString: false,
      center: false // 文字居中
    };
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener("transitionend", this.destroyElement);
      }
    }
  },
  methods: {
    destroyElement() {
      this.$el.removeEventListener("transitionend", this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose(this);
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
    keydown(e) {
      if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.close();
        }
      }
    }
  },
  mounted() {
    this.startTimer();
    document.addEventListener("keydown", this.keydown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.keydown);
  }
};
</script>

<style lang="scss">
.message {
  min-width: 200px;
  box-sizing: border-box;
  border-radius: 0.02rem;
  border: 1px solid #ebeef5;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  background-color: #edf2f3;
  transition: opacity 0.3s, transform 0.4s;
  overflow: hidden;
  padding: 0 10px;
  display: flex;
  align-items: center;
}
.message-icon {
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background: #fff;
  display: inline-block;
  margin-right: 10px;
  // &.icon-success {
  // }
  // &.icon-error {
  // }
  // &.icon-info {
  // }
  // &.icon-warning {
  // }
}
.message-content {
  line-height: 0.75;
  font-size: 0.07rem;
}
.message-success {
  background: #f2f8ec;
  border-color: #e4f2da;
  .message-content {
    color: #7ebe50;
  }
}
.message-error {
  background: #fcf0f0;
  border-color: #f9e3e2;
  .message-content {
    color: #e57470;
  }
}
.message-warning {
  background: #fcf6ed;
  border-color: #f8ecda;
  .message-content {
    color: #dca450;
  }
}
.message-info {
  background: #eef2fb;
  border-color: #ebeef4;
  .message-content {
    color: #919398;
  }
}
.message-fade-enter,
.message-fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
