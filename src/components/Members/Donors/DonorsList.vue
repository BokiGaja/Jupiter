<template>
    <div class="container">
        <NewProfile v-if="isAdmin" section="donors"/>
        <app-donor-profile/>
    </div>
</template>

<script>
    import DonorsProfile from './DonorProfile.vue'
    import NewProfile from '../NewProfile';
    import { isAdmin } from "../../../mixins/isAdmin";

    export default {
        data() {
            return {
                isAdmin: null
            }
        },

        mixins: [isAdmin],

        components: {
            appDonorProfile: DonorsProfile,
            NewProfile
        }
    }
</script>

<style>
    @import "../../Styles/dogsWindows.css";
</style>