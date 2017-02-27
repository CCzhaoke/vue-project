<template>
   <div>
     <Display></Display>
     <br>
     <Increment></Increment>
     <br>
     <cut></cut>
   </div>
</template>

<script>
import Display from './display'
import Increment from './increment'
import cut from './cut'
import store from '../vuex/store'
export default {
  name:'testState',
  components : {
    Display,
    Increment,
    cut
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
