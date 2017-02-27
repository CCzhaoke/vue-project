<template>
  <div class="about">
    <x-header style="color:#fff;background:#1B1B1F">关于我们</x-header>
    <div class='box'>
      <span class='tit'>信息简介</span>
      <br>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;微站，是移动互联网时代的新概念，伴随着智能手机等移动终端的普及而产生，是移动互联网时代企业基础应用平台和移动门户，也是移动互联网统一数据入口。微站，可以快速构建手机网站、生成手机客户端APP的功能，并集成与微信、微博、二维码的数据接口，实现企业信息化管理与移动互联网技术的结合。企业可以在微站这个平台上，集成在线客服系统、在线商城、短信系统、企业CRM系统等多平台，并可以扩展出多种移动应用，例如微调查、微活动、微商城、抽奖、会员管理等。微站，可以帮助企业进行信息同步分享并传播，整合企业网络营销推广的要求，提升企业营销的精准性，扩大营销的互动性，放大企业信息传播效应，从而提高企业品牌的商业价值。<br>
  微站是移动互联网时代创新型的企业移动门户和手机客户端APP的总称，可以快速构筑更适合手机直接访问的手机网站，生成动态手机客户端app，并融合微信、微博、二维码多种营销方式，帮助企业展示形象，打造品牌，开创营销新模式。微站，集企业信息化建设与移动互联网建设经验之大成，以企业实务信息为基础，以“建站-同步-传播-互动”为主线，快速构建简约、精准、互动的企业移动门户。微站内容可以自动生成并实现，解决了传统互联网建站中“建站繁”、“维护难”、“互动差”等诸多弊端，能够帮助企业建立自己的“移动互联网根据地”，不再依赖于第三方信息平台。</span>
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
  name: 'about',
  data () {
    return {
      msg: 'details'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.box{
  padding:0 12px 0 15px;
  color:#bababa;
}
.tit{
  height:40px;
  line-height:40px;
  text-align: center;
  font-size:.16rem;
}
</style>
