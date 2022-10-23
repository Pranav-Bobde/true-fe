<template>
  <q-page class="flex justify-center items-center">
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
     <q-btn color="white" text-color="black" label="Verify" @click="handleClick" />
    
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
const handleClick = () => {
  window.location = `truecallersdk://truesdk/web_verify?requestNonce=123123123&partnerKey=fq3Sbba1003078b504910ae04fc3f59560c09&partnerName=KoffeLaDo&lang=en&title=continue`;

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
}
</script>