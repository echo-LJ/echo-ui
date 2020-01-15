<template>
  <div class="demo-icon-item-container" :data-clipboard-text="name">
    <i :class="name" class="demo-icon"></i>
    <p class="demo-icon-label">
      {{ className }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'iconItem',
  props: {
    className: {
      required: false,
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  computed: {
    name () {
      return 'icon-' + this.className
    }
  }
}
</script>

<style src="./iconItem.less" lang="less"></style>
