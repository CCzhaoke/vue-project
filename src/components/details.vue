<template>
  <div class="details">
    <x-header style="color:#fff;background:#1B1B1F">个人中心</x-header>
    <div class="m-home">
        <section>            
              <div class="login">
                <router-link to='/head' class='pic'>
                    <img src="../img/tou.png" alt="">
                </router-link>
                <p>风之翼</p>
              </div>
              <ul class='list'>
                <li>
                  <router-link to='mate'>
                    <img src="../img/img1.png" alt="">
                    <span>我的资料</span>
                    <img src="../img/you.png" alt="">
                  </router-link>
                </li>
                <li>
                  <router-link to='ass'>
                    <img src="../img/img2.png" alt="">
                    <span>我的评估结果</span>
                    <img src="../img/you.png" alt="">
                  </router-link>
                </li>
                <li>
                  <router-link to='exclusive'>
                    <img src="../img/img3.png" alt="">
                    <span>我的专属管家</span>
                    <img src="../img/you.png" alt="">
                  </router-link>
                </li>
                <li>
                  <router-link to='plan'>
                    <img src="../img/img4.png" alt="">
                    <span>我的进度</span>
                    <img src="../img/you.png" alt="">
                  </router-link>
                </li>
              </ul> 
              <ul class='list'>
                <li>
                  <router-link to='view'>
                      <img src="../img/img5.png" alt="">
                      <span>意见反馈</span>
                     <img src="../img/you.png" alt="">
                  </router-link>  
                </li>
                <li>
                 <router-link to='about'>
                     <img src="../img/img6.png" alt="">
                     <span>关于我们</span>
                     <img src="../img/you.png" alt="">
                 </router-link>
                </li>
                <li>
                  <router-link to='refer'>
                     <img src="../img/img7.png" alt="">
                     <span>在线咨询</span>
                     <img src="../img/you.png" alt="">
                  </router-link> 
                </li>
             </ul>
            
        </section>
      </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
  components:{
    XHeader
  },
  name: 'details',
  data () {
    return {
      msg: 'details'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.pic{
  margin-left:42%;
}
.m-home{
  width:100%;
  height:100%;
  background:#ccc; 
  font-size:.14rem;
  section{
    width:100%;
    height:100%;
  }
  .login{
    width:100%;
    height:108px;
    padding-top:20px;
    background-image:url('../img/img4.jpg');
    color:#fff;
    a{
      text-align: center;
    }
    img{
      width:60px;
      height:60px;
    }
    p{
      text-align: center;
      line-height:40px;
      &:nth-child(1){
        padding-top:20px;
      }
    }
  }
  .list{
    display:flex;
    flex-direction:column;
    margin-top:5px;
    background:#fff;
    padding-left:15px;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    li{
      width:100%;
      height:50px;
      list-style:none;
      line-height:50px;
      &:not(:last-child){
        border-bottom:1px solid #ccc;
      }
      a{
        list-style: none;

        text-decoration: none;
        display:flex;
        width:100%;
        height:50px;
        i{
          width:.44rem;
          text-align: center;
        }
        span{
          flex:1;
          text-align: left;
          color:#000;
        }
        img{
          &:nth-child(1){
            width:26px;
            height:26px;
            margin-top:10px;
            margin-right: 10px;
          }
          &:nth-child(3){
            width:15px;
            height:15px;
            margin:17px 15px 0 0;
          }
        }
      }
    }
  }
}
</style>
