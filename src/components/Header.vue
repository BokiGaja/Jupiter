<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light navigation">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link routes" active-class="active" exact> Glavna </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/dogs" class="nav-link routes" active-class="active"> Psi </router-link>
                </li>
                <li class="nav-item">
                    <img src="https://friendlystock.com/wp-content/uploads/2018/10/6-kawaii-planet-jupiter-cartoon-clipart.jpg" alt="" id="jupiterImg">
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'members'}" class="nav-link routes" active-class="active"> Clanstvo </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'contacts'}" class="nav-link routes" active-class="active"> Kontakt </router-link>
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
        border-radius: 50%;
        background-color: transparent !important;
    }
    #jupiterImg {
        width: 150px;
        background-color: transparent !important;
    }

    .routes {
        padding-top: 50px;
        padding-bottom: 10px;
        margin-left: 100px;
        margin-right: 100px;
        font-size: 30px;
    }
    .routes:hover {
        border-bottom: green 4px solid;
    }
    .active {
        border-bottom: red 4px solid;
    }
</style>