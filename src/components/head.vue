<template>
  <div class="head">
    <x-header style="color:#fff;background:#1B1B1F">头像设置</x-header>
    <div style="">
        <blur :blur-amount=40 :url="url">
          <p class="center"><img :src="url"></p>
        </blur>
        <flexbox :gutter="0">
          <flexbox-item v-for="img in images"><img :src="img" style="width:100%" @click="url = img"/></flexbox-item>
        </flexbox>
    </div>
  </div>
</template>

<script>
import { XHeader,Flexbox,FlexboxItem,Blur } from 'vux'
export default {
  components:{
    XHeader,
    Flexbox,
    FlexboxItem,
    Blur
  },
  name: 'head',
  data () {
    return {
      images: [
        'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
        'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
        'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
      ],
      url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
</style>
