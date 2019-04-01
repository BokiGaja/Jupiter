<template>
  <div class="container">
    <app-new-dog v-if="isAdmin" section="lost"/>
    <app-lost-profile/>
  </div>
</template>

<script>
  import LostProfile from './LostProfile.vue';
  import NewDog from '../NewDog';
  import {isAdmin} from "../../../mixins/isAdmin";

  export default {
    data() {
      return {
        isAdmin: null
      }
    },
    mixins: [isAdmin],
    components: {
      appLostProfile: LostProfile,
      appNewDog: NewDog
    }
  }
</script>

<style>
  @import "../../Styles/dogsWindows.css";
</style>