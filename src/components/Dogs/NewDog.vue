<template>
  <div class="frameNew">
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Slika</span>
      </div>
      <input type="text" class="form-control" v-model="newDog.slika" required>
    </div>
    <div class="text-part">
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Ime</span>
        </div>
        <input type="text" class="form-control" v-model="newDog.ime" required>
      </div>
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Rasa</span>
        </div>
        <input type="text" class="form-control" v-model="newDog.rasa" required>
      </div>
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Opis</span>
        </div>
        <input type="text" class="form-control" v-model="newDog.osobine" required>
      </div>
      <button class="btn btn-primary" @click="createDog">Dodaj</button>
    </div>
  </div>
</template>

<script>
  import {axiosService} from "../../../services/AxiosService";

  export default {
    props: ['section'],
    data() {
      return {
        newDog: {
          slika: '',
          ime: "",
          rasa: "",
          osobine: ""
        }
      }
    },

    methods: {
      async createDog() {
        const newDog = {...this.newDog};
        await axiosService.create(this.section, newDog);
        location.reload();
      }
    }
  }
</script>

<style scoped>
  @import "../Styles/addNewCard.css";

  .frameNew {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../../img/cardBackground.jpg");
    background-size: 30%;
  }
</style>