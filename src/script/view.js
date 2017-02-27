import Vue from 'vue'
Vue.directive('onclick',{
	inserted:function(el){
		//console.log(el)
	}
})  /*view*/
Vue.directive('referSub',{
	inserted:function(el,binging,vnode){
		var s = JSON.stringify
		
	}
})  /*refer*/

Vue.directive('goto',{
	inserted:function(el,binging,vnode){
		//console.log(vnode.data)
		//console.log(binging.def.inserted)
		console.log(vnode.data)
		//this.$router.push('/des?model='+el)
	}
})