<template>
    <div class="numOfPages">
        <div v-for="dog in dogsAdopt">
            <button class="btn btn-primary btnOfPage" @click="changePageAdopt(dogsAdopt.indexOf(dog)+1)"
                    v-if="dogsAdopt.indexOf(dog) < dogsAdopt.length/4">
                {{ dogsAdopt.indexOf(dog)+1 }}</button>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        data() {
            return {
                dogsAdopt: this.$store.state.dogsAdopt
            }
        },
        methods: {
            ...mapMutations([
                'changePageAdopt'
            ])
        }
    }
</script>

<style scoped>
    @import "../Styles/numberOfPages.css";
</style>