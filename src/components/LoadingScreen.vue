<template>
  <q-page class="flex flex-center">
    <div :class="{ loader: true, fadeout: !props.isLoading }">
      <img src="../assets/kld-logo.png" alt="Logo" />
    </div>
  </q-page>
</template>

<script setup>
// import { ref, watch } from "vue";
const props = defineProps({
  isLoading: Boolean,
});
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $primary;
  bottom: 0;
  color: white;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
}

.fadeout {
  animation: fadeout 0.5s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
