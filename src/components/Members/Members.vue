<template>
    <div id="members">
        <div class="row">
            <button class="btn-members"><router-link :to="{name: 'membersList'}" style="color: white">Clanovi</router-link></button>
            <button class="btn-primary btn btn-join"><router-link :to="{name: 'joinForm'}" style="color: white">Uclani se</router-link></button>
            <button class="btn-donors"><router-link :to="{name: 'donorsList'}" style="color: white">Donori</router-link></button>
        </div>
        <transition name="slide" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    @import "../Styles/InOutAnim.css";
    #members{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .btn-members, .btn-donors{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: #ffc80c;
        border: 0px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        font-size: 30px;
        font-style: italic;
        font-family: Serif;
        cursor: pointer;
    }
    .btn-join {
        color: black;
        margin-top: 10px;
        width: 250px;
        background-color: #ffc80c;
        border: 0px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        font-size: 30px;
        font-style: italic;
        font-family: Serif;
        cursor: pointer;
    }
</style>