<template>
  <div class="page-header">
    <div class="header-logo-container">
      <img class="header-logo" src="../../assets/img/echo.png">
    </div>
    <nav-list></nav-list>
  </div>
</template>

<script>
import navList from '../../components/navList/NavList'

export default {
  name: 'pageHeader',
  data () {
    return {
    }
  },
  components: {
    navList
  }
}
</script>

<style src="./header.less" lang="less"></style>
