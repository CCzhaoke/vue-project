<template>
  <div class="item">
    <x-header class='header' style="color:#fff;background:#1B1B1F">移民项目</x-header>
    <scroller lock-x class='main'>
      <div class='list'>
       <a v-for='(val,key) in list'>
         <span class='title'>{{val.title}}</span>
         <img :src=val.img @click='goto(val.id)'>
       </a>
     </div>
    </scroller>
    </div>
  </div>
</template>

<script>
import { XHeader,Scroller } from 'vux'
export default {
  components:{
    XHeader,
    Scroller
  },
  name: 'item',
  data () {
    return {
      list:{},
      newlist:[],
      id:0,
      img:'',
      title:'',
      des:''
    }
  },
  created () {
    this.$http({
      url:'/api/test'
    })
    .then(function(res){
      this.list=res.body;
    },function(err){
      console.log(err)
    });
  },
  methods:{
    goto (index) {
      for(var i in this.list){
          if(this.list[i].id == index){
            this.id=this.list[i].id;
            this.img=this.list[i].img;
            this.title=this.list[i].title;
            this.des=this.list[i].description;
          }
      this.img=this.img.replace(/\&/g,"%26");
      this.$router.push('/des?id='+this.id+'&img='+this.img+'&title='+this.title+'&des='+this.des) 
      }
      
    }
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
.item{ 
  display: flex;
  display: -webkit-flex;
  -webkit-flex-direction: column;
  width:100%;
  height:100%;
}
.list{
  flex:1;
  width:100%;
}
.title{
  height:.4rem;
  line-height:.4rem;
  padding-left:.1rem;
}
</style>
