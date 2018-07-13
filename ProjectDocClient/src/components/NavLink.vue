<template>
  <router-link exact
    :to="route" 
    :class="{'mdc-list-item': isListItem}"
    :active-class="activeClass" >
    <i class="material-icons" aria-hidden="true"
      :class="{'mdc-list-item__graphic': isListItem}">
      {{ icon }}
    </i>
    {{ title }}
  </router-link>
</template>

<script>
  export default {
    name: 'NavLink',
    props: {
      title : String,
      icon : String,
      isListItem : Boolean,
      route : String
    },
    computed: {
      activeClass: function(){
        return this.isListItem? 'mdc-list-item--activated' : 'activeItem';
      }
    }
  }
</script>
