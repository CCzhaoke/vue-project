<template>
  <div class="refer">
    <x-header style="color:#fff;background:#1B1B1F">在线咨询</x-header>
    <div>
      <group label-width="5em" label-margin-right="2em" label-align="right">
        <x-input title="姓名" v-model="value1" placeholder="请输入您的姓名"></x-input>
        <x-input title="电话/邮箱" v-model="value2" placeholder="请输入您的电话/邮箱"></x-input>
        <selector title="支付方式" :options="['银行支付', '在线付款']" v-model="value3"></selector>
        <span class='tit'>如您有好的建议或意见</span>
        <x-input placeholder="标题" v-model="value4"></x-input>
        <x-textarea :max="200" name="description" placeholder="描述" v-model="value5"></x-textarea>
      </group>      
    </div>
    <box gap="10px 10px">
       <x-button plain type="primary" @click.native="referSub" v-referSub>提交</x-button>
    </box>
    <group v-if='off'><alert :title='title' :value='value'></alert></group>
  </div>
</template>

<script>
import { XHeader,Group,Cell,XInput,Selector,XButton,Box,XTextarea,Alert } from 'vux'
export default {
  components:{
    XHeader,
    Group,
    Cell,
    XInput,
    Selector,
    XButton,
    Box,
    XTextarea,
    Alert
  },
  name: 'refer',
  data () {
    return {
       value1: '',
       value2: '',
       value3: '银行支付',
       value4:'',
       value5:'',
       off:false,
       value:'确定',
       title:'消息已成功发送',
       arr:[]
    }
  },
  methods:{
    referSub () {
     /* if(this.value1==''){
        this.title='您确定不留下您的名字吗？'
        this.off=true
      }else if(this.value2==''){
        this.title='您确定不留下您的联系方式吗？'
        this.off=true
      }*/
      
      this.arr.push(this.value1,this.value2,this.value3,this.value4,this.value5)
      if(!this.off){
        this.off=true;
      }else{
        this.off=false;
      }  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.refer{
  font-size:.14rem;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 14px;
  padding-top:5px;
}
.active{
  color: #f74c31;
}
.tit{
  color:#d5d9db;
  font-size:14px;
  padding-left:15px;
}
</style>
