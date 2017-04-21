import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import App from './ele.vue';
import {nav,router} from './components/nav.vue';


Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
  el: "#app",
  router,
  methods: {
  }
})