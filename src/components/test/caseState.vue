<template>
   <div>
		<addition></addition>
		<subtraction></subtraction>
   </div>
</template>

<script>
import addition from './addition'
import subtraction from './subtraction'
import store from '../vuex/store1'
export default {
  name:'testState',
  components : {
   	addition,
   	subtraction
  },
  store,
  created () {
   // console.log(Increment)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
