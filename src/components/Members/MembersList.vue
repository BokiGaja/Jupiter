<template>
    <div class="container">
        <app-members-profile></app-members-profile>
        <app-new-member v-if="isAdmin"></app-new-member>
        <app-number-of-pages-member></app-number-of-pages-member>
    </div>
</template>

<script>
    import MemberProfile from './MemberProfile'
    import NewMember from './NewMember'
    import NoPMember from '../NumberOfPages/numberOfPageMembers.vue'
    export default {
        data() {
            return {
                isAdmin: this.$store.state.admin
            }
        },
        components: {
            appMembersProfile: MemberProfile,
            appNewMember: NewMember,
            appNumberOfPagesMember: NoPMember
        }
    }
</script>


<style>
    @import "../Styles/dogsWindows.css";
</style>