<template>
  <div style="display:flex">
    <tool-bar v-if=isLogOn()></tool-bar>
    <router-view></router-view>  
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

</style>
