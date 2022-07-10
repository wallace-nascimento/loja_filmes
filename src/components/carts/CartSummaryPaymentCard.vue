<template>

	<div class="flex">
		<div class="cart-item-card">
			<h3>Total: R${{ cart_total.toFixed(2) }}</h3>

			<button class="view-product-button">

			 	<router-link :class="{active: $route.name === 'Person'}" to="/checkout">Finalizar Compra</router-link> 

			</button>
		</div>
	</div>

	
</template>

<script>
	export default{
		computed:{
			cart_total(){
				return this.$store.getters.cartTotal
			}
		}
	}
</script>

<style>
	.cart-item-card{
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
</style>
