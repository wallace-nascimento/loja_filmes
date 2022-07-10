<template>
  <div class="home">
    <Navbar />
    <ProductDescriptionDrawer 
      :product="product"
      :active="active.product_drawer"
      v-on:close-product-drawer="closeProductDrawer()"
    />
   
    <div class="product-cards-container" >

      <ProductSummaryCard 
        v-for="product in items"
        :key="product.id"
        :product="product"
        v-on:add-cart="addToCart()"

      />
    </div>

    

  </div>
</template>

<script>
// @ is an alias to /src
//import items from '../data/items.js'
import { onMounted, ref } from 'vue'
import api from '@/services/api'
import ProductSummaryCard from '../components/product/ProductSummaryCard.vue'
import ProductDescriptionDrawer from '../components/product/ProductDescriptionDrawer.vue'


export default {
  name: 'HomeView',

  components: {
    ProductSummaryCard, ProductDescriptionDrawer
  },
  data () {

    const items = ref([]);

    const fetchMovie = () => api.get()
      .then((response) => items.value = response.data.results)
        

    onMounted(fetchMovie);

    return {
      items: items,
      product: null,
      active:{
        product_drawer: false
      }
    }
  },

  methods:{
    closeProductDrawer(){
      this.active.product_drawer = false
    },addToCart(){
        this.$store.commit('addToCart', this.product)
      },
    
  }
  
}
</script>

<style lang="scss">
  
  .product-cards-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   
  }

</style>
