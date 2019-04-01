<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="profilePlusNew">
          <app-new-dog v-if="isAdmin" section="adopt" style="margin: auto"/>
          <app-profile/>
        </div>
      </div>
      <transition name="slide" mode="out-in">
        <app-adoption-form id="adoption-form" v-if="adoptionProcess" class="col"></app-adoption-form>
      </transition>
    </div>
  </div>
</template>

<script>
  import Profile from './AdoptionProfile.vue'
  import NewDog from '../NewDog'
  import AdoptionForm from './AdoptionForm.vue'
  import {mapGetters} from 'vuex';
  import {isAdmin} from "../../../mixins/isAdmin";

  export default {
    data() {
      return {
        isAdmin: null
      }
    },
    mixins: [isAdmin],
    computed: {
      ...mapGetters([
        'adoptionProcess'
      ])
    },
    components: {
      appProfile: Profile,
      appNewDog: NewDog,
      appAdoptionForm: AdoptionForm
    }
  }
</script>

<style>
  @import "../../Styles/dogsWindows.css";
</style>