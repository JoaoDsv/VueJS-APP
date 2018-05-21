import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

import store from './store'
import router from './router'
import Home from './components/Home/Home.vue'

require('./assets/css/main.styl')

// VueJS application use Vuex for stores
Vue.use(Vuex)


// Axios API config
axios.defaults.baseURL = 'https://api.producthunt.com/v1/'
axios.defaults.headers.common.Authorization = 'Bearer fb8e81d5b45c4699322db540324059bfe9bccb124435fe25bdb4aea39e9dfe8f'

// Init VueJS application
new Vue({
  store,
  router,
  ...Home
}).$mount('#app')
