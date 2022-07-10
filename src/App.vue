<template>
  <nav >
     <ul>
      <li>
        <router-link class="home" :class="{active: $route.name === 'Home'}" to="/">Home</router-link> 
      </li>
       
      <li  class="positon">
        <button @click="toggle()"> <CartCheck :class="icon"/> </button>
      </li>
       
       <li class="positon cart2">
         <Cart class="cart" v-show="isOpen"/>
       </li>
       <div class="clear"></div>
     </ul>
  
  </nav>
  <router-view/>
</template>

<script>

    import CartCheck from 'vue-material-design-icons/CartCheck.vue';
    import Cart from './views/Cart.vue'

    export default {
      components:{
        CartCheck, Cart
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

ul{
  display: flex; 
  position: absolute;
  height: 20%;
  list-style: none;
  justify-content: space-between;
  background-color: blue;
  width: 100%;
}
li{
  display: grid;
  justify-content: space-between;
}

.positon{
  position: absolute;
  right: 0;
}

.cart2{
  top:30px;
}


nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 0;
  width: 100%;
  height: 30px;
  background-color: white;
  line-height: 30px;
  position: absolute;
  z-index: 1; 
  background-color: red; 

}


button{
  border: none;
  background-color: red;
}

a{
  font-weight: bold;
  color: darkgray;
  text-decoration: none;
  margin: 0 5px 0 5px;
  font-size: 1.25rem;
  &.active{
    color: #2c3e50;
  }

}

.text-center{
  text-align: center;
}
.icon{
  width: 100px;
}


.clear{
  clear: both;
}

</style>
