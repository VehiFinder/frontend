<template>
    <div class="container is-fluid">
      <div class="tile is-ancestor">
        <div class="tile is-parent" v-for="carItem in carItems" :key="carItem.id">
        <CarListItem :carItem="carItem"/>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { mapGetters } from 'vuex';
  import CarListItem from './CarListItem.vue'
  export default {
    name: "CarList",
    components: {
        CarListItem: CarListItem
    },
    computed: {
      ...mapGetters([
        'carItems'
      ])
    },
    created() {
      this.$store.dispatch('getCarItems');
    }
  };
  </script>


<style>

/* Each tile */
.is-parent{
  width: 25%;
  margin-bottom: 3%;
}

/* Contains al tiles */
.is-ancestor{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7%; 
  height: 100%;
  width: 100%;
}

/* Cada carta */
.card{
  height: 100%;
}

/* General */
.is-fluid{
  top: 135px;
}

</style>