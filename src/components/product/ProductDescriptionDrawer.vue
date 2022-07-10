<template>
	<div class="drawer-background" :class="{show: active}" @click="$emit('close-product-drawer')" />
	
	<div class="drawer" :class="{show: active}">

		<div class="drawer-close" @click="$emit('close-product-drawer')"> 
			X 
		</div>

		<div v-if="product" class="product-details">

			<div class="container-img">
				<img class="img" :src="'http://image.tmdb.org/t/p/w500/' + product.poster_path" :alt="product.title" />
			</div>

			<h3 class="text-center">{{ product.title }}</h3>
			<h3 class="text-center">R${{ product.vote_average.toFixed(2) }}</h3> <!-- price.toFixed(2)-->

			<div class="cart-total" v-if="product_total">
				<h3>Filme adicionado</h3>
				<h4>{{ product_total }}</h4>
			</div>

			<div class="button-container">
				<button class="remove" @click="removeFromCart()">Remove</button>
			</div>
		</div>
	</div>	
	
</template>

<script>
	
	export default{
		props: ['product', 'active'],
		methods:{
			addToCart(){
				this.$store.commit('addToCart', this.product)
			},
			removeFromCart(){
				this.$store.commit('removeFromCart', this.product)
			}

			
		},
		computed: {
			product_total(){
				return this.$store.getters.productQuantity(this.product)
			}
		}
	}

</script>

<style lang="scss">
		
	.drawer-background{
		width: 100%;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		display: none;
		transition: display .5s;
		background-color: rgb(245, 245, 245);
		border-radius: 5px;
		box-shadow: 0 0 5px gray;

		&.show{
			display: block;
		}
	}

	.drawer {
		width: 95vw;
		height: 100vh;
		background-color: white;
		position: fixed;
		top: 0;
		left: -105vw;
		padding: 15px;
		transition: left .5s;
		z-index: 101;
		overflow-y: scroll;

		&.show{
			left: 0;
		}
	}

	.drawer-close{
		font-size: 1.5rem;
		padding: 5px;
		border-radius: 5px;
		right: 10px;
		border: 2px solid gray;
		color: gray;
		width: 15px;
		float: right;
		cursor: pointer;

		&:hover{
			background-color: lightgra;
		} 
	}

	.product-details{
		display: flex;
		justify-content: center;
		flex-direction: column;

		p.description{
			padding: 20px;
			line-height: 1.5rem;
		}

		.button-container{
			button{
				width: 200px;
				border: none;
				background-color: rgb(79, 160, 187);
				color: white;
				padding: 10px;
				font-size: 1.15rem;
				border-radius: 5px;
				margin: 0 5px 50px 5px;
				cursor: pointer;
			}
		}
		.container-img{
			min-width:50%;
		}
		.img{
			width: 25%;
		}
	
	}

	@media(min-width: 500px){
		.drawwer{
			width: 450px;
		}
	}


	

</style>