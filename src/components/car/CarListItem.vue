<template>
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h4>{{ carItem.nombre }}</h4>
          <img class="card-image" :src="carItem.imagen" alt="">
          <a
            class="button is-rounded is-pulled-left"
            :href="carItem.link" target="_blank">
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
            <p class="subtitle is-7">{{ carItem.kilometraje }} km</p>
          </div>
          <div class="media-right"> 
            <a class="button is-primary is-light">
              <strong>$ {{ carItem.precio }}</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: "CarListItem",
  props: ["carItem"],
};
</script>

<style>
.card-image{
  margin-bottom: 7%;
  height: 240px;
  width: 320px;
}</style>
