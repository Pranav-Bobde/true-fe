<template>
  <div class="page q-px-xl">
    <hr>
    <div class="text-center q-px-xl text text-dark">
      Hey, thanks for ordering, show the confirmation code to the server.
    </div>

    <div class="order_id text-title">
      A23UBF
    </div>

    <div class="bg-white q-px-md">
      <img
        src="../assets/kld-logo.png"
        alt="kld-image"
        class="kld-img"
      >
    </div>

    <div class="text-center text text-dark">
      While you enjoy your coffee, please consider giving us feedback it will
      help us improve our products.
    </div>

    <q-btn
      class="btn text"
      color="accent"
      no-caps
      label="Give Feedback"
      @click="giveFeedback"
    />
  </div>
</template>

<script>
export default {
  name: "OrderPage",
};
</script>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const giveFeedback = () => {
  router.push({ path: "/feedback" });
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  /* position: relative; */
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-evenly;
}

.order_id {
  border-radius: 1rem;
  border: 0.4rem solid $dark;
  padding: 0.2rem 4rem;
  @media screen and (max-width: 400px) {
    font-size: 1.6rem;
    border: 0.3rem solid $dark;
    padding: 0.2rem 3rem;
  }
}

.kld-img {
  height: 17vh;
}

hr {
  z-index: -1;
  position: absolute;
  width: 100vw;
  border: none;
  border-top: 1px solid black;
}

.btn {
  font-family: "Figtree";
  font-style: normal;
  background-color: $accent;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  color: $light;
}
</style>
