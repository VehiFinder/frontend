<template>
  <div v-if="loading" class="card">
    <content-loader :speed="1.5" :primaryColor="'#f3f3f3'" :secondaryColor="'#ecebeb'">
      <rect x="7%" y="25%" rx="0" ry="0" width="87%" height="70%" /> <!-- Imagen -->
      <rect x="3%" y="7%" rx="4" ry="4" width="70%" height="14%" /> <!-- Título -->
      <!-- <rect x="0" y="90%" rx="3" ry="3" width="50%" height="10%" /> -->
    </content-loader>
  </div>
  <div v-else class="card">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h4>{{ carItem.nombre }}</h4>
          <img class="card-image" :src="carItem.imagen" alt="">
          <a class="button is-rounded is-pulled-left" :href="carItem.link">
            <strong>Learn more</strong>
          </a>
          <br />
          <p class="mt-4">
            {{ carItem.description }}
          </p>
        </div>
        <div class="media">
          <div class="media-content">
            <p class="title is-6">{{ carItem.año }}</p>
            <p class="subtitle is-7">{{ carItem.ubicacion }}</p>
          </div>
          <div class="media-right">
            <a class="button is-primary is-light">
              <strong>$ {{ carItem.precio }}</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ContentLoader } from 'vue-content-loader'
import { mapActions } from 'vuex'
export default {
  name: "CarListItem",
  props: ["carItem"],
  components: {
    ContentLoader
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    // Simulate loading data
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
};
</script>

<style>
.card-image {
  margin-bottom: 7%;
}
</style>
