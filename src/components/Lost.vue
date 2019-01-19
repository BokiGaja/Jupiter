<template>
   <div class="container">
       <app-new-lost v-if="isAdmin"></app-new-lost>
       <app-lost-profile></app-lost-profile>
       <app-number-of-pages></app-number-of-pages>
   </div>
</template>

<script>
    import LostProfile from './Dogs/LostProfile.vue';
    import NewLost from './Dogs/NewLost.vue';
    import NoP from './NumberOfPages/numberOfPagesLost.vue'
    export default {
        data() {
            return {
                isAdmin: this.$store.state.admin
            }
        },
        components: {
            appLostProfile: LostProfile,
            appNewLost: NewLost,
            appNumberOfPages: NoP
        }
    }
</script>

<style>
    @import "./Styles/dogsWindows.css";
</style>