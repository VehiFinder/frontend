import axios from 'axios';

//States
const state = {
  carItems: []
}

//Mutations modified states
const mutations = {
  UPDATE_CAR_ITEMS(state, payload) {
    state.carItems = payload;
    console.log(payload)
  }
}

//Actions trigger mutations 
const actions = {
  getCarItems({ commit }) {
    this.isLoading = false;
    axios.get(`http://localhost:5000/api/autos?page=1`).then((response) => {
      commit('UPDATE_CAR_ITEMS', response.data);
      this.isLoading = false;
    });
  }
}

//It serves as a way to retrieve info from store.
const getters = {
  carItems: state => state.carItems,
  carItemById: (state) => (id) => {
    return state.carItems.find(carItem => carItem.id === id)
  }
}


const carModule = {
  state,
  mutations,
  actions,
  getters
}

export default carModule