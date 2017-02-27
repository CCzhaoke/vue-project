<template>
   <div>
     <h4>Count is {{count}}</h4>
   </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name:'testState',
  computed : {
    ...mapGetters([
        'count'
      ])
  },

  created () {
   // console.log(Increment)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
