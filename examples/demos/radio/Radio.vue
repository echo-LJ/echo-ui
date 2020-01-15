<template>
  <div class="radio-demo-body">
    <span>{{ paragraph }}</span>
    <br/>
    <v-radio name="paragraph" value="left" v-model="paragraph">
      <i class="icon-paragraph-left"></i><span>居左</span>
    </v-radio>
    <v-radio name="paragraph" value="center" v-model="paragraph">
      <i class="icon-paragraph-center"></i><span>居中</span>
    </v-radio>
    <v-radio name="paragraph" value="right" v-model="paragraph">
      <i class="icon-paragraph-right"></i><span>居右</span>
    </v-radio>
    <v-radio name="paragraph" value="justify" v-model="paragraph">
      <i class="icon-paragraph-justify"></i><span>两侧</span>
    </v-radio>
    <v-radio name="paragraph" value="disabled" v-model="paragraph" :disabled="true">
      <i class="icon-paragraph-justify"></i><span>禁用</span>
    </v-radio>
    <br/>
    <span>{{ paragraph2 }}</span>
    <br/>
    <v-radio name="paragraph2" value="left" v-model="paragraph2" type="button">
      <i class="icon-paragraph-left"></i><span>居左</span>
    </v-radio>
    <v-radio name="paragraph2" value="center" v-model="paragraph2" type="button">
      <i class="icon-paragraph-center"></i><span>居中</span>
    </v-radio>
    <v-radio name="paragraph2" value="right" v-model="paragraph2" type="button">
      <i class="icon-paragraph-right"></i><span>居右</span>
    </v-radio>
    <v-radio name="paragraph2" value="justify" v-model="paragraph2" type="button" shape="circle">
      <i class="icon-paragraph-justify"></i><span>两侧</span>
    </v-radio>
    <v-radio name="paragraph2" value="disabled" v-model="paragraph2" type="button" shape="circle" :disabled="true">
      <i class="icon-paragraph-justify"></i><span>禁用</span>
    </v-radio>
    <br/>
    <span>{{ paragraph3 }}</span>
    <br/>
    <v-radio name="paragraph3" value="left" v-model="paragraph3" type="button" size="mini">
      <i class="icon-paragraph-left"></i><span>居左</span>
    </v-radio>
    <v-radio name="paragraph3" value="center" v-model="paragraph3" type="button" size="mini">
      <i class="icon-paragraph-center"></i><span>居中</span>
    </v-radio>
    <v-radio name="paragraph3" value="right" v-model="paragraph3" type="button" size="mini">
      <i class="icon-paragraph-right"></i><span>居右</span>
    </v-radio>
    <v-radio name="paragraph3" value="justify" v-model="paragraph3" type="button" shape="circle" size="mini">
      <i class="icon-paragraph-justify"></i><span>两侧</span>
    </v-radio>
    <v-radio name="paragraph3" value="disabled" v-model="paragraph3" type="button" shape="circle" size="mini" :disabled="true">
      <i class="icon-paragraph-justify"></i><span>禁用</span>
    </v-radio>
    <br/>
    <span>{{ paragraph4 }}</span>
    <br/>
    <v-radio-group>
      <v-radio name="paragraph4" value="left" v-model="paragraph4" type="button" size="small">
        <i class="icon-paragraph-left"></i><span>居左</span>
      </v-radio>
      <v-radio name="paragraph4" value="center" v-model="paragraph4" type="button" size="small">
        <i class="icon-paragraph-center"></i><span>居中</span>
      </v-radio>
      <v-radio name="paragraph4" value="right" v-model="paragraph4" type="button" size="small">
        <i class="icon-paragraph-right"></i><span>居右</span>
      </v-radio>
      <v-radio name="paragraph4" value="justify" v-model="paragraph4" type="button" size="small">
        <i class="icon-paragraph-justify"></i><span>两侧</span>
      </v-radio>
      <v-radio name="paragraph4" value="disabled" v-model="paragraph4" type="button" size="small" :disabled="true">
        <i class="icon-paragraph-justify"></i><span>禁用</span>
      </v-radio>
    </v-radio-group>
    <br/>
    <span>{{ paragraph5 }}</span>
    <br/>
    <v-radio-group>
      <v-radio name="paragraph5" value="left" v-model="paragraph5" type="button" size="small" shape="circle">
        <i class="icon-paragraph-left"></i><span>居左</span>
      </v-radio>
      <v-radio name="paragraph5" value="center" v-model="paragraph5" type="button" size="small" shape="circle">
        <i class="icon-paragraph-center"></i><span>居中</span>
      </v-radio>
      <v-radio name="paragraph5" value="right" v-model="paragraph5" type="button" size="small" shape="circle">
        <i class="icon-paragraph-right"></i><span>居右</span>
      </v-radio>
      <v-radio name="paragraph5" value="justify" v-model="paragraph5" type="button" size="small" shape="circle">
        <i class="icon-paragraph-justify"></i><span>两侧</span>
      </v-radio>
      <v-radio name="paragraph5" value="disabled" v-model="paragraph5" type="button" size="small" shape="circle" :disabled="true">
        <i class="icon-paragraph-justify"></i><span>禁用</span>
      </v-radio>
    </v-radio-group>
    <br/>
  </div>
</template>

<script>
export default {
  name: 'radioDemo',
  data () {
    return {
      paragraph: 'disabled',
      paragraph2: 'disabled',
      paragraph3: 'disabled',
      paragraph4: 'disabled',
      paragraph5: 'disabled'
    }
  },
  components: {
  },
  created () {
  },
  methods: {
  }
}
</script>

<style src="./radio.less" lang="less"></style>
