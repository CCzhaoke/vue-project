<template>
  <div>
    <button @click='add("commit")'>Increment +1</button>
    <button @click='change("store")'>change</button>
    {{dev}}
  </div>
</template>

<script>
//import {mapActions} from 'vuex'
export default {
	data () {
		return {
			dev:'1'
		}
	},
	methods : {
		//this.$store.dispatch()
		add (str) {
			this.$store.dispatch('add',str)
		},
		change (str) {
			this.$store.dispatch('cut',str)
		}

		
		// ...mapActions([
		// 		'add'
		// 	]),
		// 	change (str) {
		// 		this.dev='8888'
		// 		this.add(str)
		// 	}
		/*add () {
			this.$Tool.ajax({
				url:'api.Demo.tests',
				data:{name:'zhangsan'},
				success(data,res){
					console.log(res)
				},
				error(res){
					console.log(res)
				}
			})
		}*/
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
