<template>
    <div class="container">
        <app-members-profile></app-members-profile>
        <app-new-member></app-new-member>
        <app-number-of-pages-member></app-number-of-pages-member>
    </div>
</template>

<script>
    import MemberProfile from './MemberProfile'
    import NewMember from './NewMember'
    import NoPMember from '../NumberOfPages/numberOfPageMembers.vue'
    export default {
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