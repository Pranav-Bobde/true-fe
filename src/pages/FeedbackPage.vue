
<template>
  <q-page class="main-page flex flex-center">
    <q-carousel
      v-model='slide'
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
      class="bg-white text-black rounded-borders">
      <q-carousel-slide
      v-for="ques in store.feedback"
      :key="ques.id"
      :name="ques.name" class="column no-wrap flex-center">
        <q-icon name="style" size="56px" />
        <div class="q-mt-md text-center">
          {{ques.question}}
        
        <div class="q-gutter-sm">
            <q-radio @click="store.feedbackAnswer(ques.id,post)" dense v-model="post" val="yes" label="Yes"/>
            <q-radio @click="store.feedbackAnswer(ques.id,post)" dense v-model="post" val="no" label="No" />
          </div>
          <!-- <q-btn v-if="slide === store.feedback.length" @click="store.postAnswer()" color="white" text-color="black" label="Submit" /> -->
          
        </div>
      
    
    <FooterComponent v-if="slide === store.feedback.length" @click="store.postAnswer()" > Submit</FooterComponent>
  </q-carousel-slide> 
  </q-carousel>
  </q-page>
</template>
 <!-- v-for="q in ques.options"
              :options="q" -->

<script setup>
import FooterComponent from "src/components/FooterComponent.vue";
//import ButtonComponent from "src/components/ButtonComponent.vue";
import { useFeedbackStore } from "../stores/feedback-store";
import { ref, onMounted } from "vue";

const store = useFeedbackStore();
onMounted(() => {
  store.fetchFeedback();
            });
const slide = ref(1);
const post = ref('yes');


// const posts=() =>{
//   store.answer.qid= ques.id;
//   let temp= post.value;
//   store.answer.response=temp;
//   //console.log(post);
//   //store.feedbackAnswer();
// }
</script>
<style lang="scss" scoped>
.main-page {
  background-color: white;
}
</style>

