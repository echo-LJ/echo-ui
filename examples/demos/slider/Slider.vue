<template>
  <div class="slider-demo-container">
    <div class="slider-demo-tools f-flex-center-align">
      <div class="slider-demo-tool">
        <span>提示框位置：</span>
        <v-radio v-for="item in positions" name="positions" v-model="sliderTooltip" :key="item.value" :value="item.value">{{ item.label }}</v-radio>
      </div>
      <div class="slider-demo-tool">
        <span>切换禁用状态：</span>
        <v-switch v-model="sliderDisabled">
          <span slot="open">已禁用</span>
          <span slot="close">已启用</span>
        </v-switch>
      </div>
      <div class="slider-demo-tool">
        <span>手动修改值：</span>
        <v-input-number v-model="inputValue" :step="1" :max="100" :min="0"></v-input-number>
      </div>
    </div>
    <div class="slider-demo-top">
      <div class="slider-demo-item f-flex-outer" v-for="(item, index) in leftSliders" :key="index">
        <v-slider class="f-flex-inner" :disabled="sliderDisabled" :vertical="true" :tooltip="showTooltip" :tooltip-position="sliderTooltip" :range="item.range" :fixed-to="item.fixedTo" :value.sync="sliderValue" :values.sync="sliderValues"></v-slider>
      </div>
      <div class="slider-demo-right">
        <div class="slider-demo-item f-flex-outer" v-for="(item, index) in leftSliders" :key="index">
          <v-slider class="f-flex-inner" :disabled="sliderDisabled" :vertical="false" :tooltip="showTooltip" :tooltip-position="sliderTooltip" :range="item.range" :fixed-to="item.fixedTo" :value.sync="sliderValue" :values.sync="sliderValues"></v-slider>
        </div>
      </div>
    </div>
    <div>
      <v-slider :disabled="sliderDisabled" @on-input="onInput" @on-change="onChange" :vertical="false" :tooltip="showTooltip" :tooltip-position="sliderTooltip" :range="false" :value.sync="sliderValue" :values.sync="sliderValues"></v-slider>
    </div>
    <div class="slider-demo-tool">
      <span>on-input 事件触发次数：</span>
      <span>{{ onInputChangeCount }}</span>
      <span>（只有最下方这个 slider 绑定了事件处理）</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sliderDemo',
  data () {
    return {
      sliderDisabled: false,
      sliderTooltip: 'top',
      sliderValue: 20,
      sliderValues: [20, 80],
      showTooltip: true,
      onInputChangeCount: 0,
      positions: [
        {
          label: '上',
          value: 'top'
        },
        {
          label: '下',
          value: 'bottom'
        },
        {
          label: '左',
          value: 'left'
        },
        {
          label: '右',
          value: 'right'
        }
      ],
      leftSliders: [
        {
          range: false,
          fixedTo: 'min'
        },
        {
          range: false,
          fixedTo: 'max'
        },
        {
          range: false,
          fixedTo: ''
        },
        {
          range: true,
          fixedTo: ''
        }
      ]
    }
  },
  computed: {
    inputValue: {
      set (val) {
        this.sliderValue = val - 0
      },
      get () {
        return this.sliderValue
      }
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    onInput (val) {
      this.onInputChangeCount++
    },
    onChange (val) {
      this.$notice.info({
        msg: 'on-change 事件触发'
      })
    }
  }
}
</script>

<style src="./slider.less" lang="less"></style>
