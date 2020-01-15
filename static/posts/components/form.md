## Form 表单验证系统

### 概述
用于验证表单内容的合法性，分为收集层`v-form`和验证层`v-form-item`，验证层会在接到表单失焦通知或者收集层调用的时候执行规则，检查传入值，在检查出问题的时候以tooltip的形式在页面上显示出来

#### 使用
在模板中使用`v-form-item`套住要验证的表单元素，表单元素如果是v-select/v-input/v-textarea会在失焦时发送通知，其他表单元素则没有这个功能。
再用`v-form`套住`v-form-item`群所在的dom树, 调用 this.$broadcast('el.form.top.validate', v-form的index, 验证成功调用的函数, 验证失败时调用的函数) 即可，因为内部的实现机制为异步调用，所以验证成功时调用的函数也是通过回调函数的形式传入的
> 这里要注意: 
> 1. 一定记得设置index
> 2. 验证成功时调用的函数形参为(v-form的index)
> 3. 验证失败时调用的函数形参为(v-form的index, 收集到的第一个错误内容)

验证规则的书写
`v-form-item`的验证规则为一个数组，数组中是对象，规则在执行时会按照数组中的顺序执行，如果执行在某一条时出现错误则会停止执行规则，直接返回错误信息，规则示例如下
```
[
    {'exvalid': 'required', 'message': '不能为空'},
    {'exvalid': 'ip', 'message': '必须是ip'}
    {'excallback': this.checkIpNet', 'message': '必须是C类网段的IP'}
    {'excallback': this.checkIpSame', 'async': true, 'message': '与其他模块ip重复'}
]
```

这里有三种验证方式: 
1. 使用内部自带的验证函数，特征为设置了exvalid
2. 使用自己传的同步验证函数，特征为设置了excallback加上async为false或者没设置
3. 使用自己传的异步验证函数，特征为设置了excallback加上async为true

同步验证函数如果返回的内容或者异步验证函给出的内容不是true也不是null而是文字时，且规则的message没有设置的话，则使用函数给出的内容，说白了，就是函数可以动态给出错误消息的message

##### 支援的验证类型
类型名 | 说明 | 数组类型 | 能通过的值示例
------------ | ------------- | ------------- | -------------
ip | 是否为ip地址 | String | '192.168.1.1'
ipAny | 是否为ip地址或者'any' | String | '192.168.1.1' 或者 'any'
email | email格式，即xxx@xx.xx | String | 'abc@hotmail.com'
required | 不能为空 | String | 'abc'
tel | 手机号 | String | '13212345678'
ArrayNotEmpty | 数组内容不为空 | Array | ['abc']
strNot0 | 字符串化之后不是0 | String / Number | 9 / '9'
netPort | 端口号 1-65535 | String / Number | 8080
netPortAny | 端口号 1-65535 或者 'any' | String | '8080' / 'any'
numberType | 数字，非字符串 | Number | 1
ipArray | ip的数组 | Array | ['192.168.1.1']
isDayStr | 日期形式 yyyy-hh-mm | String | '2017-01-11'


#### 属性
##### v-form属性
属性 | 说明 | 类型 | 默认值
------------ | ------------- | ------------- | -------------
index | v-form的ID | String | 空
##### v-form-item属性
属性 | 说明 | 类型 | 默认值
------------ | ------------- | ------------- | -------------
value | 要验证的值 | 不限 | undefined
rules | 要执行的规则 | Array | []
name | 用于debug | String | 空
fullWidth | 样式是否设置width:100% | Boolean | false
tooltip | 是否使用tooltip的方式提示错误 | Boolean | true
extraValue | 同步验证或者异步验证函数运行时传入的额外参数 | 不限 | undefined

#### API

#### 接收事件
##### v-form
1. el.form.top.validate
