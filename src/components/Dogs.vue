<template>
    <div>
        <ul class="list-group rlist">
            <router-link tag="li" to="/dogs"
                         class="list-group-item btn btn-primary btn-lg rlink" active-class="active" exact
                         style="cursor: pointer">Usvoji</router-link>
            <router-link tag="li" :to="{ name: 'lost'}"
                         class="list-group-item btn btn-primary btn-lg rlink" active-class="active"
                         style="cursor: pointer">Izgubljeno</router-link>
            <router-link tag="li" :to="{ name: 'found'}"
                         class="list-group-item btn btn-primary btn-lg rlink" active-class="active"
                         style="cursor: pointer">Nadjeno</router-link>
        </ul>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
</script>

<style scoped>
    @import "./Styles/InOutAnim.css";
    .rlink {
        background-color: skyblue;
        margin: 30px 0;
    }
    .rlist {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-evenly;
    }
</style>