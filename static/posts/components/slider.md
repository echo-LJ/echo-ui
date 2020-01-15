## Slider 滑动选择器

### 概述
滑动数值选择器，用于在某个给定的区间内选择数值或数值区间。

#### 使用
在模板中直接使用`v-slider`标签即可（注：改组件是对 jQueryUI 中 Slider Widget 的 Vue 封装）。

#### 属性
属性 | 说明 | 类型 | 默认值
------------ | ------------- | ------------- | -------------
range | 是否开启区间选择模式，开启后将出现两个滑块 | Boolean | false
value | 为该选项绑定变量，用于实时获取和更新选中的数值。（在`range`为`false`时使用） | Number | 0
values | 为该选项绑定变量，用于实时获取和更新选中的范围。（在`range`为`true`时使用） | Array | []
min | 最小值 | Number | 0
max | 最大值 | Number | 100
step | 步长，取值建议能被（max - min）整除 | Number | 1
fixedTo | 固定端点，可选值`min`和`max`，`range`为`false`时可用，设置为`min`时，组件将激活`min`值与选中值之间的区域 | String | ''
vertical | 是否开启垂直模式，开启后滑动组件将以竖直形式展现，并自适应外层高度 | Boolean | false
tooltip | 是否显示提示框，为`true`时`hover`滑块后会显示当前滑块的对应的数值 | Boolean | true
tooltipPosition | 提示框的位置，可选值`top`、`bottom`、`left`和`right` | String | 'top'
disabled | 该组件是否禁用，`true`为禁用，禁用时UI无响应，但手动修改`value`的值会将变化映射到UI上 | Boolean | false

#### 事件
事件名 | 说明 | 返回值
------------ | ------------- | -------------
on-input | 拖动滑块时触发，修改外部的数据时不会触发 | 当前选中的值或范围
on-change | 拖动结束时触发，修改外部的数据时不会触发 | 当前选中的值或范围

## 示例