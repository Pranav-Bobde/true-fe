<template>
  <q-dialog v-model="menuStore.formModal.show" persistent>
    <q-card style="width: 75vw">
      <q-card-section>
        <div class="text-h6">User Form</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input square outlined v-model="nickname" label="Nickname" />

        <q-input
          class="q-mt-md"
          square
          outlined
          v-model="phno"
          type="number"
          prefix="+91"
          label="Phone Number"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-accent">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Submit" v-close-popup @click="handleSubmit" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "src/stores/user-store";
import { useMenuStore } from "src/stores/menuStore";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "vue-router";
import { updateUserStatus } from "src/functions/updateUsetStatus";

const router = useRouter();
const userStore = useUserStore();
const menuStore = useMenuStore();

const nickname = ref("");
const phno = ref("");
const user_id = uuidv4();
// upload user in db
const addUser = async () => {
  try {
    let res = await fetch(process.env.USER_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.KEY,
      },
      body: JSON.stringify({
        id: user_id,
        name: nickname.value,
        phno: [phno.value],
        user_status: process.env.STATUS_USER_CONFIRMED,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        is_deleted: false,
      }),
    });

    userStore.setUser({ id: user_id, name: nickname.value, phno: phno.value });
    console.log("StoreUser: ", userStore.getUser);
  } catch (error) {
    console.error("GetUserError: ", error);
  }
};

const handleSubmit = async () => {
  console.log(nickname.value, phno.value);
  await addUser();

  let updatedStatus = await updateUserStatus(
    user_id,
    process.env.STATUS_USER_CONFIRMED
  );

  console.log("ModalUpdatedStatus: ", updatedStatus);

  window.localStorage.setItem("id", user_id);
  window.localStorage.setItem(
    "user_status",
    updatedStatus["updated"]["Attributes"]["user_status"]
  );

  if (updatedStatus["updated"]) {
    router.push({ path: "/order" });
  } else {
    $q.notify({
      message: "Something went wrong, please try again",
      color: "negative",
      position: "bottom",
    });
  }
};

onMounted(() => {
  console.log("Mounted");
});
</script>

<style lang="scss" scoped></style>
