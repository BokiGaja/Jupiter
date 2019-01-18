<template>
    <div class="numOfPages">
        <div v-for="donor in donors">
            <button class="btn btn-primary btnOfPage" @click="changePageDonors(donors.indexOf(donor)+1)"
                    v-if="donors.indexOf(donor) < donors.length/4">
                {{ donors.indexOf(donor)+1 }}</button>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        data() {
            return {
                donors: this.$store.state.donors
            }
        },
        methods: {
            ...mapMutations([
                'changePageDonors'
            ])
        }
    }
</script>

<style scoped>
    @import "../Styles/numberOfPages.css";
</style>