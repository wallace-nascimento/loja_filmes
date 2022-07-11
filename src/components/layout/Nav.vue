<template>
	<nav>
     <ul>
	     <li>
	        <router-link class="home-link" :class="{active: $route.name === 'Home'}" to="/">Home</router-link> 
	     </li>
       
	     <li  class="positon">
	        <button @click="toggle()"> <CartCheck :class="icon" class="icone"/> </button>
	     </li>
       
        <li class="positon cart2">
          <Cart class="cart" v-show="isOpen"/>
        </li>
        <div class="clear"></div>
     </ul>
  
  </nav>
</template>

<script>
	
	import CartCheck from 'vue-material-design-icons/CartCheck.vue';
	import Cart from '../../views/Cart.vue'
	export default{
		components:{
			CartCheck, Cart
		},
		name: 'Nav',

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

<style lang="scss">
	
ul{
  display: flex; 
  position: absolute;
  height: 20%;
  list-style: none;
  width: 100%;
}


.home-link:hover{
  background-color: rgb(79, 160, 187);
  border-radius: 5px;
}

.positon{
  position: absolute;
  right: 30px;
}

.cart2{
  top:30px;
  right: -7px;
}

.cart{
	right: 0;
}

.icone{
  color: white;
}

nav{
  display: flex;
  align-items: center;
  padding: 30px 0;
  width: 100%;
  height: 30px;
  background-color: #1E83BC;
  line-height: 30px;
  position: absolute;
  z-index: 1; 
}


button{
  border: none;
  background-color: #1E83BC;
}

button:hover{
  background-color: rgb(79, 160, 187);
  transition: 0.5s;
  border-radius: 5px 
}

a{
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin: 0 5px 0 5px;
  font-size: 1.25rem;
  
  &.active{
    color: white;
    padding: 5px 10px;
    transition: 0.5s;
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