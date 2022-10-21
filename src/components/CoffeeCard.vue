<template>
  <q-card class="col bg-brown-8 coffee-card" >
    <q-img :src="imgURL" style="flex-grow: 2; min-height: 55vh; flex-shrink: 1;" />

    <q-card-section class="bg-brown-8" style="flex-grow: 1; flex-shrink: 2;" >
      <q-btn
        fab
        color="brown-8"
        icon="coffee_maker"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%)"
      />

      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis text-white">{{ type }} Coffee</div>
        <div
          class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
        >
          <q-icon name="place" />
          250 ft
        </div>
      </div>

      <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none bg-brown-8" style="flex-grow: 0.5" >
      <div class="text-subtitle1 text-white text-weight-medium">FREE</div>
      <div class="text-caption text-grey-4">
        {{ desc }}
        Small plates, salads & sandwiches in an intimate setting.
      </div>
    </q-card-section>

    <q-card-actions
      v-if="direction === 'RIGHT'"
      class="bg-brown-9 flex justify-between"
    >
      <q-btn flat color="brown-2"> SWIPE {{ direction }} </q-btn>
      <q-btn flat round color="brown-2" icon="keyboard_double_arrow_right" />
    </q-card-actions>

    <q-card-actions
      v-else
      class="bg-brown-9 flex justify-between"
    >
      <q-btn flat round color="brown-2" icon="keyboard_double_arrow_left" />
      <q-btn flat color="brown-2"> SWIPE {{ direction }} </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup>
const props = defineProps({
  imgURL: String,
  direction: String,
  type: String,
  desc: String,
});
</script>

<style lang="scss" scoped>
.q-card {
  border-radius: 0;
}
.coffee-card {
  height: 100vh; 
  display: flex;
  flex-direction: column;
}
</style>
