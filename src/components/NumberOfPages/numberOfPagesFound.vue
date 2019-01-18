<template>
    <div class="numOfPages">
        <div v-for="dog in dogsFound">
            <button class="btn btn-primary btnOfPage" @click="changePageFound(dogsFound.indexOf(dog)+1)"
                    v-if="dogsFound.indexOf(dog) < dogsFound.length/4">
                {{ dogsFound.indexOf(dog)+1 }}</button>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        data() {
            return {
                dogsFound: this.$store.state.dogsFound
            }
        },
        methods: {
            ...mapMutations([
                'changePageFound'
            ])
        }
    }
</script>

<style scoped>
    @import "../Styles/numberOfPages.css";
</style>