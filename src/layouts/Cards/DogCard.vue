<template>
  <div class="container">
    <div class="row">
      <div class="frame col-md" v-for="(dog, index) in dogsList"
           v-if="index+1 <= currPage*4 && index+1 > (currPage-1)*4">
        <img :src="dog.slika" alt="" id="picture">
        <div class="text-part">
          <p>Ime: {{ dog.ime }}</p>
          <p v-if="found || lost">Opis: {{ dog.rasa }}</p>
          <p v-if="adoption">Rasa: {{ dog.rasa }}</p>
          <p v-if="found || lost">Kontakt: {{ dog.osobine }}</p>
          <p v-if="adoption">Osobine: {{ dog.osobine }}</p>
          <button type="button" class="btn btn-danger" @click="removeDog(dog.id)" v-if="isAdmin">Izbrisi</button>
          <button class="btn btn-primary" @click="adoptDog(dogsList[index].ime)" v-if="adoption && !isAdmin">Usvoji
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {isAdmin} from "../../mixins/isAdmin";

  export default {
    props: ['dogsList', 'currPage', 'adoption', 'lost', 'found'],
    data() {
      return {
        isAdmin: null
      }
    },
    mixins: [isAdmin],
    methods: {
      removeDog(id) {
        this.$emit('removeDog', id)
      },
      adoptDog(name) {
        this.$emit('adoptDog', name)
      }
    }
  }
</script>


<style scoped>
  @import "../../components/Styles/cards.css";
</style>