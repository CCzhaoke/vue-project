<template>
  <div class="login">
    <x-header style="color:#fff;background:#1B1B1F">登录</x-header>
    <div class="main">
       <group title="">
         <x-input titles="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type='china-mobile' ref='phone' v-model='phone'></x-input>
       </group>
        <group>
          <x-input title="发送验证码" class="weui_vcode" v-model='code'>
            <x-button slot="right" @click.native='getCode'>发送验证码</x-button>
          </x-input>
        </group>
        <div class="button" @click='test'>
          <router-link to=''>立即登录</router-link>
        </div>  
    </div>
    <alert v-if='off' :title='title' :value='value'></alert>
  </div>
  
</template>

<script>
import Vue from 'vue'
import { Alert,XHeader,XInput,XButton,Group,Cell } from 'vux'
export default {
  components:{
    Alert,
    XHeader,
    XInput,
    XButton,
    Group,
    Cell
  },
  name: 'login',
  data () {
    return {
      titles: '请输入手机号码',
      title1:'手机验证码',
      code:'',
      phone:'',
      title:'',
      value:'',
      off:false
    }
  },
  methods:{
    test () {
      if(this.code=='0819' && this.phone){
        this.off=true
        this.title='登录成功'
        this.value='关闭'
      }else{
        this.off=true
        this.title='您输入的不正确'
      }

    },
    getCode(){
      console.log('验证码为0819')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  background: #eceef0;
  width:100%;
  height:100%;
}
.main{
  height:auto;
  padding:0 10px;
}
  .button{
    color:#fff;
    margin:20px;
    width:90%;
    height:27px;
    padding-top:10px;
    border-radius:5px;
    background:#2494FF;
    text-align: center;
  }
  .button a{
    text-decoration: none;
    color:#fff;
  }
</style>
