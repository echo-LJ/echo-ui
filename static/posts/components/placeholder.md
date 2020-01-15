## Placeholder 占位反馈

### 概述
信息反馈组件，居中显示，有`loading`、`error`、`noData`、`noAccess`、`notFound`、`noMatch`几种不同的提示类型可选择。

#### 使用
在模板中直接使用`placeholder`标签即可，该组件使用slot的方式分发内容，如示例中button。


#### 属性
属性 | 说明 | 类型 | 默认值
------------ | ------------- | ------------- | -------------
type | 提示类型，可选值为 `loading`、`error`、`noData`、`noAccess`、`notFound`、`noMatch`| String | loading
msg | 提示文本 | String | loading：正在加载数据；noData：您还没有内容哦，添加内容吧；error：请求数据失败,请点击重试；notFound：啊哦404了,请点击重试；noAccess：sorry,您没有权限～～；noMatch：未查询到匹配数据～～
monochrome | 图片颜色类型，可选值为 `false`:蓝色、`true`: 单一灰色| Boolean |false
loadIcon | 类型为loading时，选择加载图标展示方式 可选值为 `false`:图标不旋转加载方式、`true`: 旋转图标加载方式| Boolean |false


## 示例
