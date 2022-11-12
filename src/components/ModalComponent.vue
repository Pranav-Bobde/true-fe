<!-- eslint-disable vue/no-mutating-props -->
<template>
  <q-dialog v-model="props.modalO">
    <q-card class="modal">
      <q-card-section class="row items-center">
        <span class="q-ml-sm">{{ props.text }}</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="No" color="primary" v-close-popup />
        <ButtonComponent
          @click="$emit('closeModal')"
          :isDarkBG="false"
          children="No"
        />
        <q-btn flat label="Yes" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import ButtonComponent from "./ButtonComponent.vue";
console.log("ModalComponent");
const props = defineProps({
  modalO: {
    type: Boolean,
    default: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.modal {
  border-radius: 15px;
}
</style>
