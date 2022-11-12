<template>
  <q-page class="main-page flex flex-center">
    <LoadingScreen :isLoading="isLoading" />
    <div v-if="!isLoading">
      <CardComponent
        title="White Coffee"
        desc="White Coffee"
        img="src\assets\kld-logo.png"
        price="Rs 0"
        imgLeft="true"
      />
      <CardComponent
        title="Black Coffee"
        desc="Black Coffee"
        img="src\assets\kld-logo.png"
        price="Rs 0"
        imgLeft="false"
      />
      <q-dialog v-model="modalOpenBlack">
        <q-card class="modal">
          <q-card-section class="row items-center">
            <span class="q-ml-sm">Confirm Black Coffee?</span>
          </q-card-section>

          <q-card-actions align="center">
            <!-- <q-btn flat label="No" color="primary" v-close-popup /> -->
            <ButtonComponent :isDarkBG="false" children="No" v-close-popup />
            <!-- <q-btn flat label="Yes" color="primary" v-close-popup /> -->
            <ButtonComponent :isDarkBG="true" children="Yes" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="modalOpenWhite">
        <q-card class="modal">
          <q-card-section class="row items-center">
            <span class="q-ml-sm">Confirm White Coffee?</span>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn flat label="No" color="primary" v-close-popup />
            <q-btn flat label="Yes" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script setup>
import ButtonComponent from "../components/ButtonComponent.vue";
import LoadingScreen from "../components/LoadingScreen.vue";
import { ref, onMounted } from "vue";
import CardComponent from "src/components/CardComponent.vue";

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});

const modalOpenWhite = ref(false);
// const confirmWhite = () => {
//   modalOpenWhite.value = true;
// };

const modalOpenBlack = ref(false);
// const confirmBlack = () => {
//   modalOpenBlack.value = true;
// };
</script>

<style lang="scss" scoped>
.main-page {
  background-color: $primary;
  // gap: 2rem;
}
.modal {
  border-radius: 15px;
}
</style>
