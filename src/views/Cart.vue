<template>
	<div>

		<CartItemCard 
			v-for="product in products"
			:key="product.id"
			:product="product" 
		/>

		<CartSummaryPaymentCard 
		/>

	</div>


</template>

<script>
	import CartItemCard from '../components/carts/CartItemCard.vue'
	import CartSummaryPaymentCard from '../components/carts/CartSummaryPaymentCard.vue'

	export default {
		name: 'Cart',
		components:{
			CartItemCard, CartSummaryPaymentCard
		},
		computed:{
			products(){
				return this.$store.getters.cartItems
			}
		}
	}
	
</script>