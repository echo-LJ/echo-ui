<template>
  <div class="checkbox-demo-body">
    <span>{{ checkedList }}</span>
    <br/>
    <v-check v-model="checkedList" value="string">
      <span>文本类型</span>
    </v-check>
    <v-check v-model="checkedList" :value="1">
      <span>数值类型</span>
    </v-check>
    <v-check v-model="checkedList" :value="false">
      <span>布尔类型</span>
    </v-check>
    <v-check v-model="checkedList" value="disabled" :disabled="true">
      <span>禁用状态（未选中）</span>
    </v-check>
    <v-check v-model="checkedList" value="disabledChecked" :disabled="true">
      <span>禁用状态（已选中）</span>
    </v-check>
    <br/>
    <v-check v-model="checked" @on-change="checkboxChange">
      <span>单独使用（事件监听）</span>
    </v-check>
    <v-button size="small" @click.native="changeCheckboxState">手动修改check状态</v-button>
  </div>
</template>

<script>
export default {
  name: 'checkboxDemo',
  data () {
    return {
      checked: false,
      checkedList: ['disabledChecked']
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    checkboxChange (state) {
      this.$notice.info({
        msg: '状态切换为' + state
      })
    },
    changeCheckboxState () {
      this.checked = !this.checked
    }
  }
}
</script>

<style src="./checkbox.less" lang="less"></style>
