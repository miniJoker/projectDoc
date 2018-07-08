<template>
  <div style="position:fixed;top:50%; left:50%">
    <button to="/new" @click="logIn" class="mdc-button mdc-button--outlined mdc-ripple-upgraded">Войти</button>
      <!-- <router-link to="/new" class="mdc-button mdc-button--outlined mdc-ripple-upgraded">Войти</router-link> -->
      <!-- <button class="mdc-button mdc-button--raised mdc-ripple-upgraded">Сделать счет</button>
      <button class="mdc-button mdc-ripple-upgraded">Сделать счет</button>
      <button class="mdc-button mdc-button--unelevated  mdc-ripple-upgraded" >Сделать счет</button>
      <button class="mdc-button mdc-button--dense mdc-ripple-upgraded">Сделать счет</button> -->
    </div>  
</template>

<script>
  export default {
    name: 'Auth',
    methods : {
      logIn : function(){
        //this.$parent.onLogIn(true);
        var date = new Date(new Date().getTime() + 60 * 1000);
        document.cookie = "isLogOn=true; path=/; expires=" + date.toUTCString();
        this.$router.push({ path: '/' });
      }
    }
  }
</script>
