<template>
	<div class="card">
		<img :src="'http://image.tmdb.org/t/p/w500/' + product.poster_path" :alt="product.title" />
		<div class="date"><span>{{ product.release_date }}</span></div>
		<h3>{{ product.title }}</h3>
		<h5 class="price">Preço: R${{ product.vote_average.toFixed(2) }}</h5> <!---->
		<p class="description">Votos: {{ product.vote_average }}</p><div class="icon"> <Star class="span"/> </div>
		<p class="text-muted"> {{ product.category }} </p>
		<button class="add" @click="addToCart()">Adicionar ao carrinho</button>
	</div>
</template>

<script>

	import Star from 'vue-material-design-icons/Star.vue';

	export default{
		components:{
			Star,
		},
		props: ['product', 'active'],
		methods:{
			addToCart(){
				this.$store.commit('addToCart', this.product)
			}
		},


		computed: {
			description(){
				return this.product.description //.substring(0, 150)
			}
		}
	}

</script>	


<style lang="scss">
	
	.card{
		width: 33.3%;
		padding: 2% 0;
		border-radius: 5px;
		background-color: white;
		box-shadow: 0 0 5px gray;
		margin: 100px 10px 0 10px;

		h5.price{
			color: gray;
		}

		p.description{
			font-size: .85rem;
		}

		p.text-muted{
			color:gray;
		}
		.date{
			padding: 2%;
			background-color: #836FFF;
			color: white;
		}
	}
	button.view-product-button, .add{
			padding: 10px;
			background-color: rgb(79, 160, 187);
			border: none;
			color: white;
			font-weight: bold;
			font-size: 1.15rem;
			border-radius: 5px;
			cursor: pointer;
		}	

	@media(min-width: 400px){
		.card{
			width: 350px;
			
		}
	}
	img{
		width: 150px;
	}
</style>