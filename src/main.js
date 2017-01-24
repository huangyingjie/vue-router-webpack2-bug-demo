// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueRouter from 'vue-router';
import Vue from 'vue';
import NavBar from './components/NavBar';
import PageA from './components/PageA';
import PageB from './components/PageB';
import App from './App';


/* eslint-disable no-new */
Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App },
    { path: '/pageA', component: PageA },
    { path: '/pageB', component: PageB },
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
