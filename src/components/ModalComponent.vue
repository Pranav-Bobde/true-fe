<!-- eslint-disable vue/no-mutating-props -->
<template>
  <q-dialog v-model="store.open">
    <q-card class="modal">
      <q-card-section class="row items-center">
        <span class="text q-ml-sm">{{ props.text }}</span>
      </q-card-section>

      <q-card-actions class="btn-group">
        <ButtonComponent
          @click="store.toggleModal"
          :isDarkBG="false"
          children="No"
          >no</ButtonComponent
        >
        <ButtonComponent
          @click="store.toggleModal"
          :isDarkBG="true"
          children="Yes"
          >yes</ButtonComponent
        >
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import ButtonComponent from "./ButtonComponent.vue";
import { useModalStore } from "../stores/modalStore";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const store = useModalStore();
</script>

<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  height: 150px;
  width: 250px;
}
.btn-group {
  justify-content: space-evenly;
}
/* .modal-title {
} */
</style>
