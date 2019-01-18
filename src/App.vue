<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
        <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from "./components/Header.vue"
  import Footer from './components/Footer.vue'
  export default {
    components: {
      appHeader: Header,
      appFooter: Footer
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
    background-image: url("../src/components/img/backgroundWhite.jpg");
    background-color: grey;
    background-blend-mode: screen;
    background-size: cover;
    background-position:center;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
  }
</style>
