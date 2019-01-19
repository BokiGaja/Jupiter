<template>
    <div class="numOfPages">
        <div v-for="dog in dogsToAdopt">
            <button class="btn btn-primary btnOfPage" @click="changePageAdopt(dogsToAdopt.indexOf(dog)+1)"
                    v-if="dogsToAdopt.indexOf(dog) < dogsToAdopt.length/4">
                {{ dogsToAdopt.indexOf(dog)+1 }}</button>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import axios from 'axios';
    export default {
        data() {
            return {
                dogsToAdopt: []
            }
        },
        methods: {
            ...mapMutations([
                'changePageAdopt'
            ])
        },
        created () {
            axios.get('https://jupiter-ru.firebaseio.com/jupiter-ru/adopt.json')
                .then(res => {
                    const data = res.data;
                    const users = [];
                    for (let key in data) {
                        const user = data[key];
                        user.id = key;
                        users.push(user);
                    }
                    users.forEach((user) => {
                        this.dogsToAdopt.push(user);
                    });
                })
        }
    }
</script>

<style scoped>
    @import "../Styles/numberOfPages.css";
</style>