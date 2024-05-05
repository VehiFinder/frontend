import { createStore } from 'vuex'
import car from './modules/car';

export default createStore({
  modules: {
    car,
  }
})