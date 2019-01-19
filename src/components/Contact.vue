<template>
    <div class="container donate">
        <img src="./img/ZiroRacun.jpg" alt="" style="margin-top: 20px">
        <button class="btn btn-danger " v-if="closeAdmin" @click="closeAdminWindow"><ion-icon name="power"></ion-icon></button>

        <div class="adminFrame" v-if="loginForm">
            <form class="adminInput">
                <div class="form-group">
                    <input type="text" class="form-control"  placeholder="Korisnicko ime" v-model="username">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Sifra" v-model="password">
                </div>
                <button type="button" class="btn btn-primary" @click="checkIfAdmin">Uclani se</button>
            </form>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return{
                username: "",
                password: "",
                loginForm: true,
                closeAdmin: false,
                admins: []
            }
        },
        methods: {
            closeAdminWindow() {
                this.loginForm = false;
                this.closeAdmin = false;
                this.$store.state.admin = false;
                this.username = "";
                this.password = "";
                axios.get('https://jupiter-ru.firebaseio.com/jupiter-ru/isAdmin.json').then(
                    res => {
                        axios.delete('https://jupiter-ru.firebaseio.com/jupiter-ru/isAdmin.json', res.data.id);
                        axios.post('https://jupiter-ru.firebaseio.com/jupiter-ru/isAdmin.json', {adminLogged: false})
                    }
                );
            },
            checkIfAdmin() {
                this.admins.forEach((admin) => {
                    if (admin.username === this.username && admin.password === this.password) {
                        this.$store.state.admin = true;
                        axios.get('https://jupiter-ru.firebaseio.com/jupiter-ru/isAdmin.json').then(
                            res => {
                                axios.delete('https://jupiter-ru.firebaseio.com/jupiter-ru/isAdmin.json', res.data.id);
                                axios.post('https://jupiter-ru.firebaseio.com/jupiter-ru/isAdmin.json', {adminLogged: true})
                            }
                        )
                    }
                });
            }
        },
            created() {
                axios.get('https://jupiter-ru.firebaseio.com/jupiter-ru/admins.json')
                    .then(res => {
                        const data = res.data;
                        const users = [];
                        for (let key in data) {
                            const user = data[key];
                            user.id = key;
                            users.push(user);
                        }
                        users.forEach((user) => {
                            this.admins.push(user);
                        });
                            this.loginForm = !this.$store.state.admin;
                            this.closeAdmin = this.$store.state.admin;
                    });
            }
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
        background: url("./img/adoptionFormBackground.jpg");
    }
</style>