<template>
    <div class="container">
        <app-found-profile></app-found-profile>
        <app-new-found></app-new-found>
        <app-number-of-pages></app-number-of-pages>
    </div>
</template>

<script>
    import FoundProfile from './Dogs/FoundProfile.vue';
    import NewFound from './Dogs/NewFound.vue';
    import NoP from './NumberOfPages/numberOfPagesFound.vue'
    export default {
        components: {
            appFoundProfile: FoundProfile,
            appNewFound: NewFound,
            appNumberOfPages: NoP
        }
    }
</script>

<style>
    @import "./Styles/dogsWindows.css";
</style>