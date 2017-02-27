<template>
  <div class="mate">
    <x-header style="color:#fff;background:#1B1B1F">我的资料</x-header>
    <div class="datum">
      <ul>
        <li>
            <span>头像</span>
            <p>
              <img class='tou' src="../img/img12.png" alt="">
              <img class='you' src="../img/you.png" alt="">
            </p>
        </li>
        <li>
            <span>昵称</span>
            <group class='datas1'>
              <x-input placeholder="风之翼" :min="2" :max="5"></x-input>
            </group>
        </li>
        <li>
            <span>性别</span>
            <p>
              <span class='yo'>
              <label for="man" class='man'></label> <input type="radio" name='sex' id='man'> 男
               </span>
             <span class='yo'>
              <label for="wman" class='man'></label> <input type="radio" name='sex' id='wman'> 女
               </span>             
              <i></i>
            </p>
        </li>
        <li>
          <span>邮箱</span>
         <group class='datas'>
           <x-input title="" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input>
        </group>
        </li>
        <li>
          <span>出生日期</span>
          <group class='datas2'>
            <calendar v-model="demo1" title="" disable-future>1989-08-19</calendar>
          </group>
        </li>
        <li>
          <span>专属管家</span>
          <p>
            <router-link to='butler'>
              <span>无</span>
              <img class='you' src="../img/you.png" alt="">
            </router-link>
          </p>
        </li>
      </ul>
      <box gap="10px 10px">
       <x-button plain type="primary" @click.native="onClick">保&nbsp;&nbsp;&nbsp;存</x-button>
    </box>
    </div>
  </div>
</template>

<script>
import { XHeader,Group,Calendar,Cell,XInput,XButton,Box } from 'vux'
export default {
  components:{
    XHeader,
    Group,
    Calendar,
    Cell,
    XInput,
    XButton,
    Box
  },
  name: 'mate',
  data () {
    return {
      msg: 'mate',
      demo1:'1989-08-19'
    }
  },
  methods:{
    onClick () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
 .datum{
    width:100%;
    background:#fff;
    font-size:.14rem;
    ul{
      display:flex;
      flex-direction:column;
      margin:0 15px;
      li{
        flex:1;
        flex-direction:row;
        display:flex;
        width:100%;
        height:60px;
        line-height:60px; 
        color:#232323;
        p .tou{
          margin-top:10px;
        }
        p .you{
        }
        &:nth-child(2){
          p b{
            color:#232323;
            font-weight: normal;
          }
        }
        >span{
          width:80px;
          text-align: left;
        }
        p{
          flex:1;
          text-align: right;
          img{
            width:40px;
            height:40px;
            background-size:100% 100%;
          }
          .you{
              width:10px;
              height:10px;
            }
          .ccc{
            color:#ccc;
          }
          input{
            text-align:right;
            border:none;
          }

          i{
            width:20px;
            display:inline-block;
            color:#8B8A8A;
          }
        }
        a{
          text-decoration: none;
        }
      }
    }
  } 
  .datas{
    text-align: right;
    padding-left:135px;
    text-decoration: none;
  }
  .datas1{
    padding-left:230px;
  }
  .datas2{
    padding-left:130px;
  }
</style>
