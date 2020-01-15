<template>
  <div class="echo-hello">
    <h1>{{ msg }}</h1>
    <p>{{remark}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'A Desktop UI Library',
      remark: 'Echo, a Vue 2.0 based component library for developers',
    }
  },
  created () {
  },
  components: {
  },
  computed: {
    ...mapGetters([
      'pageSize'
    ]),
    svgPath () {
      let result = ''
      for (let i = 0; i < 10; i++) {
        let _path = `M ${i * 20} 0 h 15 v 20 h -15 v -20 `
        result += _path
      }
      return result
    }
  },
  // methods: {
  //   fetchData () {
  //     let _start = +new Date()
  //     let timerKey = `总费时（${_start}）`
  //     console.time(timerKey)
  //     this.$service.post(this, 'render/renderPuppeteer', {
  //       url: this.renderUrl,
  //       width: 1280,
  //       height: 1200,
  //       name: `按钮页面${_start}`
  //     }).then(data => {
  //       let _end = +new Date()
  //       if (data.state === 0) {
  //         // console.log('渲染成功')
  //       } else {
  //         // console.log('渲染失败')
  //       }
  //       console.timeEnd(timerKey)
  //       this.consoleTheTime(data.data, _end, _start)
  //     }).catch(err => {
  //       // console.log('渲染出错！')
  //       console.timeEnd(timerKey)
  //       // console.log(err)
  //     })
  //   },
  //   fetchListData2 () {
  //     let _start = +new Date()
  //     let timerKey = `总费时（${_start}）`
  //     console.time(timerKey)
  //     let renderList = []
  //     for (let j = 0; j < 10; j++) {
  //       renderList.push({
  //         url: this.renderUrl,
  //         width: 1280,
  //         height: 1200,
  //         name: `按钮页面${_start + j}`
  //       })
  //     }
  //     let promiseList = []
  //     for (let i = 0; i < renderList.length; i++) {
  //       promiseList.push(this.$service.post(this, 'render/renderPuppeteer', renderList[i]))
  //     }
  //     Promise.all(promiseList).then(data => {
  //       let _end = +new Date()
  //       console.timeEnd(timerKey)
  //       let timeList = []
  //       for (let h = 0; h < data.length; h++) {
  //         if (data[h].state === 0) {
  //           // console.log('渲染成功')
  //         } else {
  //           // console.log('渲染失败')
  //         }
  //         timeList.push(this.consoleTheTime(data[h].data, _end, _start))
  //       }
  //       this.consoleTheWait(timeList)
  //     }).catch(err => {
  //       // console.log('渲染出错！')
  //       console.timeEnd(timerKey)
  //       // console.log(err)
  //     })
  //   },
  //   fetchListData () {
  //     let _start = +new Date()
  //     let timerKey = `总费时（${_start}）`
  //     console.time(timerKey)
  //     let renderList = []
  //     for (let j = 0; j < 10; j++) {
  //       renderList.push({
  //         url: this.renderUrl,
  //         width: 1280,
  //         height: 1200,
  //         name: `按钮页面${_start + j}`
  //       })
  //     }
  //     this.$service.post(this, 'render/renderPuppeteers', renderList).then(data => {
  //       let _end = +new Date()
  //       if (data.state === 0) {
  //         // console.log('渲染成功')
  //       } else {
  //         // console.log('渲染失败')
  //       }
  //       console.timeEnd(timerKey)
  //       let timeList = []
  //       for (let i = 0; i < data.data.length; i++) {
  //         timeList.push(this.consoleTheTime(data.data[i], _end, _start))
  //       }
  //       this.consoleTheWait(timeList)
  //     }).catch(err => {
  //       // console.log('渲染出错！')
  //       console.timeEnd(timerKey)
  //       // console.log(err)
  //     })
  //   },
  //   fetchPostData () {
  //     this.$service.post(this, 'common/postTest', { testArgs: 'haha' }, false, 0, '').then(data => {
  //       // console.log(data)
  //     }, error => {
  //       // console.log(error.message)
  //     })
  //   },
  //   fetchTestData (delay, apiKey) {
  //     delay = delay || 0
  //     apiKey = apiKey || ''
  //     let time = new Date().toLocaleTimeString()
  //     this.$service.get(this, 'common/test', { delay: delay, time: +new Date() }, false, 0, apiKey).then(data => {
  //       // console.log(time + ' - ' + data.data + ' - ' + new Date().toLocaleTimeString())
  //     }, error => {
  //       // console.log(error)
  //     })
  //   },
  //   calendarChange (eventData) {
  //     // // console.log(eventData)
  //   },
  //   consoleTheTime (data, endTime, startTime) {
  //     // console.log('渲染费时：', endTime - data.beginProcessing - data.timeForTargetNetwork - data.waitForTargetRender)
  //     // console.log('队列时间：', data.beginProcessing - startTime)
  //     // console.log('实际渲染耗时：', data.realRenderTime)
  //     // console.log('-------------------------------')
  //     return data.timeForTargetNetwork + data.waitForTargetRender
  //   },
  //   consoleTheWait (timeList) {
  //     let max = timeList[0]
  //     let min = timeList[0]
  //     let sum = timeList[0]
  //     for (let i = 1; i < timeList.length; i++) {
  //       if (max < timeList[i]) {
  //         max = timeList[i]
  //       }
  //       if (min > timeList[i]) {
  //         min = timeList[i]
  //       }
  //       sum += timeList[i]
  //     }
  //     let avg = sum / timeList.length
  //     // console.log('最长等待时间：', max)
  //     // console.log('最短等待时间：', min)
  //     // console.log('平均等待时间：', avg)
  //   }
  // },
  watch: {
  }
}
</script>

<style src="./hello.less" lang="less"></style>
