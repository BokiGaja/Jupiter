<template>
    <div class="dogCards row align-items-start">
        <div class="frame" v-for="member in members"  v-if="members.indexOf(member)+1 <= numberPageMembers*4 && members.indexOf(member)+1 > (numberPageMembers-1)*4">
            <img :src="member.slika" alt="" id="picture">
            <div class="text-part">
                <p>Ime: {{ member.ime }}</p>
                <p>Status: {{ member.status }}</p>
                <button type="button" class="btn btn-danger" @click="removeMember(members.indexOf(member))" v-if="isAdmin">Izbrisi</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import axios from 'axios'
    export default {
        data() {
            return {
                members: [],
                isAdmin: this.$store.state.admin
            }
        },
        methods: {
            removeMember(index) {
                let id = this.members[index].id;
                axios.delete("https://jupiter-ru.firebaseio.com/jupiter-ru/members/" + id +".json")
            }
        },
        computed: {
            ...mapGetters([
                'numberPageMembers'
            ])
        },
        created () {
            axios.get('https://jupiter-ru.firebaseio.com/jupiter-ru/members.json')
                .then(res => {
                    const data = res.data;
                    const users = [];
                    for (let key in data) {
                        const user = data[key];
                        user.id = key;
                        users.push(user);
                    }
                    users.forEach((user) => {
                        this.members.push(user)
                    });
                })
        }
    }
</script>

<style scoped>
    @import "../Styles/cards.css";
</style>