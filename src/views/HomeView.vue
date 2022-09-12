<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <input
      type="text"
      v-model="searchString"
      @change="search()"
      class="my-10 w-1/2 lg:w-1/4 bg-gray-200 rounded-full p-2 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
    />
    <div class="flex flex-wrap justify-center w-10/12 gap-15">
      <MovieCardComponent v-for="result in results" :movie="result">
      </MovieCardComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { httpClient } from "../api/http-client";
import MovieCardComponent from "../components/MovieCardComponent.vue";

const results: any = ref([]);
const searchString = ref("");

function search() {
  httpClient.get(`?s=${searchString.value}`).then((response) => {
    results.value = response.data.Search;
  });
}
</script>

<style scoped></style>
