import Vue from 'vue'
const add = function ({commit,state},num) {
	Vue.Tool.ajax({
		url:'api.Demo.tests',
		data:{name:'zhangsan'},
		success(data,res){
			//console.log(res.data.err_code)
			if(res.data.err_code===8888){
				commit('add',res.data.err_code)	
				state.username  = data + num
			}
		},
		error(res){
			console.log(res)
		}
	})
}
const cut = function({commit,state},num){
	console.log(num)
	commit('cut',1)
}
export {
	add,
	cut
}
