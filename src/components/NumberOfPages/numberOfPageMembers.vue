<template>
    <div class="numOfPages">
        <div v-for="member in members">
            <button class="btn btn-primary btnOfPage" @click="changePageMembers(members.indexOf(member)+1)"
                    v-if="members.indexOf(member) < members.length/4">
                {{ members.indexOf(member)+1 }}</button>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        data() {
            return {
                members: this.$store.state.members
            }
        },
        methods: {
            ...mapMutations([
                'changePageMembers'
            ])
        }
    }
</script>

<style scoped>
    @import "../Styles/numberOfPages.css";
</style>