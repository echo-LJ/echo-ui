## Calendar 日历

### 概述
基础日历组件，支持月视图，纯展示时可以使用只读模式。此外，还为快捷选择日期提供了扩展组件。

#### 使用
在模板中直接使用`calendar`即可调用日历组件，如果需要快捷选择，改为`calendar-picker`即可。

#### calendar属性
属性 | 说明 | 类型 | 默认值
------------ | ------------- | ------------- | -------------
locale | 语言选择，默认为中文 | String | 'zh-cn'
currentTime | 当前的时间 | Number, String | `+new Date()`
selected | 选中的日期 | Objcet | null
readonly | 是否只读 | Boolean | false
range | 范围选择开关，为`true`时进入范围选择模式 | Boolean | false

#### calendar-picker属性
属性 | 说明 | 类型 | 默认值
------------ | ------------- | ------------- | -------------
locale | 语言选择，默认为中文 | String | 'zh-cn'
currentTime | 当前的时间 | Number, String | `+new Date()`
selected | 选中的日期 | Objcet | null

属性中的`selected`格式样例如下：
```javascript
selected: {
  2017: [0,1,1,0,1,0,……],
  2018: [0,0,1,1,1]
}
```

#### calendar事件
事件名 | 说明 | 返回值
------------ | ------------- | -------------
year-change | 视图中年份变化时触发 | year
month-change | 视图中月份变化时触发 | { year, month }
select-change | 单次选择完成时触发 | {state, dayOfWeek, dayOfYear, month, date}
range-change | 范围选择完成时触发 | -

#### calendar-picker事件
事件名 | 说明 | 返回值
------------ | ------------- | -------------
year-change | 视图中年份变化时触发 | year
month-change | 视图中月份变化时触发 | { year, month }
select-change | 单次选择完成时触发 | {state, dayOfWeek, dayOfYear, month, date}

事件中的返回值说明如下：
* `year`年份值
* `month`月份值，取值范围为`0 - 11`，`0`为1月，以此类推
* `state`当前日期的状态，`1`为选中状态，`0`为未选中状态
* `dayOfWeek`星期数，取值范围为`0 - 6`，`0`为周日，`1`为周一，以此类推
* `dayOfYear`天数，表示当前日期是该年的第几天，`1`为第一天
* `date`日期数，表示当前日期是该月的第几天，`1`为第一天

## 示例

以下为 vue 组件中的片段代码：
``` html
<div>
  <calendar-picker :select="selectedDateArr" @year-change="canlendarViewChange" @month-change="canlendarViewChange" @select-change="calendarChange"></calendar-picker>
  <v-button @click.native="changeDate">手动修改选中日期<v-button>
  <v-button @click.native="changeData">格式化数据</v-button>
</div>
```
``` javascript
data () {
  return {
    selectedDateArr: {
      2017: [0, 0, 0, 1]
    },
    formatedSelected: {},
    flag: true
  }
}
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
```