<template>
  <q-page class="row bg-brown-8">
    <CoffeeCard
      imgURL="src/assets/black.jpg"
      type="Black"
      direction="LEFT"
      desc=""
    />

    <CoffeeCard
      imgURL="src/assets/white.jpg"
      type="White"
      direction="RIGHT"
      desc=""
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<script setup>
import { ref } from "vue";
import CoffeeCard from "../components/CoffeeCard.vue";
const temp = ref("Yay");
</script>
