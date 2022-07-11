<template>

	<div class="box"> 

		<form class="form-person" @submit.prevent="submit()">
			<div class="mb-3 nome">
			  <input type="text" class="form-control" placeholder="Nome completo"
			  v-model="v$.name.$model"
			  :class="{ error: v$.name.$error }"
			  >
			</div>

			<div class="telefone-cpf">
				
				<div class="mb-3 tel-cpf">
				  <input type="text" class="form-control tel" v-mask="'(##) # ####-####'" placeholder="Telefone" 
				  	name="telephone" 
			  		v-model="v$.telephone.$model"
			  		:class="{ error: v$.telephone.$error }"
			  		>
				  
				</div>
				<div class="mb-3 tel-cpf">
				  <input type="text" class="form-control" v-mask="'###.###.###-##'" placeholder="CPF" 
				  	name="cpf"
			  		v-model.trim="v$.cpf.$model"
			  		:class="{ error: v$.cpf.$error }"
			  		> 	
				  
				</div>

			</div>

			<div class="mb-3 email">
			  <input type="email" class="form-control" placeholder="Email" 
			  	name="email"
			  	v-model.trim="v$.email.$model"
			  	:class="{ error: v$.email.$error }"
			  	>
			  
			</div>


			<div class="cep-rua">

				<div class="mb-3 form cep">
				  <input type="text" class="form-control" v-mask="'#####-###'" placeholder="CEP"
				  	name="cep"
			  		v-model.trim="v$.cep.$model"
			  		:class="{ error: v$.cep.$error }"
			  		>
				  
				</div>

				<div class="mb-3 form rua">
				  <input type="text" class="form-control" placeholder="Endereço"
				  	name="address"
			  		v-model.trim="v$.address.$model"
			  		:class="{ error: v$.address.$error }"
			  		>
				 
				</div>

			</div>

			<div class="cidade-estado">
				
				<div class="mb-3 form cidade">
				  <input type="text" class="form-control" placeholder="Cidade"
				  	name="city"
			  		v-model.trim="v$.city.$model"
			  		:class="{ error: v$.city.$error }"
			  		>
				  
				</div>

				<div class="mb-3 form estado">
				  <input type="text" class="form-control" placeholder="Estado"
				  	name="state"
			  		v-model.trim="v$.state.$model"
			  		:class="{ error: v$.state.$error }"
			  		>
				  
				</div>
				
				<Modal 
					v-for="sucesso in sucessos"
					sucesso="sucesso"
					:name="this.name"
				/>
			</div>

			<button class="view-product-button" type="submit">Finalizar</button>
		</form>

		
	</div>
	
</template>

<script>
		
	
	import { required, email, minLength } from '@vuelidate/validators'	
	import useVuelidate from "@vuelidate/core";
	import Modal from "./Modal.vue"
	import Cart from "../carts/CartItemCard.vue"
	export default{
		props: ['product'],
		name: "Checkout",
		components:{
			Modal, Cart
		},
	 	data(){
	 		return{
	 			v$: useVuelidate(),
	 			name: "",
	 			telephone: "",
	 			cpf: "",
	 			email: "",
	 			cep: "",
	 			address: "",
	 			city: "",
	 			state: "",
	 			sucessos:[]

	 		}
	 	},
	 	validations(){
	 		return{
	 			name:{
	 				required,
	 				minLength: minLength(6)
	 			},
		 		telephone:{
		 			required,
		 			minLength: minLength(16)
	 			},
		 		cpf:{
		 			required,
		 			minLength: minLength(14)
		 		},
		 		email:{
		 			required,
		 			email
		 		},
		 		cep:{
		 			required,
		 			minLength: minLength(9)
		 		},
		 		address:{
		 			required,
		 			minLength: minLength(6)
		 		},
		 		city:{
		 			required,
		 			minLength: minLength(4)
		 		},
		 		state:{
		 			required,
		 			minLength: minLength(2)
		 		}

	 		}
	 		
	 	},
	 	methods:{
	 		submit(){
	 			this.sucessos = []

	 			this.v$.$touch();

	 			if(this.name){
	 				this.sucessos.push('')
	 			}
	 		}
	 	}
	}
	
</script>

<style>

	.box{
		max-width: 600px;
		margin: 0 auto;
		padding-top: 100px;

	}
	.form-person{
	}
	.form{
		margin: 0 auto;
		width: 25%;
	}

	.nome, .email{
		width: 100%;
		margin: 0 auto;
	}
	.telefone-cpf{
		display: flex;
		width: 100%;
		margin: 0 auto;
	}	

	.tel-cpf{
		width: 100%;
		padding: 0 1% 0 0;
	}

	.cep-rua{
		display: flex;
		width: 100%;

	}

	.cep{
		width: 40%;
		margin-right: 2%;
	}

	.rua{
		width: 60%;
	}
	.cidade-estado{
		display: flex;
		width: 100%;
	}

	.cidade, .estado{
		width: 50%;
	}

	.cidade{
		margin-right: 10px;
	}
	.error{
		border: 3px solid red;
	}
	.error-color{
		color: red;
	}

	.modal-primary{
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: rgb(128,128,128)
	}
	.modal-secundary{
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		width: 40%;
		top: 40%;
		max-height: 200px;
		background-color: white;
	}

	.modal-secundary h3{
		padding: 5% 0;
	}

	.modal-secundary h5{
		padding: 0 3% 5% 3%;
	}

	.view-product-button:hover{
		background-color: #1E83BC;
	}

	@media(max-width: 545px){
		.telefone-cpf, .cep-rua, .cidade-estado {
			flex-direction: column;
			padding: 0 1%;
		}
		.rua, .cep, .cidade, .estado{
			width: 100%;
		}
		.email, .nome{
			padding: 0 3%;
		}
	}
	
	
</style>