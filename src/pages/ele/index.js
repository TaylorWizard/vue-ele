import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import App from './ele.vue';

Vue.use(ElementUI);
Vue.use(VueRouter);

const User = {
  template: '<div>User {{$route.params.id}}</div>',
  watch: {
     $route(to, from) {
     }
  }
}

const routes = [
  { path: '/user/:id', component: User }
]

const router = new VueRouter({
  routes
})

new Vue({
  router
  // render: h => h(App)
}).$mount('#app')