<template>
  <q-page class="main-page flex flex-center">
    <LoadingScreen :isLoading="isLoading" />
    <main class="container" v-if="!isLoading">
      <CardComponent
        title="White Coffee"
        desc="White Coffee"
        img="src\assets\white-coffee.jpg"
        price="Rs 0"
        imgLeft
      />
      <CardComponent
        title="Black Coffee"
        desc="Black Coffee"
        img="src\assets\black-coffee.jpg"
        price="Rs 0"
      />
      <ModalComponentVue text="Confirm White Coffee?" />
      <ModalComponentVue text="Confirm White Coffee?" />
    </main>
  </q-page>
</template>

<script setup>
import LoadingScreen from "../components/LoadingScreen.vue";
import { ref, onMounted } from "vue";
import CardComponent from "src/components/CardComponent.vue";
import ModalComponentVue from "src/components/ModalComponent.vue";

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});
</script>

<style lang="scss" scoped>
.main-page {
  background-color: $primary;
  // gap: 2rem;
}
.modal {
  border-radius: 15px;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}
</style>
