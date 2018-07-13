import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import HeaderBar from './HeaderBar.vue';
import AuthPage from './AuthPage.vue';
import NewPage from './NewPage.vue';
import HomePage from './HomePage.vue';

import Utils from './js/utils.js';
import {MDCRipple} from '@material/ripple';


Vue.use(VueRouter);
function checkAuth(){
	return Utils.getCookie('isLogOn');
}
const NotFound = { template: '<h2>This page doesn\'t exist</h2>' }
const routes = [
	{ 
	  	path: '/', component: HomePage, 
	  	beforeEnter: (to, from, next) => {
	  		if (checkAuth()) {
	  			next();
	  		} else {
	  			next({ path: '/auth' })
	  		}
	  	}
  	},
  	{ 
	  	path: '/new', component: NewPage, 
	  	beforeEnter: (to, from, next) => {
	    	if (checkAuth()) {
	  			next();
	  		} else {
	  			next({ path: '/auth' })
	  		}
	  	},
	},
	{ 
	  	path: '/auth', component: AuthPage,
	  	children: [
	  		{
	  			path: '', component: AuthPage,
	  			beforeEnter: (to, from, next) => {
			  		if (checkAuth()) {
			  			next({ path: '/' })
			  		} else {
			  			next()
			  		}
			  	}
	  		},
	  		{
	  			path: 'out', component: AuthPage,
	  			beforeEnter: (to, from, next) => {
	  				Utils.deleteCookie('isLogOn');
			  		next({ path: '/auth' });
			  	}	
	  		}
	  	],
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
