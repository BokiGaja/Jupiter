<template>
    <div class="container">
        <app-donor-profile></app-donor-profile>
        <app-new-donor v-if="isAdmin"></app-new-donor>
        <app-number-of-pages-donor></app-number-of-pages-donor>
    </div>
</template>

<script>
    import DonorsProfile from './DonorProfile.vue'
    import DonorNew from './NewDonor'
    import NoPDonor from '../NumberOfPages/numberOfPageDonors.vue'
    export default {
        data() {
            return {
                isAdmin: this.$store.state.admin
            }
        },
        components: {
            appDonorProfile: DonorsProfile,
            appNewDonor: DonorNew,
            appNumberOfPagesDonor: NoPDonor
        }
    }
</script>

<style>
    @import "../Styles/dogsWindows.css";
</style>