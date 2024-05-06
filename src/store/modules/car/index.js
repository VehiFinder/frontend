import axios from 'axios';

//States
const state = {
  carItems: [],
  isLoading: false
}

//Mutations modified states
const mutations = {
  UPDATE_CAR_ITEMS (state, payload) {
    state.carItems = payload;
  },
  SET_LOADING(state, status) {
    state.isLoading = status;
  }
}

//Actions trigger mutations 
const actions = {
  getCarItems ({ commit }) {
    commit('SET_LOADING', true);
    axios.get(`http://localhost:5000/api/autos?page=1`).then((response) => {
      commit('UPDATE_CAR_ITEMS', response.data)
      commit('SET_LOADING', false);
    });
  },
  getCarByName ({commit}, carName){
    commit('SET_LOADING', true);
    axios.get(`http://localhost:5000/api/autos/${carName}?page=1`).then((response) => {
      commit('UPDATE_CAR_ITEMS', response.data)
      commit('SET_LOADING', false);
    });
  }
}

//It serves as a way to retrieve info from store.
const getters = {
  carItems: state => state.carItems,
  isLoading(state) {
    return state.isLoading;
  },
  getCarByName: (state) => (carName) =>{
    return state.carItems.find((car)=>car.name === carName)
  } 
}


const carModule = {
    state, 
    mutations,
    actions,
    getters
}

export default carModule