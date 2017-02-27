<template>
  <div class="ass">
    <x-header style="color:#fff;background:#1B1B1F">我的评估</x-header>
    <div>
        <divider></divider>
           <card :header="{title:'评估中心'}">
          <div slot="content" class="card-demo-flex card-demo-content01">
            <div class="vux-1px-l vux-1px-r">
              <span>2</span>
              <br/>
              未审核
            </div>
            <div class="vux-1px-r">
              <span>3</span>
              <br/>
              已审核
            </div>
            <div class="vux-1px-r">
              <span>1</span>
              <br/>
              正在处理中
            </div>
            <div>
              <span>0</span>
              <br/>
              失效账单
            </div>
          </div>
        </card>

        <br>
         <card :header="{title:'商品详情'}" :footer="{title:'查看更多',link:'panel'}">
          <p slot="content" class="card-padding">custom content</p>
        </card>

        <br>
        
    </div>
  </div>
</template>

<script>
import { XHeader,Divider,Card } from 'vux'
export default {
  components:{
    XHeader,
    Divider,
    Card
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
.card-demo-flex span {
  color: #f74c31;
}
</style>
