import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
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
  }

});
