import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';


//import VueStripeCheckout from 'vue-stripe-checkout';


library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;


Vue.use(VueResource);
Vue.use(VueRouter);

// base/global options
// these options can be overridden
// by the options in the .open(options)
// function.
/*const options = {
  key: 'pk_test_4GcfSMiy6ImzfNaVMXZa0WcM007PX02TS8',
  image: 'https://cdn.meme.am/images/100x100/15882140.jpg',
  locale: 'auto',
  currency: 'PHP',
  billingAddress: true,
  //panelLabel: 'Subscribe {{amount}}'
};
Vue.use(VueStripeCheckout, options);*/

export const bus = new Vue();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
