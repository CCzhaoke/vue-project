<template>
  <div class="des">
    <x-header style="color:#fff;background:#1B1B1F">移民项目</x-header> 
    <scroller lock-x>
      <div class='list'>
        <span>{{list.title}}</span>
        <img :src=list.img alt="">
        <p>{{list.des}}</p>
      </div>
    </scroller>
  </div>
</template>

<script>
import { XHeader,Scroller } from 'vux'
export default {
  components:{
    XHeader,
    Scroller
  },
  name: 'des',
  data () {
    return {
      list:this.$route.query,
      data:[]
    }
  },
  created () {
    //console.log(this.list.img)
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width:100%;
  height:100%;
  background-size:100% 100%;
}
.list span{
    display:inline-block;
    width:100%;
    height:30px;
    line-height:30px;
    padding-left:15px;
    font-size:.14rem;
  }
.list img{
  width:94%;
  padding-left:3%;
}
.list p{
  padding:5px 10px 0;
  line-height:20px;
  text-indent:.2rem;
}
</style>
