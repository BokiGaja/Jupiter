<template>
  <div class="container">
    <div class="profilePlusNew">
      <NewDog v-if="isAdmin" section="found"/>
      <app-found-profile/>
    </div>
  </div>
</template>

<script>
  import FoundProfile from './FoundProfile.vue';
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
      appFoundProfile: FoundProfile,
      NewDog
    }
  }
</script>

<style>
  @import "../../Styles/dogsWindows.css";
</style>