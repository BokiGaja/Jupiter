<template>
    <div class="numOfPages">
        <div v-for="dog in dogsLost">
            <button class="btn btn-primary btnOfPage" @click="changePageLost(dogsLost.indexOf(dog)+1)"
                    v-if="dogsLost.indexOf(dog) < dogsLost.length/4">
                {{ dogsLost.indexOf(dog)+1 }}</button>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        data() {
            return {
                dogsLost: this.$store.state.dogsLost
            }
        },
        methods: {
            ...mapMutations([
                'changePageLost'
            ])
        }
    }
</script>

<style scoped>
    @import "../Styles/numberOfPages.css";
</style>