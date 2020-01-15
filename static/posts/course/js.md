## js 规范

#### 概述
用于规范项目组js代码格式的编写。

#### 注释说明
在编译js之前请按如下格式编写描述、作者、更新者、更新时间：

  ```js
    /* 
      @description: 日历组件
      @author: EBo
      @update: Lujing (2018-04-23)
    */
  ```

#### vue组件命名规则
>1. 组件名应该是多个单词的，根组件`App`除外，这样做可以避免跟现有的以及未来的`HTML`元素相冲突，因为所有的`HTML`元素名称都是单个单词的。
>2. 组件的文件名是单词大写开头 (PascalCase)
>3. 公共组件应该全部以一个特定的前缀`v-`开头，例如 `Vinput`
>4. 业务组件应该以功能模块名作为前缀，例如 `DashboardEdit`
>5. 如果一个父组件有多个和父组件紧密耦合的子组件，在该父组件下建立文件夹subs存放
>6. 组件名应该倾向于完整单词而不是缩写
>7. 常用结尾单词有（Detail、Edit、List、Info、Report）

#### 组件/实例选项顺序
* `name` (必须写)
* `components`
* `components`
* `directives`
* `filters`
* `mixins`
* `props` (Prop 定义应该尽量详细 其命名应该始终使用 camelCase  如果要改变的话在 data 里面初始化赋值 变量按字母顺序排列)
* `data`
* `computed`
* `watch`
* `beforeCreate`
* `created`
* `beforeMount`
* `mounted`
* `BeforeUpdate`
* `methods`

#### 元素特性顺序
* `is`
* `v-for`
* `v-if`
* `v-else-if`
* `v-else`
* `v-show`
* `ref`
* `key`
* `slot`
* `v-model`
* `v-on`
* `v-text`

#### 组件编写注意项
>1. 为v-for设置键值
>2. 永远不要把 v-if 和 v-for 同时用在同一个元素上
>3. 多个特性的元素应该分多行撰写，每个特性一行
>4. 组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法
>5. 指令缩写 (用 : 表示 v-bind: 和用 @ 表示 v-on:) 统一使用相同表达方式
>6. `<template>`、`<script>` 和 `<style>` 标签的顺序保持一致
>7. 不在 mounted、created 之类的方法写逻辑，例如取异步数据可以在mounte写一个getData方法，去取接口数据，那样这个接口可以复用
>8. 在 created 里面监听 Bus 事件
>9. 当需要操作 DOM 无法通过指令来做的时候可使用 this.$ref 而不是 JQuery
>10. 公用的组件最好提供demo
>11. 组件完成后去掉console.log

#### 组件方法命名
>1. 事件方法以 on 开头
>2. 驼峰命名，仅在命名构造函数或类时使用首字母大写
>3. Promise fetchXXDataSync
>4. 避免单个字母的名称
>5. 不要使用尾部或前导下划线
>6. 有返回值的函数最好在名字上体现出来，最好能表现出返回的格式

#### 变量命名规范
>1. try 错误的时候统一叫error, 如果catch嵌套error后加数字error2

   ```js
      try {

      } catch (error) {
        try {

        } catch (error2) {
          
        }
      }
  ```
>2. 事件参数叫e @click="clickChange($event)"

 ```js
      // @click="clickChange($event)"
      clickInput (e) {
      }
  ```
>3. 定时器xxTiimer 时间用 xxInterval
 ```js
     setPageIntervalTimer () {
        this.clearDataIntervalTimer()
        this.pageTimer = setTimeout(this.setPageOption, this.autoRefreshInterval * 1000)
     },
     clearPageIntervalTimer () {
        if (this.pageTimer) {
          clearTimeout(this.pageTimer)
          this.pageTimer = null
        }
     }
  ```
>4. 对象xxMap 函数内部变量用xxObj
>5. 数组 xxList  函数内部变量xxArr
>6. 单位值需要带 xxUnit, 布尔值需要带 is // 需要不？
>7. this self
>8. 数字 num
>9. vuex 变量加后缀 xxGlobal
>10. 同类型的变量使用相同的前缀和命名规则
>11. 常量字母要大写