<template>
  <div class="container">
    <DogCard :dogsList="dogsLost" :currPage="currPage" @removeDog="removeDog" lost="true"/>
    <div class="row">
      <div v-for="(dog, index) in dogsLost">
        <button class="btn btn-primary btnOfPage col" @click="changePage(index+1)"
                v-if="index < dogsLost.length/4">
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
    components: {
      DogCard
    },
    data() {
      return {
        dogsLost: [],
        isAdmin: null,
        currPage: 1
      }
    },
    mixins: [isAdmin],
    methods: {
      removeDog(id) {
        axiosService.delete('lost', id);
      },

      changePage(nextPage) {
        this.currPage = nextPage;
      }
    },
    created() {
      axiosService.get('lost')
        .then(res => {
          extractData(res, this.dogsLost);
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
</script>