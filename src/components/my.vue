<template>
  <div class="my">
    <x-header style="color:#fff;background:#1B1B1F">联系我们</x-header>
    <div style="text-align:center;margin-top:20px;">
      <divider></divider> 
      <qrcode value="https://vux.li"></qrcode>
      <br>
      <br>
      <span>扫描图中二维码</span>
      <br>
      <br>
      <span>联系我们</span>
    </div>
  </div>
</template>

<script>
import { XHeader,Qrcode,Divider } from 'vux'
export default {
  components:{
    XHeader,
    Qrcode,
    Divider
  },
  name: 'my',
  data () {
    return {
      value: 'https://vux.li'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
