<template>
  <div class="v-button-group" :class="{ 'vertical': vertical, 'horizontal': !vertical }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    vertical: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  computed: {
  }
}
</script>
<style src="./vButtonGroup.less" lang="less"></style>
