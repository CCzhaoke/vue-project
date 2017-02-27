<template>
  <div>
    <button @click='cut'>Increment -1</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
	methods : {
		...mapActions([
				'cut'
			])
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
