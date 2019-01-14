<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Header from "./components/Header.vue"
  export default {
    components: {
      appHeader: Header,
    }
  }
</script>

<style>
  @import "./components/Styles/InOutAnim.css";
  #app{
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
    background-image: url("./background.jpg");
    background-size: cover;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
  }
</style>
