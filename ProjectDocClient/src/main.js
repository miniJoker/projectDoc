import Vue from 'vue';
import App from './App.vue';
import Header from './Header.vue';
import Menu from './Menu.vue';
import {MDCRipple} from '@material/ripple';



new Vue({
  el: '#app',
  render: h => h(App)
});

new Vue({
  el: '#header',
  render: h => h(Header)
});

new Vue({
  el: '#menu',
  render: h => h(Menu)
});

const ripple = new MDCRipple(document.querySelector('.mdc-button'));
