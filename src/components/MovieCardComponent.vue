<template>
  <router-link
    :to="{ name: 'MovieDetails', params: { id: movie.imdbID } }"
    class="card w-1/3 lg:w-1/4 flex flex-col justify-center items-center"
  >
    <img
      :src="movie.Poster"
      :alt="movie.Title + 'poster'"
      class="h-full w-full object-cover"
    />
    <h2>{{ movie.Title }}</h2>
  </router-link>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Movie } from "../models/movie";
defineProps<{
  movie: Movie;
}>();
</script>

<style scoped>
.card {
  @apply rounded-xl shadow-lg overflow-hidden;
  transition-duration: 500ms;
}

.card:hover {
  @apply shadow-2xl;
  @apply transform scale-110;
  @apply transform translate-z-20;
  @apply transform rotate-5;
}
</style>
