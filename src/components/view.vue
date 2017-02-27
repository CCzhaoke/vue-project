<template>
  <div class="view">
    <x-header style="color:#fff;background:#1B1B1F">意见反馈</x-header>
    <div class="view-content">
        <div class='view_cont'>
          <p class='view_tit'>请选择您对我们的满意度，让我们做得更好...</p>
          <div v-onclick>
              <div class="view_list" @click="listClick()">
                <span>反馈效率</span>
                <ul>
                  <li class='active'>很满意</li>
                  <li>一般</li>
                  <li>不满意</li>
                </ul>
              </div>
              <div class="view_list">
                <span>问答专业度</span>
                <ul>
                  <li class='active'>很满意</li>
                  <li>一般</li>
                  <li>不满意</li>
                </ul>
              </div>
              <div class="view_list">
                <span>及时回访</span>
                <ul>
                  <li class='active'>很满意</li>
                  <li>一般</li>
                  <li>不满意</li>
                </ul>
              </div>  
          </div>
          <group>
            <x-textarea :max="200" name="description" placeholder="还是不满意，吐槽一下吧" v-model="value1"></x-textarea>
            <x-input placeholder="请留下您的联系方式：QQ、手机号或邮箱(必填)" v-model="value2"></x-input>
          </group>
          
          <box gap="10px 10px">
             <x-button style='background:#2494FF' plain type="warn"  @click.native="onClick">确认提交</x-button>
          </box>
         </div>
      </div>
  </div>
</template>

<script>
import { XHeader,Cell,Group,XButton,Box,XInput,XTextarea } from 'vux'
import Vue from 'vue'
export default {
  components:{
    XHeader,
    Cell,
    Group,
    XButton,
    Box,
    XInput,
    XTextarea
  },
  name: 'view',
  data () {
    return {
      value1:'',
      value2:'',
      obj:{}
    }
  },
  methods: {
    listClick () {
       Vue._$('.view_list li').on('click',function(){
           Vue._$(this).addClass('active').siblings().removeClass('active');
       })
    },
    onClick () {
        var area=Vue._$('#area');
        var text=Vue._$('#text');
        var list=Vue._$('.view_list');
        for(var i=0,len=list.length;i<len;i++){
             var key = Vue._$(list[i]).find('span').text();
             var val = Vue._$(list[i]).find('.active').text();
           this.obj[key]=val;
        }
        this.obj['吐槽']=this.value1;
        this.obj['信息']=this.value2
        if(!this.value2){
          this.value2='联系方式不能为空'
        }else if(this.obj['信息'].length<=11 || this.obj['信息'].length>=25 ){
          this.value2='您的输入有误'
        }else{
          alert('感谢您的反馈')
          console.log(this.obj)
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
.view-content{
    width:100%;
    height:100%;
    background:#fff;
    color:#616161;
    font-size:.14rem;
    .view_tit{
      padding:10px 15px;
    }
    .view_list{
      height:100%;
      margin:0 30px 0 15px;
      span{
        width:100%;
        height:30px;
        line-height:30px;
      }
      ul{ 
        display:flex;
        width:100%;
        height:30px;
        li{
          flex:1;
          display: inline-block;
          height:26px;
          line-height:26px;
          text-align: center;
          border:1px solid #ccc;
          &:nth-child(2){
            margin:0 10px;
          } 
          &.active{
            background:url('../img/checked.png');
            background-repeat:no-repeat;
            background-size:100% 100%;
          }
        }
      }
    }
}
</style>
