<template>
  <q-page class="main-page flex flex-center">
    <LoadingScreen :isLoading="isLoading" />
    <main class="container" v-if="!isLoading">
      <CardComponent
        v-for="item in store.menu"
        :key="item.id"
        :id="item.id"
        :title="item.name"
        :desc="item.description"
        :img="item.image"
        :price="item.price"
        :imgLeft="getImgPos()"
      ></CardComponent>
      <ModalComponent />
      <FooterComponent />
    </main>
  </q-page>
</template>

<script setup>
import LoadingScreen from "../components/LoadingScreen.vue";
import { useMenuStore } from "../stores/menuStore";
import { ref, onMounted } from "vue";
import CardComponent from "src/components/CardComponent.vue";
import ModalComponent from "src/components/ModalComponent.vue";
import FooterComponent from "src/components/FooterComponent.vue";
const store = useMenuStore();
const index = ref(0);
const isLoading = ref(true);
onMounted(() => {
  store.fetchMenu();
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});

const getImgPos = () => {
  index.value++;
  return index.value % 2 === 0;
};
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
