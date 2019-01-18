<template>
    <div id="members">
        <div class="membersHeader">
            <button class="btn-members" @click="activateMembers">Clanovi</button>
            <div class="pictureAndButton">
                <img src="./img/framePaws.jpg" alt="" id="pawsFrame">
                <button class="btn-primary btn btn-join" @click="join">Uclani se</button>
            </div>
            <button class="btn-donors" @click="activateDonors">Donori</button>
        </div>
        <transition name="slide" mode="out-in">
            <app-members-list v-if="membersList"></app-members-list>
        </transition>
        <transition name="slide" mode="out-in">
            <app-donors-list v-if="donorsList"></app-donors-list>
        </transition>
        <transition name="slide" mode="out-in">
            <app-join-form v-if="joinForm"></app-join-form>
        </transition>
    </div>
</template>

<script>
    import MembersList from './Members/MembersList.vue';
    import DonorsList from './Members/DonorsList.vue';
    import JoinForm from './Members/JoinForm.vue'
    export default {
        data() {
            return {
                membersList: true,
                donorsList: false,
                joinForm: false
            }
        },
        methods: {
            activateMembers() {
                this.membersList = true;
                this.donorsList = false;
                this.joinForm = false;
            },
            activateDonors() {
                this.membersList = false;
                this.donorsList = true;
                this.joinForm = false;
            },
            join() {
                this.membersList = false;
                this.donorsList = false;
                this.joinForm = true;
            }
        },
        components: {
            appMembersList: MembersList,
            appDonorsList: DonorsList,
            appJoinForm: JoinForm
        }
    }
</script>

<style scoped>
    @import "./Styles/InOutAnim.css";
    #members{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #pawsFrame {
        zoom: 1.2;
        position: relative;
        text-align: center;
        margin-top: 20px;
        height: 150px;
        margin-left: 50px;
        margin-right: 50px;
    }
    .membersHeader {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .btn-members, .btn-donors{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: #ffc80c;
        border: 0px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        font-size: 30px;
        font-style: italic;
        font-family: Serif;
        cursor: pointer;
    }
    .pictureAndButton {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .btn-join {
        color: black;
        margin-top: 10px;
        width: 250px;
        background-color: #ffc80c;
        border: 0px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        font-size: 20px;
        font-style: italic;
        font-family: Serif;
        cursor: pointer;
    }
</style>