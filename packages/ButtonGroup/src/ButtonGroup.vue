<template>
  <div class="v-button-group" :class="{ 'vertical': vertical, 'horizontal': !vertical }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EchoButtonGroup',
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
<style src="./ButtonGroup.less" lang="less"></style>
