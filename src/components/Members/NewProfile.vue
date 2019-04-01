<template>
    <div class="frameNew">
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">Slika</span>
            </div>
            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="slika">
        </div>
        <div class="text-part">
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Ime</span>
                </div>
                <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="ime">
            </div>
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Donacija</span>
                </div>
                <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="statusM">
            </div>
            <button class="btn btn-primary"
                    @click="createProfile">
                Dodaj</button>
        </div>
    </div>
</template>

<script>
    import { axiosService } from "../../../services/AxiosService";
    export default {
        props: ['section'],
        data() {
            return {
                slika: '',
                ime: "",
                statusM: "",
            }
        },
        methods:{
            createProfile() {
                const dataToSend = { slika: this.slika, ime: this.ime, status: this.statusM};
                axiosService.create(this.section, dataToSend)
            }
        }
    }
</script>

<style scoped>
    @import "../Styles/addNewCard.css";
    .frameNew {
        background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url("../../img/cardBackground.jpg");
        background-size: 30%;
    }
</style>