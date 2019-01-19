<template>
    <div class="dogCards row align-items-start">
        <div class="frame" v-for="dog in dogsFound"  v-if="dogsFound.indexOf(dog)+1 <= numberPageFound*4 && dogsFound.indexOf(dog)+1 > (numberPageFound-1)*4">>
            <img :src="dog.slika" alt="" id="picture">
            <div class="text-part">
                <p>Ime: {{ dog.ime }}</p>
                <p>Opis: {{ dog.rasa }}</p>
                <p>Kontakt: {{  dog.osobine }}</p>
                <button type="button" class="btn btn-danger" @click="removeDogFound(dogsFound.indexOf(dog))" v-if="isAdmin">Izbrisi</button>
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
                dogsFound: [],
                isAdmin: this.$store.state.admin
            }
        },
        methods: {
            removeDogFound(index) {
                let id = this.dogsFound[index].id;
                axios.delete("https://jupiter-ru.firebaseio.com/jupiter-ru/found/" + id +".json")
            }
        },
        computed: {
            ...mapGetters([
                'numberPageFound'
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
                        this.dogsFound.push(user)
                    });
                })
        }
    }
</script>

<style scoped>
    @import "../Styles/cards.css";
</style>