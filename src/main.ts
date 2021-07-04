import { Vue } from 'vue-property-decorator';
import App from './App.vue';
import vuetify from './plugins/vuetify'
import router from './router'

// const vue = createApp(Vue, null);
// vue.use(router, vuetify).mount('#app');

new Vue({
  el: '#app',
  template: '<App/>',
  vuetify,
  router,

  components: {
    App
  }
});