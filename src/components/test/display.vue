<template>
  <div>
    <h1>Count is {{count}}</h1>
    <h3>欢迎：{{username}}</h3>
    <p>{{num}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	computed : {
		...mapGetters([
				'count','username','num'
			])
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
