<template>
  <Nav />
  <router-view/>
</template>

<script>

  import Nav from './components/layout/Nav.vue'

    export default {
      components:{
        Nav
      },
      data(){
        return{
          isOpen: false,
        }
        
      },
      methods:{
        toggle(){
          this.isOpen = !this.isOpen
        },
      },
      mounted(){
        this.$store.commit('updateCartFromLocalStorage')
      }
    }
</script>

<style lang="scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

body{
  background-color: rgb(245, 245, 245);
}

</style>