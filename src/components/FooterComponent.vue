<template>
  <q-footer elevated>
    <q-toolbar class="text" align="center">
      <q-toolbar-title><slot></slot></q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>
<style lang="scss" scoped>
.q-footer {
  background-color: $accent;
  color: $light;
  height: 5rem;
  align-content: center;
}
.q-toolbar {
  top: 1rem;
}
</style>
