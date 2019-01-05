<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light navigation">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link routes"> Glavna </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link routes"> Psi </router-link>
                </li>
                <li class="nav-item">
                    <img src="https://friendlystock.com/wp-content/uploads/2018/10/6-kawaii-planet-jupiter-cartoon-clipart.jpg" alt="" id="jupiterImg">
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link routes"> Clanstvo </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link routes"> Kontakt </router-link>
                </li>
            </ul>
        </nav>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .navigation {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: center;
    }
    #jupiterImg {
        width: 150px;
    }
    .routes {
        padding-top: 50px;
        margin-left: 100px;
        margin-right: 50px;
        font-size: 30px;
    }
</style>