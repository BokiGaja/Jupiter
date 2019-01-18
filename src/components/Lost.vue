<template>
   <div class="container">
       <app-lost-profile></app-lost-profile>
       <app-new-lost></app-new-lost>
       <app-number-of-pages></app-number-of-pages>
   </div>
</template>

<script>
    import LostProfile from './Dogs/LostProfile.vue';
    import NewLost from './Dogs/NewLost.vue';
    import NoP from './NumberOfPages/numberOfPagesLost.vue'
    export default {
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