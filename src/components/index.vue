<template>
  <div class="index">
    <x-header class='header' style="color:#fff;background:#1B1B1F">首页</x-header>
    <div class='main'>
        <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
          <swiper-item><p>微站，可以快速生成手机客户端【APP】的功能</p></swiper-item>
          <swiper-item><p>实现企业信息化管理与移动互联网技术的结合。</p></swiper-item>
          <swiper-item><p>集成在线客服系统，并可以扩展出多种移动应用</p></swiper-item>
          <swiper-item><p>微站是移动互联网时代创新型的企业移动门户</p></swiper-item>
          <swiper-item><p>能够帮助企业建立自己的“移动互联网根据地</p></swiper-item>
          <swiper-item><p>放大企业信息传播效应，从而提高企业品牌的商业价值。</p></swiper-item>
        </swiper>
  
        <swiper :list="demo01_list" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper
    </div>
    <div class="login">
      <p>全球房产的随身管家</p>
    </div>
    <ul class="navlist">
      <li>
         <i class="icon icon1">&#xe629;</i>
         <span>移民</span>
      </li>
      <li>
        <i class="icon icon2">&#xe60c;</i>
        <span>留学</span>
      </li>
      <li>
         <i class="icon icon3">&#xe61c;</i>
         <span>签证</span>
      </li>
      <li>
        <i class="icon icon4">&#xe670;</i>
        <span>生子</span>
      </li>
    </ul>
    <ul class="navlist">
      <li>
         <i class="icon icon5">&#xe630;</i>
         <span>房产</span>
      </li>
      <li>
        <i class="icon icon6">&#xe60c;</i>
        <span>税务</span>
      </li>
      <li>
         <i class="icon icon7">&#xe780;</i>
         <span>商业</span>
      </li>
      <li>
        <i class="icon icon8">&#xe61c;</i>
        <span>银行</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { XHeader,Swiper,GroupTitle,SwiperItem,XButton,Divider } from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'http://www.worldwayhk.com/minimg/UpLoadFiles/20150728/2015072809415826.jpg',
  title: '希腊'
}, {
  url: 'javascript:',
  img: 'http://www.worldwayhk.com/UpLoadFiles/20150919/2015091912173440.jpg',
  title: '明珠别墅'
}, {
  url: 'javascript:',
  img: 'http://img2.imgtn.bdimg.com/it/u=2238705953,1234359801&fm=21&gp=0.jpg',
  title: '新西兰'
}, {
  url: 'javascript:',
  img: 'http://www.worldwayhk.com/UpLoadFiles/20150921/2015092111514457.jpg',
  title: '克里特大学'
}, {
  url: 'javascript:',
  img: 'http://img2.imgtn.bdimg.com/it/u=2503976968,4090008614&fm=21&gp=0.jpg',
  title: '美国'
}]

const urlList = baseList.map((item, index) => ({
  url: '',
  img: item.img,
  title: `(可点击)${item.title}`
}))

export default {
  components:{
    XHeader,
    Swiper,
    GroupTitle,
    SwiperItem,
    XButton,Divider
  },
  name: 'index',
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    demo01_onIndexChange (index) {
      this.demo01_index = index
    }
  },
  data () {
    return {
      demo01_list: baseList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  display: flex;
  display:-webkit-flex;
}
.main{
  flex:1;
}
.copyright {
  font-size: 12px;
  color: #ccc;
  text-align: center;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.navlist{
  display:flex;
}
.navlist li{
  display:flex;
  flex:1;
  flex-direction:column;
  justify-content:center;
  width:25%;
  padding:.07rem 0 .14rem;
  text-align: center;
  
}
.navlist li i{
  flex:1;
  margin-left:.22rem;
}
.navlist li span{
  flex:1;
  padding-top:.05rem;
}
.icon{
  font-family: 'yofont';
  border-radius:50%;
  width:.5rem;
  height:.5rem;
  display:inline-block;
  text-align: center;
  line-height:.5rem;
  color:#fff;
  font-size:.24rem;
}
i,ul,li{
  list-style: none;
  font-weight: normal;
  font-style: normal;
}
.icon1{
  background: #9a7bb9;
}
.icon2{
  background: #9a7bb9;
}
.icon3{
  background: #4a97de;
}
.icon4{
  background:#f9b401;
}
.icon5{
  background: #e29459;
}
.icon6{
  background:#6c5aec; 
}
.icon7{
  background: #03b794;
}
.icon8{
  background: #42ba5f;
}

/* p { font: 13px fontNameRegular, Arial, sans-serif; }
h1{font-family: fontNameRegular} */ 

.login{
  width:100%;
  text-align: center;
  height:.3rem;
  line-height:.3rem;
}
.login p{
  font-family: 'Arial';
}
</style>
