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

    <q-btn
      color="white"
      text-color="black"
      label="Verify"
      @click="handleClick"
    />
    <pre>
      {{ data }}
    </pre>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "stores/user";

const store = useUserStore();
const router = useRouter();
const pollData = ref(null);
let msg = ref(null);
let data = ref(null);

const handleClick = () => {
  window.location = `truecallersdk://truesdk/web_verify?requestNonce=123123123&partnerKey=fq3Sbba1003078b504910ae04fc3f59560c09&partnerName=KoffeLaDo&lang=en&title=continue`;
  pollData.value = setInterval(async () => {
    let requestNonce = 123123123;
    let res = await fetch(
      `https://true-be.herokuapp.com/api/getuser/${requestNonce}`
    );
    res = await res.json();
    console.log(res);
    data.value = res.user;
    store.setUser(res.user);
    msg.value = res.msg;
    console.log("data: ", data);
    console.log("msg: ", msg.value);
  }, 1500);
};

watch(
  () => msg.value,
  (newMsg, oldMsg) => {
    if (newMsg === "Success") {
      clearInterval(pollData.value);
      router.push({ path: "/forms" });
    }
  }
);
</script>
