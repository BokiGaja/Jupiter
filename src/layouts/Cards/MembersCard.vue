<template>
    <div class="container">
        <div class="row">
            <div class="frame col-md" v-for="(member, index) in members"  v-if="index+1 <= currPage*4 && index+1 > (currPage-1)*4">
                <img :src="member.slika" alt="" id="picture">
                <div class="text-part">
                    <p>Ime: {{ member.ime }}</p>
                    <p v-if="donor">Donacija: {{ member.status }}</p>
                    <p v-if="currMember">Status: {{ member.status }}</p>
                    <button type="button" class="btn btn-danger" @click="removeMember(member.id)" v-if="isAdmin">Izbrisi</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['members', 'currPage', 'donor', 'currMember'],
        data() {
            return {
                isAdmin: this.$store.state.admin
            }
        },
        methods: {
            removeMember(id) {
                this.$emit('removeMember', id)
            }
        },

    }
</script>

<style>
    @import "../../components/Styles/cards.css";
</style>