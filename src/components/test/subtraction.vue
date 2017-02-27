<template>
   <div>
		<button @click='add'>Increment +1</button>
   </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods : {
  	...mapActions([
  			'add'
  		])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
