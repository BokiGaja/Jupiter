<template>
    <div class="numOfPages">
        <div v-for="dog in dogsLost">
            <button class="btn btn-primary btnOfPage" @click="changePageLost(dogsLost.indexOf(dog)+1)"
                    v-if="dogsLost.indexOf(dog) < dogsLost.length/4">
                {{ dogsLost.indexOf(dog)+1 }}</button>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import axios from 'axios'
    export default {
        data() {
            return {
                dogsLost: []
            }
        },
        methods: {
            ...mapMutations([
                'changePageLost'
            ])
        },
        created () {
            axios.get('https://jupiter-ru.firebaseio.com/jupiter-ru/lost.json')
                .then(res => {
                    const data = res.data;
                    const users = [];
                    for (let key in data) {
                        const user = data[key];
                        user.id = key;
                        users.push(user);
                    }
                    users.forEach((user) => {
                        this.dogsLost.push(user);
                    });
                })
        }
    }
</script>

<style scoped>
    @import "../Styles/numberOfPages.css";
</style>