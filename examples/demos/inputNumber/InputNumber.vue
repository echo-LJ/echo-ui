<template>
  <div class="input-demo-body">
    <div class="icons-search-container">
      <p class="icons-tip">{{ $t('demo.input.example') }}</p>
    </div>
    <div class="input-number-demo">
      <v-input-number size="default" v-model="model1" :max="10" :min="1"></v-input-number>
    </div>
    <div class="input-number-demo">
      <v-input-number size="large" v-model="model2" :step="0.2"></v-input-number>
    </div>
    <div class="input-number-demo">
      <v-input-number size="small" v-model="model3" ></v-input-number>
    </div>
    <div class="input-number-demo">
      <v-input-number size="default" v-model="model4" :disabled="true"></v-input-number>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inputNumberDemo',
  data () {
    return {
      model1: 1,
      model2: 1,
      model3: 1,
      model4: 1
    }
  },
  components: {
  },
  created () {
  },
  beforeDestroy () {
  },
  methods: {
    haha (e) {
      console.log(e)
    }
  }
}
</script>

<style src="./inputNumber.less" lang="less"></style>
