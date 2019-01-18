<template>
    <div class="dogCards row align-items-start">
        <div class="frame" v-for="member in members"  v-if="members.indexOf(member)+1 <= numberPageMembers*4 && members.indexOf(member)+1 > (numberPageMembers-1)*4">
            <img :src="member.slika" alt="" id="picture">
            <div class="text-part">
                <p>Ime: {{ member.ime }}</p>
                <p>Status: {{ member.status }}</p>
                <button type="button" class="btn btn-danger" @click="removeMember(members.indexOf(member))">Izbrisi</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                members: this.$store.state.members
            }
        },
        methods: {
            ...mapMutations([
                'removeMember'
            ])
        },
        computed: {
            ...mapGetters([
                'numberPageMembers'
            ])
        }
    }
</script>

<style scoped>
    @import "../Styles/cards.css";
</style>