<template>
    <div class="container">
        <app-profile></app-profile>
        <app-new-profile v-if="isAdmin"></app-new-profile>
        <transition name="slide" mode="out-in">
            <app-adoption-form id="adoption-form" v-if="adoptionProcess"></app-adoption-form>
        </transition>
        <app-number-of-pages></app-number-of-pages>
    </div>
</template>

<script>
    import Profile from './Dogs/AdoptionProfile.vue'
    import NewProfile from './Dogs/NewProfile.vue'
    import AdoptionForm from './Dogs/AdoptionForm.vue'
    import NoP from './NumberOfPages/numbersOfPages.vue'
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                isAdmin: this.$store.state.admin
            }
        },
        computed: {
          ...mapGetters([
              'adoptionProcess'
          ])
        },
        components: {
            appProfile: Profile,
            appNewProfile: NewProfile,
            appAdoptionForm: AdoptionForm,
            appNumberOfPages: NoP
        }
    }
</script>

<style>
    @import "./Styles/dogsWindows.css";
</style>