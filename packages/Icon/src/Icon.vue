<template>
  <i :class="'echo-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'EchoIcon',
    props: {
      name: String
    }
  };
</script>
<style lang="less">
  @import (reference) "../../../lib/theme-chalk/index.css";

</style>>
