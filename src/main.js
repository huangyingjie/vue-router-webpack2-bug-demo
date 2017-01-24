// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueRouter from 'vue-router';
import Vue from 'vue';
import NavBar from './components/NavBar';


/* eslint-disable no-new */
Vue.use(VueRouter);
const errorLoad = (error) => {
  console.log(error);
};


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: resolve => System.import('./App').then(resolve).catch(errorLoad) },
    { path: '/pageA', component: resolve => System.import('./components/PageA').then(resolve).catch(errorLoad) },
    { path: '/pageB', component: resolve => System.import('./components/PageB').then(resolve).catch(errorLoad) },
  ],
});

new Vue({
  router,
  el: '#app',
  template: '<navBar><router-view /></navBar>',
  components: {
    NavBar,
  },
});
