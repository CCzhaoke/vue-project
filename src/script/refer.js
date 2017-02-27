import Vue from 'vue'
Vue.directive('onclick',{
	inserted:function(el){
		console.log(el)
	}
})