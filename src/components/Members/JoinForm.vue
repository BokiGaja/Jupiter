<template>
  <div class="adoptionForm">
    <form class="adoptionInput" @submit.prevent="addMember">
      <input type="text" class="form-control" placeholder="Ime i prezime" v-model="newMember.ime" required>
      <input type="number" class="form-control" placeholder="Kontakt telefon" v-model="newMember.kontakt" required>
      <input type="email" class="form-control" placeholder="E-mail" v-model="newMember.email" required>
      <button type="submit" class="btn btn-primary">Uclani se</button>
    </form>
  </div>
</template>

<script>
  import {clearFields} from "../../../services/FormsService";
  import {axiosService} from "../../../services/AxiosService";

  export default {
    data() {
      return {
        newMember: {
          ime: "",
          kontakt: "",
          email: ""
        }
      }
    },
    methods: {
      addMember() {
        axiosService.create('join', {...this.newMember});
        clearFields(this.newMember);
      }
    }
  }
</script>

<style scoped>
  .adoptionForm {
    background: url("../../img/adoptionFormBackground.jpg");
    border-radius: 20%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 400px;
    position: center;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .adoptionInput {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>