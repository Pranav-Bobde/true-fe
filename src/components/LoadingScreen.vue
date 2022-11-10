<template>
  <div>
    <div :class="{ loader: true, fadeout: !props.isLoading }">Loading...</div>
  </div>
</template>

<script setup>
// import { ref, watch } from "vue";
const props = defineProps({
  isLoading: Boolean,
});
// const isLoad = ref(isLoading);
// watch(isLoading, (val) => {
//   isLoad.value = val;
// });
</script>

<style>
.loader {
  background-color: #b49250;
  bottom: 0;
  color: white;
  display: block;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  padding-top: 10vh;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
}

.fadeout {
  animation: fadeout 0.8s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
