<template>
    <div class="adoptionForm">
        <form class="adoptionInput">
            <div class="form-group">
                <input type="text" class="form-control"  placeholder="Ime i prezime">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Kontakt telefon">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" aria-describedby="emailHelp"  placeholder="E-mail">
            </div>
            <button type="submit" class="btn btn-primary">Uclani se</button>
        </form>
    </div>
</template>

<script>
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