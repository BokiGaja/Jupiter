<template>
    <div class="dogCards row align-items-start">
        <div class="frame" v-for="donor in donors"  v-if="donors.indexOf(donor)+1 <= numberPageDonors*4 && donors.indexOf(donor)+1 > (numberPageDonors-1)*4">
            <img :src="donor.slika" alt="" id="picture">
            <div class="text-part">
                <p>Ime: {{ donor.ime }}</p>
                <p>Donacija: {{ donor.status }}</p>
                <button type="button" class="btn btn-danger" @click="removeDonors(donors.indexOf(donor))">Izbrisi</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import axios from 'axios';
    export default {
        data() {
            return {
                donors: []
            }
        },
        methods: {
            removeDonors(index) {
                let id = this.donors[index].id;
                axios.delete("https://jupiter-ru.firebaseio.com/jupiter-ru/donors/" + id +".json")
            }
        },
        computed: {
            ...mapGetters([
                'numberPageDonors'
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
                        this.donors.push(user)
                    });
                })
        }
    }
</script>

<style scoped>
    @import "../Styles/cards.css";
</style>