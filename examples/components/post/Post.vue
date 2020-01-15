<template>
  <div class="post-body">
    <component  :is="markDownDemo"></component>
    <component v-if="demo" :is="demo"></component>
  </div>
</template>

<script>
import mdMixin from '../../../static/posts/components/index.js';
import demoMixin from '../../demos'

export default {
  name: 'post',
  mixins: [demoMixin, mdMixin],
  components: {
  },
  props: {
    contentUrl: {
      required: false,
      type: String,
      default: ''
    },
    contentTimestamp: {
      required: false,
      type: String,
      default: ''
    },
    demo: {
      required: false,
      type: String,
      default: ''
    },
    markDownDemo: {
      required: false,
      type: String,
      default: ''
    },
  },
  data () {
    return {
      markdownText: '',
      mdMixin:mdMixin
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  },
  watch: {
    contentUrl () {
      // this.fetchData()
    }
  }
}
</script>

<style src="./post.less" lang="less"></style>
