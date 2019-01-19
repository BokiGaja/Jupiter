<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
        <router-view></router-view>
    </transition>
    <app-footer v-if="isAdmin"></app-footer>
  </div>
</template>

<script>
  import Header from "./components/Header.vue"
  import Footer from './components/Footer.vue'
  import axios from 'axios'
  export default {
    data() {
      return {
      }
    },
    computed: {
      isAdmin() {
        if (this.$store.state.admin) {
          return false;
        } else {
          return true;
        }
      }
    },
    components: {
      appHeader: Header,
      appFooter: Footer
    },
      created() {
          axios.get('https://jupiter-ru.firebaseio.com/jupiter-ru/isAdmin.json').then(
              res => {
                  const data = res.data;
                  const users = [];
                  for (let key in data) {
                      const user = data[key];
                      user.id = key;
                      users.push(user);
                  }
                  console.log(users[0].adminLogged);
                  this.$store.state.admin = users[0].adminLogged;
              })
      }
  }
</script>

<style>
  @import "./components/Styles/InOutAnim.css";
  #app{
    height: 100%;
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
