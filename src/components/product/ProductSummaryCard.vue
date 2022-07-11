<template>
	<div class="box-card">
		<img :src="'http://image.tmdb.org/t/p/w500/' + product.poster_path" :alt="product.title" />
		<div class="date"><span>{{ product.release_date }}</span></div>
		<p class="title">{{ product.title }}</p>
		<p class="price">Preço: R${{ product.vote_average.toFixed(2) }}</p> <!---->
		<div class="icon">
			<p class="vote">Votos: {{ product.vote_average }}</p> 
			<Star class="span"/> 
		</div>
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
	
	.box-card{
		padding: 2% 0;
		border-radius: 5px;
		background-color: white;
		box-card-shadow: 0 0 5px gray;
		margin: 100px 10px 0 10px;

		p.price{
			color: gray;
		}

		p.vote{
			font-size: 1rem;
		}

		p.text-muted{
			color:gray;
		}
		.date{
			padding: 2%;
			background-color: #836FFF;
			color: white;
		}
		.icon{
			width: 100%;
			display: flex;
			justify-content: center;
		}
		.vote{
			margin: 1% 1% 0 0;
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

	button.view-product-button, .add:hover{
		background-color: #1E83BC;
	}	
	@media(min-width: 400px){
		.box-card{
			width: 350px;
			
		}
	}
	img{
		width: 150px;
	}
</style>