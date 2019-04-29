import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/store';
import '@/registerServiceWorker';
import '@/plugins/iview.js';
import { createProvider } from '@/vue-apollo';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount('#app');
