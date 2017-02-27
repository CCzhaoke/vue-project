<template>
  <div class="butler">
    <x-header style="color:#fff;background:#1B1B1F">银行服务</x-header>
    <ul class='list'>
      <li>
        <img class='tou' src="../img/butler1.png" alt="">
        <span>中国银行</span>
        <img class='you' src="../img/you.png" alt="">
      </li>
      <li>
        <img class='tou' src="../img/butler2.png" alt="">
        <span>中国农业银行</span>
        <img class='you' src="../img/you.png" alt="">
      </li>
      <li>
        <img class='tou' src="../img/butler3.png" alt="">
        <span>中国建设银行</span>
        <img class='you' src="../img/you.png" alt="">
      </li>
      <li>
        <img class='tou' src="../img/butler4.png" alt="">
        <span>交通银行</span>
        <img class='you' src="../img/you.png" alt="">
      </li>
      <li>
        <img class='tou' src="../img/butler5.png" alt="">
        <span>中信银行</span>
        <img class='you' src="../img/you.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
  components:{
    XHeader
  },
  created(){
    let ls=window.localStorage;   
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.list{
  
  li{
    display:flex;
    height:50px;
    padding:0 10px;
    line-height:50px;
    border-bottom:1px solid #ccc;
    span{
      flex:1;
      padding-left:10px;
      text-align:left;
    }
    .tou{
      width:30px;
      height:30px;
      padding-top:10px;
    }
    .you{
      padding-top:20px;
      width:10px;
      height:10px;
    }
  }
}
</style>