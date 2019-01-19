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
    import axios from 'axios'
    import { mapMutations } from 'vuex'
    export default {
        data() {
            return {
                members: []
            }
        },
        methods: {
            ...mapMutations([
                'changePageMembers'
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
                        this.members.push(user);
                    });
                })
        }
    }
</script>

<style scoped>
    @import "../Styles/numberOfPages.css";
</style>