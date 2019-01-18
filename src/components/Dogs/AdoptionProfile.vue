<template>
    <div class="dogCards row align-items-start">
        <div class="frame" v-for="dogAdopt in dogsAdopt"
             v-if="dogsAdopt.indexOf(dogAdopt)+1 <= numberPageAdopt*4 && dogsAdopt.indexOf(dogAdopt)+1 > (numberPageAdopt-1)*4">
            <img :src="dogAdopt.slika" alt="" id="picture">
            <div class="text-part">
                <p>Ime: {{ dogAdopt.ime }}</p>
                <p>Rasa: {{ dogAdopt.rasa }}</p>
                <p>Osobine: {{  dogAdopt.osobine }}</p>
                <button class="btn btn-primary"
                        @click="adoptDog(dogsAdopt[dogsAdopt.indexOf(dogAdopt)].ime)"
                        >Usvoji</button>
                <button type="button" class="btn btn-danger" @click="removeDogAdopt(dogsAdopt.indexOf(dogAdopt))">Izbrisi</button>
                {{ numberPage }}
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
                dogsAdopt: this.$store.state.dogsAdopt
            }
        },
        methods: {
            ...mapMutations([
                'adoptDog',
                'removeDogAdopt'
            ])
        },
        computed: {
            ...mapGetters([
                'numberPageAdopt'
            ])
        }
    }
</script>

<style scoped>
    @import "../Styles/cards.css";
</style>