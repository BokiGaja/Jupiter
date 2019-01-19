<template>
    <div class="container">
        <div class="profilePlusNew">
            <app-new-found v-if="isAdmin"></app-new-found>
            <app-found-profile></app-found-profile>
        </div>
        <app-number-of-pages></app-number-of-pages>
    </div>
</template>

<script>
    import FoundProfile from './Dogs/FoundProfile.vue';
    import NewFound from './Dogs/NewFound.vue';
    import NoP from './NumberOfPages/numberOfPagesFound.vue'
    export default {
        data() {
            return {
                isAdmin: this.$store.state.admin
            }
        },
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