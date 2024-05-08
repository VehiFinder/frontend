import axios from 'axios';

//States
const state = {
  carItems: [],
  isLoading: false,
  carName: "",
  maxYear: "",
  minYear: "",
  minKm: "",
  maxKm: "",
  minPrice: "",
  maxPrice: "",
}

//Mutations modified states
const mutations = {
  UPDATE_CAR_ITEMS (state, payload) {
    state.carItems = payload;
  },
  SET_LOADING(state, status) {
    state.isLoading = status;
  },
  SET_CAR_NAME(state, status){
    state.carName =  status;
  },
  SET_MIN_YEAR(state, status){
    state.minYear =  status;
  },
  SET_MAX_YEAR(state, status){
    state.maxYear  =  status;
  },
  SET_MIN_KM(state, status){
    state.minKm =  status;
  },
  SET_MAX_KM(state, status){
    state.maxKm  =  status;
  },
  SET_MIN_PRICE(state, status){
    state.minPrice =  status;
  },
  SET_MAX_PRICE(state, status){
    state.maxPrice  =  status;
  },

}

//Actions trigger mutations 
const actions = {
  getCarItems ({ commit }) {
    commit('SET_LOADING', true);
    axios.get(`https://vehifinder.onrender.com/api/autos?page=1`).then((response) => {
      commit('UPDATE_CAR_ITEMS', response.data)
      commit('SET_LOADING', false);
    });
  },
  getCarByName ({commit}, carName){
    commit('SET_LOADING', true);
    axios.get(`https://vehifinder.onrender.com/api/autos/${carName}?page=1`).then((response) => {
      commit('UPDATE_CAR_ITEMS', response.data)
      commit('SET_LOADING', false);
    },);
  },
  updateCarName({commit}, carName){
    commit('SET_CAR_NAME', carName)
  },
  //Actualizar las propiedades
  updateMinYear({commit}, minYear){
    commit('SET_MIN_YEAR', minYear)
    console.log(minYear)
  },
  updateMaxYear({commit}, maxYear){
    commit('SET_MAX_YEAR', maxYear)
    console.log(maxYear)

  },
  updateMinKm({commit}, minKm){
    const cleanString = minKm.replace(/[^\d]/g, '')    
    commit('SET_MIN_KM', cleanString)
    console.log(cleanString)

  },
  updateMaxKm({commit}, maxKm){
    const cleanString = maxKm.replace(/[^\d]/g, '')    
    commit('SET_MAX_KM', cleanString)
    console.log(cleanString)
  },
  updateMinPrice({commit}, minPrice){
    const cleanString = minPrice.replace(/M/g, '000000')    
    commit('SET_MIN_PRICE', cleanString)
    console.log(cleanString)
  },
  updateMaxPrice({commit}, maxPrice){
    const cleanString = maxPrice.replace(/M/g, '000000')    
    commit('SET_MAX_PRICE', cleanString)
    console.log(cleanString)
  },
//   getCarByFilters ({commit}, carName, minYear, maxYear, minKm, maxKm, minPrice, maxPrice){

  getCarByFilters ({commit}, carName){
    commit('SET_LOADING', true);
    var url = `https://vehifinder.onrender.com/api/autos/${carName}?page=1&year_min=${state.minYear}&year_max=${state.maxYear}&km_min=${state.minKm}&km_max=${state.maxKm}&precio_min=${state.minPrice}&precio_max=${state.maxPrice}`
    axios.get(url).then((response) => {
      console.log("Hemos entrado ", url)
      console.log(response.data)
      commit('UPDATE_CAR_ITEMS', response.data)
      commit('SET_LOADING', false);

    });
  },
}

//It serves as a way to retrieve info from store.
const getters = {
  carItems: state => state.carItems,
  isLoading(state) {
    return state.isLoading;
  },
  getCarByName: (state) => (carName) =>{
    return state.carItems.find((car)=>car.name === carName)
  },
  getName: state => state.carName,

}


const carModule = {
    state, 
    mutations,
    actions,
    getters
}

export default carModule