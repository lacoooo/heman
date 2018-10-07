import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './store/store'
import $models from 'models/index'
import 'assets/base.scss'

Vue.prototype.$models = $models

window.vueApp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
