<template>
  <div class="container">
    <DogCard :dogsList="dogsFound" :currPage="currPage" @removeDog="removeDog" found="true"/>
    <div class="row">
      <div v-for="(dog, index) in dogsFound">
        <button class="btn btn-primary btnOfPage col" @click="changePage(index+1)"
                v-if="index < dogsFound.length/4">
          {{ index+1 }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import DogCard from '../../../layouts/Cards/DogCard';
  import {axiosService, extractData} from "../../../../services/AxiosService";
  import {isAdmin} from "../../../mixins/isAdmin";

  export default {
    data() {
      return {
        dogsFound: [],
        isAdmin: null,
        currPage: 1
      }
    },
    mixins: [isAdmin],
    components: {
      DogCard
    },
    methods: {
      removeDog(id) {
        axiosService.delete('found', id);
      },

      changePage(nextPage) {
        this.currPage = nextPage;
      }
    },
    created() {
      axiosService.get('found')
        .then(res => {
          extractData(res, this.dogsFound);
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
</script>
