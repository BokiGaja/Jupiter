<template>
    <div class="dogCards row align-items-start">
        <div class="frame" v-for="dog in dogsFound"  v-if="dogsFound.indexOf(dog)+1 <= numberPageFound*4 && dogsFound.indexOf(dog)+1 > (numberPageFound-1)*4">>
            <img :src="dog.slika" alt="" id="picture">
            <div class="text-part">
                <p>Ime: {{ dog.ime }}</p>
                <p>Opis: {{ dog.rasa }}</p>
                <p>Kontakt: {{  dog.osobine }}</p>
                <button class="btn btn-primary">Kontaktiraj</button>
                <button type="button" class="btn btn-danger" @click="removeDogFound(dogsFound.indexOf(dog))">Izbrisi</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                dogsFound: this.$store.state.dogsFound
            }
        },
        methods: {
            ...mapMutations([
                'removeDogFound'
            ])
        },
        computed: {
            ...mapGetters([
                'numberPageFound'
            ])
        }
    }
</script>

<style scoped>
    @import "../Styles/cards.css";
</style>