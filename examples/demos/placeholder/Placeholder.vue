<template>
  <div class="placeholder-demo-body">
    <div>
      <span>type类型为loading</span>
    </div>
    <placeholder type='loading'></placeholder>
    <placeholder type='loading' :monochrome="true"></placeholder>
    <div>
      <span>type类型为loading,loadIcon为true</span>
    </div>
    <placeholder type='loading' :load-icon="true"></placeholder>
    <div>
      <span>type类型为noData</span>
    </div>
    <placeholder type='noData' ></placeholder>
    <placeholder type='noData' :monochrome="true"></placeholder>
    <div>
      <span>type类型为error,使用slot分发内容</span>
    </div>
    <placeholder type='error' >
      <v-button type="primary" size="mini" shape="circle">重新加载</v-button>
    </placeholder>
    <placeholder type='error' :monochrome="true">
      <v-button type="primary" size="mini" shape="circle">重新加载</v-button>
    </placeholder>
    <div>
      <span>type类型为noAccess</span>
    </div>
    <placeholder type='noAccess' >
    </placeholder>
    <placeholder type='noAccess' :monochrome="true">
    </placeholder>
    <div>
      <span>type类型为notFound,使用slot分发内容</span>
    </div>
    <placeholder type='notFound' >
      <v-button type="primary" size="mini" shape="circle">重新加载</v-button>
    </placeholder>
    <placeholder type='notFound' :monochrome="true">
      <v-button type="primary" size="mini" shape="circle">重新加载</v-button>
    </placeholder>
    <div>
      <span>type类型为noMatch</span>
    </div>
    <placeholder type='noMatch' >
    </placeholder>
    <placeholder type='noMatch' :monochrome="true">
    </placeholder>
  </div>
</template>

<script>
export default {
  name: 'placeholderDemo',
  data () {
    return {
    }
  },
  components: {
  },
  created () {
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>

<style src="./placeholder.less" lang="less"></style>
