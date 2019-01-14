<template>
    <div class="frame">
        <img src="../img/fluffy.jpeg" alt="" id="picture">
        <div class="text-part">
            <p>Ime: Meda</p>
            <p>Rasa: Mesanac</p>
            <p>sterilisan &#10003 vakcinisan &#10003 </p>
            <p>O njemu: Dobar, miran i fer</p>
            <button class="btn btn-primary">Usvoji</button>
        </div>
    </div>
</template>

<style>
    #picture {
        max-width: 200px;
        max-height: 200px;

    }
    .frame {
        background-color: #b1b1b1;
        max-width: 450px;
        height: 250px;
        border-radius: 20%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .text-part {
        padding-left: 20px;
        display: flex;
        flex-direction: column;
    }
</style>