## Button 按钮

### 概述
基础组件，有多种`type`可选：
* `default` 浅灰色边框，淡灰色背景，4px圆角
* `ghost` 透明背景，其他同`default`
* `text` 透明边框，当与`icon`配合使用时无内边距，其他同`ghost`
* `primary`、`info`、`success`、`error`及`warning`5种不同的配色，背景色与边框色相同，4px圆角

#### 使用
在模板中直接使用`v-button`标签即可，该组件使用`slot`的方式分发内容，如`icon`和按钮`label`。

#### 属性
属性 | 说明 | 类型 | 默认值
------------ | ------------- | ------------- | -------------
type | 按钮类型，包括`defalut`、`ghost`、`text`、`primary`、`info`、`success`、`error`、`warning`、`light` | String | defalut
size | 按钮大小，包括`large`、`default`、`small`、`mini` | String | default
shape | 按钮形状，包括`default`、`circle` | String | default
icon | 按钮是否为图标按钮，`true`为图标按钮 | Boolean | false
loading | 载入状态，为`true`时按钮将处于载入状态，不再响应交互并自动显示`loading`图标 | Boolean | false
miniLoadingTime | 最小载入时长，指定一个最小的载入动画运行时长，用以避免异步过快导致的动画闪现。单位`ms`，为`0`时不启用该功能 | Number | 0
disabled | 按钮是否禁用，`true`为禁用 | Boolean | false

此外，当使用`text`类型时，可能需要为按钮添加主题，这时直接给`v-button`添加对应主题的`class`即可（例如，需要`primary`主题时，添加`class="primary"`），可选的主题有：`primary`、`info`、`success`、`error`、`warning`、`light`。

## ButtonGroup 按钮组

### 概述
按钮组件的包装层，用来为按钮分组。

#### 使用
在模板中直接使用`v-button-group`标签即可，该组件使用`slot`的方式分发按钮组件。

#### 属性
属性 | 说明 | 类型 | 默认值
------------ | ------------- | ------------- | -------------
vertical | 是否垂直，`true`表示垂直方向 | Boolean | false

## 示例