<template>
  <nav class="mdc-drawer mdc-drawer--permanent" style="height: 100vh;">
    <div class="mdc-drawer__content">
      <nav class="mdc-list">
        <a class="mdc-list-item mdc-list-item--activated" href="#">
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>Home
        </a>
        <a class="mdc-list-item" href="#">
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">star</i>New
        </a>
        <a class="mdc-list-item" href="#">
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>Log Off
        </a>
      </nav>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'tool-bar',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
