import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import store from './store'
import MintUi from 'mint-ui'
import "@/assets/css/reset.css"
import 'mint-ui/lib/style.css';
Vue.config.productionTip = false
Vue.use(MintUi)
Vue.prototype.axios = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
