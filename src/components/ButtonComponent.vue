<template>
  <q-btn
    :label="props.children"
    :style="background"
    :class="{
      btn: true,
      text: true,
      dark: props.isDarkBG,
      light: !props.isDarkBG,
    }"
  />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  children: {
    type: String,
    required: true,
  },
  isDarkBG: {
    type: Boolean,
    default: true,
  },
  action: {
    type: Boolean,
    default: false,
  },
});

const background = computed(() => "background-color: $" + props.backGround);
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  color: $dark;
  font-family: "Figtree";
  font-style: normal;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
}
.dark {
  color: $light;
  background-color: $accent;
}
.light {
  background-color: $light;
  color: $accent;
}
</style>
