<!-- eslint-disable vue/no-mutating-props -->
<template>
  <q-dialog v-model="store.modal.show">
    <q-card class="modal">
      <q-card-section class="row text-center items-center">
        <span class="text q-ml-sm">Confirm {{ store.modal.title }} ?</span>
      </q-card-section>

      <q-card-actions class="btn-group">
        <ButtonComponent @click="store.closeModal" :isDarkBG="false"
          >NO</ButtonComponent
        >
        <ButtonComponent @click="handleClick" :isDarkBG="true"
          >YES</ButtonComponent
        >
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import ButtonComponent from "./ButtonComponent.vue";
import { useMenuStore } from "../stores/menuStore";

const store = useMenuStore();

function handleClick() {
  store.addToCart(store.modal.id);
  store.closeModal();
  // TODO - Add logic for truecaller login and post order object to aws.
}
</script>

<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  min-height: 150px;
  width: 250px;
}
.btn-group {
  justify-content: space-evenly;
}
/* .modal-title {
} */
</style>
