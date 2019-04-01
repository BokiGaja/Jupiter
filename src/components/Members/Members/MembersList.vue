<template>
    <div class="container">
        <NewProfile v-if="isAdmin" section="members"/>
        <app-members-profile/>
    </div>
</template>

<script>
    import MemberProfile from './MemberProfile'
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
            appMembersProfile: MemberProfile,
            NewProfile
        }
    }
</script>


<style>
    @import "../../Styles/dogsWindows.css";
</style>