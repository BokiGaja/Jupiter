<template>
    <div class="adoptionForm">
        <form class="adoptionInput">
            <div class="card text-white bg-success mb-3" style="max-height: 100px;">
                <div class="card-header">Pas za usvajanje</div>
                <div class="card-body">
                    <h5 class="card-title" style="text-align: center">{{ adoptDog }}</h5>
                </div>
            </div>
            <div class="form-group">
                <input type="text" class="form-control"  placeholder="Ime i prezime">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Kontakt telefon">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" aria-describedby="emailHelp"  placeholder="E-mail">
            </div>
            <button type="submit" class="btn btn-primary">Usvoji</button>
        </form>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters({
                adoptDog: 'adoptDog'
            })
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