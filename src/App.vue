<template>
  <div id="app">
    <app-header/>
    <transition name="slide" mode="out-in">
        <router-view/>
    </transition>
    <app-footer v-if="!isAdmin"></app-footer>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Footer from './components/Footer.vue';
  import { isAdmin } from "./mixins/isAdmin";

  export default {
    data() {
      return {
        isAdmin: null
      }
    },

    mixins: [isAdmin],

    components: {
      appHeader: Header,
      appFooter: Footer
    },
  }
</script>

<style>
  @import "./components/Styles/InOutAnim.css";
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
    background-image: url("img/backgroundWhite.jpg");
    background-color: grey;
    background-blend-mode: screen;
    background-size: cover;
    background-position:center;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
