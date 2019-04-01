<template>
    <div class="container">
        <MembersCard :members="members" :currPage="currPage" @removeMember="removeMember" currMember="true"/>
        <div class="row">
            <div v-for="(member, index) in members">
                <button class="btn btn-primary btnOfPage col" @click="changePage(index+1)"
                        v-if="index < members.length/4">
                    {{ index+1 }}</button>
            </div>
        </div>
    </div>
</template>

<script>
    import MembersCard from '../../../layouts/Cards/MembersCard';
    import { axiosService, extractData } from "../../../../services/AxiosService";

    export default {
        components: {
            MembersCard
        },
        data() {
            return {
                members: [],
                isAdmin: this.$store.state.admin,
                currPage: 1
            }
        },
        methods: {
            removeMember(id) {
                axiosService.delete('members', id);
            },

            changePage(nextPage) {
                this.currPage = nextPage;
            }
        },

        created () {
            axiosService.get('members')
                .then(res => {
                    extractData(res, this.members)
                })
                .catch(error => {
                    console.log(errors)
                })
        }
    }
</script>

<style scoped>
    @import "../../Styles/cards.css";
</style>