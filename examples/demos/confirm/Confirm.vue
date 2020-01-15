<template>
  <div class="confirm-demo-body">
    <v-button @click.native="showConfirm(false)">打开confirm（无背板）</v-button>
    <v-button @click.native="showConfirm(true)">打开confirm</v-button>
    <v-button @click.native="hideAllConfirm">关闭所有confirm</v-button>
  </div>
</template>

<script>
export default {
  name: 'confirmDemo',
  data () {
    return {
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    showConfirm (backdrop) {
      var opt = {
        backdrop: backdrop,
        title: (backdrop ? '有' : '无') + '背板的确认框，标题要长点，这样才能测出问题哦',
        msg: '需要用户确认的信息，二选一，不能取消，不能取消，不能取消，重要的事情说三遍。',
        onConfirm () {
          this.$message.success('用户确认了')
        },
        onCancel () {
          this.$message.error('用户拒绝了')
        },
        confirmText: '欣然接受',
        cancelText: '残忍拒绝'
      }
      this.$confirm.show(opt)
    },
    hideAllConfirm () {
      this.$confirm.hideAll()
    }
  }
}
</script>

<style src="./confirm.less" lang="less"></style>
