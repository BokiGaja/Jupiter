<template>
  <div class="adoptionForm">
    <form class="adoptionInput">
      <div class="card text-white bg-success mb-3" style="max-height: 100px;">
        <div class="card-header">Pas za usvajanje</div>
        <div class="card-body">
          <h5 class="card-title" style="text-align: center">{{ adoptDog }}</h5>
        </div>
      </div>
      <form @submit.prevent="adopt" style="align-items: center">
        <input type="text" class="form-control" placeholder="Ime i prezime" v-model="adopter.ime" required>
        <input type="number" class="form-control" placeholder="Kontakt telefon" v-model="adopter.kontakt" required>
        <input type="email" class="form-control" placeholder="E-mail" v-model="adopter.email" required>
        <button type="submit" class="btn btn-primary" style="margin: auto">Usvoji</button>
      </form>
      <button type="button" class="btn btn-danger" @click="cancelAdoption">Odustani</button>
    </form>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import {axiosService} from "../../../../services/AxiosService";
  import {clearFields} from "../../../../services/FormsService";

  export default {
    computed: {
      ...mapGetters({
        adoptDog: 'adoptDog'
      })
    },
    data() {
      return {
        adopter: {
          ime: "",
          kontakt: "",
          email: ""
        }
      }
    },
    methods: {
      ...mapActions([
        'cancelAdoption'
      ]),
      adopt() {
        axiosService.create('toadopt', {...this.adopter});
        clearFields(this.adopter);
        this.cancelAdoption();
      }
    }
  }
</script>

<style scoped>
  @import "../../Styles/adoptionForm.css";
</style>