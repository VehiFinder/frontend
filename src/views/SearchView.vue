<script setup lang="ts">
import { ref } from 'vue'
import SearchInput from '../components/catalog/SearchInput.vue'
import CarList from '../components/car/CarList.vue'
import CarListItem from '../components/car/CarListItem.vue'
// const showCurtain = ref(false)
// const showSearch = ref(false)

// function toggleBox() {
//   showCurtain.value = !showCurtain.value
// }
// function handleAnimationEnd(){
//   showSearch.value = !showSearch.value
// }
</script>

<template>
  <SearchInput/>
  <CarList/>
</template>


