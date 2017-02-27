<template>
  <div class="ass">
    <x-header style="color:#fff;background:#1B1B1F">进度查询</x-header>
    <scroller lock-x>
      <div class="box2">
        <section>
            <div>
                <div class="off">
                  <p action-type="go.hode">在办项目</p>
              </div>
               <div class="plan_cont">
                  <div class="tit">
                    <div>
                      <p>美国EB-5项目</p>
                      <p><span>准备打投资款</span><i class="yo-ico">&#xe635;</i></p>
                    </div>
                    <p class='pic'>
                      <img src="../img/img1.jpg" alt="">
                    </p>
                  </div>
                  <div class="tit">
                    <div>
                      <p>希腊置业投资</p>
                      <p><span>准备材料</span><i class="yo-ico">&#xe635;</i></p>
                    </div>
                    <p class='pic'>
                      <img src="../img/img2.jpg" alt="">
                    </p>
                  </div>
                  <div class="tit">
                    <div>
                      <p>新西兰留学</p>
                      <p><span>等待学校通知</span><i class="yo-ico">&#xe635;</i></p>
                    </div>
                    <p class='pic'>
                      <img src="../img/img3.jpg" alt="">
                    </p>
                  </div>
               </div>
            </div>
        </section>
      </div>
    </scroller>
    
  </div>
</template>

<script>
import { XHeader,Divider,Scroller } from 'vux'
export default {
  components:{
    XHeader,
    Divider,
    Scroller
  },
  name: 'ass',
  data () {
    return {
      msg: 'details'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.ass{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
}
section{
    flex:1;
    width:100%;
    height:100%;
  }
  .off{
    width:100%;
    height:.4rem;
    line-height:.4rem;
    background:#fff;
    padding-left:.15rem;
    margin-bottom:.02rem;
    border:1px solid #ccc;
  }
  .plan_cont{
    width:100%;
    background:#fff;
    .tit{ 
      border-top:1px solid #ccc;
      border-bottom:1px solid #ccc;
      width:100%;
      >div{
        display:flex;
        padding:0 .15rem;
        border-bottom:1px solid #ccc; 
        p{
          flex:1;
          display:inline-block;
          width:100%;
          height:.35rem;
          line-height: .35rem;
          &:nth-child(1){
            font-size:.18rem;
          }
          &:nth-child(2){
            text-align: right;
          }
          i{
            padding-left:.05rem;
            display: inline-block;
          }
        }
      }
      .pic{
        padding:.1rem .15rem;
        img{
          width:100%;
          height:100%;
          background-size:100% 100%;
        }
      }
    }
  }
  .yo-ico{
    font-family:'yofont'
  }
</style>
