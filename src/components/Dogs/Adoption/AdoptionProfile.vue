<template>
  <div class="container">
    <app-dog-card :dogsList="dogsToAdopt" :currPage="currPage" @adoptDog="adoptDog" adoption="true"
                  @removeDog="removeDog"/>
    <div class="row">
      <div v-for="(dog, index) in dogsToAdopt">
        <button class="btn btn-primary btnOfPage col" @click="changePage(index+1)"
                v-if="index < dogsToAdopt.length/4">
          {{ index+1 }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
  import DogCard from '../../../layouts/Cards/DogCard';
  import {axiosService, extractData} from "../../../../services/AxiosService";
  import {isAdmin} from "../../../mixins/isAdmin";

  export default {
    components: {
      appDogCard: DogCard
    },
    data() {
      return {
        dogsToAdopt: [],
        isAdmin: null,
        currPage: 1
      }
    },
    mixins: [isAdmin],
    methods: {
      ...mapMutations([
        'adoptDog'
      ]),
      removeDog(id) {
        axiosService.delete('adopt', id);
      },
      changePage(nextPage) {
        this.currPage = nextPage;
      }
    },
    created() {
      axiosService.get('adopt')
        .then(res => {
          extractData(res, this.dogsToAdopt);
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
</script>
