<template>
  <q-page class="main-page flex flex-center">
    <q-carousel
      v-model="slide"
      swipeable
      animated
      transition-prev="jump-right"
      transition-next="jump-left"
      navigation-position="bottom"
      prev-icon="arrow_left"
      next-icon="arrow_right"
      navigation
      padding
      arrows
      control-color="black"
      height="600px"
      class="bg-white text-black rounded-borders"
      @before-transition="beforeTransition"
    >
      <q-carousel-slide
        v-for="ques in store.feedback"
        :key="ques.id"
        :name="ques.name"
        class="column no-wrap flex-center"
      >
        <q-icon name="style" size="56px" />
        <div class="q-mt-md text-center">
          {{ ques.question }}

          <div class="q-gutter-sm">
            <q-radio
              @click="handleClick(ques.id, post)"
              dense
              v-model="post"
              val="yes"
              label="Yes"
            />
            <q-radio
              @click="handleClick(ques.id, post)"
              dense
              v-model="post"
              val="no"
              label="No"
            />
          </div>
        </div>

        <FooterComponent
          v-if="slide === store.feedback.length"
          @click="handleSubmit"
        >
          Submit
        </FooterComponent>
        <FooterComponent v-else> Swipe </FooterComponent>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script setup>
import FooterComponent from "src/components/FooterComponent.vue";
import { useFeedbackStore } from "../stores/feedback-store";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { updateUserStatus } from "src/functions/updateUsetStatus";

const router = useRouter();
const slide = ref(1);
const post = ref("");

const store = useFeedbackStore();

onMounted(() => {
  store.fetchFeedback();
});

const handleSubmit = async () => {
  let res = await store.postAnswer();

  if (res.ResponseMetadata.HTTPStatusCode === 200) {
    const id = window.localStorage.getItem("id");
    const updatedStatus = await updateUserStatus(
      id,
      process.env.STATUS_FEEDBACK_COMPLETE
    );

    router.push({ path: "/thankyou" });
  } else {
    $q.notify({
      message: "Something went wrong, please try again",
      color: "negative",
      position: "bottom",
    });
  }
};

const beforeTransition = () => {
  post.value = "";
};

const handleClick = (id, post) => {
  store.feedbackAnswer(id, post);
};
</script>
<style lang="scss" scoped>
.main-page {
  background-color: white;
}
</style>
