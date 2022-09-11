<template>
  <input type="text" v-model="searchString" @change="search()" />
  <div v-for="result in results">
    <h1>{{ result.Title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { httpClient } from "../api/http-client";

const results: any = ref([]);
const searchString = ref("");

httpClient.get("?s=drive").then((response) => {
  results.value = response.data.Search;
});

function search() {
  httpClient.get(`?s=${searchString.value}`).then((response) => {
    results.value = response.data.Search;
  });
}
</script>

<style scoped></style>
