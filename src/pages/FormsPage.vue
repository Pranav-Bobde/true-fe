<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "stores/user";

const store = useUserStore();
let data = ref(null);
onMounted(() => {
  data.value = store.getUser;
});
</script>

<style lang="scss" scoped></style>
