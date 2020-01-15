<template>
  <div class="page-mask-demo-body">
    <v-button @click.native="showMask">显示Mask</v-button>
  </div>
</template>

<script>
export default {
  name: 'pageMaskDemo',
  data () {
    return {
      close () {}
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    showMask () {
      this.close = this.$mask.show({
        loadingMsg: '报表生成中…'
      })
      setTimeout(this.showNotice, 5000)
    },
    showNotice () {
      this.$mask.pause()
      this.$notice.error({
        title: '生成失败',
        msg: '内存不足，报表生成失败，',
        link: {
          label: '关闭任务',
          action: (closeNotice) => {
            this.close()
            closeNotice()
          }
        },
        duration: 0,
        onClose: this.close
      })
    }
  }
}
</script>

<style src="./pageMask.less" lang="less"></style>
