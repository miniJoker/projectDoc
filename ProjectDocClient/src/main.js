import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import HeaderBar from './HeaderBar.vue';
import Auth from './Auth.vue';
import New from './New.vue';
import Home from './Home.vue';

import Utils from './js/utils.js';
import {MDCRipple} from '@material/ripple';


Vue.use(VueRouter);
function checkAuth(){
	return Utils.getCookie('isLogOn');
}
const NotFound = { template: '<h2>Page Noasdat Found</h2>' }
const routes = [
	{ 
	  	path: '/', component: Home, 
	  	beforeEnter: (to, from, next) => {
	  		if (checkAuth()) {
	  			next();
	  		} else {
	  			next({ path: '/auth' })
	  		}
	  	}
  	},
	{ 
	  	path: '/auth', component: Auth,
	  	beforeEnter: (to, from, next) => {
	  		if (checkAuth()) {
	  			next({ path: '/home' })
	  		} else {
	  			next()
	  		}
	  	}
	},
  	{ 
	  	path: '/new', component: New,
	  	beforeEnter: (to, from, next) => {
	    	if (checkAuth()) {
	  			next();
	  		} else {
	  			next({ path: '/auth' })
	  		}
	  	},
	},
  	{ path: '*', component: NotFound }
];
const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue({
  el: '#app',
  router : router,
  render: v => v(App)
});

new Vue({
  el: '#header',
  render: v => v(HeaderBar)
});

//const ripple = new MDCRipple(document.querySelector('.mdc-button'));
