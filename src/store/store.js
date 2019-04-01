import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dogForAdoption: "",
    adoptionInProcess: false
  },
  getters: {
    adoptDog: state => {
      return state.dogForAdoption
    },

    adoptionProcess: state => {
      return state.adoptionInProcess
    }
  },
  mutations: {
    adoptDog(state, dogsName){
      state.dogForAdoption = dogsName;
      state.adoptionInProcess = true;
    },
    cancelAdoption(state){
      state.dogForAdoption = "";
      state.adoptionInProcess = false;
    }
  },
  actions: {
    adoptDog({commit}, dogsName) {
      commit('adoptDog', dogsName)
    },
    cancelAdoption({commit}) {
      commit('cancelAdoption')
    }
  }
});
