
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
Vue.use(Vuex)
const state={
	count:0,
	username:''
}
const mutations={
	add (state,num) {
		state.count = num
	},
	cut (state,num) {
		if(state.count==0){
			state.count=0
		}else{
			state.count = state.count - num
		}
	}
}
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
