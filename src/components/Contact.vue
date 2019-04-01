<template>
    <div class="container donate">
        <img src="../img/ZiroRacun.jpg" alt="" style="margin-top: 10px">
        <button class="btn btn-danger " v-if="isAdmin" @click="logout"><ion-icon name="power"></ion-icon></button>
        <div class="adminFrame" v-if="!isAdmin">
            <form class="adminInput">
                <div class="form-group">
                    <input type="text" class="form-control"  placeholder="Korisnicko ime" v-model="username" required>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Sifra" v-model="password" required>
                </div>
                <button type="button" class="btn btn-primary" @click="login">Uloguj se</button>
            </form>
        </div>
    </div>

</template>

<script>
    import { isAdmin } from "../mixins/isAdmin";
    import { axiosService, extractData } from "../../services/AxiosService";

    export default {
        data() {
            return{
                username: "",
                password: "",
                loginForm: null,
                isAdmin: null
            }
        },

        mixins: [isAdmin],

        methods: {
            async logout() {
                await axiosService.put('loggedIn.json', false);
                location.reload();
            },

            async login() {
                let admins = [];
                let loggedIn = false;
                await axiosService.get('admins').then(res => extractData(res, admins));
                admins.forEach(async (admin) => {
                    if (admin.username === this.username && admin.password === this.password) {
                        this.username = "";
                        this.password = "";
                        loggedIn = true;
                        await axiosService.put('loggedIn.json', true);
                        location.reload();
                    }
                });
                if (!loggedIn) {
                    alert('Wrong credentials');
                }
            }
        },
    }
</script>

<style scoped>
    @import "./Styles/InOutAnim.css";
    .donate{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .adminInput{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .adminFrame {
        background: url("../img/adoptionFormBackground.jpg");
    }
</style>