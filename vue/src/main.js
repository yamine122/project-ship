import Vue from 'vue'
import App from '@/components/Home.vue'
import vuetify from './plugins/vuetify';
import router from '@/router'
import vuex from 'vuex'
import {store} from '@/store'
import VSwitch from 'v-switch-case'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VSwitch)

new Vue({
  vuetify,
  router,
  vuex,
  store,
  render: h => h(App)
}).$mount('#app')