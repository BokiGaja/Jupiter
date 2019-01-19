import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  // You can create multiple modules where in every .js file will be const state, getters, actions
  // that will work on one state and you can import them here
  // To import module just add modules below actions and in { name of state you are importing}
  // And don't forget to import .js file in top of this file
  // You can also make separate files for actions or mutations and import them here
  state: {
    // Store here all the properties and data from app
    // And than call them in components with this.$store.state.(name of property)
    // Write it just as property in data => counter: 0
    // If you have two way binding look at tutorial on Udemy
    numPageAdopt: 1,
    numPageLost: 1,
    numPageFound: 1,
    numPageMembers: 1,
    numPageDonors: 1,
    dogForAdoption: "",
    adoptionInProcess: false,
    admin: false
  },
  getters: {
    // Send data from state to our app and here we can change that states before use them
    // Write them as: nameOfGetter: state => { return state.propertyYouWant; }
    // You can fetch them using ...mapGetters, first import {mapGetters} from 'vuex'
    // You call them -> computed: { ...mapGetters([yourName: 'nameOfGetter',..]) }
    // If you get unexpected error for ... just npm install --save-dev babel-preset-stage-2 and add in babelrs file ["stage-2"]
    adoptDog: state => {
      return state.dogForAdoption
    },
    adoptionProcess: state => {
      return state.adoptionInProcess
    },
    numberPageAdopt: state => {
      return state.numPageAdopt
    },
    numberPageLost: state => {
      return state.numPageLost
    },
    numberPageFound: state => {
      return state.numPageFound
    },
    numberPageMembers: state => {
      return state.numPageMembers
    },
    numberPageDonors: state => {
      return state.numPageDonors
    }
  },
  mutations: {
    // Change state
    // It is written: nameOfFunction: (state, argument) => { function (without return) }
    // To call it use this.$store.commit('nameOfFunction') or use mapMutations just as mapGetters
    // Use mutations in methods: { ...mapMutations(['nameOfFunction]) }
    // All mutations must be synchronous, no setTimeout or setInterval
    adoptDog: (state, dogsName) => {
      state.dogForAdoption = dogsName;
      state.adoptionInProcess = true;
    },
    changePageAdopt: (state, newPage) => {
      state.numPageAdopt = newPage;
    },
    changePageLost: (state, newPage) => {
      state.numPageLost = newPage;
    },
    changePageFound: (state, newPage) => {
      state.numPageFound = newPage;
    },
    changePageMembers: (state, newPage) => {
      state.numPageMembers =  newPage
    },
    changePageDonors: (state, newPage) => {
      state.numPageDonors =  newPage
    }
  },
  actions: {
    // Here you can run async task and than commit mutations
    // To use actions -> nameOfAction: ({ commit }) => { commit('nameOfMutation') }
    // If you want to use async action -> nameOfAction: ({ commit }) => setTimeout(()=> {commit('method');}, 1000);
    // If you want to add some arguments in your app to actions just add -> nameOfAction: ({ commit }, argument) and than
    // add that argument into commit('method', argument) and also in mutation and in app add it in brackets beside name of action in template
    // If you want more than one argument look on Udemy bookmarked video in VueJS tutorial
    // If you want to use action use mapActions instead of mapMutations

  }

});
