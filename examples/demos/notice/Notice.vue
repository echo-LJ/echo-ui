<template>
  <div class="confirm-demo-body">
    <v-button @click.native="showNotice">显示notice</v-button>
    <v-button @click.native="hideAllNotice">关闭所有notice</v-button>
  </div>
</template>

<script>
export default {
  name: 'noticeDemo',
  data () {
    return {
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    showNotice () {
      this.$notice.info({
        title: '测试',
        msg: '测试全部关闭功能是否有效',
        duration: 0
      })
    },
    hideAllNotice () {
      this.$notice.hideAll()
    }
  }
}
</script>

<style src="./notice.less" lang="less"></style>
