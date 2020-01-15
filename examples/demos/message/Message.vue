<template>
  <div class="confirm-demo-body">
    <v-button @click.native="showAutoCloseMessage">显示自动关闭的message</v-button>
    <v-button @click.native="showMessage">显示message</v-button>
    <v-button @click.native="hideMessage">关闭message</v-button>
    <v-button @click.native="newMessage">关闭并开启新message</v-button>
  </div>
</template>

<script>
export default {
  name: 'messageDemo',
  data () {
    return {
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    showAutoCloseMessage () {
      this.$message.info({
        msg: '自动关闭'
      })
    },
    showMessage () {
      this.$message.info({
        msg: '测试关闭',
        duration: 0
      })
    },
    hideMessage () {
      this.$message.hide()
    },
    newMessage () {
      this.$message.hide()
      this.$message.success({
        msg: '新的消息',
        duration: 0
      })
    }
  }
}
</script>

<style src="./message.less" lang="less"></style>
