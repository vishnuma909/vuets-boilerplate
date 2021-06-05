import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  vuetify,
  router,

  components: {
    App
  }
});