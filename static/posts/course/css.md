## CSS 规范

#### 概述
用于规范项目组CSS的编写。

#### 注释说明
在编译CSS之前请按如下格式编写描述、作者、更新者、更新时间：

  ```CSS
    /* 
      @description: 日历组件
      @author: EBo
      @update: Lujing (2018-04-23)
    */
  ```

#### CSS命名规则
>1. 使用`—`连字符
  * `公共组件`  以`v-`为前缀,以组件功能名称为后缀。例如：`.v-input`、`.v-input-icon`

  * `业务组件`  以`ez-`为前缀,以业务名称为后缀。例如：`.ez-topo`、`.ez-topo-header`

  * `公共布局`  以`ez-page`为前缀,以头部、主体、主栏、侧栏、尾部等为后缀。例如：`.ez-page-header`

  * `公共模块`  以`m-`为前缀。例如：`.m-options-wrap`

  * `功能名称`  以`f-`为前缀。例如：`.f-flex`、`.f-flex-center`

      ```CSS
      .f-flex {
        display:flex;
      }
      ```
  * `皮肤名称` 以`z-`为前缀，适应产品换肤功能，我们需要将颜色、背景等抽离出来放在这里（待定）。

  * `特殊名称` 以`j-`为前缀，专用于JS获取节点。

>2. 后代选择器
  * 单个字母的选择器，请嵌套在父选择器中，__禁止单独使用__。
      ```CSS
      .ez-topo-header-nav-list { 
        .item {
          height:3em;
        }
      }
      ```
#### 代码格式
>1. 代码按顺序组织：

  * @import语句：写在一对引号内，.less 后缀不省略，引号使用双引号
  * 注释说明
  * 变量声明:  采用 @foo-bar 形式，不使用 @fooBar 形式。
  * 样式声明

>2. 选择器、属性和值都使用小写

>3. 最后一个值也以分号结尾

>4. 省略值为0时的单位:为节省不必要的字节同时也使阅读方便，我们将0px、0em、0%等值缩写为0。

  ```CSS
      .m-box{
        margin:0 10px;
        background-position:50% 0;
        /* bad */
        transition-duration: 0.5s, .7s;
        /* good */
        transition-duration: .5s, .7s;
      }
  ```

>5. 使用单引号:省略url引用中的引号，其他需要引号的地方使用单引号（待定）。

  ```CSS
      .m-box{
        background:url(bg.png);
      }
      .m-box:after{
        content:'.';
      }
  ```

>6. 使用16进制表示颜色值:除非你需要透明度而使用rgba，否则都使用`#f0f0f0`这样的表示方法，并尽量缩写。
  
  ```CSS
      .m-box{
        color:#f00;
        background:rgba(0,0,0,0.5);
      }
  ```

>7. 注释规范:样式部分以end结尾。

  ```CSS
      /* common */
      /* common end! */
  ```

#### 代码案例
>1. 代码编写格式和顺序：

  ```CSS
      @import (reference) "./calendar-variables.mixin.less";
      /* @description: 日历组件
      @author: EBo
      @update: Lujing (2018-04-23) */

      @ez-topo-header-height: 3em;
      @calendar-cls: ~'ez-topo';

      @{calendar-cls} {
        width:100%;
        height:100%;
        &-header{
          height:@ez-topo-header-height;
        }
        /* common */
        &-item{
          color:red;
        }
        /* common end! */
      }
  ```

>2. 多主题使用循环生成

  ```CSS
      /* 多种类型 */
      @themeList: primary, success, info, warning, error, light;
      @listLength: length(@themeList);

      .generate-theme-css (@n, @i : 1) when (@i =< @n) {
        @className: extract(@themeList, @i);
        @btnColor: ~"btn-@{className}-color";
        @btnBorderColor: ~"btn-@{className}-border-color";
        @btnBgColor: ~"btn-@{className}-bg-color";

        &.@{className} {
          color: @@btnColor;
          border-color: @@btnBorderColor;
          background-color: @@btnBgColor;
          &:hover{
            border-color: lighten(@@btnBorderColor, 5%);
            background-color: lighten(@@btnBgColor, 5%);
          }
          &:active, &.active{
            border-color: darken(@@btnBorderColor, 5%);
            background-color: darken(@@btnBgColor, 5%);
          }

          &.text{
            color: @@btnBgColor;
            border-color: transparent;
            background-color: transparent;
            &:hover{
              color: lighten(@@btnBgColor, 5%);
              border-color: transparent;
              background-color: transparent;
            }
            &:active, &.active{
              color: darken(@@btnBgColor, 5%);
              border-color: transparent;
              background-color: transparent;
            }
          }
        }
        .generate-theme-css(@n, (@i + 1));
      }
      /* 调用该循环 */
      .generate-theme-css(@listLength);
  ```
>3. 覆盖样式（基于业务不同，部分模块样式不同，需要覆盖样式）
  ```CSS
      
  ```
