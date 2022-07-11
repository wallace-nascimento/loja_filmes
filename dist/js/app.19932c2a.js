(function(){"use strict";var t={4442:function(t,e,r){var o=r(9242),a=r(3396);function n(t,e,r,o,n,c){const s=(0,a.up)("Nav"),i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s),(0,a.Wm)(i)],64)}var c=r(7139);const s=(0,a.Uk)("Home"),i={class:"positon"},l={class:"positon cart2"},d=(0,a._)("div",{class:"clear"},null,-1);function u(t,e,r,n,u,m){const p=(0,a.up)("router-link"),v=(0,a.up)("CartCheck"),h=(0,a.up)("Cart");return(0,a.wg)(),(0,a.iD)("nav",null,[(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(p,{class:(0,c.C_)(["home-link",{active:"Home"===t.$route.name}]),to:"/"},{default:(0,a.w5)((()=>[s])),_:1},8,["class"])]),(0,a._)("li",i,[(0,a._)("button",{onClick:e[0]||(e[0]=t=>m.toggle())},[(0,a.Wm)(v,{class:(0,c.C_)([t.icon,"icone"])},null,8,["class"])])]),(0,a._)("li",l,[(0,a.wy)((0,a.Wm)(h,{class:"cart"},null,512),[[o.F8,u.isOpen]])]),d])])}var m=r(5591);function p(t,e,r,o,n,c){const s=(0,a.up)("CartItemCard"),i=(0,a.up)("CartSummaryPaymentCard");return(0,a.wg)(),(0,a.iD)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.products,(t=>((0,a.wg)(),(0,a.j4)(s,{key:t.id,product:t},null,8,["product"])))),128)),(0,a.Wm)(i)])}const v={class:"flex"},h={class:"cart-item-card"},_=(0,a._)("thead",null,[(0,a._)("td",null,"Imagem"),(0,a._)("td",{class:"linha"}," Nome"),(0,a._)("td",{class:"linha"},"Qtd"),(0,a._)("td",{class:"linha"},"preço")],-1),f=["src","alt"],g=(0,a.Uk)(),C=(0,a.Uk)();function w(t,e,r,o,n,s){return(0,a.wg)(),(0,a.iD)("div",v,[(0,a._)("div",h,[(0,a._)("table",null,[_,(0,a._)("tbody",null,[(0,a._)("img",{src:"http://image.tmdb.org/t/p/w500/"+r.product.poster_path,alt:r.product.title,class:"img"},null,8,f),(0,a._)("td",null,(0,c.zw)(r.product.title),1),g,(0,a._)("td",null,(0,c.zw)(r.product.quantity),1),C,(0,a._)("td",null,(0,c.zw)(s.item_cost.toFixed(2)),1),(0,a._)("td",null,[(0,a._)("button",{class:"remove",onClick:e[0]||(e[0]=t=>s.removeFromCart())},"Remove")])])])])])}var $={props:["product"],methods:{removeFromCart(){this.$store.commit("removeFromCart",this.product)}},computed:{description(){return this.product.description},item_cost(){return this.product.vote_average*this.product.quantity}}},y=r(89);const b=(0,y.Z)($,[["render",w]]);var k=b;const x={class:"flex"},D={class:"cart-item-card"},O={class:"view-product-button"},F=(0,a.Uk)("Finalizar Compra");function q(t,e,r,o,n,s){const i=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",x,[(0,a._)("div",D,[(0,a._)("h3",null,"Total: R$"+(0,c.zw)(s.cart_total.toFixed(2)),1),(0,a._)("button",O,[(0,a.Wm)(i,{class:(0,c.C_)({active:"Person"===t.$route.name}),to:"/checkout"},{default:(0,a.w5)((()=>[F])),_:1},8,["class"])])])])}var P={computed:{cart_total(){return this.$store.getters.cartTotal}}};const S=(0,y.Z)(P,[["render",q]]);var z=S,T={name:"Cart",components:{CartItemCard:k,CartSummaryPaymentCard:z},computed:{products(){return this.$store.getters.cartItems}}};const U=(0,y.Z)(T,[["render",p]]);var Z=U,j={components:{CartCheck:m.Z,Cart:Z},name:"Nav",data(){return{isOpen:!1}},methods:{toggle(){this.isOpen=!this.isOpen}},mounted(){this.$store.commit("updateCartFromLocalStorage")}};const E=(0,y.Z)(j,[["render",u]]);var L=E,H={components:{Nav:L},data(){return{isOpen:!1}},methods:{toggle(){this.isOpen=!this.isOpen}},mounted(){this.$store.commit("updateCartFromLocalStorage")}};const V=(0,y.Z)(H,[["render",n]]);var W=V,I=r(678);const N={class:"home"},M={class:"product-cards-container"};function R(t,e,r,o,n,c){const s=(0,a.up)("Navbar"),i=(0,a.up)("ProductDescriptionDrawer"),l=(0,a.up)("ProductSummaryCard");return(0,a.wg)(),(0,a.iD)("div",N,[(0,a.Wm)(s),(0,a.Wm)(i,{product:n.product,active:n.active.product_drawer,onCloseProductDrawer:e[0]||(e[0]=t=>c.closeProductDrawer())},null,8,["product","active"]),(0,a._)("div",M,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.items,(t=>((0,a.wg)(),(0,a.j4)(l,{key:t.id,product:t,onAddCart:e[1]||(e[1]=t=>c.addToCart())},null,8,["product"])))),128))])])}var Y=r(4870),Q=r(6265),K=r.n(Q);const A=K().create({baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=bb6f38d5646bd71fd951bda332daa555&language=en-US&page=1"});var J=A;const X={class:"box-card"},B=["src","alt"],G={class:"date"},tt={class:"title"},et={class:"price"},rt={class:"icon"},ot={class:"vote"},at={class:"text-muted"};function nt(t,e,r,o,n,s){const i=(0,a.up)("Star");return(0,a.wg)(),(0,a.iD)("div",X,[(0,a._)("img",{src:"http://image.tmdb.org/t/p/w500/"+r.product.poster_path,alt:r.product.title},null,8,B),(0,a._)("div",G,[(0,a._)("span",null,(0,c.zw)(r.product.release_date),1)]),(0,a._)("p",tt,(0,c.zw)(r.product.title),1),(0,a._)("p",et,"Preço: R$"+(0,c.zw)(r.product.vote_average.toFixed(2)),1),(0,a._)("div",rt,[(0,a._)("p",ot,"Votos: "+(0,c.zw)(r.product.vote_average),1),(0,a.Wm)(i,{class:"span"})]),(0,a._)("p",at,(0,c.zw)(r.product.category),1),(0,a._)("button",{class:"add",onClick:e[0]||(e[0]=t=>s.addToCart())},"Adicionar ao carrinho")])}var ct=r(4657),st={components:{Star:ct.Z},props:["product","active"],methods:{addToCart(){this.$store.commit("addToCart",this.product)}},computed:{description(){return this.product.description}}};const it=(0,y.Z)(st,[["render",nt]]);var lt=it;const dt={key:0,class:"product-details"},ut={class:"container-img"},mt=["src","alt"],pt={class:"text-center"},vt={class:"text-center"},ht={key:0,class:"cart-total"},_t=(0,a._)("h3",null,"Filme adicionado",-1),ft={class:"button-container"};function gt(t,e,r,o,n,s){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",{class:(0,c.C_)(["drawer-background",{show:r.active}]),onClick:e[0]||(e[0]=e=>t.$emit("close-product-drawer"))},null,2),(0,a._)("div",{class:(0,c.C_)(["drawer",{show:r.active}])},[(0,a._)("div",{class:"drawer-close",onClick:e[1]||(e[1]=e=>t.$emit("close-product-drawer"))}," X "),r.product?((0,a.wg)(),(0,a.iD)("div",dt,[(0,a._)("div",ut,[(0,a._)("img",{class:"img",src:"http://image.tmdb.org/t/p/w500/"+r.product.poster_path,alt:r.product.title},null,8,mt)]),(0,a._)("h3",pt,(0,c.zw)(r.product.title),1),(0,a._)("h3",vt,"R$"+(0,c.zw)(r.product.vote_average.toFixed(2)),1),s.product_total?((0,a.wg)(),(0,a.iD)("div",ht,[_t,(0,a._)("h4",null,(0,c.zw)(s.product_total),1)])):(0,a.kq)("",!0),(0,a._)("div",ft,[(0,a._)("button",{class:"remove",onClick:e[2]||(e[2]=t=>s.removeFromCart())},"Remove")])])):(0,a.kq)("",!0)],2)],64)}var Ct={props:["product","active"],methods:{addToCart(){this.$store.commit("addToCart",this.product)},removeFromCart(){this.$store.commit("removeFromCart",this.product)}},computed:{product_total(){return this.$store.getters.productQuantity(this.product)}}};const wt=(0,y.Z)(Ct,[["render",gt]]);var $t=wt,yt={name:"HomeView",components:{ProductSummaryCard:lt,ProductDescriptionDrawer:$t},data(){const t=(0,Y.iH)([]),e=()=>J.get().then((e=>t.value=e.data.results));return(0,a.bv)(e),{items:t,product:null,active:{product_drawer:!1}}},methods:{closeProductDrawer(){this.active.product_drawer=!1},addToCart(){this.$store.commit("addToCart",this.product)}}};const bt=(0,y.Z)(yt,[["render",R]]);var kt=bt;const xt={class:"box"},Dt={class:"mb-3 nome"},Ot={class:"telefone-cpf"},Ft={class:"mb-3 tel-cpf"},qt={class:"mb-3 tel-cpf"},Pt={class:"mb-3 email"},St={class:"cep-rua"},zt={class:"mb-3 form cep"},Tt={class:"mb-3 form rua"},Ut={class:"cidade-estado"},Zt={class:"mb-3 form cidade"},jt={class:"mb-3 form estado"},Et=(0,a._)("button",{class:"view-product-button",type:"submit"},"Finalizar",-1);function Lt(t,e,r,n,s,i){const l=(0,a.up)("Modal"),d=(0,a.Q2)("mask");return(0,a.wg)(),(0,a.iD)("div",xt,[(0,a._)("form",{class:"form-person",onSubmit:e[8]||(e[8]=(0,o.iM)((t=>i.submit()),["prevent"]))},[(0,a._)("div",Dt,[(0,a.wy)((0,a._)("input",{type:"text",class:(0,c.C_)(["form-control",{error:s.v$.name.$error}]),placeholder:"Nome completo","onUpdate:modelValue":e[0]||(e[0]=t=>s.v$.name.$model=t)},null,2),[[o.nr,s.v$.name.$model]])]),(0,a._)("div",Ot,[(0,a._)("div",Ft,[(0,a.wy)((0,a._)("input",{type:"text",class:(0,c.C_)(["form-control tel",{error:s.v$.telephone.$error}]),placeholder:"Telefone",name:"telephone","onUpdate:modelValue":e[1]||(e[1]=t=>s.v$.telephone.$model=t)},null,2),[[d,"(##) # ####-####"],[o.nr,s.v$.telephone.$model]])]),(0,a._)("div",qt,[(0,a.wy)((0,a._)("input",{type:"text",class:(0,c.C_)(["form-control",{error:s.v$.cpf.$error}]),placeholder:"CPF",name:"cpf","onUpdate:modelValue":e[2]||(e[2]=t=>s.v$.cpf.$model=t)},null,2),[[d,"###.###.###-##"],[o.nr,s.v$.cpf.$model,void 0,{trim:!0}]])])]),(0,a._)("div",Pt,[(0,a.wy)((0,a._)("input",{type:"email",class:(0,c.C_)(["form-control",{error:s.v$.email.$error}]),placeholder:"Email",name:"email","onUpdate:modelValue":e[3]||(e[3]=t=>s.v$.email.$model=t)},null,2),[[o.nr,s.v$.email.$model,void 0,{trim:!0}]])]),(0,a._)("div",St,[(0,a._)("div",zt,[(0,a.wy)((0,a._)("input",{type:"text",class:(0,c.C_)(["form-control",{error:s.v$.cep.$error}]),placeholder:"CEP",name:"cep","onUpdate:modelValue":e[4]||(e[4]=t=>s.v$.cep.$model=t)},null,2),[[d,"#####-###"],[o.nr,s.v$.cep.$model,void 0,{trim:!0}]])]),(0,a._)("div",Tt,[(0,a.wy)((0,a._)("input",{type:"text",class:(0,c.C_)(["form-control",{error:s.v$.address.$error}]),placeholder:"Endereço",name:"address","onUpdate:modelValue":e[5]||(e[5]=t=>s.v$.address.$model=t)},null,2),[[o.nr,s.v$.address.$model,void 0,{trim:!0}]])])]),(0,a._)("div",Ut,[(0,a._)("div",Zt,[(0,a.wy)((0,a._)("input",{type:"text",class:(0,c.C_)(["form-control",{error:s.v$.city.$error}]),placeholder:"Cidade",name:"city","onUpdate:modelValue":e[6]||(e[6]=t=>s.v$.city.$model=t)},null,2),[[o.nr,s.v$.city.$model,void 0,{trim:!0}]])]),(0,a._)("div",jt,[(0,a.wy)((0,a._)("input",{type:"text",class:(0,c.C_)(["form-control",{error:s.v$.state.$error}]),placeholder:"Estado",name:"state","onUpdate:modelValue":e[7]||(e[7]=t=>s.v$.state.$model=t)},null,2),[[o.nr,s.v$.state.$model,void 0,{trim:!0}]])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.sucessos,(t=>((0,a.wg)(),(0,a.j4)(l,{sucesso:"sucesso",name:this.name},null,8,["name"])))),256))]),Et],32)])}var Ht=r(9117),Vt=r(3053);const Wt={class:"modal-primary"},It={class:"modal-2"},Nt=(0,a._)("h5",null,"Sua compra foi finalizada com Sucesso!",-1),Mt=(0,a._)("a",{href:"/"},"Ir para loja",-1);function Rt(t,e,r,o,n,s){return(0,a.wg)(),(0,a.iD)("div",Wt,[(0,a._)("div",It,[(0,a._)("h3",null,"Obrigado "+(0,c.zw)(this.name)+"!",1),Nt,Mt])])}var Yt={props:["name"],name:"Modal"};const Qt=(0,y.Z)(Yt,[["render",Rt]]);var Kt=Qt,At={props:["product"],name:"Checkout",components:{Modal:Kt,Cart:k},data(){return{v$:(0,Vt.ZP)(),name:"",telephone:"",cpf:"",email:"",cep:"",address:"",city:"",state:"",sucessos:[]}},validations(){return{name:{required:Ht.C1,minLength:(0,Ht.Ei)(6)},telephone:{required:Ht.C1,minLength:(0,Ht.Ei)(16)},cpf:{required:Ht.C1,minLength:(0,Ht.Ei)(14)},email:{required:Ht.C1,email:Ht.Do},cep:{required:Ht.C1,minLength:(0,Ht.Ei)(9)},address:{required:Ht.C1,minLength:(0,Ht.Ei)(6)},city:{required:Ht.C1,minLength:(0,Ht.Ei)(4)},state:{required:Ht.C1,minLength:(0,Ht.Ei)(2)}}},methods:{submit(){this.sucessos=[],this.v$.$touch(),this.name&&this.sucessos.push("")}}};const Jt=(0,y.Z)(At,[["render",Lt]]);var Xt=Jt;const Bt=[{path:"/",name:"Home",component:kt},{path:"/cart",name:"Cart",component:Z},{path:"/checkout",name:"Checkout",component:Xt},{path:"/modal",name:"Modal",component:Kt}],Gt=(0,I.p7)({history:(0,I.PO)("/filmes_loja/"),routes:Bt});var te=Gt,ee=r(65);function re(t){localStorage.setItem("cart",JSON.stringify(t))}var oe=(0,ee.MT)({state:{cart:[]},getters:{productQuantity:t=>e=>{const r=t.cart.find((t=>t.id===e.id));return r?r.quantity:null},cartItems:t=>t.cart,cartTotal:t=>t.cart.reduce(((t,e)=>t+e.vote_average*e.quantity),0)},mutations:{addToCart(t,e){let r=t.cart.find((t=>t.id===e.id));r?r.quantity++:t.cart.push({...e,quantity:1}),re(t.cart)},removeFromCart(t,e){let r=t.cart.find((t=>t.id===e.id));r&&(r.quantity>1?r.quantity--:t.cart=t.cart.filter((t=>t.id!==e.id))),re(t.cart)},updateCartFromLocalStorage(t){const e=localStorage.getItem("cart");e&&(t.cart=JSON.parse(e))}},actions:{},modules:{}}),ae=r(9414),ne=r.n(ae);(0,o.ri)(W).use(ne()).use(Vt.ZP).use(oe).use(te).mount("#app")}},e={};function r(o){var a=e[o];if(void 0!==a)return a.exports;var n=e[o]={exports:{}};return t[o].call(n.exports,n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,o,a,n){if(!o){var c=1/0;for(d=0;d<t.length;d++){o=t[d][0],a=t[d][1],n=t[d][2];for(var s=!0,i=0;i<o.length;i++)(!1&n||c>=n)&&Object.keys(r.O).every((function(t){return r.O[t](o[i])}))?o.splice(i--,1):(s=!1,n<c&&(c=n));if(s){t.splice(d--,1);var l=a();void 0!==l&&(e=l)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[o,a,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,n,c=o[0],s=o[1],i=o[2],l=0;if(c.some((function(e){return 0!==t[e]}))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(i)var d=i(r)}for(e&&e(o);l<c.length;l++)n=c[l],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(d)},o=self["webpackChunkloja_filmes"]=self["webpackChunkloja_filmes"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(4442)}));o=r.O(o)})();
//# sourceMappingURL=app.19932c2a.js.map