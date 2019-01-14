<template>
    <div>
        Contacts
        <router-link :to="{ name: 'signup'}" class="list-group-item" style="cursor: pointer" tag="li">Uclani se</router-link>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>


<style>
    @import "./Styles/InOutAnim.css";
</style>