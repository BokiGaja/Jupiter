<template>
    <div class="numOfPages">
        <div v-for="dog in dogsFound">
            <button class="btn btn-primary btnOfPage" @click="changePageFound(dogsFound.indexOf(dog)+1)"
                    v-if="dogsFound.indexOf(dog) < dogsFound.length/4">
                {{ dogsFound.indexOf(dog)+1 }}</button>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import axios from 'axios'
    export default {
        data() {
            return {
                dogsFound: []
            }
        },
        methods: {
            ...mapMutations([
                'changePageFound'
            ])
        },
        created () {
            axios.get('https://jupiter-ru.firebaseio.com/jupiter-ru/found.json')
                .then(res => {
                    const data = res.data;
                    const users = [];
                    for (let key in data) {
                        const user = data[key];
                        user.id = key;
                        users.push(user);
                    }
                    users.forEach((user) => {
                        this.dogsFound.push(user);
                    });
                })
        }
    }
</script>

<style scoped>
    @import "../Styles/numberOfPages.css";
</style>