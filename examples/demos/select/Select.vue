<template>
  <div class="icons-demo-body">
    <div class="icons-search-container">
      <p class="icons-tip">{{ $t('demo.table.example') }}</p>
    </div>
    <div class="select-demo">
      <v-select v-model="model1" :options="cityList" :multiple="true" :filterable="true" placement="up"></v-select>
    </div>
    <div class="select-demo">
      <v-select v-model="model2" :options="cityList" :multiple="true" :filterable="false"></v-select>
    </div>
    <div class="select-demo">
      <v-select v-model="model3" :options="cityList" :multiple="false" placement="up" :filterable="false"></v-select>
    </div>
    <div class="select-demo">
      <v-select v-model="model4" :options="cityList" :multiple="false" :filterable="true"></v-select>
    </div>
    <div class="select-demo">
      <v-select v-model="model5" :options="cityList" :multiple="false" :disabled="true"></v-select>
    </div>
    <div class="select-demo">
      <v-select v-model="model5" :options="cityList" :multiple="false" :disabled="false" :option-disabled="optionDisabled"></v-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectDemo',
  data () {
    return {
      cityList: [
        {
          value: 'beijing',
          label: '北京市'
        },
        {
          value: 'shanghai',
          label: '上海市'
        },
        {
          value: 'shenzhen',
          label: '深圳市'
        },
        {
          value: 'hangzhou',
          label: '杭州市'
        },
        {
          value: 'nanjing',
          label: '南京市'
        },
        {
          value: 'chongqing',
          label: '重庆市'
        },
        {
          value: 'shenzhen1',
          label: '深圳市1'
        },
        {
          value: 'hangzhou1',
          label: '杭州市1'
        },
        {
          value: 'nanjing1',
          label: '南京市1'
        },
        {
          value: 'chongqing1',
          label: '重庆市1'
        }
      ],
      model1: [],
      model2: [],
      model3: '',
      model4: '',
      model5: '',
      optionDisabled: ['shenzhen']
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

<style src="./select.less" lang="less"></style>
