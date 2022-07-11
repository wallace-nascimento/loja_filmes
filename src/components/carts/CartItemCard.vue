<template>

		<div class="flex">
			<div class="cart-item-card">
				
				<table>
					<thead>
						<td>Imagem</td>
						<td class="linha"> Nome</td>
						<td class="linha">Qtd</td>
						<td class="linha">preço</td>
					</thead>

					<tbody>
						<img :src="'http://image.tmdb.org/t/p/w500/' + product.poster_path" :alt="product.title" class="img"/>
						<td>{{ product.title }}</td> <td>{{ product.quantity }}</td> <td>{{ item_cost.toFixed(2) }} </td>
						<td><button class="remove" @click="removeFromCart()">Remove</button></td>
						
					</tbody>
				</table>
		
			</div>
		</div>
					
	
</template>

<script>	
	export default{
		props: ['product'],
		methods:{
			removeFromCart(){
				this.$store.commit('removeFromCart', this.product)
			}
		},

		computed: {
			description(){
				return this.product.description//.substring(0, 120)
			},
			item_cost(){
				return this.product.vote_average * this.product.quantity //price
			}
		}
	}
</script>	

<style>

	.flex{
		display: flex;
		justify-content: flex-end;
		width: 510px;
	}

	.cart-item-card{
		width: 70%;
		margin-right: 13px;
		background-color: white;
		box-shadow: 0 0 5px gray;
		border-radius: 5px;
		padding: 10px;
		text-align: center;

	}
	.header{
		display: flex;
		justify-content: space-around;
	}

	.img{
		width: 50px;
	}
	table thead{
		margin: 100px;
	}

	tbody td{
		width: 110px;
		max-width: 100%;
	}

	.linha{
		margin: 200px;
		padding-right: 30px;
	}

	.remove{
		padding: 10px;
		background-color: red;
		border: none;
		color: white;
		font-weight: bold;
		font-size: .85rem;
		border-radius: 5px;
		cursor: pointer;
	}
</style>