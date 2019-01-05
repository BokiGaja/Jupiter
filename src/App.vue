<template>
  <div id="app">
    <app-header></app-header>
    <!--<app-main></app-main>-->
  </div>
</template>

<script>
  import Header from "./components/Header.vue"
  import Main from "./components/Main.vue"
  export default {
    components: {
      appHeader: Header,
      appMain: Main
    }
  }
</script>

<style>
  #app{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
