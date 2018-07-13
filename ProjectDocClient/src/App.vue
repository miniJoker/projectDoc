<template>
  <div style="display:flex">
    <tool-bar v-if=isLogOn()></tool-bar>
    <transition name="component-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
  
  
</template>

<script>
  import Vue from 'vue';
  import ToolBar from './ToolBar.vue';
  import Utils from './js/utils.js';
  export default {
    name: 'app',
    components: {
      'tool-bar' : ToolBar
    },
    methods : {
      isLogOn : function (){
        return Utils.getCookie("isLogOn");
        console.log(this);
      }
    },
    // beforeUpdate: function(){
    //   if (Utils.getCookie("isLogOn")) {
    //     new Vue(Menu).$mount('#menu');
    //   }
    // },
  };
  
</script>

<style>
  .component-fade-enter-active {
    transition: opacity .3s ease;
  }
  .component-fade-leave-active {
    transition: opacity 0 ease; 
  }
  .component-fade-enter, .component-fade-leave-to
  /* .component-fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>
