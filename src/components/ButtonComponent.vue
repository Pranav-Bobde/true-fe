<template>
    <button
      :style="background"
      :class="{
        btn: true,
        text: true,
        dark: props.isDarkBG,
        light: !props.isDarkBG,
      }"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  import { computed } from "vue";
  
  const props = defineProps({
    isDarkBG: {
      type: Boolean,
      default: true,
    },
  });
  
  const background = computed(() => "background-color: $" + props.backGround);
  </script>
  
  <style lang="scss" scoped>
  .btn {
    position: relative;
    border: none;
    color: $dark;
    border-radius: 12px;
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
  