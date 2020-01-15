<template>
  <div class="switch-demo-body">
    <v-switch v-model="large" size="large">
      <span slot="open">开</span>
      <span slot="close">关</span>
    </v-switch>
    <v-switch v-model="sizeDefault" size="default" :disabled="true">
      <span slot="open">ON</span>
      <span slot="close">OFF</span>
    </v-switch>
    <v-switch v-model="small" size="small" :disabled="true"></v-switch>
    <v-switch v-model="mini" size="mini"></v-switch>
    <br/>
    <v-switch v-model="eventState" size="default" @on-change="switchChange">
      <span slot="open">触发</span>
      <span slot="close">事件</span>
    </v-switch>
    <v-button size="small" type="ghost" @click.native="changeSwitchState">手动修改开关状态</v-button>
  </div>
</template>

<script>
export default {
  name: 'switchDemo',
  data () {
    return {
      large: true,
      sizeDefault: false,
      small: false,
      mini: false,
      eventState: false
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    switchChange (state) {
      this.$notice.info({
        msg: '状态变更为' + state
      })
    },
    changeSwitchState () {
      this.eventState = !this.eventState
    }
  }
}
</script>

<style src="./switch.less" lang="less"></style>
