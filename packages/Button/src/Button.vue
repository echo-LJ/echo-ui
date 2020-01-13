<template>
  <button class="v-button" :class="btnClasses" :disabled="disabled">
    <span v-show="realLoading" class="v-button-loading">
      <i class="v-button-loading-icon echo-icon-spinner2"></i>
    </span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'EchoButton',
  components: {},
  props: {
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    icon: {
      required: false,
      type: Boolean,
      default: false
    },
    loading: {
      required: false,
      type: Boolean,
      default: false
    },
    // miniLoadingTime: {
    //   required: false,
    //   type: Number,
    //   default: 0
    // },
    miniLoadingInterval: {
      required: false,
      type: Number,
      default: 0
    },
    size: {
      required: false,
      type: String,
      default: 'default'
    },
    shape: {
      required: false,
      type: String,
      default: 'default'
    },
    type: {
      required: false,
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      attrs: [
        {
          map: 'sizeMap',
          prop: 'size',
          defaultClass: 'default'
        },
        {
          map: 'typeMap',
          prop: 'type',
          defaultClass: ''
        },
        {
          map: 'shapeMap',
          prop: 'shape',
          defaultClass: ''
        }
      ],
      iconClassName: 'icon',
      innerLoading: false,
      innerLoadingTimer: null,
      loadingClassName: 'loading',
      loadingUnwatcher: null,
      sizeMap: {
        large: 'large',
        default: 'default',
        small: 'small',
        mini: 'mini'
      },
      shapeMap: {
        default: '',
        circle: 'circle'
      },
      typeMap: {
        default: '',
        ghost: 'ghost',
        text: 'text',
        primary: 'primary',
        info: 'info',
        success: 'success',
        error: 'error',
        warning: 'warning',
        light: 'light'
      }
    }
  },
  computed: {
    realLoading () {
      if (this.miniLoadingInterval) {
        return this.loading || this.innerLoading
      } else {
        return this.loading
      }
    },
    propsClasses () {
      let classes = []
      for (let attr of this.attrs) {
        let className = this[attr.map][this[attr.prop]] || attr.defaultClass
        if (className) {
          classes.push(className)
        }
      }
      return this.icon ? classes.concat([this.iconClassName]) : classes
    },
    btnClasses () {
      return this.realLoading ? this.propsClasses.concat([this.loadingClassName]) : this.propsClasses
    }
  },
  watch: {
    miniLoadingInterval () {
      this.initLoadingWathcer()
    }
  },
  created () {
    this.initLoadingWathcer()
  },
  mounted () {},
  destroyed () {
    this.removeLoadingWatcher()
    this.clearInnerLoadingTimer()
  },
  methods: {
    setLoadingWatcher () {
      if (!this.loadingUnwatcher) {
        this.loadingUnwatcher = this.$watch('loading', this.onLoadingChange)
      }
    },
    removeLoadingWatcher () {
      if (this.loadingUnwatcher) {
        this.loadingUnwatcher()
        this.loadingUnwatcher = null
      }
    },
    initLoadingWathcer () {
      if (this.miniLoadingInterval) {
        this.setLoadingWatcher()
      } else {
        this.removeLoadingWatcher()
      }
    },
    onLoadingChange (val) {
      if (val === true) {
        this.innerLoading = true
        this.setInnerLoadingTimer()
      }
    },
    clearInnerLoadingTimer () {
      if (this.innerLoadingTimer) {
        clearTimeout(this.innerLoadingTimer)
        this.innerLoadingTimer = null
      }
    },
    setInnerLoadingTimer () {
      this.clearInnerLoadingTimer()
      if (this.miniLoadingInterval) {
        this.innerLoadingTimer = setTimeout(() => {
          this.innerLoading = false
        }, this.miniLoadingInterval)
      }
    }
  }
}
</script>
<style src="./Button.less" lang="less"></style>
