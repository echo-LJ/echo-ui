<template>
  <div class="transfer-demo-body">
    <div style="width: 400px; height: 300px; margin: 20px;">
      <transfer v-model="selected" :source="source" @on-change="stateChange"></transfer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'transferDemo',
  data () {
    return {
      selected: [{
        key: '1',
        label: '内容1',
        description: '内容1的描述'
      }],
      source: this.getMockData()
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    getMockData () {
      let mockData = []
      for (let i = 1; i <= 20; i++) {
        mockData.push({
          key: i.toString(),
          label: '内容' + i,
          description: '内容' + i + '的描述信息'
        })
      }
      return mockData
    },
    stateChange (val) {
      this.$notice.info({
        msg: '目标列表变化，新长度为' + val.length
      })
    }
  }
}
</script>

<style src="./transfer.less" lang="less"></style>
