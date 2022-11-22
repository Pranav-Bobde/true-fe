<!-- eslint-disable vue/no-mutating-props -->
<template>
  <q-dialog v-model="menuStore.confirmModal.show">
    <q-card class="modal">
      <q-card-section class="row text-center items-center">
        <span class="text q-ml-sm"
          >Confirm {{ menuStore.confirmModal.title }} ?</span
        >
      </q-card-section>

      <q-card-actions class="btn-group">
        <ButtonComponent @click="menuStore.closeConfirmModal" :isDarkBG="false">
          NO
        </ButtonComponent>
        <ButtonComponent @click="handleClick" :isDarkBG="true">
          YES
        </ButtonComponent>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from "vue";
import { useMenuStore } from "../stores/menuStore";
import { useRouter } from "vue-router";
import { useUserStore } from "src/stores/user-store";
import ButtonComponent from "./ButtonComponent.vue";
import { updateUserStatus } from "src/functions/updateUsetStatus";
import { useQuasar } from "quasar";
import { v4 as uuidv4 } from "uuid";

const $q = useQuasar();
const menuStore = useMenuStore();
const userStore = useUserStore();
const interval = ref(null);
const router = useRouter();
const user = ref(null);
const order = ref(null);

function handleClick() {
  menuStore.addToCart(menuStore.confirmModal.id);
  menuStore.closeConfirmModal();

  console.log("IsAndroid: ", $q.platform.is.android);
  if ($q.platform.is.android) {
    const newUserId = uuidv4();

    window.location = `truecallersdk://truesdk/web_verify?requestNonce=${newUserId}&partnerKey=${process.env.PARTNER_KEY}&partnerName=KoffeLaDo&lang=en&title=continue`;

    interval.value = setInterval(async () => {
      let res = await fetch(process.env.USER_API + "/" + newUserId, {
        method: "GET",
        headers: {
          "x-api-key": process.env.KEY,
        },
      });

      res = await res.json();
      console.log("Res: ", res);
      user.value = res.user;
      console.log("UserValue: ", user.value);
      const { id, name, phno } = user.value;
      userStore.setUser({ id, name, phno });
      console.log("storeUser: ", userStore.getUser);
      clearInterval(interval.value);
    }, 1500);
  } else {
    menuStore.openFormModal();
  }
}

watch(
  () => user.value,
  async (newUser, oldUser) => {
    if (newUser) {
      let updatedStatus = await updateUserStatus(
        user.value.id,
        process.env.STATUS_USER_CONFIRMED
      );

      console.log("ModalUpdatedStatus: ", updatedStatus);

      window.localStorage.setItem("id", user.value.id);
      window.localStorage.setItem(
        "user_status",
        updatedStatus["updated"]["Attributes"]["user_status"]
      );

      console.log(
        "lsId,status: ",
        window.localStorage.getItem("id"),
        window.localStorage.getItem("user_status")
      );

      clearInterval(interval.value);

      order.value = {
        ...menuStore.order,
        user_id: userStore.user.id,
        total: menuStore.order.orders_list[0].price,
      };

      console.log("Order: ", order.value);
      const res = await fetch(process.env.ORDERS_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.KEY,
        },
        body: JSON.stringify(order.value),
      });

      if (updatedStatus["updated"]) {
        router.push({ path: "/order" });
      } else {
        $q.notify({
          message: "Something went wrong, please try again",
          color: "negative",
          position: "bottom",
        });
      }
    }
  }
);
</script>

<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  min-height: 150px;
  width: 250px;
}
.btn-group {
  justify-content: space-evenly;
}
</style>
