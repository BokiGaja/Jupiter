<template>
    <div class="numOfPages">
        <div v-for="donor in donors">
            <button class="btn btn-primary btnOfPage" @click="changePageDonors(donors.indexOf(donor)+1)"
                    v-if="donors.indexOf(donor) < donors.length/4">
                {{ donors.indexOf(donor)+1 }}</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { mapMutations } from 'vuex'
    export default {
        data() {
            return {
                donors: []
            }
        },
        methods: {
            ...mapMutations([
                'changePageDonors'
            ])
        },
        created () {
            axios.get('https://jupiter-ru.firebaseio.com/jupiter-ru/donors.json')
                .then(res => {
                    const data = res.data;
                    const users = [];
                    for (let key in data) {
                        const user = data[key];
                        user.id = key;
                        users.push(user);
                    }
                    users.forEach((user) => {
                        this.donors.push(user);
                    });
                })
        }
    }
</script>

<style scoped>
    @import "../Styles/numberOfPages.css";
</style>