<template>
  <div class="v-nav f-flex-col-center">
    <router-link class="v-nav-link" v-for="(item, index) in routerNames" :key="index" :to="{ name: item.name, params: item.params }">
      {{ $t(`router.${item.name}`) }}
    </router-link> 
  </div>
</template>

<script>
import * as routerNames from '../../router/routerNames'

export default {
  name: 'navList',
  data () {
    return {
      routerNames: [
        {
          name: routerNames.HELLO,
          params: {}
        },
        {
          name: routerNames.COMPONENT,
          params: {}
        },
        {
          name: routerNames.BUSINESS,
          params: {}
        },
        {
          name: routerNames.COURSE,
          params: {}
        },
        {
          name: routerNames.API,
          params: {}
        }
      ]
    }
  }
}
</script>

<style src="./navList.less" lang="less"></style>
