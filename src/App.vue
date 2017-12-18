<template>
  <div id="app">
      <leftNav></leftNav>
      <div class="main">
        <router-view/>
      </div>
  </div>
</template>

<script>
import leftNav from '../src/components/common/leftNav'
export default {
  name: 'app',
  components:{
    leftNav
  },
  computed:{
    count(){
      return this.$store.state.count
    }
    
  }
}
</script>

<style>
#app{
  text-align:center;
}
.main{
  float: left;
  height: 100%;
  width: 50%;
}
</style>
