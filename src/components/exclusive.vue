<template>
  <div class="exclusive">
    <x-header style="color:#fff;background:#1B1B1F">专属管家</x-header>
    <div>
        <group>
          <cell class='cell' title="我的账号" value="保护中" @click.native="onClick"></cell>
        </group>

         <group>
           <cell class='cell' title="接收通知" is-link></cell>
           <cell class='cell' title="隐私" is-link></cell>
           <cell class='cell' title="通用" is-link>
             <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
           </cell>
         </group>
       
       <group>
         <cell class='cell' title="接收通知" :value="msg" @click.native="goto"></cell>
       </group>
    </div>
  </div>
</template>

<script>
import { XHeader,Cell,Group } from 'vux'
export default {
  components:{
    XHeader,
    Cell,
    Group
  },
  name: 'exclusive',
  data () {
    return {
      msg: '已开启'
    }
  },
  methods: {
    goto () {
      if(this.msg=='已开启'){
        this.msg='已关闭'
      }else{
        this.msg='已开启'
      }
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import '~vux/src/styles/index.less';
.cell {
    text-align: left;
}
.exclusive{
  width:100%;
  height:100%;
}
</style>
