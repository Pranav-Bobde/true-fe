<template>
  <q-page class="flex flex-center">
    <LoadingScreen :isLoading="isLoading" />
    <main v-if="!isLoading">
      <p>Some content</p>
    </main>
  </q-page>
</template>

<script setup>
// impot loadingscreen
import LoadingScreen from "../components/LoadingScreen.vue";
import { ref, onMounted } from "vue";

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});

// export default defineComponent({
//   name: "IndexPage",
// });
</script>
