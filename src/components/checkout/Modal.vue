<template>
	
	<div class="modal-primary"> 
		<div class="modal-2">
			<h3>Obrigado {{this.name}}!</h3>
			<h5>Sua compra foi finalizada com Sucesso!</h5>
				<router-link :class="{active: $route.name === 'Home'}" to="/">Ir para loja</router-link>
		</div>
	</div>
							
</template>

<script>
	export default{
		props:['name'],
		name: "Modal"
	}
	
</script>

<style>

	.modal-primary{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: rgb(128,128,128);
	}
	.modal-2{
		position: relative;
		top: 40%;
		padding: 0 2%;
		max-height: 250px;
		background-color: white;
	}

	.modal-2 h3{
		padding: 5% 0;
	}

	.modal-2 h5{
		padding: 0 3% 2% 3%;
	}

	.view-product-button:hover{
		background-color: #1E83BC;
	}

	.modal-2 a{
		color:  white;
		background-color: rgb(79, 160, 187);
		padding: 10px 20px;
		position: relative;
		top: 50px;
	}

	.modal-2 a:hover{
		background-color: #1E83BC;
	}


	@media(max-width:  480px){
		.modal-2{
			margin: 0 4%;
		}
		.modal-2 a{
			top:  30px;
		}
	}
</style>