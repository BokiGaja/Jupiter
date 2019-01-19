<template>
    <div class="dogCards row align-items-start">
        <div class="frame" v-for="dog in dogsLost"  v-if="dogsLost.indexOf(dog)+1 <= numberPageLost*4 && dogsLost.indexOf(dog)+1 > (numberPageLost-1)*4">
            <img :src="dog.slika" alt="" id="picture">
            <div class="text-part">
                <p>Ime: {{ dog.ime }}</p>
                <p>Opis: {{ dog.rasa }}</p>
                <p>Kontakt: {{  dog.osobine }}</p>
                <button type="button" class="btn btn-danger" @click="removeDogLost(dogsLost.indexOf(dog))">Izbrisi</button>
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
                dogsLost: []

            }
        },
        computed: {
            ...mapGetters([
                'numberPageLost'
            ])
        },
        methods:{
        removeDogLost(index) {
            let id = this.dogsLost[index].id;
            axios.delete("https://jupiter-ru.firebaseio.com/jupiter-ru/lost/" + id +".json")
            }
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
                        this.dogsLost.push(user)
                    });
                })
        }
    }
</script>

<style scoped>
    @import "../Styles/cards.css";
</style>