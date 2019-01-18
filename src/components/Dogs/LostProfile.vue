<template>
    <div class="dogCards row align-items-start">
        <div class="frame" v-for="dog in dogsLost"  v-if="dogsLost.indexOf(dog)+1 <= numberPageLost*4 && dogsLost.indexOf(dog)+1 > (numberPageLost-1)*4">
            <img :src="dog.slika" alt="" id="picture">
            <div class="text-part">
                <p>Ime: {{ dog.ime }}</p>
                <p>Opis: {{ dog.rasa }}</p>
                <p>Kontakt: {{  dog.osobine }}</p>
                <button class="btn btn-primary">Video sam ga</button>
                <button type="button" class="btn btn-danger" @click="removeDogLost(dogsLost.indexOf(dog))">Izbrisi</button>
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
                dogsLost: this.$store.state.dogsLost
            }
        },
        methods: {
            ...mapMutations([
                'removeDogLost'
            ])
        },
        computed: {
            ...mapGetters([
                'numberPageLost'
            ])
        }
    }
</script>

<style scoped>
    @import "../Styles/cards.css";
</style>