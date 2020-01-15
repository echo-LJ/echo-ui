<template>
  <div class="calendar-demo-body">
    <calendar-picker :selected="selectedDateArr" @year-change="canlendarViewChange" @month-change="canlendarViewChange" @select-change="calendarChange"></calendar-picker>
    <v-button @click.native="changeDate">手动修改选中日期</v-button>
    <v-button @click.native="changeData">格式化数据</v-button>
  </div>
</template>

<script>
import { formatcalendarData } from '../../components/calendar/assets/utils'
export default {
  name: 'confirmDemo',
  data () {
    return {
      selectedDateArr: {
        2017: [0, 0, 0, 1]
      },
      formatedSelected: {},
      flag: true
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    changeDate () {
      var value = this.flag ? 1 : 0
      this.selectedDateArr[2017].splice(4, 1, value)
      this.flag = !this.flag
    },
    calendarChange (data) {
      this.$notice.info({
        msg: '日历选中日期发生改变'
      })
    },
    canlendarViewChange (data) {
      this.$notice.info({
        msg: '日历界面发生变化'
      })
    },
    changeData () {
      this.formatedSelected = formatcalendarData(this.selectedDateArr)
    }
  }
}
</script>

<style src="./calendar.less" lang="less"></style>
