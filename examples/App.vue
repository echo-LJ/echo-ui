<template>
  <div id="app">
    <router-view class="page-header-container" name="header"></router-view>
    <div class="page-body-container">
      <router-view name="body"></router-view>
    </div>
    <!--<echo-button>按钮</echo-button>
    <echo-icon name="spinner2"></echo-icon>-->
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style src="../lib/app.less" lang="less"></style>
