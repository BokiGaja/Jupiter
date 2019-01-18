<template>
    <div class="frameNew">
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">Slika</span>
            </div>
            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="slika">
        </div>
        <!--<input type="text" v-model="slika" class="input-group-text">-->
        <div class="text-part">
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Ime</span>
                </div>
                <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="ime">
            </div>
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Status</span>
                </div>
                <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="statusM">
            </div>
            <button class="btn btn-primary"
                    @click="handler(slika, ime, statusM)">
                Dodaj</button>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                slika: '',
                ime: "",
                statusM: "",
            }
        },
        methods:{
            ...mapActions({
                newMember: 'addMember'
            }),
            clearFields() {
                this.slika = "";
                this.ime = "";
                this.rasa = "";
                this.osobine = ""
            },
            handler(slika, ime, status) {
                this.newMember({slika, ime, status});
                this.clearFields()
            }
        }
    }
</script>

<style scoped>
    @import "../Styles/addNewCard.css";
    .frame {
        background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url("../Dogs/cardBackground.jpg");
        background-size: 30%;
    }
</style>