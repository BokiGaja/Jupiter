<template>
  <div class="container">
    <MembersCard :members="donors" :currPage="currPage" @removeMember="removeDonor" donor="true"/>
    <div class="row">
      <div v-for="(donor, index) in donors">
        <button class="btn btn-primary btnOfPage col" @click="changePage(index+1)" v-if="index < donors.length/4">
          {{ index+1 }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import MembersCard from '../../../layouts/Cards/MembersCard';
  import {axiosService, extractData} from "../../../../services/AxiosService";
  import {isAdmin} from "../../../mixins/isAdmin";

  export default {
    components: {
      MembersCard
    },
    data() {
      return {
        donors: [],
        isAdmin: null,
        currPage: 1
      }
    },
    mixins: [isAdmin],
    methods: {
      removeDonor(id) {
        axiosService.delete('donors', id);
      },
      changePage(nextPage) {
        this.currPage = nextPage;
      }
    },
    created() {
      axiosService.get('donors')
        .then(res => {
          extractData(res, this.donors)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
</script>