import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './ele.vue';

Vue.use(ElementUI)
new Vue({
  el: '#app',
  components: {
    'app': App
  }
})