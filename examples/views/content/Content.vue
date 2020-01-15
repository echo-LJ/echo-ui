<template>
  <div class="content-view">
    <div class="content-list" ref="contentList">
      <template v-for="group in contentData.contentList">
        <router-link class="content-list-item" v-if="typeof group === 'string'" :to="{ name: detail, params: { subName: group } }" :title="contentData.contentMap[group].contentTitle" :key="group">
            <i class="content-list-item-icon" :class="contentData.contentMap[group].iconClass"></i>
            <span class="content-list-item-label">{{ contentData.contentMap[group].contentTitle }}</span>
        </router-link>
        <div v-else class="content-list-group" :key="group.groupName">
          <div class="content-list-group-title">
            {{ group.groupName }}
          </div>
          <router-link class="content-list-item" v-for="item in group.subs" :key="item" :to="{ name: detail, params: { subName: item } }" :title="contentData.contentMap[item].contentTitle">
            <i class="content-list-item-icon" :class="contentData.contentMap[item].iconClass"></i>
            <span class="content-list-item-label">{{ contentData.contentMap[item].contentTitle }}</span>
          </router-link> 
        </div>
      </template>
    </div>
    <div class="content-body" ref="contentBody">
      <router-view class="content-body-inner" :content-url="contentUrl" :content-timestamp="contentTimestamp" :demo="demo" :markDownDemo="markDownDemo"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contentView',
  data () {
    return {
    }
  },
  created () {
    this.initRoute()
  },
  mounted () {
    this.$nextTick(() => {
      this.scrollMenu(1)
    })
  },
  computed: {
    detail () {
      // console.log(this.$route.meta.detail)
      return this.$route.meta.detail
    },
    contentData () {
      // console.log(this.$route.meta.contentData)
      return this.$route.meta.contentData
    },
    contentUrl () {
      let _url = ''
      try {
        _url = this.contentData.contentMap[this.$route.params.subName] ? this.contentData.contentMap[this.$route.params.subName].contentUrl : ''
      } catch (e) {
        //console.log(e);
      }
      return _url
    },
    contentTimestamp () {
      let _timestamp = ''
      try {
        _timestamp = this.contentData.contentMap[this.$route.params.subName] ? this.contentData.contentMap[this.$route.params.subName].timestamp : ''
      } catch (e) {
        //console.log(e);
      }
      return _timestamp
    },
    demo () {
      let _demo = ''
      try {
        _demo = this.contentData.contentMap[this.$route.params.subName] ? this.contentData.contentMap[this.$route.params.subName].demo : ''
      } catch (e) {
        //console.log(e);
      }
      return _demo
    },
    markDownDemo () {
      let _markDownDemo = ''
      try {
        _markDownDemo = this.contentData.contentMap[this.$route.params.subName] ? this.contentData.contentMap[this.$route.params.subName].markDownDemo : ''
      } catch (e) {
        //console.log(e);
      }
      return _markDownDemo
    },
  },
  methods: {
    initRoute () {
      if (!this.$route.params.subName) {
        this.$router.push({
          name: this.detail,
          params: {
            subName: this.contentData.contentList[0].subs[0]
          }
        })
      }
    },
    scrollMenu (flag) {
      flag = flag ? 1 : 0
      let activeItem = this.$refs.contentList.getElementsByClassName('router-link-exact-active')[0]
      if (activeItem && activeItem.scrollIntoView) {
        let viewHeight = activeItem.offsetTop - this.$refs.contentList.offsetTop + activeItem.offsetHeight * flag - this.$refs.contentList.scrollTop
        if (viewHeight > this.$refs.contentList.offsetHeight) {
          activeItem.scrollIntoView()
        }
      }
    },
    contentScrollToTop () {
      this.$refs.contentBody.scrollTop = 0
    }
  },
  watch: {
    '$route': function () {
      this.initRoute()
      this.contentScrollToTop()
      this.$nextTick(() => {
        this.scrollMenu(1)
      })
    }
  },
  components: {
  }
}
</script>

<style src="./content.less" lang="less"></style>
