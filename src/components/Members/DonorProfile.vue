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
    import { mapMutations } from 'vuex';
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                donors: this.$store.state.donors
            }
        },
        methods: {
            ...mapMutations([
                'removeDonors'
            ])
        },
        computed: {
            ...mapGetters([
                'numberPageDonors'
            ])
        }
    }
</script>

<style scoped>
    @import "../Styles/cards.css";
</style>