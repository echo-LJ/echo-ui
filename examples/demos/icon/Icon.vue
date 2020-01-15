<template>
  <div class="icons-demo-body">
    <div class="icons-search-container">
      <input class="icons-search" v-model="searchString" :placeholder="searchInputPlaceholder" @focus="focusInput" @blur="blurInput" />
      <p class="icons-tip">{{ $t('demo.icon.copyHelpText') }}</p>
    </div>
    <div class="icons-demo">
      <icon-item v-for="icon in icons" :key="icon.properties.name" :class="[clipboardClassName, {'hidden-icon': checkIconState(icon.properties.name)}]" :class-name="icon.properties.name"></icon-item>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
import iconSelection from './assets/selection.json'
import iconItem from './subs/IconItem'

export default {
  name: 'iconDemo',
  data () {
    return {
      icons: iconSelection.icons,
      clipboardClassName: 'js-clipboard',
      searchString: '',
      clipboard: null,
      placeholderDef: this.$t('demo.icon.placeholder'),
      searchInputPlaceholder: this.$t('demo.icon.placeholder')
    }
  },
  components: {
    iconItem
  },
  created () {
    this.initClipboard()
  },
  beforeDestroy () {
    this.clearClipboard()
  },
  methods: {
    checkIconState (iconName) {
      let _result = false
      if (this.searchString) {
        _result = iconName.indexOf(this.searchString) === -1
      }
      return _result
    },
    focusInput () {
      this.searchInputPlaceholder = ''
    },
    blurInput () {
      this.searchInputPlaceholder = this.placeholderDef
    },
    initClipboard () {
      if (!this.clipboard) {
        this.clipboard = new Clipboard('.' + this.clipboardClassName)
        this.clipboard.on('success', (e) => {
          this.$message.success({
            msg: e.text + ' ' + this.$t('demo.icon.copySuccess')
          })
        })
        this.clipboard.on('error', (e) => {
          this.$message.error({
            msg: this.$t('demo.icon.copyError')
          })
        })
      }
    },
    clearClipboard () {
      if (this.clipboard) {
        this.clipboard.destroy()
      }
    }
  }
}
</script>

<style src="./icon.less" lang="less"></style>
