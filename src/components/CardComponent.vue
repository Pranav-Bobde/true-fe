<template>
  <div :class="{ card: true, left: props.imgLeft, right: !props.imgLeft }">
    <div class="img-container">
      <img :src="props.img" alt="" />
    </div>
    <div class="title">{{ props.title }}</div>
    <div class="desc">{{ props.title }}</div>
    <div class="price">{{ props.price }}</div>
    <button class="btn"><q-icon name="eva-activity-outline" /></button>
  </div>
</template>
<script setup>
let props = defineProps({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  imgLeft: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Nunito;
}
img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
body {
  background-color: #c8a458;
  display: grid;
  height: 100vh;
  place-items: center;
  color: #43291f;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 260px;
  min-height: 150px;
  gap: 0.4rem;
  border-radius: 12px;
  padding: 0.8rem 0.8rem 0.6rem 0.6rem;
  background: #fff8f0;
  box-shadow: -5px 15px 20px -12px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: -5px 15px 20px -12px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: -5px 15px 20px -12px rgba(0, 0, 0, 0.5);
}
.img-container {
  position: absolute;

  width: 100px;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.6);
}
.title {
  font-size: 20px;
  font-weight: 500;
}
.desc {
  width: 150px;
  font-size: 12px;
  font-weight: 300;
}
.price {
  font-size: 15px;
  font-weight: 300;
}
.btn {
  background-color: #104f55;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  color: #fff8f0;
  font-size: 2rem;
  line-height: 1rem;
}
.left {
  align-items: end;
  .img-container {
    top: -1rem;
    left: -1rem;
  }
  .btn {
    align-self: start;
  }
  .desc {
    text-align: right;
  }
}
.right {
  align-items: start;
  .img-container {
    top: -1rem;
    right: -1rem;
  }
  .btn {
    align-self: end;
  }
  .desc {
    text-align: left;
  }
}
</style>
