<template>
  <div id="app" class='app'>
    <router-view class="content"></router-view>
    <div class="footer"></div>
    <tabbar>
        <tabbar-item selected link="/index">
          <img slot="icon" src="./img/iconfont-home.png"></img>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item show-dot link="/item">
          <img slot="icon" src="./img/faxian1.png"></img>
          <span slot="label">移民项目</span>
        </tabbar-item>
        <tabbar-item>
          <img slot="icon" src="./img/iconfont-user.png"></img>
          <span slot="label" @click='goPage'>个人中心</span>
        </tabbar-item>
        <tabbar-item badge="2" link="/my">
          <img slot="icon" src="./img/iconfont-order-default.png"></img>
          <span slot="label">联系我们</span>
        </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Alert,XHeader,Tabbar,TabbarItem } from 'vux'
export default {
  components:{
    Alert,
    XHeader,
    Tabbar,
    TabbarItem
  },
  created(){
    //console.log(Alert)
  },
  data(){
    return {
        flag:true,
        label:'red'
    }
  },
  methods:{
    goPage(){
     if(this.flag){
       this.$router.push('/login')
       this.flag=false;
     }else{
       this.$router.push('/')
       this.false=true;
     }
    },
    colour(){
      console.log(1)
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
html{
  font-size:100px;
} 

.app{
  display: flex;
  display: -webkit-flex;
  flex-direction:column;
  position: absolute;
  width:100%;
  height:100%;
}
.content{
  -webkit-flex:1;
  flex:1;
  display: flex;
  display: -webkit-flex;
  flex-direction:column;
  width:100%;
}
.footer{
  width:100%;
  height:50px;
  font-size:.16rem;
}
.weui_tabbar a{
  text-decoration: none;
}
@font-face{
  font-family:yofont;
  src:url("./img/iconfont/iconfont.woff") format("woff"),
  url("./img/iconfont/iconfont.ttf") format("truetype");
}
  #app {
 font-size:.14rem;
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 color: #2c3e50;
}  
</style>
