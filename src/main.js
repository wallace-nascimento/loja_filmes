import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTheMask from 'vue-the-mask'
import useVuelidate from '@vuelidate/core'




createApp(App).use(VueTheMask).use(useVuelidate).use(store).use(router).mount('#app')
