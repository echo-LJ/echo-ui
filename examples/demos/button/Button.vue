<template>
  <div class="btn-demo-body">
    <echo-button>默认</echo-button>
    <echo-button type="primary">主要</echo-button>
    <echo-button type="ghost">幽灵</echo-button>
    <echo-button type="text">文本</echo-button>
    <br/>
    <echo-button type="primary" size="small">小号主要</echo-button>
    <echo-button type="ghost" size="small">小号幽灵</echo-button>
    <echo-button type="text" size="small">小号文本</echo-button>
    <br/>
    <echo-button type="primary" size="mini">mini主要</echo-button>
    <echo-button type="ghost" size="mini">mini幽灵</echo-button>
    <echo-button type="ghost" size="mini" shape="circle">mini幽灵</echo-button>
    <echo-button type="ghost" size="mini" shape="circle">
      <i class="icon-save"></i><span>mini幽灵</span>
    </echo-button>
    <echo-button type="text" size="mini">mini文本</echo-button>
    <br/>
    <echo-button shape="circle">圆角默认</echo-button>
    <echo-button shape="circle" type="ghost">
      <i class="icon-save"></i><span>圆角幽灵</span>
    </echo-button>
    <echo-button shape="circle" type="ghost" :loading="true">
      <span>圆角幽灵</span>
    </echo-button>
    <echo-button shape="circle" size="small">圆角小号默认</echo-button>
    <br/>
    <echo-button shape="circle" :icon="true">
      <i class="icon-save"></i>
    </echo-button>
    <echo-button size="small" :icon="true">
      <i class="icon-save"></i>
    </echo-button>
    <echo-button size="small" :icon="true" type="primary">
      <i class="icon-save"></i>
    </echo-button>
    <echo-button size="small" :icon="true" shape="circle">
      <i class="icon-save"></i>
    </echo-button>
    <echo-button size="small" :icon="true" shape="circle" type="ghost">
      <i class="icon-save"></i>
    </echo-button>
    <echo-button size="mini" :icon="true" shape="circle" type="ghost">
      <i class="icon-save"></i>
    </echo-button>
    <echo-button size="small" :icon="true" shape="circle" :loading="true">
    </echo-button>
    <echo-button size="small" :icon="true" shape="circle" :loading="true" type="primary">
    </echo-button>
    <echo-button size="small" :icon="true" shape="circle" type="text">
      <i class="icon-save"></i>
    </echo-button>
    <echo-button size="mini" :icon="true" shape="circle" type="text">
      <i class="icon-save"></i>
    </echo-button>
    <br/>
    <echo-button :disabled="true">默认禁用</echo-button>
    <echo-button :disabled="true" type="primary">主要禁用</echo-button>
    <echo-button :disabled="true" type="ghost">幽灵禁用</echo-button>
    <echo-button :disabled="true" type="text">文本禁用</echo-button>
    <br/>
    <echo-button :loading="btnLoading" :mini-loading-time="btnMiniLoadingTime * 1000" @click.native="clickBtn">最小载入时间</echo-button>
    <span>设置最小载入时间：</span>
    <!--<v-input-number v-model="btnMiniLoadingTime" :min="1"></v-input-number>
    <span>  </span>
    <span>设置实际载入时间：</span>
    <v-input-number v-model="btnLoadingTime" :min="1"></v-input-number>
    <br/>-->
    <echo-button-group>
      <echo-button type="ghost" size="small">小号幽灵</echo-button>
      <echo-button type="ghost" size="small">小号幽灵</echo-button>
      <echo-button type="ghost" size="small">小号幽灵</echo-button>
    </echo-button-group>
    <echo-button-group>
      <echo-button type="ghost" shape="circle">幽灵</echo-button>
      <echo-button type="ghost" shape="circle">幽灵</echo-button>
      <echo-button type="ghost" shape="circle">幽灵</echo-button>
    </echo-button-group>
    <echo-button-group>
      <echo-button type="primary" shape="circle">主要</echo-button>
      <echo-button type="success" shape="circle">成功</echo-button>
      <echo-button type="error" shape="circle">错误</echo-button>
      <echo-button type="info" shape="circle">信息</echo-button>
      <echo-button type="warning" shape="circle">警告</echo-button>
    </echo-button-group>
    <echo-button-group>
      <echo-button type="primary" size="small">主要</echo-button>
      <echo-button type="success" size="small">成功</echo-button>
      <echo-button type="error" size="small">错误</echo-button>
      <echo-button type="info" size="small">信息</echo-button>
      <echo-button type="warning" size="small">警告</echo-button>
    </echo-button-group>
    <echo-button-group>
      <echo-button type="default" size="default" :icon="true">
        <i class="icon-save"></i>
      </echo-button>
      <echo-button type="default" size="default"  :icon="true">
        <i class="icon-save"></i>
      </echo-button>
      <echo-button type="default" size="default"  :icon="true">
        <i class="icon-save"></i>
      </echo-button>
    </echo-button-group>
    <echo-button-group :vertical="true">
      <echo-button type="ghost" size="default" :icon="true">
        <i class="icon-save"></i>
      </echo-button>
      <echo-button type="ghost" size="default" :icon="true">
        <i class="icon-save"></i>
      </echo-button>
      <echo-button type="ghost" size="default" :icon="true">
        <i class="icon-save"></i>
      </echo-button>
    </echo-button-group>
  </div>
</template>

<script>
export default {
  name: 'btnDemo',
  data () {
    return {
      btnLoading: false,
      btnLoadingTime: 5,
      btnMiniLoadingTime: 2
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    clickBtn () {
      this.btnLoading = true
      this.$notice.info({msg: '开始载入……'})
      setTimeout(() => {
        this.btnLoading = false
        this.$notice.info({msg: '实际载入完成。'})
      }, this.btnLoadingTime * 1000)
    }
  }
}
</script>

<style src="./button.less" lang="less"></style>
