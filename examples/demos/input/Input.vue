<template>
  <div class="input-demo-body">
    <div class="icons-search-container">
      <p class="icons-tip">{{ $t('demo.input.example') }}</p>
    </div>
    <div class="input-demo">
      <v-input type="text" 
               v-model="model1" 
               placeholder="请输入..."
               :disabled="false"
               size="default"
               :readonly='false'
               suffix-icon="icon-wireshark"
               @on-keyup="haha">
      </v-input>
    </div>
    <div class="input-demo">
      <v-input type="text" 
               v-model="model1" 
               placeholder="请输入..."
               :disabled="true"
               size="small"
               :readonly='false'
               prefix-icon="icon-wireshark"
               @on-keyup="haha">
      </v-input>
    </div>
    <div class="input-demo">
      <v-input type="text" 
               v-model="model1" 
               placeholder="请输入..."
               :disabled="false"
               size="large"
               :readonly='true'
               suffix-icon="icon-wireshark"
               @on-keyup="haha">
      </v-input>
    </div>
     <div class="input-demo">
      <v-input type="textarea" 
               v-model="model2" 
               placeholder="请输入..."
               :disabled="false"
               size="default"
               :autosize="autosize"
               :maxlength="15"
               :readonly='false'
               @on-keyup="haha">
      </v-input>
    </div>
    <div class="input-demo">
      <v-input type="textarea" 
               v-model="model2" 
               placeholder="请输入..."
               :disabled="false"
               size="default"
               :autosize="true"
               :readonly='false'
               @on-keyup="haha">
      </v-input>
    </div>
    <div class="input-demo">
      <v-input type="text" 
               v-model="model3" 
               placeholder="请输入..."
               :disabled="false"
               size="default"
               :maxlength="15"
               :readonly='false'
               @on-keyup="haha">
        <div slot="append">国家</div>
        <div slot="prepend">地址</div>
      </v-input>
    </div>
    <div class="input-demo">
      <v-input type="text" 
               v-model="model3" 
               placeholder="请输入..."
               :disabled="false"
               size="default"  
               :maxlength="15"
               :readonly='false'
               prefix-icon="icon-wireshark"
               suffix-icon="icon-wireshark"
               @on-keyup="haha">
      </v-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inputDemo',
  data () {
    return {
      model1: 5,
      autosize: {
        minRows: 2,
        maxRows: 2
      },
      model2: 2,
      model3: 2
    }
  },
  components: {
  },
  created () {
  },
  beforeDestroy () {
  },
  methods: {
    haha (e) {
      console.log(e)
    }
  }
}
</script>

<style src="./input.less" lang="less"></style>
