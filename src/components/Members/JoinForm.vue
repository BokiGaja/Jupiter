<template>
    <div class="adoptionForm">
        <form class="adoptionInput">
            <div class="form-group">
                <input type="text" class="form-control"  placeholder="Ime i prezime" v-model="ime">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Kontakt telefon" v-model="kontakt">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" aria-describedby="emailHelp"  placeholder="E-mail" v-model="email">
            </div>
            <button type="button" class="btn btn-primary" @click="handler(ime, kontakt, email)">Uclani se</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                ime: "",
                kontakt: "",
                email: ""
            }
        },
        methods:{
            clearFields() {
                this.ime = "";
                this.kontakt = "";
                this.email = ""
            },
            handler(ime, kontakt, email) {
                const dataToSend = { ime: this.ime, kontakt: this.kontakt, email: this.email};
                axios.post('https://jupiter-ru.firebaseio.com/jupiter-ru/join.json', dataToSend);
                console.log(this.kontakt);
                this.clearFields();
            }
        }
    }
</script>

<style scoped>
    .adoptionForm {
        background: url("../img/adoptionFormBackground.jpg");
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