<template>
  <q-page class="row bg-brown-8">
    <!-- <CoffeeCard
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
    /> -->
    HELLO
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<script setup>
import { ref, onMounted } from 'vue'

const el = ref()

onMounted(() => {
  window.location = `truecallersdk://truesdk/web_verify?requestNonce=${process.env.UNIQUE_REQUEST_ID}&partnerKey=${process.env.YOUR_PARTNER_KEY}&partnerName=${process.env.YOUR_APP_NAME}&lang=${process.env.LANGUAGE_LOCALE}&title=${process.env.TITLE_STRING_OPTION}`;

  setTimeout(function() {
    if( document.hasFocus() ){
      // Truecaller app not present on the device and you redirect the user 
      // to your alternate verification page
    }else{
      // Truecaller app present on the device and the profile overlay opens
      // The user clicks on verify & you'll receive the user's access token to fetch the profile on your 
      // callback URL - post which, you can refresh the session at your frontend and complete the user  verification
    }
  }, 600);

})
</script>
