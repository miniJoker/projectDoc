<template>
  <nav class="mdc-drawer mdc-drawer--permanent" style="height: 100vh;">
    <div class="mdc-drawer__content">
      <nav class="mdc-list">
        <nav-link title="Home" route="/" icon="inbox" isListItem/>
        <nav-link title="New" route="/new" icon="star" isListItem/>
        <nav-link title="Log off" route="/auth/out" icon="exit_to_app" isListItem/>
      </nav>
    </div>
  </nav>
</template>

<script>
  import NavLink from './components/NavLink.vue';
  import Utils from './js/utils.js';
  export default {
    name: 'tool-bar',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'nav-link': NavLink
    },
    methods: {
      logOff: function(){
        console.log("123");
        Utils.deleteCookie('isLogOn');
        this.$router.push({ path: '/auth' });
      }
    }
  }
</script>
