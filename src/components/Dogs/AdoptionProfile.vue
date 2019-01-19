<template>
    <div class="dogCards row align-items-start">
        <div class="frame" v-for="dogAdopt in dogsToAdopt"
             v-if="dogsToAdopt.indexOf(dogAdopt)+1 <= numberPageAdopt*4 && dogsToAdopt.indexOf(dogAdopt)+1 > (numberPageAdopt-1)*4">
            <img :src="dogAdopt.slika" alt="" id="picture">
            <div class="text-part">
                <p>Ime: {{ dogAdopt.ime }}</p>
                <p>Rasa: {{ dogAdopt.rasa }}</p>
                <p>Osobine: {{  dogAdopt.osobine }}</p>
                <button class="btn btn-primary" @click="adoptDog(dogsToAdopt[dogsToAdopt.indexOf(dogAdopt)].ime)">Usvoji</button>
                <button type="button" class="btn btn-danger" @click="removeDogAdopt(dogsToAdopt.indexOf(dogAdopt))">Izbrisi</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import { mapGetters } from 'vuex';
    import axios from 'axios';
    export default {
        data() {
            return {
                dogsToAdopt: []
            }
        },
        methods: {
            ...mapMutations([
                'adoptDog'
            ]),
            removeDogAdopt(index) {
                let id = this.dogsToAdopt[index].id;
                axios.delete("https://jupiter-ru.firebaseio.com/jupiter-ru/adopt/" + id +".json")
            }
        },
        computed: {
            ...mapGetters([
                'numberPageAdopt'
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
                        this.dogsToAdopt.push(user)
                    });
                })
        }
    }
</script>

<style scoped>
    @import "../Styles/cards.css";
</style>